(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{306:function(s,n,e){"use strict";e.r(n);var a=e(14),t=Object(a.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"前言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),n("p",[s._v("上一篇使用 Consul 完成了服务的注册与发现，实际中光有服务注册与发现往往是不够的，需要一个统一的入口来连接客户端与服务。")]),s._v(" "),n("h1",{attrs:{id:"ocelot"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ocelot"}},[s._v("#")]),s._v(" Ocelot")]),s._v(" "),n("p",[s._v("官网："),n("a",{attrs:{href:"https://ocelot.readthedocs.io/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://ocelot.readthedocs.io"),n("OutboundLink")],1),s._v(" ，Ocelot 正是为.Net微服务体系提供一个统一的入口点，称为：Gateway（网关）。")]),s._v(" "),n("p",[s._v("首先创建一个空的 "),n("code",[s._v("asp.net core web")]),s._v(" 项目：")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://wpl.wiki/images/2021-09-19-04-33-35.png",alt:"img"}})]),s._v(" "),n("blockquote",[n("p",[s._v("注意："),n("code",[s._v("ocelot.json")]),s._v(" 是Ocelot的配置文件，设置生成时需要复制到输出目录。"),n("code",[s._v("ocelot.json")]),s._v(" 文件名不是固定的可以自己定义")])]),s._v(" "),n("p",[s._v("使用 "),n("code",[s._v("NuGet")]),s._v(" 安装 "),n("code",[s._v("Ocelot")]),s._v("，简单修改几处默认代码：")]),s._v(" "),n("p",[s._v("Program.cs：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('public class Program\n{\n    public static void Main(string[] args)\n    {\n        CreateHostBuilder(args).Build().Run();\n    }\n\n    public static IHostBuilder CreateHostBuilder(string[] args) =>\n        Host.CreateDefaultBuilder(args)\n            .ConfigureAppConfiguration((hostingContext, config) =>\n             {\n                 config.AddJsonFile("ocelot.json", optional: false, reloadOnChange: true);\n             })\n            .ConfigureWebHostDefaults(webBuilder =>\n             {\n                 webBuilder.UseStartup<Startup>();\n             });\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("p",[s._v("Startup.cs：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("public void ConfigureServices(IServiceCollection services)\n{\n    // 添加ocelot服务\n    services.AddOcelot();\n}\n\n// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.\npublic void Configure(IApplicationBuilder app, IWebHostEnvironment env)\n{\n    // 启用Ocelot中间件\n    app.UseOcelot().Wait();\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("p",[s._v("ocelot.json：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('{\n  "Routes": [\n    {\n      "DownstreamPathTemplate": "/orders",\n      "DownstreamScheme": "http",\n      "DownstreamHostAndPorts": [\n        {\n          "Host": "192.168.31.191",\n          "Port": 80\n        },\n        {\n          "Host": "192.168.31.191",\n          "Port": 81\n        },\n        {\n          "Host": "192.168.31.191",\n          "Port": 82\n        }\n      ],\n      "UpstreamPathTemplate": "/orders",\n      "UpstreamHttpMethod": [\n        "Get"\n      ],\n      "LoadBalancerOptions": {\n        "Type": "RoundRobin" //负载均衡，轮询机制 LeastConnection/RoundRobin/NoLoadBalancer/CookieStickySessions\n      }\n    }\n  ],\n  "GlobalConfiguration": {\n    "BaseUrl": "http://localhost:5000"\n  }\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br")])]),n("p",[s._v("这里将服务实例的地址写在配置文件中。")]),s._v(" "),n("p",[n("code",[s._v("Routes")]),s._v(" 节点用来配置路由：")]),s._v(" "),n("ul",[n("li",[n("code",[s._v("Downstream")]),s._v(" 代表下游，也就是服务实例")]),s._v(" "),n("li",[n("code",[s._v("Upstream")]),s._v(" 代表上游，也就是客户端。这里路径比较简单，只有 "),n("code",[s._v("/orders")]),s._v(" 路径中如果有不固定参数则使用 "),n("code",[s._v("{}")]),s._v(" 匹配。")])]),s._v(" "),n("p",[s._v("这里配置的意思是：客户端访问网关的 "),n("code",[s._v("/orders")]),s._v("，网关会转发给服务实例的 "),n("code",[s._v("/orders")]),s._v(" 。注意：上游的路径不一定要和下游一致，比如上游路径可以配置成 "),n("code",[s._v("/api/orders")]),s._v("。")]),s._v(" "),n("p",[n("code",[s._v("LoadBalancerOptions")]),s._v(" 节点用来配置负载均衡，Ocelot 内置了 "),n("code",[s._v("LeastConnection")]),s._v(" 、"),n("code",[s._v("RoundRobin")]),s._v(" 、"),n("code",[s._v("NoLoadBalancer")]),s._v(" 、"),n("code",[s._v("CookieStickySessions")]),s._v(" 4种负载均衡策略：")]),s._v(" "),n("ul",[n("li",[n("code",[s._v("LeastConnection")]),s._v(" 最少连接，跟踪哪些服务正在处理请求，并把新请求发送到现有请求最少的服务上。该算法状态不在整个Ocelot集群中分布")]),s._v(" "),n("li",[n("code",[s._v("RoundRobin")]),s._v(" 轮询可用的服务并发送请求。 该算法状态不在整个Ocelot集群中分布")]),s._v(" "),n("li",[n("code",[s._v("NoLoadBalancer")]),s._v(" 不负载均衡，从配置或服务发现提供程序中取第一个可用的下游服务")]),s._v(" "),n("li",[n("code",[s._v("CookieStickySessions")]),s._v(" 使用cookie关联所有相关的请求到制定的服务")])]),s._v(" "),n("p",[n("code",[s._v("BaseUrl")]),s._v(" 节点用来配置 Ocelot 网关将要运行的地址。")]),s._v(" "),n("p",[s._v("浏览器访问：")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://wpl.wiki/images/2021-09-17-21-18-20.png",alt:"img"}})]),s._v(" "),n("h1",{attrs:{id:"客户端"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#客户端"}},[s._v("#")]),s._v(" 客户端")]),s._v(" "),n("p",[s._v("上面实现通过 Ocelot 网关访问服务实例，调整客户端代码：这里选择直接新建 "),n("code",[s._v("GatewayServiceHelper")]),s._v("：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('using RestSharp;\n\nusing System;\nusing System.Threading.Tasks;\n\nnamespace Web.Client\n{\n    /// <summary>\n    /// 通过OcelotGateway调用服务\n    /// </summary>\n    public class GatewayServiceHelper : IServiceHelper\n    {\n        public async Task<string> GetOrder()\n        {\n            var client = new RestClient("http://localhost:5000");\n            var request = new RestRequest("/orders", Method.GET);\n\n            var response = await client.ExecuteAsync(request);\n            return response.Content;\n        }\n\n        public void GetServices()\n        {\n            throw new NotImplementedException();\n        }\n    }\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br")])]),n("p",[s._v("Startup.cs：修改注入类型")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("services.AddSingleton<IServiceHelper, GatewayServiceHelper>();\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("下面获取服务地址的代码也不需要了")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("// 程序启动时获取服务列表\nserviceHelper.GetServices();\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("经过以上调整现在客户端对服务的调用都通过网关进行中转，客户端不再关心服务实例的地址，只需要知道网关地址就可以。另外服务端也避免了服务地址直接暴露给客户端。这样做对客户端，服务都非常友好。但是又出现了一个新的问题：目前服务地址写在 "),n("code",[s._v("ocelot.json")]),s._v(" 配置文件中，一旦服务变化，需要人为的修改配置文件，这又显得不太合理。这里比较常用的方案是：结合Consul来实现服务发现。")]),s._v(" "),n("h1",{attrs:{id:"服务发现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#服务发现"}},[s._v("#")]),s._v(" 服务发现")]),s._v(" "),n("p",[n("code",[s._v("NuGet")]),s._v(" 安装"),n("code",[s._v("Ocelot.Provider.Consul")]),s._v("后，修改Startup.cs：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("public void ConfigureServices(IServiceCollection services)\n{\n    // 添加Ocelot服务并添加Consul支持\n    services.AddOcelot().AddConsul();\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("修改ocelot.json配置：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('{\n  "Routes": [\n    {\n      "DownstreamPathTemplate": "/orders",\n      "DownstreamScheme": "http",\n      "UpstreamPathTemplate": "/orders",\n      "UpstreamHttpMethod": [ "Get" ],\n      "ServiceName": "order.service",\n      "LoadBalancerOptions": {\n        "Type": "RoundRobin"\n      }\n    }\n  ],\n  "GlobalConfiguration": {\n    "BaseUrl": "http://localhost:5000",\n    "ServiceDiscoveryProvider": {\n      "Scheme": "http",\n      "Host": "192.168.31.191",\n      "Port": 8500,\n      "Type": "Consul"\n    }\n  }\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br")])]),n("p",[s._v("这个配置很好理解，就是把 "),n("code",[s._v("DownstreamHostAndPorts")]),s._v(" 节点去掉然后增加了 "),n("code",[s._v("ServiceDiscoveryProvider")]),s._v(" 服务发现相关配置。")]),s._v(" "),n("blockquote",[n("p",[s._v("注意，Ocelot 除了支持 Consul 服务发现以外，还有 Eureka 也可以，Eureka 也是一个类似的注册中心")])]),s._v(" "),n("p",[s._v("浏览器测试：")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://wpl.wiki/images/2021-09-17-21-35-46.png",alt:"img"}})]),s._v(" "),n("p",[s._v("至此就实现了服务注册与发现和api网关的基本功能。接下来就要提到：服务治理。")]),s._v(" "),n("h1",{attrs:{id:"服务治理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#服务治理"}},[s._v("#")]),s._v(" 服务治理")]),s._v(" "),n("p",[s._v("服务治理没有非常明确的定义。它的作用简单来说，就是帮我们更好的管理服务，提升服务的可用性。缓存、限流、熔断、链路追踪等等都属于常用的服务治理手段。之前讲的负载均衡，服务发现也可以算是服务治理。")]),s._v(" "),n("h2",{attrs:{id:"缓存"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#缓存"}},[s._v("#")]),s._v(" 缓存")]),s._v(" "),n("p",[s._v("在 Ocelot 中启用缓存，需要"),n("code",[s._v("NuGet")]),s._v(" 安装"),n("code",[s._v("Ocelot.Cache.CacheManager")]),s._v("，修改"),n("code",[s._v("Startup.cs")]),s._v(" 中的 "),n("code",[s._v("ConfigureServices()")]),s._v(" 方法：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("public void ConfigureServices(IServiceCollection services)\n{\n    services.AddOcelot()\n            .AddConsul()\n            .AddCacheManager(p =>\n            {\n                p.WithDictionaryHandle();\n            });\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("修改 "),n("code",[s._v("ocelot.json")]),s._v(" 配置文件：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('{\n  "Routes": [\n    {\n      "DownstreamPathTemplate": "/orders",\n      "DownstreamScheme": "http",\n      "UpstreamPathTemplate": "/orders",\n      "UpstreamHttpMethod": [ "Get" ],\n      "ServiceName": "order.service",\n      "LoadBalancerOptions": {\n        "Type": "RoundRobin"\n      },\n      // 缓存\n      "FileCacheOptions": {\n        "TtlSeconds": 5,\n        "Region": "regionname"\n      }\n    }\n  ],\n  "GlobalConfiguration": {\n    "BaseUrl": "http://localhost:5000",\n    "ServiceDiscoveryProvider": {\n      "Scheme": "http",\n      "Host": "192.168.31.191",\n      "Port": 8500,\n      "Type": "Consul"\n    }\n  }\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br")])]),n("p",[s._v("在 Routes 路由配置中增加 "),n("code",[s._v("FileCacheOptions")]),s._v("：")]),s._v(" "),n("ul",[n("li",[n("code",[s._v("TtlSeconds")]),s._v(" 缓存的过期时间")]),s._v(" "),n("li",[n("code",[s._v("Region")]),s._v(" 缓冲区名称，目前用不到")])]),s._v(" "),n("p",[s._v("代码修改完编译重启一下网关项目，然后打开浏览器测试会发现5秒之内的请求都是同样的缓存数据。Ocelot也支持自定义缓存。")]),s._v(" "),n("h2",{attrs:{id:"限流"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#限流"}},[s._v("#")]),s._v(" 限流")]),s._v(" "),n("p",[s._v("限流就是限制客户端一定时间内的请求次数。")]),s._v(" "),n("p",[s._v("修改 "),n("code",[s._v("ocelot.json")]),s._v(" 配置文件：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('{\n  "Routes": [\n    {\n      "DownstreamPathTemplate": "/orders",\n      "DownstreamScheme": "http",\n      "UpstreamPathTemplate": "/orders",\n      "UpstreamHttpMethod": [ "Get" ],\n      "ServiceName": "order.service",\n      "LoadBalancerOptions": {\n        "Type": "RoundRobin"\n      },\n      // 缓存\n      "FileCacheOptions": {\n        "TtlSeconds": 5,\n        "Region": "regionname"\n      },\n      // 限流\n      "RateLimitOptions": {\n        "ClientWhitelist": [ "SuperClient" ],\n        "EnableRateLimiting": true,\n        "Period": "2s",\n        "PeriodTimespan": 2,\n        "Limit": 1\n      }\n    }\n  ],\n  "GlobalConfiguration": {\n    "BaseUrl": "http://localhost:5000",\n    "ServiceDiscoveryProvider": {\n      "Scheme": "http",\n      "Host": "192.168.31.191",\n      "Port": 8500,\n      "Type": "Consul"\n    },\n    "RateLimitOptions": {\n      "DisableRateLimitHeaders": false,\n      "QuotaExceededMessage": "too many requests...",\n      "HttpStatusCode": 999,\n      "ClientIdHeader": "Test"\n    }\n  }\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br")])]),n("p",[s._v("在 Routes 路由配置中增加 "),n("code",[s._v("RateLimitOptions")]),s._v(" ：")]),s._v(" "),n("ul",[n("li",[n("code",[s._v("ClientWhitelist")]),s._v(" 客户端白名单（白名单中的客户端不受限流影响）")]),s._v(" "),n("li",[n("code",[s._v("EnableRateLimiting")]),s._v(" 是否限流")]),s._v(" "),n("li",[n("code",[s._v("Period")]),s._v(" 限流的单位时间，例如1s、5m、1h、1d等")]),s._v(" "),n("li",[n("code",[s._v("PeriodTimespan")]),s._v(" 客户端达到请求上限多少秒后可以重试")]),s._v(" "),n("li",[n("code",[s._v("Limit")]),s._v(" 客户端在定义的时间内可以发出的最大请求数")])]),s._v(" "),n("p",[s._v("在 GlobalConfiguration 配置中也增加 "),n("code",[s._v("RateLimitOptions")]),s._v("：")]),s._v(" "),n("ul",[n("li",[n("code",[s._v("DisableRateLimitHeaders")]),s._v(" 是否禁用 "),n("code",[s._v("X-Rate-Limit")]),s._v(" 和 "),n("code",[s._v("Retry-After")]),s._v(" 标头（请求达到上限时response header中的限制数和多少秒后能重试）")]),s._v(" "),n("li",[n("code",[s._v("QuotaExceededMessage")]),s._v(" ：请求达到上限时返回给客户端的消息")]),s._v(" "),n("li",[n("code",[s._v("HttpStatusCode")]),s._v(" ：请求达到上限时返回给客户端的 "),n("code",[s._v("HTTP状态码")])]),s._v(" "),n("li",[n("code",[s._v("ClientIdHeader")]),s._v(" 可以允许自定义用于标识客户端的标头。默认情况下为 "),n("code",[s._v("ClientId")])])]),s._v(" "),n("p",[s._v("代码修改完编译重启一下网关项目，然后打开浏览器测试会发现限制已经生效。")]),s._v(" "),n("h2",{attrs:{id:"超时-熔断"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#超时-熔断"}},[s._v("#")]),s._v(" 超时/熔断")]),s._v(" "),n("ul",[n("li",[s._v("超时：网关请求服务时可容忍的最长响应时间")]),s._v(" "),n("li",[s._v("熔断：当请求某个服务的异常次数达到一定量时，网关在一定时间内就不再对这个服务发起请求直接熔断")])]),s._v(" "),n("p",[s._v("在 Ocelot 中启用超时/熔断，需要 "),n("code",[s._v("NuGet")]),s._v(" 安装"),n("code",[s._v("Ocelot.Provider.Polly")]),s._v("，修改"),n("code",[s._v("Startup.cs")]),s._v(" 中的 "),n("code",[s._v("ConfigureServices()")]),s._v(" 方法：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("public void ConfigureServices(IServiceCollection services)\n{\n    services.AddOcelot()\n            .AddConsul()\n            .AddCacheManager(p =>\n            {\n                p.WithDictionaryHandle();\n            }).AddPolly();\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("修改 "),n("code",[s._v("ocelot.json")]),s._v(" 配置文件：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('{\n  "Routes": [\n    {\n      "DownstreamPathTemplate": "/orders",\n      "DownstreamScheme": "http",\n      "UpstreamPathTemplate": "/orders",\n      "UpstreamHttpMethod": [ "Get" ],\n      "ServiceName": "order.service",\n      "LoadBalancerOptions": {\n        "Type": "RoundRobin"\n      },\n      // 缓存\n      "FileCacheOptions": {\n        "TtlSeconds": 5,\n        "Region": "regionname"\n      },\n      // 限流\n      "RateLimitOptions": {\n        "ClientWhitelist": [ "SuperClient" ],\n        "EnableRateLimiting": true,\n        "Period": "2s",\n        "PeriodTimespan": 2,\n        "Limit": 1\n      },\n      // 超时熔断\n      "QoSOptions": {\n        "ExceptionsAllowedBeforeBreaking": 3,\n        "DurationOfBreak": 10000,\n        "TimeoutValue": 5000\n      }\n    }\n  ],\n  "GlobalConfiguration": {\n    "BaseUrl": "http://localhost:5000",\n    "ServiceDiscoveryProvider": {\n      "Scheme": "http",\n      "Host": "192.168.201.191",\n      "Port": 8500,\n      "Type": "Consul"\n    },\n    "RateLimitOptions": {\n      "DisableRateLimitHeaders": false,\n      "QuotaExceededMessage": "too many requests...",\n      "HttpStatusCode": 999,\n      "ClientIdHeader": "Test"\n    }\n  }\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br")])]),n("ul",[n("li",[n("code",[s._v("ExceptionsAllowedBeforeBreaking")]),s._v(" 发生错误的次数")]),s._v(" "),n("li",[n("code",[s._v("DurationOfBreak")]),s._v(" 熔断时间")]),s._v(" "),n("li",[n("code",[s._v("TimeoutValue")]),s._v(" 超时时间")])]),s._v(" "),n("p",[s._v("以上配置意思是当请求服务发生3次错误时，就熔断10秒，期间客户端的请求直接返回错误，10秒后恢复。")])])}),[],!1,null,null,null);n.default=t.exports}}]);