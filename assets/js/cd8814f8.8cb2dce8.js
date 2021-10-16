"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[22601],{27979:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var a=n(74034),o=n(79973),i=(n(67294),n(3905)),r=["components"],s={keywords:["IOTA Node","Hornet Node","Configuration","REST API","Dashboard"],description:"Introducing the Hornet nodes configuration files and their settings.",image:"/img/logo/HornetLogo.png"},l="Post-installation",p={unversionedId:"post_installation/post_installation",id:"post_installation/post_installation",isDocsHomePage:!1,title:"Post-installation",description:"Introducing the Hornet nodes configuration files and their settings.",source:"@site/external/hornet/documentation/docs/post_installation/post_installation.md",sourceDirName:"post_installation",slug:"/post_installation/post_installation",permalink:"/hornet/post_installation/post_installation",tags:[],version:"current",frontMatter:{keywords:["IOTA Node","Hornet Node","Configuration","REST API","Dashboard"],description:"Introducing the Hornet nodes configuration files and their settings.",image:"/img/logo/HornetLogo.png"},sidebar:"mySidebar",previous:{title:"Private Tangle",permalink:"/hornet/getting_started/private_tangle"},next:{title:"Managing a Node",permalink:"/hornet/post_installation/managing_a_node"}},d=[{value:"Configuration Files",id:"configuration-files",children:[],level:2},{value:"Default Configuration",id:"default-configuration",children:[],level:2},{value:"Dashboard",id:"dashboard",children:[],level:2},{value:"Configuring HTTP REST API",id:"configuring-http-rest-api",children:[],level:2}],c={toc:d};function u(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"post-installation"},"Post-installation"),(0,i.kt)("p",null,"Once you have deployed Hornet, you can set all the parameters using configuration files."),(0,i.kt)("h2",{id:"configuration-files"},"Configuration Files"),(0,i.kt)("p",null,"The most important configuration files are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"config.json"),": includes all configuration flags and their values."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"peering.json"),": includes all connection details to your static peers (neighbors).")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Hornet version 0.5.x targets legacy IOTA 1.0 network. Hornet version 1.x.x targets IOTA 1.5 network, also known as ",(0,i.kt)("a",{parentName:"p",href:"https://chrysalis.docs.iota.org/"},"Chrysalis"),", which is the focus of this documentation."))),(0,i.kt)("p",null,"Depending on the installation path you selected, default configuration files may also be part of the installation process. Therefore, you may see the following configuration files in your deployment directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"config.json\nconfig_chrysalis_testnet.json\npeering.json\nprofiles.json\n")),(0,i.kt)("h2",{id:"default-configuration"},"Default Configuration"),(0,i.kt)("p",null,"By default, Hornet searches for configuration files in the working directory and expects default names, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"config.json")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"peering.json"),"."),(0,i.kt)("p",null,"You can change this behavior by running Hornet with some altering arguments."),(0,i.kt)("p",null,"Please see the ",(0,i.kt)("a",{parentName:"p",href:"/hornet/post_installation/configuration"},"config.json")," and ",(0,i.kt)("a",{parentName:"p",href:"/hornet/post_installation/peering"},"peering.json")," sections for more information regarding their respective configuration files."),(0,i.kt)("p",null,"Once you have executed Hornet, it will output all loaded configuration parameters to ",(0,i.kt)("inlineCode",{parentName:"p"},"stdout")," to show what configuration Hornet actually loaded (omitting sensitive values for things like passwords)."),(0,i.kt)("p",null,"You can see a list of all the other altering command line parameters by running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"hornet --help\n")),(0,i.kt)("p",null,"If you want a more detailed output you can run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"hornet --help --full\n")),(0,i.kt)("h2",{id:"dashboard"},"Dashboard"),(0,i.kt)("p",null,"By default, an admin dashboard (web interface) plugin is available on port 8081. It provides some useful information regarding the node's health, peering/neighbors, overall network health and consumed system resources."),(0,i.kt)("p",null,"The dashboard plugin only listens on localhost:8081 by default. If you want to make it accessible from the Internet, you will need to change the default configuration. It can be changed using the following ",(0,i.kt)("inlineCode",{parentName:"p"},"config.json")," file section:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json{2}"},'"dashboard": {\n  "bindAddress": "localhost:8081",\n  "auth": {\n    "sessionTimeout": "72h",\n    "username": "admin",\n    "passwordHash": "0000000000000000000000000000000000000000000000000000000000000000",\n    "passwordSalt": "0000000000000000000000000000000000000000000000000000000000000000"\n  }\n}\n')),(0,i.kt)("p",null,"Change ",(0,i.kt)("inlineCode",{parentName:"p"},"dashboard.bindAddress")," to either ",(0,i.kt)("inlineCode",{parentName:"p"},"0.0.0.0:8081")," to listen on all available interfaces, or the specific interface address accordingly."),(0,i.kt)("p",null,"Even if accessible from the Internet, any visitor will still need a valid username and password combination to access the management section of the dashboard."),(0,i.kt)("p",null,"The password, hash, and salt can be generated using the integrated ",(0,i.kt)("inlineCode",{parentName:"p"},"pwd-hash")," CLI tool:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./hornet tools pwd-hash\n")),(0,i.kt)("p",null,"Output example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plaintext"},"Enter a password:\nRe-enter your password:\nSuccess!\nYour hash: 24c832e35dc542901b90888321dbfc4b1d9617332cbc124709204e6edf7e49f9\nYour salt: 6c71f4753f6fb52d7a4bb5471281400c8fef760533f0589026a0e646bc03acd4\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"pwd-hash")," tool outputs the ",(0,i.kt)("inlineCode",{parentName:"p"},"passwordHash")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"passwordSalt")," based on your input password."))),(0,i.kt)("p",null,"Copy both values to their corresponding configuration options: ",(0,i.kt)("inlineCode",{parentName:"p"},"dashboard.auth.passwordHash")," and\n",(0,i.kt)("inlineCode",{parentName:"p"},"dashboard.auth.passwordSalt")," respectively."),(0,i.kt)("p",null,"In order for the new password to take effect, you must restart Hornet."),(0,i.kt)("h2",{id:"configuring-http-rest-api"},"Configuring HTTP REST API"),(0,i.kt)("p",null,"The node is responsible, amongst other tasks, of exposing the ",(0,i.kt)("a",{parentName:"p",href:"/hornet/getting_started/nodes_101#http-rest-api"},"HTTP REST ")," to clients that would like to interact with the IOTA network, such as crypto wallets, exchanges, IoT devices, etc."),(0,i.kt)("p",null,"By default, Hornet will publicly expose the ",(0,i.kt)("a",{parentName:"p",href:"/hornet/getting_started/nodes_101#http-rest-api"},"HTTP REST ")," on port 14265, ready to accept incoming connections from the Internet."),(0,i.kt)("p",null,"Since offering the HTTP REST API to the public can consume your nodes resources, there are options to restrict which routes can be called and other request limitations."),(0,i.kt)("p",null,"You can find the HTTP REST API related options in the  ",(0,i.kt)("inlineCode",{parentName:"p"},"restAPI")," section within the ",(0,i.kt)("inlineCode",{parentName:"p"},"config.json")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'  "restAPI": {\n    "jwtAuth": {\n      "enabled": false,\n      "salt": "HORNET"\n    },\n    "excludeHealthCheckFromAuth": false,\n    "permittedRoutes": [\n      "/health",\n      "/mqtt",\n      "/api/v1/info",\n      "/api/v1/tips",\n      "/api/v1/messages/:messageID",\n      "/api/v1/messages/:messageID/metadata",\n      "/api/v1/messages/:messageID/raw",\n      "/api/v1/messages/:messageID/children",\n      "/api/v1/messages",\n      "/api/v1/transactions/:transactionID/included-message",\n      "/api/v1/milestones/:milestoneIndex",\n      "/api/v1/milestones/:milestoneIndex/utxo-changes",\n      "/api/v1/outputs/:outputID",\n      "/api/v1/addresses/:address",\n      "/api/v1/addresses/:address/outputs",\n      "/api/v1/addresses/ed25519/:address",\n      "/api/v1/addresses/ed25519/:address/outputs",\n      "/api/v1/treasury"\n    ],\n    "whitelistedAddresses": [\n      "127.0.0.1",\n      "::1"\n    ],\n    "bindAddress": "0.0.0.0:14265",\n    "powEnabled": true,\n    "powWorkerCount": 1,\n    "limits": {\n      "bodyLength": "1M",\n      "maxResults": 1000\n    }\n  }\n')),(0,i.kt)("p",null,"If you want to make the HTTP REST API only accessible from localhost, you change the ",(0,i.kt)("inlineCode",{parentName:"p"},"restAPI.bindAddress")," config option accordingly."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"restAPI.permittedRoutes")," defines which routes can be called from foreign addresses which are not defined under ",(0,i.kt)("inlineCode",{parentName:"p"},"restAPI.whitelistedAddresses"),"."),(0,i.kt)("p",null,"If you are concerned with resource consumption, consider turning off ",(0,i.kt)("inlineCode",{parentName:"p"},"restAPI.powEnabled"),".  This way, the clients must perform proof of work locally, before submitting a message for broadcast. In case you'd like to offer proof of work to clients, consider increasing the ",(0,i.kt)("inlineCode",{parentName:"p"},"restAPI.powWorkerCount")," to provide a faster message submission experience."),(0,i.kt)("p",null,"We suggest that you provide your HTTP REST API behind a reverse proxy, such as ",(0,i.kt)("a",{parentName:"p",href:"http://www.haproxy.org/"},"HAProxy"),", ",(0,i.kt)("a",{parentName:"p",href:"https://traefik.io/"},"Traefik"),", ",(0,i.kt)("a",{parentName:"p",href:"https://www.nginx.com/"},"Nginx"),", ",(0,i.kt)("a",{parentName:"p",href:"https://www.apache.org/"},"Apache")," configured with TLS."),(0,i.kt)("p",null,"Please see some of our additional security recommendations in the ",(0,i.kt)("a",{parentName:"p",href:"/hornet/getting_started/security_101"},"Security 101 section"),"."),(0,i.kt)("p",null,"Feel free to explore more details regarding different API calls at the ",(0,i.kt)("a",{parentName:"p",href:"https://chrysalis.docs.iota.org/libraries/client"},"IOTA client library documentation"),"."))}u.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=o,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||i;return n?a.createElement(m,r(r({ref:t},d),{},{components:n})):a.createElement(m,r({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);