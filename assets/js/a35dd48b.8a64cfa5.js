"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[93754],{35513:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var r=n(74034),a=n(79973),o=(n(67294),n(3905)),i=["components"],l={},s="Welcome to the Wasp",p={unversionedId:"welcome",id:"welcome",isDocsHomePage:!1,title:"Welcome to the Wasp",description:"Wasp is a node software developed by the",source:"@site/external/wasp/documentation/docs/welcome.md",sourceDirName:".",slug:"/welcome",permalink:"/wasp/welcome",tags:[],version:"current",frontMatter:{}},c=[{value:"Prerequisites",id:"prerequisites",children:[{value:"Microsoft Windows Installation Errors",id:"microsoft-windows-installation-errors",children:[],level:3}],level:2},{value:"Compile",id:"compile",children:[],level:2},{value:"Test",id:"test",children:[],level:2},{value:"Run",id:"run",children:[],level:2},{value:"Learn",id:"learn",children:[],level:2},{value:"Tools",id:"tools",children:[],level:2}],m={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"welcome-to-the-wasp"},"Welcome to the Wasp"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp"},"Wasp")," is a node software developed by the\n",(0,o.kt)("a",{parentName:"p",href:"http://iota.org"},"IOTA Foundation")," to run the ",(0,o.kt)("em",{parentName:"p"},"IOTA Smart Contract Protocol"),"\n(",(0,o.kt)("em",{parentName:"p"},"ISCP")," in short) on top of the ",(0,o.kt)("em",{parentName:"p"},"IOTA Tangle"),". Please find here a ",(0,o.kt)("a",{parentName:"p",href:"https://blog.iota.org/an-introduction-to-iota-smart-contracts-16ea6f247936"},"high level\nintroduction"),"\ninto ISCP."),(0,o.kt)("p",null,"A ",(0,o.kt)("em",{parentName:"p"},"smart contract")," is a distributed software agent that stores its state in the\n",(0,o.kt)("a",{parentName:"p",href:"/wasp/misc/utxo"},"UTXO ledger"),", and evolves with each ",(0,o.kt)("em",{parentName:"p"},"request")," sent to\nthe contract. Since the UTXO ledger is immutable, by extension the smart\ncontract state is also immutable."),(0,o.kt)("p",null,"A ",(0,o.kt)("em",{parentName:"p"},"committee")," of an arbitrary number of Wasp nodes runs a ",(0,o.kt)("em",{parentName:"p"},"chain")," of smart\ncontracts. The main purpose of the ",(0,o.kt)("em",{parentName:"p"},"committee")," is to ensure consistent\ntransition from the previous state to the next, according to the attached\nprogram. This ensures that the operation of smart contracts is distributed,\nfault-tolerant and leaderless."),(0,o.kt)("p",null,"The articles below explain how to run a Wasp node on the Goshimmer network, as\nwell as concepts and architecture of ISCP and Wasp."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Disclaimer: Wasp node and articles is a work in progress, and most likely will\nalways be. The software presented in this repository is not ready for use in\ncommercial settings or whenever processing of critical data is involved.")),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Go 1.16"),(0,o.kt)("li",{parentName:"ul"},"Access to a ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/goshimmer"},"GoShimmer")," node. (GoShimmer is a developing prototype, so some things are prone to break, for a smoother development experience it is recommend to use the GoShimmer code at ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/goshimmer/commit/25c827e8326a"},"this commit"),")")),(0,o.kt)("p",null,"Note: The Wasp node requires the Goshimmer node to have the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/goshimmer/tree/master/plugins/txstream"},"TXStream"),"\nplugin enabled. Being an experimental plugin, it is currently disabled by default and can\nbe enabled via configuration."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebook/rocksdb/blob/master/INSTALL.md"},"RocksDB 6.15.5")," (due to an open ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/tecbot/gorocksdb/issues/203#issuecomment-801067439"},"issue")," more recent versions of rocksdb might not work currently)")),(0,o.kt)("h3",{id:"microsoft-windows-installation-errors"},"Microsoft Windows Installation Errors"),(0,o.kt)("p",null,"If the go install command is telling you it cannot find gcc you will need to\ninstall ",(0,o.kt)("a",{parentName:"p",href:"https://sourceforge.net/projects/mingw-w64/"},"MinGW-w64"),". When you do\nmake sure to select ",(0,o.kt)("em",{parentName:"p"},"x86_64")," architecture instead of the preselected ",(0,o.kt)("em",{parentName:"p"},"i686"),"\narchitecture. After installation make sure to add this folder to your PATH variable:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"C:\\Program Files\\mingw-w64\\x86_64-8.1.0-posix-seh-rt_v6-rev0\\mingw64\\bin\n")),(0,o.kt)("h2",{id:"compile"},"Compile"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Build the ",(0,o.kt)("inlineCode",{parentName:"li"},"wasp")," (Wasp node) and the ",(0,o.kt)("inlineCode",{parentName:"li"},"wasp-cli")," (CLI client) binaries: ",(0,o.kt)("inlineCode",{parentName:"li"},"make build")," (or ",(0,o.kt)("inlineCode",{parentName:"li"},"make build-windows")," if you're on a windows machine)")),(0,o.kt)("h2",{id:"test"},"Test"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Run all tests (including integration tests which may take several minutes): ",(0,o.kt)("inlineCode",{parentName:"li"},"go test -tags rocksdb -timeout 20m ./...")),(0,o.kt)("li",{parentName:"ul"},"Run only unit tests: ",(0,o.kt)("inlineCode",{parentName:"li"},"go test -tags rocksdb -short ./..."))),(0,o.kt)("p",null,"Note: integration tests require the ",(0,o.kt)("inlineCode",{parentName:"p"},"wasp")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"wasp-cli")," commands\nin the system path (i.e. you need to run ",(0,o.kt)("inlineCode",{parentName:"p"},"go install ./...")," before running\ntests)."),(0,o.kt)("h2",{id:"run"},"Run"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/wasp/misc/runwasp"},"How to run a Wasp node")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/wasp/misc/deploy"},"Using ",(0,o.kt)("inlineCode",{parentName:"a"},"wasp-cli")," to deploy a chain and a contract"))),(0,o.kt)("h2",{id:"learn"},"Learn"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/wasp/tutorial/readme"},"Exploring IOTA Smart Contracts")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/wasp/misc/utxo"},"UTXO ledger and digital assets")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/wasp/misc/coretypes"},"Core types")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/wasp/misc/accounts"},"On-chain accounts")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/wasp/misc/publisher"},"Wasp Publisher"))),(0,o.kt)("h2",{id:"tools"},"Tools"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/wasp/tree/master/tools/wasp-cli"},(0,o.kt)("inlineCode",{parentName:"a"},"wasp-cli")),": A CLI client for the Wasp node."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/wasp/tree/master/tools/cluster/wasp-cluster"},(0,o.kt)("inlineCode",{parentName:"a"},"wasp-cluster")),": allows to easily run\na network of Wasp nodes, for testing.")))}u.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);