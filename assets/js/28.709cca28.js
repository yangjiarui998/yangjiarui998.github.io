(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{313:function(t,e,a){"use strict";a.r(e);var s=a(14),r=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"docker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[t._v("#")]),t._v(" Docker")]),t._v(" "),e("h2",{attrs:{id:"docker简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker简介"}},[t._v("#")]),t._v(" Docker简介")]),t._v(" "),e("p",[e("strong",[t._v("为什么出现？")])]),t._v(" "),e("p",[t._v("当实际生产环境需要有多个不同版本的环境时如果使用虚拟机将大大浪费资源")]),t._v(" "),e("p",[t._v("docker 容器可以做到每个版本都打包为一个容器镜像 然后在同一个主机上运行 每个容器都可以用于自己的依赖项和运行环境不会互相干扰")]),t._v(" "),e("p",[e("strong",[t._v("介绍")])]),t._v(" "),e("p",[t._v("Docker的核心思想就是来自集装箱；集装箱的概念是隔离货物，所以docker的核心就是隔离机制。同时docker使用可移植镜像所以部署以及运维极其方便快捷。")]),t._v(" "),e("p",[t._v("Docker 是一个开源的应用容器引擎，让开发者可以打包他们的应用以及依赖包到一个可移植的容器中，然后发布到任何流行的"),e("a",{attrs:{href:"http://baike.baidu.com/view/1634.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("Linux"),e("OutboundLink")],1),t._v("机器上，也可以实现虚拟化。")]),t._v(" "),e("p",[t._v("容器是完全使用沙箱机制，相互之间不会有任何接口（类似 iPhone 的 app）。几乎没有性能开销,可以很容易地在机器和数据中心中运行。最重要的是,他们不依赖于任何语言、框架或包括系统。")]),t._v(" "),e("p",[t._v("下面对比了Docker 和传统虚拟化（KVM、XEN等）方式的不同之处，容器是在操作系统层面上实现虚拟化，直接复用本地主机的操作系统，而传统方式则是在硬件的基础上，虚拟出自己的系统，再在系统上部署相关的APP应用。")]),t._v(" "),e("p",[t._v("Docker虚拟化有三个概念需要理解，分别镜像、容器、仓库。")]),t._v(" "),e("p",[e("strong",[t._v("镜像（image）：")])]),t._v(" "),e("p",[t._v("我们都知道，操作系统分为内核和用户空间。对于 Linux 而言，内核启动后，会挂载 "),e("code",[t._v("root")]),t._v(" 文件系统为其提供用户空间支持。而 Docker 镜像（Image），就相当于是一个 "),e("code",[t._v("root")]),t._v(" 文件系统。比如官方镜像 "),e("code",[t._v("ubuntu:18.04")]),t._v(" 就包含了完整的一套 Ubuntu 18.04 最小系统的 "),e("code",[t._v("root")]),t._v(" 文件系统。")]),t._v(" "),e("p",[t._v("Docker 镜像是一个特殊的文件系统，除了提供容器运行时所需的程序、库、资源、配置等文件外，还包含了一些为运行时准备的一些配置参数（如匿名卷、环境变量、用户等）。镜像不包含任何动态数据，其内容在构建之后也不会被改变。")]),t._v(" "),e("p",[e("strong",[t._v("分层存储")])]),t._v(" "),e("p",[t._v("因为镜像包含操作系统完整的 "),e("code",[t._v("root")]),t._v(" 文件系统，其体积往往是庞大的，因此在 Docker 设计时，就充分利用 "),e("a",{attrs:{href:"https://en.wikipedia.org/wiki/Union_mount",target:"_blank",rel:"noopener noreferrer"}},[t._v("Union FS (opens new window)"),e("OutboundLink")],1),t._v("的技术，将其设计为分层存储的架构。所以严格来说，镜像并非是像一个 ISO 那样的打包文件，镜像只是一个虚拟的概念，其实际体现并非由一个文件组成，而是由一组文件系统组成，或者说，由多层文件系统联合组成。")]),t._v(" "),e("p",[t._v("镜像构建时，会一层层构建，前一层是后一层的基础。每一层构建完就不会再发生改变，后一层上的任何改变只发生在自己这一层。比如，删除前一层文件的操作，实际不是真的删除前一层的文件，而是仅在当前层标记为该文件已删除。在最终容器运行的时候，虽然不会看到这个文件，但是实际上该文件会一直跟随镜像。因此，在构建镜像的时候，需要额外小心，每一层尽量只包含该层需要添加的东西，任何额外的东西应该在该层构建结束前清理掉。")]),t._v(" "),e("p",[t._v("分层存储的特征还使得镜像的复用、定制变的更为容易。甚至可以用之前构建好的镜像作为基础层，然后进一步添加新的层，以定制自己所需的内容，构建新的镜像。")]),t._v(" "),e("p",[t._v("**容器（container）：**镜像（"),e("code",[t._v("Image")]),t._v("）和容器（"),e("code",[t._v("Container")]),t._v("）的关系，就像是面向对象程序设计中的 "),e("code",[t._v("类")]),t._v(" 和 "),e("code",[t._v("实例")]),t._v(" 一样，镜像是静态的定义，容器是镜像运行时的实体。容器可以被创建、启动、停止、删除、暂停等。")]),t._v(" "),e("p",[t._v("容器的实质是进程，但与直接在宿主执行的进程不同，容器进程运行于属于自己的独立的 "),e("a",{attrs:{href:"https://en.wikipedia.org/wiki/Linux_namespaces",target:"_blank",rel:"noopener noreferrer"}},[t._v("命名空间 (opens new window)"),e("OutboundLink")],1),t._v("。因此容器可以拥有自己的 "),e("code",[t._v("root")]),t._v(" 文件系统、自己的网络配置、自己的进程空间，甚至自己的用户 ID 空间。容器内的进程是运行在一个隔离的环境里，使用起来，就好像是在一个独立于宿主的系统下操作一样。这种特性使得容器封装的应用比直接在宿主运行更加安全。也因为这种隔离的特性，很多人初学 Docker 时常常会混淆容器和虚拟机。")]),t._v(" "),e("p",[t._v("前面讲过镜像使用的是分层存储，容器也是如此。每一个容器运行时，是以镜像为基础层，在其上创建一个当前容器的存储层，我们可以称这个为容器运行时读写而准备的存储层为 "),e("strong",[t._v("容器存储层")]),t._v("。")]),t._v(" "),e("p",[t._v("容器存储层的生存周期和容器一样，容器消亡时，容器存储层也随之消亡。因此，任何保存于容器存储层的信息都会随容器删除而丢失。")]),t._v(" "),e("p",[t._v("按照 Docker 最佳实践的要求，容器不应该向其存储层内写入任何数据，容器存储层要保持无状态化。所有的文件写入操作，都应该使用 "),e("a",{attrs:{href:"https://docs.meowv.com/stack/docker/data_management/volume.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("数据卷（Volume）"),e("OutboundLink")],1),t._v("、或者绑定宿主目录，在这些位置的读写会跳过容器存储层，直接对宿主（或网络存储）发生读写，其性能和稳定性更高。")]),t._v(" "),e("p",[t._v("数据卷的生存周期独立于容器，容器消亡，数据卷不会消亡。因此，使用数据卷后，容器删除或者重新运行之后，数据却不会丢失。")]),t._v(" "),e("p",[e("strong",[t._v("仓库（repository）：")]),t._v("\n仓库就是存放镜像的地方！\n分为公开仓库（Public）和私有仓库（Private）两种形式。")]),t._v(" "),e("h2",{attrs:{id:"docker安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker安装"}},[t._v("#")]),t._v(" Docker安装")]),t._v(" "),e("ol",[e("li",[e("p",[e("strong",[t._v("查看系统内核 3.10版本可用docker")])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("uname -r\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("使用 root 权限更新 yum 包（生产环境中此步操作需慎重，看自己情况，学习的话随便搞）")])]),t._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("yum "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-y")]),t._v(" update\n\n注意​ \nyum "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-y")]),t._v(" update：升级所有包同时也升级软件和系统内核；​ \nyum "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-y")]),t._v(" upgrade：只升级所有包，不升级软件和系统内核\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("卸载旧版本（如果之前安装过的话）")])]),t._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("yum remove "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v("  docker-common docker-selinux docker-engine\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("安装需要的软件包， yum-util 提供yum-config-manager功能，另两个是devicemapper驱动依赖")])]),t._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("yum "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-y")]),t._v(" yum-utils device-mapper-persistent-data lvm2\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("设置 yum 源")])]),t._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("yum-config-manager --add-repo http://download.docker.com/linux/centos/docker-ce.repo（中央仓库）\n\nyum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo（阿里仓库）\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("选择docker版本并安装")])]),t._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("yum list docker-ce "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--showduplicates")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sort")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-r")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("选择一个版本并安装")])]),t._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("yum "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-y")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" docker-ce-18.03.1.ce\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("启动 Docker 并设置开机自启")])]),t._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("systemctl start "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v("\nsystemctl "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])])])]),t._v(" "),e("h2",{attrs:{id:"docker卸载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker卸载"}},[t._v("#")]),t._v(" Docker卸载")]),t._v(" "),e("p",[t._v("1."),e("strong",[t._v("卸载命令")])]),t._v(" "),e("blockquote",[e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("yum remove docker*\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])])]),t._v(" "),e("p",[t._v("2."),e("strong",[t._v("查看不存在则卸载成功")])]),t._v(" "),e("blockquote",[e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ yum list installed|grep docker\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])])]),t._v(" "),e("p",[t._v("3."),e("strong",[t._v("删除docker相关文件")])]),t._v(" "),e("blockquote",[e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ rm -rf /var/lib/docker\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])])]),t._v(" "),e("h3",{attrs:{id:"docker卸载解决问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker卸载解决问题"}},[t._v("#")]),t._v(" Docker卸载解决问题")]),t._v(" "),e("p",[t._v("yum remove命令出现")]),t._v(" "),e("p",[e("code",[t._v("Loaded plugins: fastestmirror")]),t._v(" "),e("code",[t._v("fastestmirror")]),t._v("是yum的一个加速插件，这里是插件提示信息是插件不能用了")]),t._v(" "),e("p",[e("strong",[t._v("解决步骤")]),t._v("：\n1.修改插件的配置文件  将enabled=1改为enabled=0")]),t._v(" "),e("blockquote",[e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("vi")]),t._v(" /etc/yum/pluginconf.d/fastestmirror.conf \n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])])]),t._v(" "),e("p",[t._v("2.修改yum的配置文件  将plugins=1改为plugins=0")]),t._v(" "),e("blockquote",[e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("vi")]),t._v(" /etc/yum.conf \n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])])]),t._v(" "),e("p",[t._v("3.清除缓存并重新构建yum源")]),t._v(" "),e("blockquote",[e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("yum clean all\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-rf")]),t._v(" /var/cache/yum\nyum makecache\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])])]),t._v(" "),e("h1",{attrs:{id:"常用命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[t._v("#")]),t._v(" 常用命令")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("命令")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("docker images")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("查看镜像列表")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("docker search ubuntu")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("镜像搜索（比如搜索 ubuntu 基础镜像）")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("docker pull           镜像名")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("下拉镜像")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("docker save        镜像名/镜像ID -o 镜像保存在哪个位置与名字")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("保存镜像")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("docker rmi -f         镜像名/镜像ID")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("删除镜像")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("docker ps -a")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("查看所有容器 -----包含正在运行 和已停止的*")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("docker stop          容器名/容器ID")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("停止容器")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("docker start        容器名/容器ID")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("开启容器")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("docker rm -f          容器名/容器ID")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("删除一个容器")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("docker rm -f         容器名/容器ID 容器名/容器ID 容器名/容器ID")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("em",[t._v("删除多个容器 空格隔开要删除的容器名或容器ID")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("docker rm -f $(docker ps -aq)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("em",[t._v("删除全部容器")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("docker logs 镜像名")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("查看日志")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("docker  exec  -it  id  /bin/bash")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("进入容器文件")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("service docker start")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("重启docker")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("systemctl enable docker")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("开机自动启docker")])])])])])}),[],!1,null,null,null);e.default=r.exports}}]);