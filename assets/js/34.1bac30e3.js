(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{316:function(t,e,v){"use strict";v.r(e);var _=v(14),n=Object(_.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"vmware-centos7"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vmware-centos7"}},[t._v("#")]),t._v(" VMware Centos7")]),t._v(" "),e("h2",{attrs:{id:"vmware简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vmware简介"}},[t._v("#")]),t._v(" VMware简介")]),t._v(" "),e("p",[t._v("虚拟机的实现原理：是宿主机的cpu运行模拟电脑任务进程，再根据系统镜像虚拟化出不同的系统主机，软件运行模拟系统硬件工作，从而虚拟化出来电脑系统，来做工作。")]),t._v(" "),e("p",[t._v("虚拟这个词在于脱离了硬件，实现了一台设备的运行，可以由一台服务器提供多个设备运行，而且数据储存都于云端宿主机节约资源。")]),t._v(" "),e("h2",{attrs:{id:"linux操作系统"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux操作系统"}},[t._v("#")]),t._v(" Linux操作系统")]),t._v(" "),e("p",[e("strong",[t._v("简介")])]),t._v(" "),e("p",[t._v("Linux 是开源的重要的特点是支持多用户 多线程 继承unix32位/64 位cpu 32 最大内存就4g 1991年 10月5日 林纳斯 创建的linux操作系统有redhat CentOs ubuntu debian")]),t._v(" "),e("p",[t._v("远程桌面端口   windows 3389  linux 22")]),t._v(" "),e("p",[e("strong",[t._v("分区")])]),t._v(" "),e("p",[t._v("Linux也有同样的分区盘 系统盘 根分区（/boot 根分区）（/swap 分区）当物理内存不够时 使用 swap分区类似于windows 中的内存 一般给1g")]),t._v(" "),e("p",[e("strong",[t._v("目录结构")])]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[t._v("/bin")]),t._v("：\nbin 是 Binaries (二进制文件) 的缩写, 这个目录存放着最经常使用的命令。")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("/boot：")]),t._v("\n这里存放的是启动 Linux 时使用的一些核心文件，包括一些连接文件以及镜像文件。")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("/dev ：")]),t._v("\ndev 是 Device(设备) 的缩写, 该目录下存放的是 Linux 的外部设备，在 Linux 中访问设备的方式和访问文件的方式是相同的。")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("/etc：")]),t._v("\netc 是 Etcetera(等等) 的缩写,这个目录用来存放所有的系统管理所需要的配置文件和子目录。")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("/home")]),t._v("：\n用户的主目录，在 Linux 中，每个用户都有一个自己的目录，一般该目录名是以用户的账号命名的，如上图中的 alice、bob 和 eve。")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("/lib")]),t._v("：\nlib 是 Library(库) 的缩写这个目录里存放着系统最基本的动态连接共享库，其作用类似于 Windows 里的 DLL 文件。几乎所有的应用程序都需要用到这些共享库。")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("/lost+found")]),t._v("：\n这个目录一般情况下是空的，当系统非法关机后，这里就存放了一些文件。")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("/media")]),t._v("：\nlinux 系统会自动识别一些设备，例如U盘、光驱等等，当识别后，Linux 会把识别的设备挂载到这个目录下。")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("/mnt")]),t._v("：\n系统提供该目录是为了让用户临时挂载别的文件系统的，我们可以将光驱挂载在 /mnt/ 上，然后进入该目录就可以查看光驱里的内容了。")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("/opt")]),t._v("：\nopt 是 optional(可选) 的缩写，这是给主机额外安装软件所摆放的目录。比如你安装一个ORACLE数据库则就可以放到这个目录下。默认是空的。")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("/proc")]),t._v("：\nproc 是 Processes(进程) 的缩写，/proc 是一种伪文件系统（也即虚拟文件系统），存储的是当前内核运行状态的一系列特殊文件，这个目录是一个虚拟的目录，它是系统内存的映射，我们可以通过直接访问这个目录来获取系统信息。\n这个目录的内容不在硬盘上而是在内存里，我们也可以直接修改里面的某些文件，比如可以通过下面的命令来屏蔽主机的ping命令，使别人无法ping你的机器：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("echo 1 > /proc/sys/net/ipv4/icmp_echo_ignore_all\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("/root")]),t._v("：\n该目录为系统管理员，也称作超级权限者的用户主目录。")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("/sbin")]),t._v("：\ns 就是 Super User 的意思，是 Superuser Binaries (超级用户的二进制文件) 的缩写，这里存放的是系统管理员使用的系统管理程序。")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("/selinux")]),t._v("：\n这个目录是 Redhat/CentOS 所特有的目录，Selinux 是一个安全机制，类似于 windows 的防火墙，但是这套机制比较复杂，这个目录就是存放selinux相关的文件的。")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("/srv")]),t._v("：\n该目录存放一些服务启动之后需要提取的数据。")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("/sys")]),t._v("：")]),t._v(" "),e("p",[t._v("这是 Linux2.6 内核的一个很大的变化。该目录下安装了 2.6 内核中新出现的一个文件系统 sysfs 。")]),t._v(" "),e("p",[t._v("sysfs 文件系统集成了下面3种文件系统的信息：针对进程信息的 proc 文件系统、针对设备的 devfs 文件系统以及针对伪终端的 devpts 文件系统。")]),t._v(" "),e("p",[t._v("该文件系统是内核设备树的一个直观反映。")]),t._v(" "),e("p",[t._v("当一个内核对象被创建的时候，对应的文件和目录也在内核对象子系统中被创建。")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("/tmp")]),t._v("：\ntmp 是 temporary(临时) 的缩写这个目录是用来存放一些临时文件的。")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("/usr")]),t._v("：\nusr 是 unix shared resources(共享资源) 的缩写，这是一个非常重要的目录，用户的很多应用程序和文件都放在这个目录下，类似于 windows 下的 program files 目录。")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("/usr/bin：")]),t._v("\n系统用户使用的应用程序。")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("/usr/sbin：")]),t._v("\n超级用户使用的比较高级的管理程序和系统守护程序。")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("/usr/src：")]),t._v("\n内核源代码默认的放置目录。")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("/var")]),t._v("：\nvar 是 variable(变量) 的缩写，这个目录中存放着在不断扩充着的东西，我们习惯将那些经常被修改的目录放在这个目录下。包括各种日志文件。")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("/run")]),t._v("：\n是一个临时文件系统，存储系统启动以来的信息。当系统重启时，这个目录下的文件应该被删掉或清除。如果你的系统上有 /var/run 目录，应该让它指向 run。")])])]),t._v(" "),e("h3",{attrs:{id:"设置网络ip"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设置网络ip"}},[t._v("#")]),t._v(" 设置网络Ip")]),t._v(" "),e("ol",[e("li",[t._v("先ping "),e("a",{attrs:{href:"http://baidu.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("baidu.com"),e("OutboundLink")],1),t._v(" 看是否可上网")]),t._v(" "),e("li",[t._v("cd /etc/sysconfig/network-scriprts/  到这个目录下")]),t._v(" "),e("li",[t._v(".ls 查看当前目录下文件")]),t._v(" "),e("li",[t._v("vi ifcfg-ens33 (这里可以en后按tab补全名称)编辑文件(如何编辑具体内容可以参考下方)")])]),t._v(" "),e("h3",{attrs:{id:"网络适配器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#网络适配器"}},[t._v("#")]),t._v(" 网络适配器")]),t._v(" "),e("p",[t._v("VMware网络连接主要有三种方式，分别是桥接，NAT和Host-only。")]),t._v(" "),e("p",[e("strong",[t._v("桥接")]),t._v("：直接使用的是真实机的物理网卡（有线网卡，无线网卡），会占用局域网中的一个IP，因此在设置虚拟机IP时要避免与同网段的其他IP冲突。虚拟机使用桥接连接网络可以将其看作是网络中的一台真实机，如果电脑连接了互联网，虚拟机也可以上网。")]),t._v(" "),e("p",[e("strong",[t._v("NAT")]),t._v("：与桥接相似，所不同的是使用的是虚拟网卡（VMware Virtual Ethernet Adapter for VMnet8），虚拟网卡在安装VMware时自动生成。同时是共享主机的IP地址，没有独立的IP。")]),t._v(" "),e("p",[e("strong",[t._v("Host-only")]),t._v("：使用虚拟网卡（VMware Virtual Ethernet Adapter for VMnet1）建立一个私有网络，只能与物理机通信，而不能访问互联网。")]),t._v(" "),e("p",[t._v("NAT可以上网但是虚拟机ping不通主机")]),t._v(" "),e("p",[t._v("桥接模式可以上网ping通主机")]),t._v(" "),e("p",[e("strong",[t._v("桥接静态IP网络设置")])]),t._v(" "),e("p",[t._v("目的：ping baidu.com    ping主机")]),t._v(" "),e("p",[t._v("vi /etc/sysconfig/network-scripts/")]),t._v(" "),e("blockquote",[e("p",[t._v('TYPE="Ethernet"'),e("br"),t._v('\nPROXY_METHOD="none"\nBROWSER_ONLY="no"\nBOOTPROTO="static"\nDEFROUTE="yes"\nIPV4_FAILURE_FATAL="no"\nIPV6INIT="yes"\nIPV6_AUTOCONF="yes"\nIPV6_DEFROUTE="yes"\nIPV6_FAILURE_FATAL="no"\nIPV6_ADDR_GEN_MODE="stable-privacy"\nNAME="ens33"\nUUID="f3a40da3-3b0c-46c8-935e-cb92aa4c37bb"\nDEVICE="ens33"\nONBOOT="yes"\nIPADDR=192.168.1.22\nNETMASK=255.255.255.0\nGATEWAY=192.168.1.1\nDNS1=192.168.1.1\nDNS2=8.8.8.8\nZONE=public')])]),t._v(" "),e("p",[t._v("TYPE：以太网\nBOOTPROTO:static 静态 IP\nNAME 和 DEVICE：文件名和计算机名\nONBOOT：开机启动网络\nIPADDR：IP地址（前三段要和步骤一中前三段一致，第四段可设置 1-255 中任意值）\nNETMASK:子网掩码（固定的 255.255.255.0）\nGATEWAY：用主机的网关\nDNS：域名解析器\n192.168.1.1：自己的网关\n114.114.114.114：中国联通、移动、电信的\n8.8.8.8：谷歌的")]),t._v(" "),e("blockquote",[e("p",[t._v("重启网络")]),t._v(" "),e("p",[t._v("service network restart")])]),t._v(" "),e("h3",{attrs:{id:"解决网络问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解决网络问题"}},[t._v("#")]),t._v(" 解决网络问题")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("ping 不通baidu.com")]),t._v(" "),e("p",[t._v("1.关闭虚拟机防火墙")]),t._v(" "),e("p",[t._v("2.网络配置查看是否正确（网关GATEWAY）")]),t._v(" "),e("p",[t._v("3.桥接指定网络  任务管理器->性能->查看自己主机连的网->编辑虚拟机网络")])]),t._v(" "),e("li",[e("p",[t._v("设置静态ip 桥接模式 ping不通 主机")]),t._v(" "),e("p",[t._v("1.关闭主机和虚拟机的防火墙")]),t._v(" "),e("p",[t._v("2.主机控制面板->网络和共享中心->进入更改高级共享设置->在“专用”或“来宾或公用”的下拉栏，选中“启用文件和打印机共享/或者关闭”（也可以选择在创建虚拟机时将打印机删掉）")])])]),t._v(" "),e("h3",{attrs:{id:"网络相关命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#网络相关命令"}},[t._v("#")]),t._v(" 网络相关命令")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("描述")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("示例")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("查看本机IP及网卡信息")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("ip addr")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("重启网络")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("service network restart")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("防火墙添加端口例外")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("firewall-cmd --add-port=8080/tcp --permanent")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("重新加载防火墙")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("firewall-cmd --reload")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("启动防火墙，也可以使用 "),e("code",[t._v("service firewalld start")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("systemctl start firewalld.service")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("停止防火墙，也可以使用 "),e("code",[t._v("service firewalld stop")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("systemctl stop firewalld.service")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("启用防火墙")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("systemctl enable firewalld.service")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("重启防火墙")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("service firewalld restart")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("查看端口列表，也可以使用 "),e("code",[t._v("firewall-cmd --list-all")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("firewall-cmd --permanent --list-port")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("查看防火墙状态")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("firewall-cmd --state")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})])])])])}),[],!1,null,null,null);e.default=n.exports}}]);