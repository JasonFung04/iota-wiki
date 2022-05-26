"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[51184],{39058:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],s={description:"The Derive crate contains procedural macros for Stronghold.",image:"/img/logo/Stronghold_icon.png",keywords:["rust","crate","GuardDebug","VariantPermission"]},u="Structure: Derive",c={unversionedId:"structure/derive",id:"structure/derive",title:"Structure: Derive",description:"The Derive crate contains procedural macros for Stronghold.",source:"@site/content/build/stronghold.rs/develop/documentation/docs/structure/derive.md",sourceDirName:"structure",slug:"/structure/derive",permalink:"/stronghold.rs/structure/derive",draft:!1,editUrl:"https://github.com/iotaledger/stronghold/edit/dev-refactor/documentation/content/build/stronghold.rs/develop/documentation/docs/structure/derive.md",tags:[],version:"current",frontMatter:{description:"The Derive crate contains procedural macros for Stronghold.",image:"/img/logo/Stronghold_icon.png",keywords:["rust","crate","GuardDebug","VariantPermission"]},sidebar:"mySidebar",previous:{title:"Structure: Communication",permalink:"/stronghold.rs/structure/p2p"},next:{title:"Structure: Utils",permalink:"/stronghold.rs/structure/utils"}},l={},p=[],d={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"structure-derive"},"Structure: Derive"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/iotaledger/stronghold.rs/tree/dev/derive"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/github-source-blue.svg",alt:"github"}))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://docs.rs/stronghold-p2p"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/rust-docs-green.svg",alt:"github"}))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://crates.io/crates/stronghold-derive"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/crates/v/stronghold-derive.svg",alt:null})))))),(0,o.kt)("p",null,(0,o.kt)("h2",{parentName:"p"},"Derive"),(0,o.kt)("p",{parentName:"p"},"This crate contains procedural macros for Stronghold.  "),(0,o.kt)("h4",{parentName:"p"},"GuardDebug"),(0,o.kt)("p",{parentName:"p"},"The GuardDebug macro is used to block inspection of a data structure.  It implements the Debug trait and explicitly blocks the reading of the internal data on the structure its derived on. Instead, the data will be returned out as a ",(0,o.kt)("inlineCode",{parentName:"p"},"(guarded)")," string."),(0,o.kt)("h5",{parentName:"p"},"Example:"),(0,o.kt)("pre",{parentName:"p"},(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(GuardDebug)]\nstruct Foo {\n    some_data: String\n}\n...\n\nlet foo = Foo { some_data: "Some data"};\n\nprintln!("{:?}", foo);\n...\n\n> Foo(guarded)\n')),(0,o.kt)("h4",{parentName:"p"},"RequestPermissions"),(0,o.kt)("p",{parentName:"p"},"Implements the ",(0,o.kt)("inlineCode",{parentName:"p"},"VariantPermission")," for struct/unions with PermissionValue(1). For enums, it implements ",(0,o.kt)("inlineCode",{parentName:"p"},"ToPermissionVariants"),", which creates an according new enum ",(0,o.kt)("inlineCode",{parentName:"p"},"<Ident>Permission")," with Unit variants, and implements ",(0,o.kt)("inlineCode",{parentName:"p"},"VariantPermission")," by assigning different ",(0,o.kt)("inlineCode",{parentName:"p"},"PermissionValue"),' for each variant. The permission value is the "index" in the enum as exponent for the power of 2, thus from top to bottom 1, 2, 4, 8...')))}m.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,g=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(g,i(i({ref:t},l),{},{components:r})):n.createElement(g,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);