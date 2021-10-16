"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[38896],{97834:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return m},default:function(){return h}});var r=n(74034),i=n(79973),o=(n(67294),n(3905)),a=["components"],l={description:"GoShimmer ships with a client Go library which communicates with the HTTP API.",image:"/img/logo/goshimmer_light.png",keywords:["client library","api","HTTP API","golang"]},c="Client Lib: Interaction With Layers",s={unversionedId:"apis/client_lib",id:"apis/client_lib",isDocsHomePage:!1,title:"Client Lib: Interaction With Layers",description:"GoShimmer ships with a client Go library which communicates with the HTTP API.",source:"@site/external/goshimmer/documentation/docs/apis/client_lib.md",sourceDirName:"apis",slug:"/apis/client_lib",permalink:"/goshimmer/apis/client_lib",tags:[],version:"current",frontMatter:{description:"GoShimmer ships with a client Go library which communicates with the HTTP API.",image:"/img/logo/goshimmer_light.png",keywords:["client library","api","HTTP API","golang"]},sidebar:"docs",previous:{title:"Glossary",permalink:"/goshimmer/protocol_specification/glossary"},next:{title:"WebAPI - clientLib",permalink:"/goshimmer/apis/webAPI"}},m=[{value:"A note about errors",id:"a-note-about-errors",children:[],level:4}],p={toc:m};function h(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"client-lib-interaction-with-layers"},"Client Lib: Interaction With Layers"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This guide is meant for developers familiar with the Go programming language."))),(0,o.kt)("p",null,"GoShimmer ships with a client Go library which communicates with the HTTP API. Please refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://godoc.org/github.com/iotaledger/goshimmer/client"},"godoc.org docs")," for function/structure documentation. There is also a set of APIs which do not directly have anything to do with the different layers. Since they are so simple, simply extract their usage from the GoDocs."),(0,o.kt)("h1",{id:"use-the-api"},"Use the API"),(0,o.kt)("p",null,"Simply ",(0,o.kt)("inlineCode",{parentName:"p"},"go get")," the lib via:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"go get github.com/iotaledger/goshimmer/client\n")),(0,o.kt)("p",null,"Init the API by passing in the API URI of your GoShimmer node:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'goshimAPI := client.NewGoShimmerAPI("http://mynode:8080")\n')),(0,o.kt)("p",null,"Optionally, define your own ",(0,o.kt)("inlineCode",{parentName:"p"},"http.Client")," to use, in order for example to define custom timeouts:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'goshimAPI := client.NewGoShimmerAPI("http://mynode:8080", client.WithHTTPClient{Timeout: 30 * time.Second})\n')),(0,o.kt)("h4",{id:"a-note-about-errors"},"A note about errors"),(0,o.kt)("p",null,"The API issues HTTP calls to the defined GoShimmer node. Non 200 HTTP OK status codes will reflect themselves as ",(0,o.kt)("inlineCode",{parentName:"p"},"error")," in the returned arguments. Meaning that for example calling for attachments with a non existing/available transaction on a node, will return an ",(0,o.kt)("inlineCode",{parentName:"p"},"error")," from the respective function. (There might be exceptions to this rule)"))}h.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),h=s(n),u=i,d=h["".concat(c,".").concat(u)]||h[u]||p[u]||o;return n?r.createElement(d,a(a({ref:t},m),{},{components:n})):r.createElement(d,a({ref:t},m))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);