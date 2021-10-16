"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[65873],{82345:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return h}});var r=n(74034),o=n(79973),i=(n(67294),n(3905)),a=["components"],l={description:"The snapshot API allows retrieving current snapshot.",image:"/img/logo/goshimmer_light.png",keywords:["client library","HTTP API","snapshot","retrieve","current"]},s="Snapshot API Methods",p={unversionedId:"apis/snapshot",id:"apis/snapshot",isDocsHomePage:!1,title:"Snapshot API Methods",description:"The snapshot API allows retrieving current snapshot.",source:"@site/external/goshimmer/documentation/docs/apis/snapshot.md",sourceDirName:"apis",slug:"/apis/snapshot",permalink:"/goshimmer/apis/snapshot",tags:[],version:"current",frontMatter:{description:"The snapshot API allows retrieving current snapshot.",image:"/img/logo/goshimmer_light.png",keywords:["client library","HTTP API","snapshot","retrieve","current"]},sidebar:"docs",previous:{title:"dRNG API Methods",permalink:"/goshimmer/apis/dRNG"},next:{title:"Faucet API Methods",permalink:"/goshimmer/apis/faucet"}},c=[{value:"<code>/snapshot</code>",id:"snapshot",children:[{value:"Parameters",id:"parameters",children:[],level:3},{value:"Examples",id:"examples",children:[{value:"cURL",id:"curl",children:[],level:4},{value:"Client lib",id:"client-lib",children:[],level:4},{value:"Results",id:"results",children:[],level:4}],level:3}],level:2}],u={toc:c};function h(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"snapshot-api-methods"},"Snapshot API Methods"),(0,i.kt)("p",null,"Snapshot API allows retrieving current snapshot."),(0,i.kt)("p",null,"The API provides the following functions and endpoints:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#snapshot"},"/snapshot"))),(0,i.kt)("h2",{id:"snapshot"},(0,i.kt)("inlineCode",{parentName:"h2"},"/snapshot")),(0,i.kt)("p",null,"Returns a snapshot file."),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("p",null,"None"),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("h4",{id:"curl"},"cURL"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location 'http://localhost:8080/snapshot'\n")),(0,i.kt)("h4",{id:"client-lib"},"Client lib"),(0,i.kt)("p",null,"Method not available in the client library."),(0,i.kt)("h4",{id:"results"},"Results"),(0,i.kt)("p",null,"Snapshot file is returned."))}h.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(n),d=o,m=h["".concat(s,".").concat(d)]||h[d]||u[d]||i;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);