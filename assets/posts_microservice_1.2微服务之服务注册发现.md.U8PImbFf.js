import{c as n,Q as a,j as p,m as e}from"./chunks/framework.BPKcPtvA.js";const g=JSON.parse('{"title":"前言","description":"","frontmatter":{},"headers":[],"relativePath":"posts/microservice/1.2微服务之服务注册发现.md","filePath":"posts/microservice/1.2微服务之服务注册发现.md"}'),l={name:"posts/microservice/1.2微服务之服务注册发现.md"};function i(t,s,o,c,r,u){return a(),p("div",null,[...s[0]||(s[0]=[e(`<h1 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h1><p>上一篇说到要做到服务的灵活伸缩需要有一种机制来实现，这个机制就是服务注册与发现。这并不是必须的，如果服务实例很少并且很稳定，就没有必要使用。</p><h1 id="概念" tabindex="-1">概念 <a class="header-anchor" href="#概念" aria-label="Permalink to &quot;概念&quot;">​</a></h1><ul><li>服务注册：简单理解就是有一个注册中心，每个服务实例启动时都去注册中心注册，告诉注册中心地址，端口等信息。同样删除时，也需要去注册中心删除，注册中心负责维护这些服务实例的信息</li><li>服务发现：既然注册中心维护了各个服务实例的信息，那么客户端通过注册中心就很容易能发现服务的变化。有了服务注册与发现，客户端就不用再去配置各个服务实例的地址，改为从注册中心统一获取</li><li>健康检查：注册中心要保证每个地址的可用状态，挂掉的实例不应该被客户端获取到，所以需要：健康检查。每个服务都需要提供一个用于健康检查的接口，这个接口不具备任何业务功能。服务注册时把这个接口的地址也告诉注册中心，注册中心会定时调用这个接口来检测服务是否正常，如果不正常，则将它移除，这样来保证了服务的可用性</li></ul><p>常见注册中心有 <code>Consul</code>、<code>ZooKeeper</code>、<code>etcd</code>、<code>Eureka</code>。</p><h1 id="consul" tabindex="-1">Consul <a class="header-anchor" href="#consul" aria-label="Permalink to &quot;Consul&quot;">​</a></h1><p>Consul官网：<a href="https://www.consul.io/" target="_blank" rel="noreferrer">https://www.consul.io</a>，主要功能有服务注册与发现、健康检查、K-V存储、多数据中心等，这里不做详细介绍。</p><ul><li>安装：直接在官网下载解压即可</li><li>运行：在 <code>consul.exe</code> 目录下打开命令行执行 <code>consul.exe agent -dev</code></li><li>浏览器访问：<code>http://localhost:8500</code></li></ul><p>这里选择使用Docker来部署Consul：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker pull consul </span></span>
<span class="line"><span>docker run -d -p 8500:8500 --restart=always --name=consul consul:latest agent -server -bootstrap -ui -node=1 -client=&#39;0.0.0.0&#39;</span></span></code></pre></div><ul><li><code>agent</code>： 表示启动 Agent 进程</li><li><code>server</code>：表示启动 Consul Server 模式</li><li><code>client</code>：表示启动 Consul Cilent 模式</li><li><code>bootstrap</code>：表示这个节点是 Server-Leader ，每个数据中心只能运行一台服务器。技术角度上来看 Leader 是通过 Raft 算法选举的，但是集群第一次启动时需要一个引导 Leader，在引导群集后，建议不要使用此标志</li><li><code>ui</code>：表示启动 Web UI 管理器，默认开放端口 <code>8500</code>，所以上面使用 Docker 命令把 <code>8500</code> 端口对外开放</li><li><code>node</code>：节点的名称，集群中必须是唯一的，默认是该节点的主机名</li><li><code>client</code>：Consul服务监听地址，这提供<code>HTTP</code>、<code>DNS</code>、<code>RPC</code>等服务，默认是 <code>127.0.0.1</code> 所以不对外提供服务，如果要对外提供服务改成 <code>0.0.0.0</code></li><li><code>join</code>：表示加入到某一个集群中。 如：<code>-json=192.168.0.11</code></li></ul><p><img src="https://wpl.wiki/images/2021-09-17-20-00-01.png" alt="img"></p><p>这里看到Consul已经成功运行。</p><h1 id="服务注册" tabindex="-1">服务注册 <a class="header-anchor" href="#服务注册" aria-label="Permalink to &quot;服务注册&quot;">​</a></h1><p>订单服务项目使用<code>Nuget</code> 安装 <code>Consul</code>，然后添加相关代码：</p><p>ConsulHelper.cs：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public static class ConsulHelper</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    /// &lt;summary&gt;</span></span>
<span class="line"><span>    /// 服务注册</span></span>
<span class="line"><span>    /// &lt;/summary&gt;</span></span>
<span class="line"><span>    /// &lt;param name=&quot;app&quot;&gt;The application.&lt;/param&gt;</span></span>
<span class="line"><span>    /// &lt;param name=&quot;configuration&quot;&gt;The configuration.&lt;/param&gt;</span></span>
<span class="line"><span>    /// &lt;param name=&quot;lifetime&quot;&gt;The lifetime.&lt;/param&gt;</span></span>
<span class="line"><span>    /// &lt;returns&gt;&lt;/returns&gt;</span></span>
<span class="line"><span>    public static IApplicationBuilder RegisterConsul(this IApplicationBuilder app</span></span>
<span class="line"><span>        , IConfiguration configuration</span></span>
<span class="line"><span>        , IHostApplicationLifetime lifetime)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        var consulClient = new ConsulClient(c =&gt;</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            c.Address = new Uri(configuration[&quot;ConsulSetting:ConsulAddress&quot;]);</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        var registration = new AgentServiceRegistration()</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            // 服务实例唯一标识</span></span>
<span class="line"><span>            ID = Guid.NewGuid().ToString(),</span></span>
<span class="line"><span>            // 服务名称</span></span>
<span class="line"><span>            Name = configuration[&quot;ConsulSetting:ServiceName&quot;],</span></span>
<span class="line"><span>            // 服务IP地址</span></span>
<span class="line"><span>            Address = configuration[&quot;ConsulSetting:ServiceIP&quot;],</span></span>
<span class="line"><span>            // 服务端口：因为要运行多个实例，端口不能在appsettings.json里配置而是在docker容器运行时传入</span></span>
<span class="line"><span>            Port = int.Parse(configuration[&quot;ConsulSetting:ServicePort&quot;]),</span></span>
<span class="line"><span>            Check = new AgentServiceCheck()</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                // 服务启动多久后注册</span></span>
<span class="line"><span>                DeregisterCriticalServiceAfter = TimeSpan.FromSeconds(3),</span></span>
<span class="line"><span>                // 健康检查时间间隔</span></span>
<span class="line"><span>                Interval = TimeSpan.FromSeconds(10),</span></span>
<span class="line"><span>                // 健康检查地址</span></span>
<span class="line"><span>                HTTP = $&quot;http://{configuration[&quot;ConsulSetting:ServiceIP&quot;]}:{configuration[&quot;ConsulSetting:ServicePort&quot;]}{configuration[&quot;ConsulSetting:ServiceHealthCheck&quot;]}&quot;,</span></span>
<span class="line"><span>                // 超时时间</span></span>
<span class="line"><span>                Timeout = TimeSpan.FromSeconds(5)</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 服务注册</span></span>
<span class="line"><span>        consulClient.Agent.ServiceRegister(registration).Wait();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 应用程序终止时，取消注册</span></span>
<span class="line"><span>        lifetime.ApplicationStopping.Register(() =&gt;</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            consulClient.Agent.ServiceDeregister(registration.ID).Wait();</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>        return app;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>appsettings.json：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;Logging&quot;: {</span></span>
<span class="line"><span>    &quot;LogLevel&quot;: {</span></span>
<span class="line"><span>      &quot;Default&quot;: &quot;Information&quot;,</span></span>
<span class="line"><span>      &quot;Microsoft&quot;: &quot;Warning&quot;,</span></span>
<span class="line"><span>      &quot;Microsoft.Hosting.Lifetime&quot;: &quot;Information&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;AllowedHosts&quot;: &quot;*&quot;,</span></span>
<span class="line"><span>  &quot;ConsulSetting&quot;: {</span></span>
<span class="line"><span>    &quot;ServiceName&quot;: &quot;order.service&quot;,</span></span>
<span class="line"><span>    &quot;ServiceIP&quot;: &quot;192.168.31.191&quot;,</span></span>
<span class="line"><span>    &quot;ServiceHealthCheck&quot;: &quot;/healthcheck&quot;,</span></span>
<span class="line"><span>    &quot;ConsulAddress&quot;: &quot;http://192.168.31.191:8500&quot;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><blockquote><p>注意：这里没有配置ServicePort，所以如果本地直接运行项目会报错</p></blockquote><p>Startup.cs：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public void Configure(IApplicationBuilder app, IWebHostEnvironment env, IHostApplicationLifetime lifetime)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    if (env.IsDevelopment())</span></span>
<span class="line"><span>    { }</span></span>
<span class="line"><span>    else</span></span>
<span class="line"><span>    { }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    app.UseStaticFiles();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    app.UseRouting();</span></span>
<span class="line"><span>    app.UseEndpoints(endpoints =&gt;</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        endpoints.MapControllers();</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 启用服务注册</span></span>
<span class="line"><span>    app.RegisterConsul(Configuration, lifetime);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>OrdersController.cs：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[Route(&quot;[Controller]&quot;)]</span></span>
<span class="line"><span>[ApiController]</span></span>
<span class="line"><span>public class OrdersController : ControllerBase</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    private readonly IConfiguration configuration;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public OrdersController(IConfiguration configuration)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        this.configuration = configuration;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    [HttpGet]</span></span>
<span class="line"><span>    public IActionResult Index()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        string result = $&quot;订单服务：{DateTime.Now:yyyy-MM-dd HH:mm:ss},-{Request.HttpContext.Connection.LocalIpAddress}:{configuration[&quot;ConsulSetting:ServicePort&quot;]}&quot;;</span></span>
<span class="line"><span>        return Ok(result);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>HealthCheckController.cs：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[Route(&quot;[controller]&quot;)]</span></span>
<span class="line"><span>[ApiController]</span></span>
<span class="line"><span>public class HealthCheckController : ControllerBase</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    /// &lt;summary&gt;</span></span>
<span class="line"><span>    /// 健康检查接口</span></span>
<span class="line"><span>    /// &lt;/summary&gt;</span></span>
<span class="line"><span>    /// &lt;returns&gt;&lt;/returns&gt;</span></span>
<span class="line"><span>    [HttpGet]</span></span>
<span class="line"><span>    public IActionResult Get()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        return Ok(&quot;Pong.&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>至此就完成了服务注册、取消注册、健康检查的代码编写，下面重新 <code>build</code> 镜像（过程略过）运行新的容器：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[root@centos-01 order.api.release]# docker run -d --name order.api -p 80:80 order.api  --ConsulSetting:ServicePort=&quot;80&quot;</span></span>
<span class="line"><span>89acc7d7035f2041a91bc1e1299464a5460290dd66b12161ee4e994d5548def2</span></span>
<span class="line"><span>[root@centos-01 order.api.release]# docker run -d --name order.api1 -p 81:80 order.api --ConsulSetting:ServicePort=&quot;81&quot;</span></span>
<span class="line"><span>223be73a41e501e168fdc44459cd6f5851d565e60817dbd0047dff7718394e22</span></span>
<span class="line"><span>[root@centos-01 order.api.release]# docker run -d --name order.api2 -p 82:80 order.api --ConsulSetting:ServicePort=&quot;82&quot;</span></span></code></pre></div><p><img src="https://wpl.wiki/images/2021-09-17-20-36-21.png" alt="img"><img src="https://wpl.wiki/images/2021-09-17-20-36-40.png" alt="img"></p><p>至此，3个服务实例都已运行，并且成功注册到 Consul。测试一下服务停止会不会从Consul移除：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[root@centos-01 order.api.release]# docker stop order.api</span></span></code></pre></div><p><img src="https://wpl.wiki/images/2021-09-17-20-39-00.png" alt="img"></p><p>这里需要注意：程序发生异常，健康检查不能正确响应的话，Consul也会移除。至此注册、发现、健康检查功能都完成了，下一步考虑客户端如何拿到这些服务实例的地址。</p><h1 id="客户端" tabindex="-1">客户端 <a class="header-anchor" href="#客户端" aria-label="Permalink to &quot;客户端&quot;">​</a></h1><p>上面已经成功将服务注册到 Consul中，接下来就该客户端通过 Consul 去做服务发现了。客户端项目同样使用<code>Nuget</code> 安装 Consul，然后调整相关代码：</p><p>ServiceHelper.cs：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>using Consul;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>using Microsoft.Extensions.Configuration;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>using RestSharp;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>using System;</span></span>
<span class="line"><span>using System.Collections.Concurrent;</span></span>
<span class="line"><span>using System.Linq;</span></span>
<span class="line"><span>using System.Threading.Tasks;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>namespace Web.Client</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    public interface IServiceHelper</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        Task&lt;string&gt; GetOrder();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public class ServiceHelper : IServiceHelper</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        private readonly IConfiguration configuration;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        public ServiceHelper(IConfiguration configuration)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            this.configuration = configuration;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        public async Task&lt;string&gt; GetOrder()</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            var consulClient = new ConsulClient(c =&gt;</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                c.Address = new Uri(configuration[&quot;ConsulSetting:ConsulAddress&quot;]);</span></span>
<span class="line"><span>            });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 获取健康的服务</span></span>
<span class="line"><span>            var services = consulClient.Health.Service(&quot;order.service&quot;, null, true, null).Result.Response;</span></span>
<span class="line"><span>            // 获取订单服务地址列表</span></span>
<span class="line"><span>            string[] serviceUrls = services.Select(p =&gt; $&quot;http://{p.Service.Address + &quot;:&quot; + p.Service.Port}&quot;).ToArray();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            if (!serviceUrls.Any())</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                return await Task.FromResult(&quot;【订单服务】服务列表为空&quot;);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 每次随机访问一个服务实例</span></span>
<span class="line"><span>            var client = new RestClient(serviceUrls[new Random().Next(0, serviceUrls.Length)]);</span></span>
<span class="line"><span>            var request = new RestRequest(&quot;/orders&quot;, Method.GET);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            var response = await client.ExecuteAsync(request);</span></span>
<span class="line"><span>            return response.Content;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>appsettings.json：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;Logging&quot;: {</span></span>
<span class="line"><span>    &quot;LogLevel&quot;: {</span></span>
<span class="line"><span>      &quot;Default&quot;: &quot;Information&quot;,</span></span>
<span class="line"><span>      &quot;Microsoft&quot;: &quot;Warning&quot;,</span></span>
<span class="line"><span>      &quot;Microsoft.Hosting.Lifetime&quot;: &quot;Information&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;AllowedHosts&quot;: &quot;*&quot;,</span></span>
<span class="line"><span>  &quot;ConsulSetting&quot;: {</span></span>
<span class="line"><span>    &quot;ConsulAddress&quot;: &quot;http://192.168.31.191:8500&quot;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>以上代码就完成了对服务列表的获取，浏览器访问测试一下：</p><p><img src="https://wpl.wiki/images/2021-09-17-20-48-22.png" alt="img"></p><p>这时候如果停止其中一个服务实例，Consul中也会同步下线，客户端也就访问不到了，但是只要三个实例活着一个就可以正常访问。虽然这里解决了服务发现的问题，但是新的问题又来了：客户端每次调用服务都需要先去Consul中获取服务地址，不仅浪费资源还增加了请求的响应时间。如何保证不要每次请求都需要去Consul 获取地址的同时又可以拿到可用的地址列表呢？Consul 提供的解决方案是：Blocking Queries （阻塞的请求）。详情见官网：<a href="https://www.consul.io/api-docs/features/blocking" target="_blank" rel="noreferrer">Blocking Queries</a> 。</p><h1 id="blocking-queries" tabindex="-1">Blocking Queries <a class="header-anchor" href="#blocking-queries" aria-label="Permalink to &quot;Blocking Queries&quot;">​</a></h1><p>简单来说就是当客户端请求 Consul 获取地址列表时，需要携带一个版本号信息，Consul 会比较这个客户端版本号是否和 Consul 服务端的版本号一致，如果一致，则 Consul 会阻塞这个请求，直到 Consul 中的服务列表发生变化，或者到达阻塞时间上限；如果版本号不一致，则立即返回。这个阻塞时间默认是5分钟，支持自定义。如果启动一个线程专门去做这件事，就不会影响每次的用户请求了。这样既保证了客户端服务列表的准确性，又节约了客户端请求服务列表的次数。</p><p>调整代码：</p><p>IServiceHelper.cs 增加获取服务列表的接口方法：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>using Consul;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>using Microsoft.Extensions.Configuration;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>using RestSharp;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>using System;</span></span>
<span class="line"><span>using System.Collections.Concurrent;</span></span>
<span class="line"><span>using System.Linq;</span></span>
<span class="line"><span>using System.Threading.Tasks;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>namespace Web.Client</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    public interface IServiceHelper</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        Task&lt;string&gt; GetOrder();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        void GetServices();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public class ServiceHelper : IServiceHelper</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        private readonly IConfiguration configuration;</span></span>
<span class="line"><span>        private readonly ConsulClient consulClient;</span></span>
<span class="line"><span>        private ConcurrentBag&lt;string&gt; orderServiceUrls;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        public ServiceHelper(IConfiguration configuration)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            this.configuration = configuration;</span></span>
<span class="line"><span>            this.consulClient = new ConsulClient(c =&gt;</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                c.Address = new Uri(configuration[&quot;ConsulSetting:ConsulAddress&quot;]);</span></span>
<span class="line"><span>            });</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        public async Task&lt;string&gt; GetOrder()</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            if (orderServiceUrls == null)</span></span>
<span class="line"><span>                return await Task.FromResult(&quot;【订单服务】初始化服务列表...&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            var client = new RestClient(orderServiceUrls.ElementAt(new Random().Next(0, orderServiceUrls.Count())));</span></span>
<span class="line"><span>            var request = new RestRequest(&quot;/orders&quot;, Method.GET);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            var response = await client.ExecuteAsync(request);</span></span>
<span class="line"><span>            return response.Content;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        public void GetServices()</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            var serviceNames = new string[] { &quot;order.service&quot; };</span></span>
<span class="line"><span>            Array.ForEach(serviceNames, p =&gt;</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                Task.Run(() =&gt;</span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                    // WaitTime默认为5分钟</span></span>
<span class="line"><span>                    var queryOptions = new QueryOptions { WaitTime = TimeSpan.FromMinutes(10) };</span></span>
<span class="line"><span>                    while (true)</span></span>
<span class="line"><span>                    {</span></span>
<span class="line"><span>                        GetServices(queryOptions, p);</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                });</span></span>
<span class="line"><span>            });</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        private void GetServices(QueryOptions queryOptions, string serviceName)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            var res = consulClient.Health.Service(serviceName, null, true, queryOptions).Result;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 打印服务列表的响应时间等信息</span></span>
<span class="line"><span>            Console.WriteLine($&quot;{DateTime.Now}获取{serviceName}：queryOptions.WaitIndex：{queryOptions.WaitIndex}  LastIndex：{res.LastIndex}&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 版本号不一致 说明服务列表发生变化</span></span>
<span class="line"><span>            if (queryOptions.WaitIndex != res.LastIndex)</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                queryOptions.WaitIndex = res.LastIndex;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                //服务地址列表</span></span>
<span class="line"><span>                var serviceUrls = res.Response.Select(p =&gt; $&quot;http://{p.Service.Address + &quot;:&quot; + p.Service.Port}&quot;).ToArray();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                if (serviceName == &quot;order.service&quot;)</span></span>
<span class="line"><span>                    orderServiceUrls = new ConcurrentBag&lt;string&gt;(serviceUrls);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><img src="https://wpl.wiki/images/2021-09-17-21-02-33.png" alt="img"></p><p>至此不需要每次都先请求服务列表，如果服务列表没有更新的话，获取列表的请求会一直阻塞直到设置的10分钟。这时候又发现新的问题：</p><ol><li>每个客户端系统都去维护服务地址是否合理</li><li>服务的IP端口直接暴露给所有客户端是否安全</li><li>该模式下怎么做到客户端的统一管理</li></ol>`,50)])])}const q=n(l,[["render",i]]);export{g as __pageData,q as default};
