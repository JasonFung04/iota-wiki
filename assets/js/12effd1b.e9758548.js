"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[44890],{92917:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var r=n(74034),a=n(79973),i=(n(67294),n(3905)),l=["components"],o={},s="\ud83d\uddd3\ufe0f Team Identity Meeting Notes - 2020-09-02",u={unversionedId:"meeting-notes/2020-09-02",id:"meeting-notes/2020-09-02",isDocsHomePage:!1,title:"\ud83d\uddd3\ufe0f Team Identity Meeting Notes - 2020-09-02",description:"\ud83d\udc65 Participants",source:"@site/external/identity.rs/documentation/docs/meeting-notes/2020-09-02.md",sourceDirName:"meeting-notes",slug:"/meeting-notes/2020-09-02",permalink:"/identity.rs/meeting-notes/2020-09-02",tags:[],version:"current",frontMatter:{}},c=[{value:"\ud83d\udc65 Participants",id:"-participants",children:[],level:2},{value:"\ud83d\udcac Discussion topics",id:"-discussion-topics",children:[],level:2},{value:"Standup",id:"standup",children:[{value:"What was last week&#39;s progress on your project?",id:"what-was-last-weeks-progress-on-your-project",children:[],level:3},{value:"What will be the project&#39;s focus this week?",id:"what-will-be-the-projects-focus-this-week",children:[],level:3}],level:2},{value:"Diffing Format/Logic",id:"diffing-formatlogic",children:[],level:2},{value:"DID Fragments",id:"did-fragments",children:[],level:2},{value:"Hash function",id:"hash-function",children:[],level:2},{value:"DID Messages",id:"did-messages",children:[],level:2}],p={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\ufe0f-team-identity-meeting-notes---2020-09-02"},"\ud83d\uddd3\ufe0f Team Identity Meeting Notes - 2020-09-02"),(0,i.kt)("h2",{id:"-participants"},"\ud83d\udc65 Participants"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"@Thoralf-M"),(0,i.kt)("li",{parentName:"ul"},"@nothingismagick"),(0,i.kt)("li",{parentName:"ul"},"@l1h3r"),(0,i.kt)("li",{parentName:"ul"},"@tensor-programming"),(0,i.kt)("li",{parentName:"ul"},"@JelleMillenaar"),(0,i.kt)("li",{parentName:"ul"},"@huhn511")),(0,i.kt)("h2",{id:"-discussion-topics"},"\ud83d\udcac Discussion topics"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Standup"),(0,i.kt)("li",{parentName:"ul"},"Diffing Format/Logic"),(0,i.kt)("li",{parentName:"ul"},"DID Fragments"),(0,i.kt)("li",{parentName:"ul"},"Hash function"),(0,i.kt)("li",{parentName:"ul"},"DID Messages"),(0,i.kt)("li",{parentName:"ul"},"DIDComm presentation (next week)")),(0,i.kt)("h2",{id:"standup"},"Standup"),(0,i.kt)("h3",{id:"what-was-last-weeks-progress-on-your-project"},"What was last week's progress on your project?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"prepared DIDComm presentation"),(0,i.kt)("li",{parentName:"ul"},"Resolver (Metadata, DID Dereferncing)"),(0,i.kt)("li",{parentName:"ul"},"Adds structures for representing Verifiable Credentials and Presentations")),(0,i.kt)("h3",{id:"what-will-be-the-projects-focus-this-week"},"What will be the project's focus this week?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Start to implement DIDComm"),(0,i.kt)("li",{parentName:"ul"},"DID explainer presentation"),(0,i.kt)("li",{parentName:"ul"},"Refactor resolver code and add better error handling"),(0,i.kt)("li",{parentName:"ul"},"Finish DID Dereferncing"),(0,i.kt)("li",{parentName:"ul"},"Sign credentials")),(0,i.kt)("h2",{id:"diffing-formatlogic"},"Diffing Format/Logic"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Should we use serde-diff or our own lib? @JelleMillenaar expressed concerns about the size of the diff JSON; a home built lib would give us more control over such things.")),(0,i.kt)("h2",{id:"did-fragments"},"DID Fragments"),(0,i.kt)("p",null,"Question: How to check the format? Is there a standard for ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/#fragment"},"fragments"),"?"),(0,i.kt)("p",null,"There are different format of fragments, to get a public key."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"keys-1 (",(0,i.kt)("a",{parentName:"li",href:"https://w3c-ccg.github.io/did-resolution/#example-5"},"https://w3c-ccg.github.io/did-resolution/#example-5"),")"),(0,i.kt)("li",{parentName:"ul"},"public-key-1 (",(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/did-core/#example-11"},"https://www.w3.org/TR/did-core/#example-11"),")")),(0,i.kt)("p",null," Answer: The fragment ",(0,i.kt)("inlineCode",{parentName:"p"},"keys-1")," sould be a name (or key) for the connected value. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The fragment names should be unique."),(0,i.kt)("li",{parentName:"ul"},"Each fragment need to have an name/key")),(0,i.kt)("p",null,"Question: Do we check for name uniqueness and throw an error?"),(0,i.kt)("p",null,"Answer: It's complicated. Let's discuss this in the next meeting or add an whitboard meeting. (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/identity.rs/issues/29"},"issue here"),")"),(0,i.kt)("h2",{id:"hash-function"},"Hash function"),(0,i.kt)("p",null,"Which hash function do we use for the DID itself?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Blake2b"),(0,i.kt)("li",{parentName:"ul"},"What are the advantages and disadvantages to use Blake2b? ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"-> Ask Thibault")))),(0,i.kt)("h2",{id:"did-messages"},"DID Messages"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"more information and comments about DID Messagees are documented in the GoodleDocs document.")))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);