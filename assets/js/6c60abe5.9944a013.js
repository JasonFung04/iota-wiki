"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[86806],{64357:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return h}});var a=n(74034),i=n(79973),o=(n(67294),n(3905)),r=["components"],l={keywords:["ISCP","Smart Contracts","Chain","EVM","Solidity","Tooling"],description:"Available tooling for EVM chains",image:"/img/logo/WASP_logo_dark.png"},s="EVM Tooling",c={unversionedId:"guide/evm/tooling",id:"guide/evm/tooling",isDocsHomePage:!1,title:"EVM Tooling",description:"Available tooling for EVM chains",source:"@site/external/wasp/documentation/docs/guide/evm/tooling.md",sourceDirName:"guide/evm",slug:"/guide/evm/tooling",permalink:"/wasp/guide/evm/tooling",tags:[],version:"current",frontMatter:{keywords:["ISCP","Smart Contracts","Chain","EVM","Solidity","Tooling"],description:"Available tooling for EVM chains",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"Solidity Smart Contract Example",permalink:"/wasp/guide/evm/example"},next:{title:"Fair Roulette",permalink:"/wasp/guide/example_projects/fair_roulette"}},p=[{value:"Tooling Considerations",id:"tooling-considerations",children:[],level:2},{value:"Wasp-cli",id:"wasp-cli",children:[],level:2},{value:"MetaMask",id:"metamask",children:[],level:2},{value:"Hardhat",id:"hardhat",children:[],level:2},{value:"Ethers.js / Web3.js",id:"ethersjs--web3js",children:[],level:2},{value:"Other Tooling",id:"other-tooling",children:[],level:2}],u={toc:p};function h(e){var t=e.components,l=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"evm-tooling"},"EVM Tooling"),(0,o.kt)("p",null,"EVM on ISCP has been integrated in such a way that existing EVM tooling is compatible and can be used directly with an ISCP chain running EVM as long as a couple of things are taken into account."),(0,o.kt)("h2",{id:"tooling-considerations"},"Tooling Considerations"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Please make sure you use the correct JSON / RPC endpoint URL in your tooling for your chain. If you run locally this will simply be ",(0,o.kt)("inlineCode",{parentName:"li"},"localhost:8545"),"."),(0,o.kt)("li",{parentName:"ol"},"Please make sure you are using the right ",(0,o.kt)("inlineCode",{parentName:"li"},"Chain ID")," as configured while starting the JSON / RPC service. If you did not explicitly define this while starting the service, the default Chain ID will be ",(0,o.kt)("inlineCode",{parentName:"li"},"1074"),". "),(0,o.kt)("li",{parentName:"ol"},"Fees are being handled on the ISCP chain level, not EVM level. Because of this you can simply always use a gas price of 0 on EVM level at this point in time.")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Re-using an existing Chain ID is not recommended and can be a security risk. For any serious chain you will be running make sure you register a unique Chain ID on ",(0,o.kt)("a",{parentName:"p",href:"https://chainlist.org/"},"Chainlist")," and use that instead of the default."))),(0,o.kt)("h2",{id:"wasp-cli"},"Wasp-cli"),(0,o.kt)("p",null,"The Wasp CLI has some very basic functionality to manage a EVM chain. Given the compatibility with existing tooling, only the basics are covered to get started with ISCP and EVM. You can currently either run a JSON / RPC server or deploy the EVM Chain itself on a ISCP chain. To see the available options and configuration parameters simply run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"wasp-cli chain evm\n")),(0,o.kt)("h2",{id:"metamask"},"MetaMask"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://metamask.io/"},"MetaMask")," is a popular EVM compatible wallet running in a browser extension that allows you to let your wallet interact with web applications utilizing a EVM chain (dApps). "),(0,o.kt)("p",null,"To use your EVM chain with MetaMask, simply open up MetaMask and click on the network drop-down list at the very top. At the bottom of this list you will see the option ",(0,o.kt)("inlineCode",{parentName:"p"},"Custom RPC"),", click on this. For a local setup use the values as shown in the image below:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"MetaMask Network",src:n(44276).Z})),(0,o.kt)("p",null,"Make sure that your ",(0,o.kt)("inlineCode",{parentName:"p"},"RPC Url")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Chain ID")," are set correctly and match the settings you've chosen running your JSON / RPC endpoint."),(0,o.kt)("p",null,"If you wish to use additional EVM chains with Metamask you can simply add more Custom RPC networks, as long as they have a unique ",(0,o.kt)("inlineCode",{parentName:"p"},"Chain ID")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"RPC Url"),". Once this is done you can start using MetaMask to manage your EVM wallet or issue/sign transactions with any dApp running on that network. "),(0,o.kt)("h2",{id:"hardhat"},"Hardhat"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://hardhat.org/"},"Hardhat")," is a commandline toolbox that allows you to deploy, test, verify and interact with Solidity smart contracts on an EVM chain. EVM chains running on ISCP are compatible with Hardhat; simply make sure you add the correct network parameters to your ",(0,o.kt)("inlineCode",{parentName:"p"},"hardhat.config.js"),", for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript="},"networks: {\n    local: {\n        url: 'http://localhost:8545',\n        chainId: 1074,\n        accounts: [privkey],\n        timeout: 60000\n    }\n}\n")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Currently there is no validation service available yet for EVM / Solidity smart contracts on ISCP which is often offered through block explorer API's."))),(0,o.kt)("h2",{id:"ethersjs--web3js"},"Ethers.js / Web3.js"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.ethers.io/"},"Ethers.js")," and ",(0,o.kt)("a",{parentName:"p",href:"https://web3js.readthedocs.io/"},"Web3.js")," are also compatible with EVM chains on ISCP as long as you input the right configuration parameters for the JSON/RPC endpoint to talk to. Alternatively you can let both interact through MetaMask instead so that it uses the network as configured in MetaMask. For more information on this, read their documentation."),(0,o.kt)("h2",{id:"other-tooling"},"Other Tooling"),(0,o.kt)("p",null,"Most other tooling available will be compatible as well as long as you enter the correct ",(0,o.kt)("inlineCode",{parentName:"p"},"Chain ID")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"RPC Url"),"."))}h.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=c(n),d=i,m=h["".concat(s,".").concat(d)]||h[d]||u[d]||o;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},44276:function(e,t,n){t.Z=n.p+"assets/images/metamask_network-cbc823ddea74052c9769089f219c4447.png"}}]);