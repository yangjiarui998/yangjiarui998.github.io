import{c as n,Q as a,j as p,m as e}from"./chunks/framework.BPKcPtvA.js";const q=JSON.parse('{"title":"前言","description":"","frontmatter":{},"headers":[],"relativePath":"posts/microservice/1.4微服务之事件总线.md","filePath":"posts/microservice/1.4微服务之事件总线.md"}'),t={name:"posts/microservice/1.4微服务之事件总线.md"};function l(i,s,o,c,r,u){return a(),p("div",null,[...s[0]||(s[0]=[e(`<h1 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h1><p>上一篇中已经完成了 Ocelot + Consul 的搭建，这篇简单说一下事件总线（<code>EventBus</code>)。</p><h1 id="事件总线" tabindex="-1">事件总线 <a class="header-anchor" href="#事件总线" aria-label="Permalink to &quot;事件总线&quot;">​</a></h1><p>什么是事件总线？</p><blockquote><p>事件总线是对观察者（发布-订阅）模式的一种实现。它是一种集中式事件处理机制，允许不同的组件之间进行彼此通信而又不需要相互依赖，达到解耦的目的</p></blockquote><p>为什么要使用事件总线？</p><blockquote><ol><li>以当前项目举例，假设有一个订单服务，一个产品服务。客户端有一个下单功能，下单时调用订单服务的下单接口，下单接口需要调用产品服务的减库存接口，这涉及到服务与服务之间的调用。服务之间调用可以选择 <code>RestAPI</code> 或者效率更高的 <code>gRPC</code>。可能这两者各有各的使用场景，但是它们都存在服务之间的耦合问题，或者难以做到异步调用</li><li>假设下单调用订单服务，订单服务需要调用产品服务，产品服务又要调用物流服务，物流服务再去调用xx服务等等，如果每个服务处理时间需要2s，不使用异步处理的话，响应时间可想而知。如果使用EventBus的话，那么订单服务只需要向EventBus发一个“下单事件”就可以了。产品服务会订阅“下单事件”，当产品服务收到下单事件时，自己去减库存。这样就避免了两个服务之间直接调用的耦合性，并且真正做到了异步调用</li></ol></blockquote><p>既然涉及到多个服务之间的异步调用，那么就不得不提分布式事务。分布式事务并不是微服务独有的问题，而是所有的分布式系统都会存在的问题。关于分布式事务，可以查一下 “CAP原则” 和 “BASE理论” 了解更多。如今分布式系统更多时候会追求事务的最终一致性。</p><p>下面使用开源框架 <code>CAP</code>来演示 <code>EventBus</code> 的基本使用。之所以使用 <code>CAP</code> 是因为它既能解决分布式系统的最终一致性，同时又是一个 <code>EventBus</code>，它具备<code>EventBus</code> 的所有功能。<a href="https://www.cnblogs.com/savorboard/p/cap.html" target="_blank" rel="noreferrer">点击了解更多</a>。</p><h1 id="cap" tabindex="-1">CAP <a class="header-anchor" href="#cap" aria-label="Permalink to &quot;CAP&quot;">​</a></h1><p>目前 CAP 支持使用 <code>RabbitMQ</code> ，<code>Kafka</code>，<code>Azure Service Bus</code> 等进行底层之间的消息发送，不需要具备这些消息队列的使用经验就可以轻松的集成到项目中。CAP 目前支持使用 <code>Sql Server</code>，<code>MySql</code>，<code>PostgreSql</code>，<code>MongoDB</code> 数据库的项目。这里选择：消息组件使用 <code>RabbitMq</code>，数据库存储使用 <code>SqlServer</code>。</p><p><code>Nuget</code> 安装 :</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Microsoft.EntityFrameworkCore</span></span>
<span class="line"><span>Microsoft.EntityFrameworkCore.Tools</span></span>
<span class="line"><span>Microsoft.EntityFrameworkCore.SqlServer</span></span>
<span class="line"><span>DotNetCore.CAP</span></span>
<span class="line"><span>DotNetCore.CAP.RabbitMQ</span></span>
<span class="line"><span>DotNetCore.CAP.SqlServer</span></span></code></pre></div><h1 id="product-api" tabindex="-1">Product.Api <a class="header-anchor" href="#product-api" aria-label="Permalink to &quot;Product.Api&quot;">​</a></h1><p>新增 <code>Product.Api</code> 作为产品服务，代码结构与 <code>Order.Api</code> 结构类似：</p><p><img src="https://wpl.wiki/images/2021-09-19-01-07-00.png" alt="img"></p><h2 id="productscontroller-cs" tabindex="-1">ProductsController.cs <a class="header-anchor" href="#productscontroller-cs" aria-label="Permalink to &quot;ProductsController.cs&quot;">​</a></h2><p>增加减库存接口：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>using DotNetCore.CAP;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>using Microsoft.AspNetCore.Mvc;</span></span>
<span class="line"><span>using Microsoft.EntityFrameworkCore;</span></span>
<span class="line"><span>using Microsoft.Extensions.Configuration;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>using Newtonsoft.Json;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>using Product.Api.Models;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>using System;</span></span>
<span class="line"><span>using System.Threading.Tasks;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>namespace Product.Api.Controller</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    [Route(&quot;[Controller]&quot;)]</span></span>
<span class="line"><span>    [ApiController]</span></span>
<span class="line"><span>    public class ProductsController : ControllerBase</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        private readonly IConfiguration configuration;</span></span>
<span class="line"><span>        private readonly ICapPublisher capBus;</span></span>
<span class="line"><span>        private readonly ProductContext context;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        public ProductsController(IConfiguration configuration, ICapPublisher capBus, ProductContext context)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            this.configuration = configuration;</span></span>
<span class="line"><span>            this.capBus = capBus;</span></span>
<span class="line"><span>            this.context = context;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        [HttpGet]</span></span>
<span class="line"><span>        public IActionResult Index()</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            string result = $&quot;产品服务：{DateTime.Now:yyyy-MM-dd HH:mm:ss},-{Request.HttpContext.Connection.LocalIpAddress}:{configuration[&quot;ConsulSetting:ServicePort&quot;]}&quot;;</span></span>
<span class="line"><span>            return Ok(result);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        /// &lt;summary&gt;</span></span>
<span class="line"><span>        /// 减库存 订阅下单事件</span></span>
<span class="line"><span>        /// &lt;/summary&gt;</span></span>
<span class="line"><span>        /// &lt;param name=&quot;message&quot;&gt;&lt;/param&gt;</span></span>
<span class="line"><span>        /// &lt;returns&gt;&lt;/returns&gt;</span></span>
<span class="line"><span>        [NonAction]</span></span>
<span class="line"><span>        [CapSubscribe(&quot;order.services.createorder&quot;)]</span></span>
<span class="line"><span>        public async Task ReduceStock(CreateOrderMessageDto message)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            Console.WriteLine(&quot;message:&quot; + JsonConvert.SerializeObject(message));</span></span>
<span class="line"><span>            var product = await context.Products.FirstOrDefaultAsync(p =&gt; p.ID == message.ProductID);</span></span>
<span class="line"><span>            product.Stock -= message.Count;</span></span>
<span class="line"><span>            await context.SaveChangesAsync();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="createordermessagedto-cs" tabindex="-1">CreateOrderMessageDto.cs <a class="header-anchor" href="#createordermessagedto-cs" aria-label="Permalink to &quot;CreateOrderMessageDto.cs&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>namespace Product.Api.Models</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    /// &lt;summary&gt;</span></span>
<span class="line"><span>    /// 下单事件消息</span></span>
<span class="line"><span>    /// &lt;/summary&gt;</span></span>
<span class="line"><span>    public class CreateOrderMessageDto</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        /// &lt;summary&gt;</span></span>
<span class="line"><span>        /// 产品ID</span></span>
<span class="line"><span>        /// &lt;/summary&gt;</span></span>
<span class="line"><span>        public int ProductID { get; set; }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        /// &lt;summary&gt;</span></span>
<span class="line"><span>        /// 购买数量</span></span>
<span class="line"><span>        /// &lt;/summary&gt;</span></span>
<span class="line"><span>        public int Count { get; set; }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="product-cs" tabindex="-1">Product.cs <a class="header-anchor" href="#product-cs" aria-label="Permalink to &quot;Product.cs&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>using System.ComponentModel.DataAnnotations;</span></span>
<span class="line"><span>using System.ComponentModel.DataAnnotations.Schema;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>namespace Product.Api.Models</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    public class Product</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        [Key]</span></span>
<span class="line"><span>        public int ID { get; set; }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        /// &lt;summary&gt;</span></span>
<span class="line"><span>        /// 产品名称</span></span>
<span class="line"><span>        /// &lt;/summary&gt;</span></span>
<span class="line"><span>        [Required]</span></span>
<span class="line"><span>        [Column(TypeName = &quot;VARCHAR(16)&quot;)]</span></span>
<span class="line"><span>        public string Name { get; set; }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        /// &lt;summary&gt;</span></span>
<span class="line"><span>        /// 库存</span></span>
<span class="line"><span>        /// &lt;/summary&gt;</span></span>
<span class="line"><span>        [Required]</span></span>
<span class="line"><span>        public int Stock { get; set; }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="productcontext-cs" tabindex="-1">ProductContext.cs <a class="header-anchor" href="#productcontext-cs" aria-label="Permalink to &quot;ProductContext.cs&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>using Microsoft.EntityFrameworkCore;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>namespace Product.Api</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    public class ProductContext : DbContext</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        public ProductContext(DbContextOptions&lt;ProductContext&gt; options)</span></span>
<span class="line"><span>           : base(options)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        public DbSet&lt;Models.Product&gt; Products { get; set; }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        protected override void OnModelCreating(ModelBuilder modelBuilder)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            //初始化种子数据</span></span>
<span class="line"><span>            modelBuilder.Entity&lt;Models.Product&gt;().HasData(new Models.Product</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                ID = 1,</span></span>
<span class="line"><span>                Name = &quot;ThinkPad&quot;,</span></span>
<span class="line"><span>                Stock = 100</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            new Models.Product</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                ID = 2,</span></span>
<span class="line"><span>                Name = &quot;Mac&quot;,</span></span>
<span class="line"><span>                Stock = 100</span></span>
<span class="line"><span>            });</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="appsettings-json" tabindex="-1">appsettings.json <a class="header-anchor" href="#appsettings-json" aria-label="Permalink to &quot;appsettings.json&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;Logging&quot;: {</span></span>
<span class="line"><span>    &quot;LogLevel&quot;: {</span></span>
<span class="line"><span>      &quot;Default&quot;: &quot;Information&quot;,</span></span>
<span class="line"><span>      &quot;Microsoft&quot;: &quot;Warning&quot;,</span></span>
<span class="line"><span>      &quot;Microsoft.Hosting.Lifetime&quot;: &quot;Information&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;AllowedHosts&quot;: &quot;*&quot;,</span></span>
<span class="line"><span>  &quot;ConsulSetting&quot;: {</span></span>
<span class="line"><span>    &quot;ServiceName&quot;: &quot;product.service&quot;,</span></span>
<span class="line"><span>    &quot;ServiceIP&quot;: &quot;192.168.31.191&quot;,</span></span>
<span class="line"><span>    &quot;ServiceHealthCheck&quot;: &quot;/healthcheck&quot;,</span></span>
<span class="line"><span>    &quot;ConsulAddress&quot;: &quot;http://192.168.31.191:8500&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;ConnectionString&quot;: &quot;Server=192.168.31.210;Database=Microservice.Sample.Product;user id=sa;password=wpl19950815;MultipleActiveResultSets=true&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="startup-cs" tabindex="-1">Startup.cs <a class="header-anchor" href="#startup-cs" aria-label="Permalink to &quot;Startup.cs&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public void ConfigureServices(IServiceCollection services)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    services.AddControllers();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    services.AddDbContext&lt;ProductContext&gt;(opt =&gt; opt.UseSqlServer(Configuration[&quot;ConnectionString&quot;]));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    services.AddCap(x =&gt;</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        x.UseEntityFramework&lt;ProductContext&gt;().UseRabbitMQ(option =&gt;</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            option.HostName = &quot;192.168.31.191&quot;;</span></span>
<span class="line"><span>            option.UserName = &quot;guest&quot;;</span></span>
<span class="line"><span>            option.Password = &quot;guest&quot;;</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>}</span></span></code></pre></div><h1 id="order-api" tabindex="-1">Order.Api <a class="header-anchor" href="#order-api" aria-label="Permalink to &quot;Order.Api&quot;">​</a></h1><h2 id="orderscontroller-cs" tabindex="-1">OrdersController.cs <a class="header-anchor" href="#orderscontroller-cs" aria-label="Permalink to &quot;OrdersController.cs&quot;">​</a></h2><p>增加下单接口：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>using DotNetCore.CAP;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>using Microsoft.AspNetCore.Mvc;</span></span>
<span class="line"><span>using Microsoft.Extensions.Configuration;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>using Order.Api.Models;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>using System;</span></span>
<span class="line"><span>using System.Threading.Tasks;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>namespace Order.Api.Controller</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    [Route(&quot;[Controller]&quot;)]</span></span>
<span class="line"><span>    [ApiController]</span></span>
<span class="line"><span>    public class OrdersController : ControllerBase</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        private readonly IConfiguration configuration;</span></span>
<span class="line"><span>        private readonly ICapPublisher capBus;</span></span>
<span class="line"><span>        private readonly OrderContext context;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        public OrdersController(IConfiguration configuration, ICapPublisher capBus, OrderContext context)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            this.configuration = configuration;</span></span>
<span class="line"><span>            this.capBus = capBus;</span></span>
<span class="line"><span>            this.context = context;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        [HttpGet]</span></span>
<span class="line"><span>        public IActionResult Index()</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            string result = $&quot;订单服务：{DateTime.Now:yyyy-MM-dd HH:mm:ss},-{Request.HttpContext.Connection.LocalIpAddress}:{configuration[&quot;ConsulSetting:ServicePort&quot;]}&quot;;</span></span>
<span class="line"><span>            return Ok(result);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        /// &lt;summary&gt;</span></span>
<span class="line"><span>        /// 创建订单</span></span>
<span class="line"><span>        /// &lt;/summary&gt;</span></span>
<span class="line"><span>        /// &lt;param name=&quot;order&quot;&gt;&lt;/param&gt;</span></span>
<span class="line"><span>        /// &lt;returns&gt;&lt;/returns&gt;</span></span>
<span class="line"><span>        [Route(&quot;Create&quot;)]</span></span>
<span class="line"><span>        [HttpPost]</span></span>
<span class="line"><span>        public async Task&lt;IActionResult&gt; CreateOrder(Models.Order order)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            using (var trans = context.Database.BeginTransaction(capBus, autoCommit: true))</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                order.CreateTime = DateTime.Now;</span></span>
<span class="line"><span>                context.Orders.Add(order);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                var result = await context.SaveChangesAsync() &gt; 0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                if (result)</span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                    // 发布下单事件</span></span>
<span class="line"><span>                    await capBus.PublishAsync(&quot;order.services.createorder&quot;,</span></span>
<span class="line"><span>                        new CreateOrderMessageDto() { Count = order.Count, ProductID = order.ProductID });</span></span>
<span class="line"><span>                    return Ok();</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                return BadRequest();</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="createordermessagedto-cs-1" tabindex="-1">CreateOrderMessageDto.cs <a class="header-anchor" href="#createordermessagedto-cs-1" aria-label="Permalink to &quot;CreateOrderMessageDto.cs&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>namespace Order.Api.Models</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    /// &lt;summary&gt;</span></span>
<span class="line"><span>    /// 下单事件消息</span></span>
<span class="line"><span>    /// &lt;/summary&gt;</span></span>
<span class="line"><span>    public class CreateOrderMessageDto</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        /// &lt;summary&gt;</span></span>
<span class="line"><span>        /// 产品ID</span></span>
<span class="line"><span>        /// &lt;/summary&gt;</span></span>
<span class="line"><span>        public int ProductID { get; set; }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        /// &lt;summary&gt;</span></span>
<span class="line"><span>        /// 购买数量</span></span>
<span class="line"><span>        /// &lt;/summary&gt;</span></span>
<span class="line"><span>        public int Count { get; set; }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="order-cs" tabindex="-1">Order.cs <a class="header-anchor" href="#order-cs" aria-label="Permalink to &quot;Order.cs&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>using System;</span></span>
<span class="line"><span>using System.ComponentModel.DataAnnotations;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>namespace Order.Api.Models</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    public class Order</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        [Key]</span></span>
<span class="line"><span>        public int ID { get; set; }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        /// &lt;summary&gt;</span></span>
<span class="line"><span>        /// 下单时间</span></span>
<span class="line"><span>        /// &lt;/summary&gt;</span></span>
<span class="line"><span>        [Required]</span></span>
<span class="line"><span>        public DateTime CreateTime { get; set; }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        /// &lt;summary&gt;</span></span>
<span class="line"><span>        /// 产品ID</span></span>
<span class="line"><span>        /// &lt;/summary&gt;</span></span>
<span class="line"><span>        [Required]</span></span>
<span class="line"><span>        public int ProductID { get; set; }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        /// &lt;summary&gt;</span></span>
<span class="line"><span>        /// 购买数量</span></span>
<span class="line"><span>        /// &lt;/summary&gt;</span></span>
<span class="line"><span>        [Required]</span></span>
<span class="line"><span>        public int Count { get; set; }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="ordercontext-cs" tabindex="-1">OrderContext.cs <a class="header-anchor" href="#ordercontext-cs" aria-label="Permalink to &quot;OrderContext.cs&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>using Microsoft.EntityFrameworkCore;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>namespace Order.Api</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    public class OrderContext : DbContext</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        public OrderContext(DbContextOptions&lt;OrderContext&gt; options)</span></span>
<span class="line"><span>           : base(options)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        public DbSet&lt;Models.Order&gt; Orders { get; set; }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        protected override void OnModelCreating(ModelBuilder modelBuilder)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="appsettings-json-1" tabindex="-1">appsettings.json <a class="header-anchor" href="#appsettings-json-1" aria-label="Permalink to &quot;appsettings.json&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
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
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;ConnectionString&quot;: &quot;Server=192.168.31.210;Database=Microservice.Sample.Order;user id=sa;password=wpl19950815;MultipleActiveResultSets=true&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="startup-cs-1" tabindex="-1">Startup.cs <a class="header-anchor" href="#startup-cs-1" aria-label="Permalink to &quot;Startup.cs&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public void ConfigureServices(IServiceCollection services)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    services.AddControllers();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    services.AddDbContext&lt;OrderContext&gt;(opt =&gt; opt.UseSqlServer(Configuration[&quot;ConnectionString&quot;]));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    services.AddCap(x =&gt;</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        x.UseEntityFramework&lt;OrderContext&gt;().UseRabbitMQ(option =&gt;</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            option.HostName = &quot;192.168.31.191&quot;;</span></span>
<span class="line"><span>            option.UserName = &quot;guest&quot;;</span></span>
<span class="line"><span>            option.Password = &quot;guest&quot;;</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><img src="https://wpl.wiki/images/2021-09-19-01-20-20.png" alt="img"></p><p>以上就是产品服务的新增以及订单服务的部分代码调整，功能很简单：各自添加自己的数据库表，订单服务增加下单接口，下单接口会发出“下单事件”。产品服务增加减库存接口，减库存接口会订阅“下单事件”。然后客户端调用下单接口下单时，产品服务会减去相应的库存。关于EF数据库迁移之类的基本使用不做介绍。</p><h1 id="重新构建镜像" tabindex="-1">重新构建镜像 <a class="header-anchor" href="#重新构建镜像" aria-label="Permalink to &quot;重新构建镜像&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[root@centos-01 dotnetcore_src]# cd order.api.release/</span></span>
<span class="line"><span>[root@centos-01 order.api.release]# docker build -t order.api .</span></span>
<span class="line"><span>Sending build context to Docker daemon  16.05MB</span></span>
<span class="line"><span>Step 1/4 : FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base</span></span>
<span class="line"><span> ---&gt; a2be3e478ffa</span></span>
<span class="line"><span>Step 2/4 : WORKDIR /app</span></span>
<span class="line"><span> ---&gt; Using cache</span></span>
<span class="line"><span> ---&gt; 9f551bd1698a</span></span>
<span class="line"><span>Step 3/4 : COPY . /app</span></span>
<span class="line"><span> ---&gt; e19ab440e8a5</span></span>
<span class="line"><span>Step 4/4 : ENTRYPOINT [&quot;dotnet&quot;, &quot;Order.Api.dll&quot;]</span></span>
<span class="line"><span> ---&gt; Running in 3d1e4110f02e</span></span>
<span class="line"><span>Removing intermediate container 3d1e4110f02e</span></span>
<span class="line"><span> ---&gt; 06322a6c6e83</span></span>
<span class="line"><span>Successfully built 06322a6c6e83</span></span>
<span class="line"><span>Successfully tagged order.api:latest</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[root@centos-01 order.api.release]# cd ../product.api.release/</span></span>
<span class="line"><span>[root@centos-01 product.api.release]# docker build -t product.api .</span></span>
<span class="line"><span>Sending build context to Docker daemon  16.38MB</span></span>
<span class="line"><span>Step 1/4 : FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base</span></span>
<span class="line"><span> ---&gt; a2be3e478ffa</span></span>
<span class="line"><span>Step 2/4 : WORKDIR /app</span></span>
<span class="line"><span> ---&gt; Using cache</span></span>
<span class="line"><span> ---&gt; 9f551bd1698a</span></span>
<span class="line"><span>Step 3/4 : COPY . /app</span></span>
<span class="line"><span> ---&gt; 6f6d08e02d78</span></span>
<span class="line"><span>Step 4/4 : ENTRYPOINT [&quot;dotnet&quot;, &quot;Product.Api.dll&quot;]</span></span>
<span class="line"><span> ---&gt; Running in 7616a505741e</span></span>
<span class="line"><span>Removing intermediate container 7616a505741e</span></span>
<span class="line"><span> ---&gt; 6be08521c6fe</span></span>
<span class="line"><span>Successfully built 6be08521c6fe</span></span>
<span class="line"><span>Successfully tagged product.api:latest</span></span></code></pre></div><p>运行订单服务，产品服务：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker run -d --name order.api -p 80:80 order.api  --ConsulSetting:ServicePort=&quot;80&quot;</span></span>
<span class="line"><span>docker run -d --name order.api1 -p 81:80 order.api --ConsulSetting:ServicePort=&quot;81&quot;</span></span>
<span class="line"><span>docker run -d --name order.api2 -p 82:80 order.api --ConsulSetting:ServicePort=&quot;82&quot;</span></span>
<span class="line"><span>docker run -d --name product.api -p 85:80 product.api --ConsulSetting:ServicePort=&quot;85&quot;</span></span>
<span class="line"><span>docker run -d --name product.api1 -p 86:80 product.api --ConsulSetting:ServicePort=&quot;86&quot;</span></span>
<span class="line"><span>docker run -d --name product.api2 -p 87:80 product.api --ConsulSetting:ServicePort=&quot;87&quot;</span></span></code></pre></div><p><img src="https://wpl.wiki/images/2021-09-19-01-51-19.png" alt="img"></p><p><code>ocelot.json</code> 增加路由配置：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;Routes&quot;: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      // 路由规则匹配</span></span>
<span class="line"><span>      &quot;DownstreamPathTemplate&quot;: &quot;/orders/{url}&quot;,</span></span>
<span class="line"><span>      &quot;DownstreamScheme&quot;: &quot;http&quot;,</span></span>
<span class="line"><span>      &quot;UpstreamPathTemplate&quot;: &quot;/orders/{url}&quot;,</span></span>
<span class="line"><span>      // 增加Post请求</span></span>
<span class="line"><span>      &quot;UpstreamHttpMethod&quot;: [ &quot;Get&quot;, &quot;Post&quot; ],</span></span>
<span class="line"><span>      &quot;ServiceName&quot;: &quot;order.service&quot;,</span></span>
<span class="line"><span>      &quot;LoadBalancerOptions&quot;: {</span></span>
<span class="line"><span>        &quot;Type&quot;: &quot;RoundRobin&quot;</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      // 缓存</span></span>
<span class="line"><span>      &quot;FileCacheOptions&quot;: {</span></span>
<span class="line"><span>        &quot;TtlSeconds&quot;: 5,</span></span>
<span class="line"><span>        &quot;Region&quot;: &quot;regionname&quot;</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      // 限流</span></span>
<span class="line"><span>      &quot;RateLimitOptions&quot;: {</span></span>
<span class="line"><span>        &quot;ClientWhitelist&quot;: [ &quot;SuperClient&quot; ],</span></span>
<span class="line"><span>        &quot;EnableRateLimiting&quot;: true,</span></span>
<span class="line"><span>        &quot;Period&quot;: &quot;2s&quot;,</span></span>
<span class="line"><span>        &quot;PeriodTimespan&quot;: 2,</span></span>
<span class="line"><span>        &quot;Limit&quot;: 1</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      // 超时熔断</span></span>
<span class="line"><span>      &quot;QoSOptions&quot;: {</span></span>
<span class="line"><span>        &quot;ExceptionsAllowedBeforeBreaking&quot;: 3,</span></span>
<span class="line"><span>        &quot;DurationOfBreak&quot;: 10000,</span></span>
<span class="line"><span>        &quot;TimeoutValue&quot;: 5000</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      &quot;DownstreamPathTemplate&quot;: &quot;/products&quot;,</span></span>
<span class="line"><span>      &quot;DownstreamScheme&quot;: &quot;http&quot;,</span></span>
<span class="line"><span>      &quot;UpstreamPathTemplate&quot;: &quot;/products&quot;,</span></span>
<span class="line"><span>      &quot;UpstreamHttpMethod&quot;: [ &quot;Get&quot; ],</span></span>
<span class="line"><span>      &quot;ServiceName&quot;: &quot;product.service&quot;,</span></span>
<span class="line"><span>      &quot;LoadBalancerOptions&quot;: {</span></span>
<span class="line"><span>        &quot;Type&quot;: &quot;RoundRobin&quot;</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      // 缓存</span></span>
<span class="line"><span>      &quot;FileCacheOptions&quot;: {</span></span>
<span class="line"><span>        &quot;TtlSeconds&quot;: 5,</span></span>
<span class="line"><span>        &quot;Region&quot;: &quot;regionname&quot;</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      // 限流</span></span>
<span class="line"><span>      &quot;RateLimitOptions&quot;: {</span></span>
<span class="line"><span>        &quot;ClientWhitelist&quot;: [ &quot;SuperClient&quot; ],</span></span>
<span class="line"><span>        &quot;EnableRateLimiting&quot;: true,</span></span>
<span class="line"><span>        &quot;Period&quot;: &quot;2s&quot;,</span></span>
<span class="line"><span>        &quot;PeriodTimespan&quot;: 2,</span></span>
<span class="line"><span>        &quot;Limit&quot;: 1</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      // 超时熔断</span></span>
<span class="line"><span>      &quot;QoSOptions&quot;: {</span></span>
<span class="line"><span>        &quot;ExceptionsAllowedBeforeBreaking&quot;: 3,</span></span>
<span class="line"><span>        &quot;DurationOfBreak&quot;: 10000,</span></span>
<span class="line"><span>        &quot;TimeoutValue&quot;: 5000</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  &quot;GlobalConfiguration&quot;: {</span></span>
<span class="line"><span>    &quot;BaseUrl&quot;: &quot;http://localhost:5000&quot;,</span></span>
<span class="line"><span>    &quot;ServiceDiscoveryProvider&quot;: {</span></span>
<span class="line"><span>      &quot;Scheme&quot;: &quot;http&quot;,</span></span>
<span class="line"><span>      &quot;Host&quot;: &quot;192.168.31.191&quot;,</span></span>
<span class="line"><span>      &quot;Port&quot;: 8500,</span></span>
<span class="line"><span>      &quot;Type&quot;: &quot;Consul&quot;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    &quot;RateLimitOptions&quot;: {</span></span>
<span class="line"><span>      &quot;DisableRateLimitHeaders&quot;: false,</span></span>
<span class="line"><span>      &quot;QuotaExceededMessage&quot;: &quot;too many requests...&quot;,</span></span>
<span class="line"><span>      &quot;HttpStatusCode&quot;: 999,</span></span>
<span class="line"><span>      &quot;ClientIdHeader&quot;: &quot;Test&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>至此整个环境就有点复杂了。要确保 SqlServer，RabbitMQ，Consul，服务实例、Gateway都正常运行：</p><p><img src="https://wpl.wiki/images/2021-09-19-02-13-24.png" alt="img"></p><p><img src="https://wpl.wiki/images/2021-09-19-02-00-46.png" alt="img"></p><p><img src="https://wpl.wiki/images/2021-09-19-02-01-06.png" alt="img"></p><p><code>cap.published</code> 表和 <code>cap.received</code> 表由 <code>CAP</code> 自动生成，内部使用本地消息表+MQ来实现异步确保。</p><h1 id="测试" tabindex="-1">测试 <a class="header-anchor" href="#测试" aria-label="Permalink to &quot;测试&quot;">​</a></h1><p>使用Postman作为客户端调用下单接口（5000是Ocelot网关端口）：</p><p><img src="https://wpl.wiki/images/2021-09-19-02-19-58.png" alt="img"></p><p>订单库： <img src="https://wpl.wiki/images/2021-09-19-02-30-39.png" alt="img"></p><p>产品库： <img src="https://wpl.wiki/images/2021-09-19-02-30-59.png" alt="img"></p><p>至此虽然功能很简单，但是实现了服务的解耦，异步调用，和最终一致性。要注意的是：</p><ol><li>这里的事务是指：订单持久化到数据库/和下单事件保存到 <code>cap.published</code>表（保存到 <code>cap.published</code> 表理论上代表消息正常发送到MQ），要么一同成功，要么一同失败。如果这个事务成功，那么就可以认为这个业务流程是成功的</li><li>产品服务的减库存是否成功那是产品服务的事，理论上也应该是成功的。因为消息已经确保发到了MQ，产品服务必然会收到消息。CAP也提供了失败重试，和失败回调机制，要理解 “CAP 是基于MQ加本地消息表来实现异步确保”</li><li>如果下单成功但是库存不足导致减库存失败了怎么办，是否需要回滚订单表的数据？如果产生这种想法，说明还没有真正理解最终一致性的思想。首先下单前肯定会检查一下库存数量，既然允许下单那么必然是库存充足的。（高并发下保证不超卖是另一个问题这里不考虑）如果非要数据回滚也是能实现的，CAP的 <code>ICapPublisher.Publish</code> 方法提供一个<code>callbackName</code> 参数，当减库存时，可以触发这个回调。其本质也是通过发布订阅完成，但不推荐</li><li>CAP无法保证消息不重复，实际使用中需要自己考虑一下实现消息的重复过滤和幂等</li></ol>`,64)])])}const g=n(t,[["render",l]]);export{q as __pageData,g as default};
