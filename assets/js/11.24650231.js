(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{373:function(t,s,a){"use strict";a.r(s);var r=a(25),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"代理上网异常排查问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代理上网异常排查问题"}},[t._v("#")]),t._v(" 代理上网异常排查问题")]),t._v(" "),a("p",[t._v("情景：按照代理软件默认的安装方式，登录帐号连接节点发现软件报错，并提示乱码，软件日志难以找到，去切实排查原因...第一想法是软件字符编码及兼容性问题，可win7、win10测试无效，即使设置了UTF-8编码，情况依旧；从以前经验想当然认为“乱码不影响使用（连接、功能逻辑操作）”，这个时候也是一头雾水。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2020/12/15/MXQB5KS8s4UgnDi.png",alt:"image-20201215112132923.png"}})]),t._v(" "),a("p",[t._v("在这个时候联系了客服，登录官网了解到不能含特殊字符、空格的目录如常见的：")]),t._v(" "),a("div",{staticClass:"language-cmd extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("C:\\Program Files\nC:\\Program Files (x86)\n")])])]),a("p",[t._v('....O__O "…，按照软件官网说明安装，登录连接服务器确实成功的；但访问Google还是被阻断了有些异常，联系了厂商客服，他们也表示他们的提供服务器没有问题，页面空白如下图现象...为了临时能让同事连接上网，使用ss连接依旧如此。（该图为过程复盘）')]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2020/12/03/o81uC4zR6LipQYd.jpg",alt:"Catch_12-03-11-39-37_.jpg"}})]),t._v(" "),a("p",[t._v("然而自己主机这边却是可以的，这又是怎么回事呢？")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2020/12/03/QtNTdDCWUV4BAMO.png",alt:"image-20201203114350647.png"}})]),t._v(" "),a("p",[a("strong",[t._v("初步了解")]),t._v("原来是上网帐号权限问题，我的上网认证帐号，访问网站是不受限的；所带来的疑问点是为什么部门同事明明勾选了代理工具，但用代理工具却又访问不了Google这般类型的搜索页面呢？")]),t._v(" "),a("p",[t._v("防火墙对代理、VPN程序的协议识别机制有关，由于年限原因一些新型代理、VPN使用新型的协议导致无法识别相关的代理工具，也是存在这种可能性。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2020/12/05/KI65dAZFyeWDaOm.png",alt:"089EF.png"}})]),t._v(" "),a("p",[a("strong",[t._v("通过深入发现")]),t._v("设置LAN->WAN并制定端口范围的访问方式，限制代理、VPN翻墙；泛泛来说，企业职员一般有百来个，部门也有十几个左右及以上，根据相关需求也得制定不同的上网规则。将上网规则集合在一起组成策略，将部门上网行为规范应用于策略，极大方便了对企业职员上网行为管理。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2020/12/03/K5FiSZtICswgycp.png",alt:"2020-12-03_120742.png"}})]),t._v(" "),a("p",[t._v("深信服访问准入设备的开放端口限制，浏览器所打开的各个站点是是否端口各不相同？于是参考"),a("a",{attrs:{href:"https://www.zhihu.com/question/401686199",target:"_blank",rel:"noopener noreferrer"}},[t._v("知乎-浏览器对于每个网页会使用不同的端口号吗？"),a("OutboundLink")],1),t._v("的两篇回答得出结论：")]),t._v(" "),a("p",[t._v("各个站点的网址服务器端口不会变，默认设置443、80，加端口号都是额外设置的；客户端，也就是我们的浏览器 ，本质上是启用多个独立程序打开相应所访问的多个页面，与此同时， 也就有了相应进程与多个端口。并不是访问各个网址的端口各不相同。")]),t._v(" "),a("h2",{attrs:{id:"代理上网逻辑网络"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代理上网逻辑网络"}},[t._v("#")]),t._v(" 代理上网逻辑网络")]),t._v(" "),a("p",[t._v("最开始用户是通过互联网联系到能够直连外网的代理商访问外网")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2020/12/03/4kM5mL2Dyv9IWhQ.png",alt:"image-0201203142709439.png"}})]),t._v(" "),a("p",[t._v("用户与代理商双方建立连接关系，也是需要相互之间信任验证的，不建立信任验证，谁都可以建立连接就乱套了。于是就有了客户端与服务器端完成帐号登录与密码验证这一过程。建立信任关系后，代理商就如同用户的下手助理，接代用户的意愿去完成一系列的行为操作。")]),t._v(" "),a("p",[t._v("代理上网拓扑流程如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2020/12/03/TjZLyhg1vBxuAVs.png",alt:"image-20201203162752377.png"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);