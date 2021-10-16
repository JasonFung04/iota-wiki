"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[60642],{4059:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return p},default:function(){return u}});var a=n(74034),i=n(79973),r=(n(67294),n(3905)),o=["components"],s={description:"How to run a node. Requirements, configuration parameters, dashboard configuration and tests.",image:"/img/logo/WASP_logo_dark.png",keywords:["ISCP","Smart Contracts","Running a node","Go-lang","GoShimmer","Requirements","Configuration","Dashboard","Grafana","Prometheus"]},l="Running a Node",d={unversionedId:"guide/chains_and_nodes/running-a-node",id:"guide/chains_and_nodes/running-a-node",isDocsHomePage:!1,title:"Running a Node",description:"How to run a node. Requirements, configuration parameters, dashboard configuration and tests.",source:"@site/external/wasp/documentation/docs/guide/chains_and_nodes/running-a-node.md",sourceDirName:"guide/chains_and_nodes",slug:"/guide/chains_and_nodes/running-a-node",permalink:"/wasp/guide/chains_and_nodes/running-a-node",tags:[],version:"current",frontMatter:{description:"How to run a node. Requirements, configuration parameters, dashboard configuration and tests.",image:"/img/logo/WASP_logo_dark.png",keywords:["ISCP","Smart Contracts","Running a node","Go-lang","GoShimmer","Requirements","Configuration","Dashboard","Grafana","Prometheus"]},sidebar:"tutorialSidebar",previous:{title:"Sending Tokens From ISCP to the Tangle",permalink:"/wasp/guide/solo/sending-funds-sc"},next:{title:"Docker",permalink:"/wasp/misc/docker"}},p=[{value:"Requirements",id:"requirements",children:[{value:"Hardware",id:"hardware",children:[],level:3},{value:"Software",id:"software",children:[],level:3}],level:2},{value:"Compile",id:"compile",children:[{value:"Linux/macOS",id:"linuxmacos",children:[],level:3},{value:"Microsoft Windows",id:"microsoft-windows",children:[{value:"Microsoft Windows Installation Errors",id:"microsoft-windows-installation-errors",children:[],level:4}],level:3}],level:2},{value:"Test",id:"test",children:[{value:"Run All Tests",id:"run-all-tests",children:[],level:3},{value:"Run Unit Tests",id:"run-unit-tests",children:[],level:3}],level:2},{value:"Configuration",id:"configuration",children:[{value:"Peering",id:"peering",children:[],level:3},{value:"Goshimmer Connection Settings",id:"goshimmer-connection-settings",children:[],level:3},{value:"Publisher",id:"publisher",children:[],level:3},{value:"Web API",id:"web-api",children:[],level:3},{value:"Dashboard",id:"dashboard",children:[],level:3},{value:"Prometheus",id:"prometheus",children:[],level:3},{value:"Grafana",id:"grafana",children:[],level:3}],level:2},{value:"Goshimmer Provider",id:"goshimmer-provider",children:[],level:2},{value:"Running the Node",id:"running-the-node",children:[],level:2}],m={toc:p};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"running-a-node"},"Running a Node"),(0,r.kt)("p",null,"In the following section, you can find information on how to use Wasp by cloning the repository and building the application.\nIf you prefer, you can also configure a node ",(0,r.kt)("a",{parentName:"p",href:"/wasp/misc/docker"},"using a docker image")," (official images will be provided in the future)."),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("h3",{id:"hardware"},"Hardware"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cores"),": At least 2 cores (most modern processors will suffice)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"RAM"),": 4GB")),(0,r.kt)("h3",{id:"software"},"Software"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://golang.org/doc/install"},"Go 1.16")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/facebook/rocksdb/blob/master/INSTALL.md"},"RocksDB")),(0,r.kt)("li",{parentName:"ul"},"Access to a ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/goshimmer"},"GoShimmer")," node for\nproduction operation")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"note ")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The Wasp node requires the Goshimmer node to have the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/goshimmer/tree/master/plugins/txstream"},"TXStream"),"\nplugin enabled. Being an experimental plugin, it is currently disabled by default and can\nbe enabled via configuration."))),(0,r.kt)("h2",{id:"compile"},"Compile"),(0,r.kt)("p",null,"You can build and install both ",(0,r.kt)("inlineCode",{parentName:"p"},"wasp")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"wasp-cli")," by running:"),(0,r.kt)("h3",{id:"linuxmacos"},"Linux/macOS"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"make install\n")),(0,r.kt)("h3",{id:"microsoft-windows"},"Microsoft Windows"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"make install-windows\n")),(0,r.kt)("h4",{id:"microsoft-windows-installation-errors"},"Microsoft Windows Installation Errors"),(0,r.kt)("p",null,"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"make install-windows")," command tells you it cannot find ",(0,r.kt)("inlineCode",{parentName:"p"},"gcc")," you will need to\ninstall ",(0,r.kt)("a",{parentName:"p",href:"https://sourceforge.net/projects/mingw-w64/"},"MinGW-w64"),".Make sure\nto select ",(0,r.kt)("em",{parentName:"p"},"x86_64")," architecture instead of the preselected ",(0,r.kt)("em",{parentName:"p"},"i686"),"\narchitecture during the installation process. After the installation make sure to\nadd the following folder to your PATH variable:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"C:\\Program Files\\mingw-w64\\x86_64-8.1.0-posix-seh-rt_v6-rev0\\mingw64\\bin\n")),(0,r.kt)("h2",{id:"test"},"Test"),(0,r.kt)("h3",{id:"run-all-tests"},"Run All Tests"),(0,r.kt)("p",null,"You can run integration and unit test together with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"go test -tags rocksdb -timeout 20m ./...\n")),(0,r.kt)("p",null,"Keep in mind that this process may take several minutes."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Integration tests require the ",(0,r.kt)("inlineCode",{parentName:"p"},"wasp")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"wasp-cli")," commands to be\nin the system path. This means you will need to run ",(0,r.kt)("inlineCode",{parentName:"p"},"go install ./...")," before running\ntests."))),(0,r.kt)("h3",{id:"run-unit-tests"},"Run Unit Tests"),(0,r.kt)("p",null,"You can run the unit tests without running integration tests with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"go test -tags rocksdb -short ./...\n")),(0,r.kt)("p",null,"This will take significantly less time than ",(0,r.kt)("a",{parentName:"p",href:"#run-all-tests"},"running all tests"),"."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"You can configure your node/s using the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/blob/master/config.json"},(0,r.kt)("inlineCode",{parentName:"a"},"config.json")),"\nconfiguration file.  If you plan to run several nodes in the same host, you will need to adjust the port configuration."),(0,r.kt)("h3",{id:"peering"},"Peering"),(0,r.kt)("p",null,"Wasp nodes connect to other Wasp peers to form committees. There is exactly one\nTCP connection between two Wasp nodes participating in the same committee. Each\nnode uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"peering.port")," setting to specify the port that will be used for peering."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"peering.netid")," must have the form ",(0,r.kt)("inlineCode",{parentName:"p"},"host:port"),", with a ",(0,r.kt)("inlineCode",{parentName:"p"},"port")," value equal to\n",(0,r.kt)("inlineCode",{parentName:"p"},"peering.port"),", and where ",(0,r.kt)("inlineCode",{parentName:"p"},"host")," must resolve to the machine where the node is\nrunning and be reachable by other nodes in the committee. Each node in a\ncommittee must have a unique ",(0,r.kt)("inlineCode",{parentName:"p"},"netid"),"."),(0,r.kt)("h3",{id:"goshimmer-connection-settings"},"Goshimmer Connection Settings"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"nodeconn.address")," specifies the Goshimmer host and port (exposed by the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/goshimmer/tree/master/plugins/txstream"},"TXStream")," plugin) to\nconnect to. You can find more information about the Goshimmer node in the ",(0,r.kt)("a",{parentName:"p",href:"#goshimmer-provider"},"Goshimmer Provider section"),"."),(0,r.kt)("h3",{id:"publisher"},"Publisher"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"nanomsg.port")," specifies the port for the ",(0,r.kt)("a",{parentName:"p",href:"https://nanomsg.org/"},"Nanomsg")," event publisher. Wasp nodes\npublish important events happening in smart contracts, such as state\ntransitions, incoming and processed requests, and similar. Any Nanomsg client\ncan subscribe to these messages."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"More Information on Wasp and Nanomsg"),(0,r.kt)("div",null,"Each Wasp node publishes important events via a [Nanomsg](https://nanomsg.org/) message stream (just like ZMQ is used in IRI). Possibly, in the future, [ZMQ](https://zeromq.org/) and [MQTT](https://mqtt.org/) publishers will be supported too.",(0,r.kt)("p",null,"  Any Nanomsg client can subscribe to the message stream. In Go, you can use the\n",(0,r.kt)("inlineCode",{parentName:"p"},"packages/subscribe")," package provided in Wasp for this."),(0,r.kt)("p",null,"  The Publisher port can be configured in ",(0,r.kt)("inlineCode",{parentName:"p"},"config.json")," with the ",(0,r.kt)("inlineCode",{parentName:"p"},"nanomsg.port"),"\nsetting."),(0,r.kt)("p",null,"  The Message format is simply a string consisting of a space-separated list of tokens, and the first token\nis the message type. Below is a list of all message types published by Wasp (you can search for\n",(0,r.kt)("inlineCode",{parentName:"p"},"publisher.Publish")," in the code to see the exact places where each message is published)."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Message"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Format"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Chain record has been saved in the registry"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"chainrec <chain ID> <color>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Chain committee has been activated"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"active_committee <chain ID>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Chain committee dismissed"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"dismissed_committee <chain ID>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"A new SC request reached the node"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"request_in <chain ID> <request tx ID> <request block index>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"SC request has been processed (i.e. corresponding state update was confirmed)"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"request_out <chain ID> <request tx ID> <request block index> <state index> <seq number in the block> <block size>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"State transition (new state has been committed to DB)"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"state <chain ID> <state index> <block size> <state tx ID> <state hash> <timestamp>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Event generated by a SC"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"vmmsg <chain ID> <contract hname> ..."))))))),(0,r.kt)("h3",{id:"web-api"},"Web API"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"webapi.bindAddress")," specifies the bind address/port for the Web API, used by\n",(0,r.kt)("inlineCode",{parentName:"p"},"wasp-cli")," and other clients to interact with the Wasp node."),(0,r.kt)("h3",{id:"dashboard"},"Dashboard"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"dashboard.bindAddress")," specifies the bind address/port for the node dashboard,\nwhich can be accessed with a web browser."),(0,r.kt)("h3",{id:"prometheus"},"Prometheus"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"prometheus.bindAddress")," specifies the bind address/port for the prometheus server, where it's possible to get multiple system metrics."),(0,r.kt)("p",null,"By default, Prometheus is disabled and should be enabled by setting ",(0,r.kt)("inlineCode",{parentName:"p"},"prometheus.enabled")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("h3",{id:"grafana"},"Grafana"),(0,r.kt)("p",null,"Grafana provides a dashboard to visualize system metrics. It can use the prometheus metrics as a data source."),(0,r.kt)("h2",{id:"goshimmer-provider"},"Goshimmer Provider"),(0,r.kt)("p",null,"For the Wasp node to communicate with the L1 (Tangle/Goshimmer Network), it needs access to a Goshimmer node with the TXStream plugin enabled. You can use any publicly available node, or ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.iota.org/goshimmer/tutorials/setup/"},"set up your own node"),"."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"By default, the TXStream plugin will be listening for Wasp connections on port ",(0,r.kt)("inlineCode",{parentName:"p"},"5000"),".\nTo change this setting you can add the argument ",(0,r.kt)("inlineCode",{parentName:"p"},"--txstream.port: 12345"),"."))),(0,r.kt)("h2",{id:"running-the-node"},"Running the Node"),(0,r.kt)("p",null,"After you have tweaked ",(0,r.kt)("inlineCode",{parentName:"p"},"config.json")," to your liking, you can start a Wasp node by executing ",(0,r.kt)("inlineCode",{parentName:"p"},"wasp")," in the same directory\nas shown in the following snippet."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir wasp-node\ncp config.json wasp-node\ncd wasp-node\n#<edit config.json as desired>\nwasp\n")),(0,r.kt)("p",null,"You can verify that your node is running by opening the dashboard with a web browser at ",(0,r.kt)("a",{parentName:"p",href:"http://127.0.0.1:7000"},(0,r.kt)("inlineCode",{parentName:"a"},"127.0.0.1:7000"))," (default url)."),(0,r.kt)("p",null,"Repeat this process to launch as many nodes as you want for your committee."))}u.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),c=i,h=u["".concat(l,".").concat(c)]||u[c]||m[c]||r;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);