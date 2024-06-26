(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{308:function(s,e,a){"use strict";a.r(e);var n=a(14),t=Object(n.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),e("p",[s._v("此系列旨在复习微服务的相关知识，示例代码中不会出现聚合、聚合根、服务拆分等相关概念（不会涉及到领域驱动相关知识），只使用最简单的"),e("code",[s._v(".Net Core Web")]),s._v("程序，主要关注点在于：")]),s._v(" "),e("ul",[e("li",[s._v("如何使用 Docker 部署 "),e("code",[s._v(".NetCore")]),s._v(" 应用")]),s._v(" "),e("li",[s._v("应用程序的 DockerFile 编写")]),s._v(" "),e("li",[s._v("服务注册和服务发现是什么？解决了什么问题？")]),s._v(" "),e("li",[s._v("网关用来做什么？服务治理相关（熔断/限流/降级/链路追踪/缓存…）")])]),s._v(" "),e("h1",{attrs:{id:"微服务概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#微服务概念"}},[s._v("#")]),s._v(" 微服务概念")]),s._v(" "),e("p",[s._v("关于微服务的概念解释网上有很多，每个人的理解都不同。至于为什么要使用微服务？微服务的优缺点等相关问题每个人理解不同。个人理解：微服务是一种系统架构模式，和语言无关，框架无关，工具无关，服务器环境无关，微服务目的是：将传统单体系统按照业务拆分成多个职责单一、且可独立运行的服务。至于服务如何拆分，没有明确的定义。采用微服务优点是：每个服务的职责单一且可独立部署、不同服务间采用轻量级的通信协议作为通信原则，松耦合。这样不同服务就可以使用不同的技术栈（优势语言），缺点的话是：微服务架构避免不了会引入更多技术栈、中间件等等增加系统复杂度。（微服务不是银弹，要根据实际业务体量考虑是否使用，否则只会徒增不必要的麻烦）")]),s._v(" "),e("h1",{attrs:{id:"项目结构搭建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#项目结构搭建"}},[s._v("#")]),s._v(" 项目结构搭建")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("Order.Api")]),s._v("：订单服务")]),s._v(" "),e("li",[e("code",[s._v("Web.Client")]),s._v("：测试使用的客户端")])]),s._v(" "),e("p",[s._v("创建项目时启用Docker支持，或者之后添加也可以。添加基础代码，简单的返回服务名称、当前时间、服务IP、端口：")]),s._v(" "),e("div",{staticClass:"language-c# line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('using Microsoft.AspNetCore.Mvc;\nusing Microsoft.Extensions.Configuration;\n\nusing System;\n\nnamespace Order.Api.Controller\n{\n    [Route("[Controller]")]\n    [ApiController]\n    public class OrdersController : ControllerBase\n    {\n        [HttpGet]\n        public IActionResult Index()\n        {\n            string result = $"订单服务：{DateTime.Now:yyyy-MM-dd HH:mm:ss},-{Request.HttpContext.Connection.LocalIpAddress}:{Request.HttpContext.Connection.LocalPort}";\n            return Ok(result);\n        }\n    }\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br")])]),e("h1",{attrs:{id:"容器化部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#容器化部署"}},[s._v("#")]),s._v(" 容器化部署")]),s._v(" "),e("p",[s._v("代码就写这么简单，下面使用Docker来部署订单服务。这里先了解一下如果启用了Docker支持，VS默认生成的 "),e("code",[s._v("Dockerfile")]),s._v(" 文件如下：")]),s._v(" "),e("div",{staticClass:"language-c# line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.\n\nFROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base\nWORKDIR /app\nEXPOSE 80\n\nFROM mcr.microsoft.com/dotnet/sdk:5.0 AS build\nWORKDIR /src\nCOPY ["Order.Api/Order.Api.csproj", "Order.Api/"]\nRUN dotnet restore "Order.Api/Order.Api.csproj"\nCOPY . .\nWORKDIR "/src/Order.Api"\nRUN dotnet build "Order.Api.csproj" -c Release -o /app/build\n\nFROM build AS publish\nRUN dotnet publish "Order.Api.csproj" -c Release -o /app/publish\n\nFROM base AS final\nWORKDIR /app\nCOPY --from=publish /app/publish .\nENTRYPOINT ["dotnet", "Order.Api.dll"]\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br")])]),e("p",[s._v("关于"),e("code",[s._v("Dockerfile")]),s._v(" 各个命令的作用这里不再解释 这里的 "),e("code",[s._v("Dockerfile")]),s._v(" 文件不能直接使用，因为我采用的方式是：将发布后的应用部署到 "),e("code",[s._v("Centos")]),s._v(" => "),e("code",[s._v("docker build镜像")]),s._v("=>"),e("code",[s._v("运行容器")]),s._v("。跳过了这里的 "),e("code",[s._v("dotnet restore")]),s._v(" 和 "),e("code",[s._v("dotnet publish")]),s._v("。修改后的 "),e("code",[s._v("Dockerfile")]),s._v("如下：")]),s._v(" "),e("div",{staticClass:"language-c# line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('# See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.\n# 指定基础镜像\nFROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base\n# 设置工作目录,如不存在会被创建\nWORKDIR /app\n# Copy release文件夹内容到工作目录app\nCOPY . /app\n# 运行.dll\nENTRYPOINT ["dotnet", "Order.Api.dll"]\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("p",[s._v("将发布后的包扔到虚机指定目录中：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入目录")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@centos-01 ~"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd /usr/dotnetcore_src/order.api.release/")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看本地镜像列表")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@centos-01 order.api.release"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker image ls")]),s._v("\nREPOSITORY                        TAG          IMAGE ID       CREATED        SIZE\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("                            "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("       16ff5dcb1c6d   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" hours ago    206MB\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("                            "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("       6d3756023f75   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),s._v(" hours ago   210MB\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("                            "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("       3f41b63e8f79   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),s._v(" hours ago   210MB\nmcr.microsoft.com/dotnet/sdk      "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.0")]),s._v("          da19c23a5531   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" days ago     631MB\nmcr.microsoft.com/dotnet/aspnet   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.0")]),s._v("          a2be3e478ffa   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" days ago     205MB\nconsul                            latest       b74a0a01afc4   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" weeks ago    116MB\nrabbitmq                          management   0bfe221339ae   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" weeks ago    253MB\nmongo                             latest       aad77ae58e0c   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" weeks ago    682MB\nredis                             latest       08502081bff6   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" months ago   105MB\nportainer/portainer               latest       580c0e4e98b0   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" months ago   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("79")]),s._v(".1MB\nelasticsearch                     "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.1")]),s._v(".1        b0e9f9f047e6   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" years ago    894MB\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# build镜像")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@centos-01 order.api.release"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker build -t order.api .")]),s._v("\nSending build context to Docker daemon  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".184MB\nStep "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/4 "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base\n ---"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" a2be3e478ffa\nStep "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("/4 "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" WORKDIR /app\n ---"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Using cache\n ---"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 9f551bd1698a\nStep "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("/4 "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" COPY "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" /app\n ---"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 04334af56137\nStep "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("/4 "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" ENTRYPOINT "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dotnet"')]),s._v(", "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Order.Api.dll"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n ---"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Running "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" 44daedf04664\nRemoving intermediate container 44daedf04664\n ---"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 58968d65acff\nSuccessfully built 58968d65acff\nSuccessfully tagged order.api:latest\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看最新本地镜像列表发现 order.api 镜像")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@centos-01 order.api.release"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker image ls")]),s._v("\nREPOSITORY                        TAG          IMAGE ID       CREATED              SIZE\norder.api                         latest       58968d65acff   About a minute ago   206MB\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("                            "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("       16ff5dcb1c6d   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" hours ago          206MB\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("                            "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("       6d3756023f75   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),s._v(" hours ago         210MB\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("                            "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("       3f41b63e8f79   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),s._v(" hours ago         210MB\nmcr.microsoft.com/dotnet/sdk      "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.0")]),s._v("          da19c23a5531   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" days ago           631MB\nmcr.microsoft.com/dotnet/aspnet   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.0")]),s._v("          a2be3e478ffa   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" days ago           205MB\nconsul                            latest       b74a0a01afc4   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" weeks ago          116MB\nrabbitmq                          management   0bfe221339ae   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" weeks ago          253MB\nmongo                             latest       aad77ae58e0c   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" weeks ago          682MB\nredis                             latest       08502081bff6   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" months ago         105MB\nportainer/portainer               latest       580c0e4e98b0   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" months ago         "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("79")]),s._v(".1MB\nelasticsearch                     "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.1")]),s._v(".1        b0e9f9f047e6   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" years ago          894MB\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@centos-01 order.api.release"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br"),e("span",{staticClass:"line-number"},[s._v("47")]),e("br"),e("span",{staticClass:"line-number"},[s._v("48")]),e("br"),e("span",{staticClass:"line-number"},[s._v("49")]),e("br"),e("span",{staticClass:"line-number"},[s._v("50")]),e("br"),e("span",{staticClass:"line-number"},[s._v("51")]),e("br")])]),e("p",[s._v("有了镜像之后就可以基于镜像创建容器:")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@centos-01 order.api.release"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker run -d --name order.api -p 80:80 order.api")]),s._v("\neaa1d05afe39ccdc6a07347df78c994f57c654267db1e40b64d21e030b565903：\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("至此订单服务就部署完毕。下面使用 "),e("code",[s._v("Web.Client")]),s._v(" 客户端测试，这里的客户端是泛指，实际可能是各种业务系统、手机端、小程序等等。")]),s._v(" "),e("h1",{attrs:{id:"客户端调用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#客户端调用"}},[s._v("#")]),s._v(" 客户端调用")]),s._v(" "),e("p",[s._v("这里使用 "),e("code",[s._v("RestSharp")]),s._v("作为Http请求客户端，"),e("code",[s._v("Nuget")]),s._v(" 搜索 "),e("a",{attrs:{href:"https://github.com/restsharp/RestSharp",target:"_blank",rel:"noopener noreferrer"}},[s._v("【RestSharp】"),e("OutboundLink")],1),s._v(" 安装即可。")]),s._v(" "),e("p",[s._v("核心代码如下：")]),s._v(" "),e("p",[s._v("IServiceHelper.cs：")]),s._v(" "),e("div",{staticClass:"language-c# line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("public interface IServiceHelper\n{\n    Task<string> GetOrder();\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("ServiceHelper.cs：")]),s._v(" "),e("div",{staticClass:"language-c# line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(' public class ServiceHelper : IServiceHelper\n {\n     public async Task<string> GetOrder()\n     {\n         // 订单服务地址\n         string serviceUrl = "http://192.168.31.191:80";\n         var Client = new RestClient(serviceUrl);\n         var request = new RestRequest("/orders", Method.GET);\n         var response = await Client.ExecuteAsync(request);\n         return response.Content;\n     }      \n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br")])]),e("p",[s._v("Startup.cs：")]),s._v(" "),e("div",{staticClass:"language-c# line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("public void ConfigureServices(IServiceCollection services)\n{\n    services.AddControllersWithViews();\n    // 注入IServiceHelper\n    services.AddSingleton<IServiceHelper, ServiceHelper>();\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("HomeController.cs：")]),s._v(" "),e("div",{staticClass:"language-c# line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("public class HomeController : Controller\n{\n    private readonly ILogger<HomeController> logger;\n    private readonly IServiceHelper serviceHelper;\n\n    public HomeController(ILogger<HomeController> logger, IServiceHelper serviceHelper)\n    {\n        this.logger = logger;\n        this.serviceHelper = serviceHelper;\n    }\n\n    public async Task<IActionResult> IndexAsync()\n    {\n        ViewBag.OrderData = await serviceHelper.GetOrder();\n        return View();\n    }\n\n    public IActionResult Privacy()\n    {\n        return View();\n    }\n\n    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]\n    public IActionResult Error()\n    {\n        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });\n    }\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br")])]),e("p",[s._v("Index.cshtml：")]),s._v(" "),e("div",{staticClass:"language-c# line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('@{\n    ViewData["Title"] = "Home Page";\n}\n\n<div class="text-center">\n    <h1 class="display-4">Welcome</h1>\n    <p>\n        @ViewBag.OrderData\n    </p>\n</div>\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("p",[s._v('到这里服务已经独立部署运行，客户端也可以正常调用了。但是思考一个问题：如果这个服务挂掉了怎么办？微服务中非常重要的原则就是"高可用"，以上的做法明显不能满足。要解决这个问题一般都会采用集群方式。')]),s._v(" "),e("h1",{attrs:{id:"简单服务集群"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简单服务集群"}},[s._v("#")]),s._v(" 简单服务集群")]),s._v(" "),e("p",[s._v("既然单个服务实例有挂掉的风险，那么部署多个服务实例试试，只要不同时挂掉就可以保证正常访问。下面使用Docker运行多个服务实例：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@centos-01 ~"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker run -d --name order.api -p 80:80 order.api")]),s._v("\nc4a974a607b54377115a32a4227fa0f9d2ca4332405875b3763cca2696932c1c\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@centos-01 ~"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker run -d --name order.api1 -p 81:80 order.api")]),s._v("\n992f0b2975f60320ba92c2e79b33ae066c17b3b26f54e74b96ad7677d54042d7\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@centos-01 ~"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker run -d --name order.api2 -p 82:80 order.api")]),s._v("\ndca6a0cd36a4bca3111b5694f34c8f8ffbcc81d6dbbadb45a2d3209afa7b0595\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("现在订单服务增加到三个服务实例，分别映射到"),e("code",[s._v("80")]),s._v("/"),e("code",[s._v("81")]),s._v("/"),e("code",[s._v("82")]),s._v("端口。需要修改一下客户端代码：")]),s._v(" "),e("div",{staticClass:"language-c# line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('public async Task<string> GetOrder()\n{\n    // 服务实例集合\n    string[] serviceUrls = { "http://192.168.31.191:80", "http://192.168.31.191:81", "http://192.168.31.191:82" };\n    // 每次随机访问一个服务实例\n    var client = new RestClient(serviceUrls[new Random().Next(0, 3)]);\n    var request = new RestRequest("/orders", Method.GET);\n    var response = await client.ExecuteAsync(request);\n    return response.Content;\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("blockquote",[e("p",[s._v("这里拿到服务地址可以自己做复杂的负载均衡策略，比如轮询，随机，权重等或者使用nginx都可以。这不是重点，所以这里只是简单随机访问一个服务实例")])]),s._v(" "),e("p",[s._v("这里已经做到了将请求随机分配到一个服务实例，但这种做法依旧存在问题：")]),s._v(" "),e("ol",[e("li",[s._v("如果随机访问到的实例刚好挂掉，依然无法正常访问")]),s._v(" "),e("li",[s._v("如果到某个地址的请求连续多次失败，应该移除这个地址保证其他请求不会再访问到")]),s._v(" "),e("li",[s._v("实际应用中，上层的业务系统可能非常多，为了保证可用性，每个业务系统都需要考虑服务实例运行状态吗？而且实际应用中服务实例的数量或者地址大多数时候是不固定的，比如：流量高峰期，增加服务实例，这时候每个业务系统再去配置文件里配置地址？高峰期过了又去把配置删掉？显然是不现实的。服务必须要做到可灵活伸缩")])]),s._v(" "),e("p",[s._v("要做到可灵活伸缩就引入了另一个名词：服务注册与发现。")])])}),[],!1,null,null,null);e.default=t.exports}}]);