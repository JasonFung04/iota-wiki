"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[847],{56900:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return d},toc:function(){return p},default:function(){return c}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=["components"],l={keywords:["IOTA Node","Hornet Node","Linux","macOS","Windows","Docker"],description:"Getting Started.  Recommended requirements and installation links for Linux, macOS, and Windows",image:"/img/logo/HornetLogo.png"},s="Getting Started",u={unversionedId:"getting_started/getting_started",id:"getting_started/getting_started",title:"Getting Started",description:"Getting Started.  Recommended requirements and installation links for Linux, macOS, and Windows",source:"@site/external/hornet/documentation/docs/getting_started/getting_started.md",sourceDirName:"getting_started",slug:"/getting_started/",permalink:"/hornet/getting_started/",editUrl:"https://github.com/gohornet/hornet/edit/develop/external/hornet/documentation/docs/getting_started/getting_started.md",tags:[],version:"current",frontMatter:{keywords:["IOTA Node","Hornet Node","Linux","macOS","Windows","Docker"],description:"Getting Started.  Recommended requirements and installation links for Linux, macOS, and Windows",image:"/img/logo/HornetLogo.png"},sidebar:"mySidebar",previous:{title:"Welcome to HORNET",permalink:"/hornet/welcome"},next:{title:"Nodes 101",permalink:"/hornet/getting_started/nodes_101"}},d={},p=[{value:"Recommended Requirements",id:"recommended-requirements",level:2},{value:"Operating System",id:"operating-system",level:2},{value:"Linux (and Raspberry Pi)",id:"linux-and-raspberry-pi",level:3},{value:"MacOS",id:"macos",level:3},{value:"Windows",id:"windows",level:3},{value:"Configuration",id:"configuration",level:2}],m={toc:p};function c(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"Running a node is the best way to use IOTA. By doing so, you have direct access to the Tangle instead of having to\nconnect to and trust someone else's node. Additionally, you help the IOTA network to become more distributed and resilient."),(0,a.kt)("p",null,"The node software is the backbone of the IOTA network. For an overview of tasks a node is responsible for, please\nsee ",(0,a.kt)("a",{parentName:"p",href:"/hornet/getting_started/nodes_101"},"Node 101"),"."),(0,a.kt)("p",null,"To make sure that your device meets the minimum security requirements for running a node, please\nsee ",(0,a.kt)("a",{parentName:"p",href:"/hornet/getting_started/security_101"},"Security 101"),"."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Make sure you install Hornet version 0.6.0+ since it is the minimum version that targets IOTA 1.5 (Chrysalis) network.\nVersions below 0.6.0 (such as 0.5.x) target the legacy IOTA network which is not the focus of this documentation."))),(0,a.kt)("h2",{id:"recommended-requirements"},"Recommended Requirements"),(0,a.kt)("p",null,"To handle a potential high rate of messages per second, nodes need enough computational power to run reliably, and\nshould have following minimum specs:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"4 cores or 4 vCPU"),(0,a.kt)("li",{parentName:"ul"},"8 GB RAM"),(0,a.kt)("li",{parentName:"ul"},"SSD storage"),(0,a.kt)("li",{parentName:"ul"},"A public IP address")),(0,a.kt)("p",null,"The amount of storage you need will depend on whether and how often you plan on pruning old data from your local\ndatabase."),(0,a.kt)("p",null,"Hornet exposes different functionality on different ports:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"15600 TCP - Gossip protocol port"),(0,a.kt)("li",{parentName:"ul"},"14626 UDP - Autopeering port (optional)"),(0,a.kt)("li",{parentName:"ul"},"14265 TCP - REST HTTP API port (optional)"),(0,a.kt)("li",{parentName:"ul"},"8081 TCP - Dashboard (optional)"),(0,a.kt)("li",{parentName:"ul"},"8091 TCP - Faucet website (optional)"),(0,a.kt)("li",{parentName:"ul"},"1883 TCP - MQTT (optional)")),(0,a.kt)("p",null,"The mentioned ports are important for flawless node operation. The REST HTTP API port is optional and is only needed if\nyou want to offer access to your node's API. All ports can be customized inside\nthe ",(0,a.kt)("a",{parentName:"p",href:"/hornet/post_installation/configuration"},"config.json")," file."),(0,a.kt)("p",null,"The default dashboard only listens on localhost:8081 per default. If you want to make it accessible from\nthe Internet, you will need to change the default configuration (though we recommend using a reverse proxy)."),(0,a.kt)("h2",{id:"operating-system"},"Operating System"),(0,a.kt)("p",null,"Hornet is written in Go and can be deployed on all major platforms using several installation methods."),(0,a.kt)("p",null,"Hornet ships as a single executable binary (",(0,a.kt)("inlineCode",{parentName:"p"},"hornet")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"hornet.exe"),") and some JSON configuration files; no further dependencies are needed."),(0,a.kt)("h3",{id:"linux-and-raspberry-pi"},"Linux (and Raspberry Pi)"),(0,a.kt)("p",null,"Recommended installation methods:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/hornet/getting_started/hornet_apt_repository#hornet-apt-repository-linux-distro-specific"},"Hornet apt repository")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/hornet/getting_started/using_docker"},"Docker image"))),(0,a.kt)("p",null,"Other installation methods:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/hornet/getting_started/hornet_apt_repository#pre-built-binaries"},"Prebuilt binary files")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/hornet/getting_started/hornet_apt_repository#build-from-source"},"Build from source"))),(0,a.kt)("h3",{id:"macos"},"MacOS"),(0,a.kt)("p",null,"Recommended installation methods:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/hornet/getting_started/using_docker"},"Docker image"))),(0,a.kt)("p",null,"Other installation methods:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/hornet/getting_started/hornet_apt_repository#pre-built-binaries"},"Prebuilt binary files"))),(0,a.kt)("h3",{id:"windows"},"Windows"),(0,a.kt)("p",null,"Recommended installation methods:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/hornet/getting_started/using_docker"},"Docker image"))),(0,a.kt)("p",null,"Other installation methods:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/hornet/getting_started/hornet_apt_repository#pre-built-binaries"},"Prebuilt binary files"))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"Hornet uses several JSON configuration files that can be adjusted based on your deployment and use cases:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"config.json"),": includes all core configuration parameters"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"peering.json"),": includes connection details to node neighbors (peers)")),(0,a.kt)("p",null,"See more details regarding the configuration in the ",(0,a.kt)("a",{parentName:"p",href:"/hornet/post_installation/"},"post installation"),"\nchapter."))}c.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=u(n),c=o,g=m["".concat(s,".").concat(c)]||m[c]||p[c]||a;return n?r.createElement(g,i(i({ref:t},d),{},{components:n})):r.createElement(g,i({ref:t},d))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);