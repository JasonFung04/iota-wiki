"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[60403],{99458:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var i=n(74034),r=n(79973),o=(n(67294),n(3905)),l=["components"],a={},s="\ud83d\uddd3\ufe0f 2020-09-23 Identity.rs: Meeting Notes",p={unversionedId:"meeting-notes/2020-09-23",id:"meeting-notes/2020-09-23",isDocsHomePage:!1,title:"\ud83d\uddd3\ufe0f 2020-09-23 Identity.rs: Meeting Notes",description:"tags: IOTA Identity Meeting",source:"@site/external/identity.rs/documentation/docs/meeting-notes/2020-09-23.md",sourceDirName:"meeting-notes",slug:"/meeting-notes/2020-09-23",permalink:"/identity.rs/meeting-notes/2020-09-23",tags:[],version:"current",frontMatter:{}},c=[{value:"tags: <code>IOTA</code> <code>Identity</code> <code>Meeting</code>",id:"tags-iota-identity-meeting",children:[],level:6},{value:"\u2139\ufe0f Info",id:"\u2139\ufe0f-info",children:[],level:2},{value:"\ud83d\udc65 Participants",id:"-participants",children:[],level:2},{value:"\ud83d\ude4b\u200d Standup",id:"-standup",children:[{value:"\u23ea What was last week&#39;s progress?",id:"-what-was-last-weeks-progress",children:[],level:3},{value:"\u23e9 What will be the focus for this week?",id:"-what-will-be-the-focus-for-this-week",children:[],level:3}],level:2},{value:"\ud83d\udcac Discussion topics",id:"-discussion-topics",children:[{value:"New library: crypto.rs",id:"new-library-cryptors",children:[],level:3},{value:"LD-Proofs vs JWT",id:"ld-proofs-vs-jwt",children:[],level:3},{value:"Encryption and signing in DIDComm",id:"encryption-and-signing-in-didcomm",children:[],level:3},{value:"Stronghold/Account Module Blockers &amp; Core/Diff/Macro PR.",id:"strongholdaccount-module-blockers--corediffmacro-pr",children:[],level:3},{value:"Wen FFI",id:"wen-ffi",children:[],level:3},{value:"Highlevel libraries",id:"highlevel-libraries",children:[],level:3}],level:2},{value:"\u2753 Questions",id:"-questions",children:[],level:2}],u={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\ufe0f-2020-09-23-identityrs-meeting-notes"},"\ud83d\uddd3\ufe0f 2020-09-23 Identity.rs: Meeting Notes"),(0,o.kt)("h6",{id:"tags-iota-identity-meeting"},"tags: ",(0,o.kt)("inlineCode",{parentName:"h6"},"IOTA")," ",(0,o.kt)("inlineCode",{parentName:"h6"},"Identity")," ",(0,o.kt)("inlineCode",{parentName:"h6"},"Meeting")),(0,o.kt)("h2",{id:"\u2139\ufe0f-info"},"\u2139\ufe0f Info"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"Location"),": Google Hangout\n",(0,o.kt)("strong",{parentName:"p"},"Date"),": Wednesday, 2020-09-23 - 17:00 to 18:00 (CEST)\n",(0,o.kt)("strong",{parentName:"p"},"Agenda")),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Standup ",(0,o.kt)("inlineCode",{parentName:"li"},"5min")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("ol",{parentName:"li",start:2},(0,o.kt)("li",{parentName:"ol"},"Discussion topics ",(0,o.kt)("inlineCode",{parentName:"li"},"45min")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("ol",{parentName:"li",start:3},(0,o.kt)("li",{parentName:"ol"},"Questions ",(0,o.kt)("inlineCode",{parentName:"li"},"10min"))))))),(0,o.kt)("h2",{id:"-participants"},"\ud83d\udc65 Participants"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"@Thoralf-M"),(0,o.kt)("li",{parentName:"ul"},"@tensor-programming"),(0,o.kt)("li",{parentName:"ul"},"@JelleMillenaar"),(0,o.kt)("li",{parentName:"ul"},"@huhn511"),(0,o.kt)("li",{parentName:"ul"},"@l1h3r"),(0,o.kt)("li",{parentName:"ul"},"@elenaf9")),(0,o.kt)("h2",{id:"-standup"},"\ud83d\ude4b\u200d Standup"),(0,o.kt)("h3",{id:"-what-was-last-weeks-progress"},"\u23ea What was last week's progress?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Prepared DIDComm envelope for encryption and signing DIDComm Messages"),(0,o.kt)("li",{parentName:"ul"},"Finished Diff Macro and Core API.  Started working on Account Module (Some Blockers in place though)"),(0,o.kt)("li",{parentName:"ul"},"Lots of discussions with Stronghold"),(0,o.kt)("li",{parentName:"ul"},"Few small resolver and ledger integration updates, did creation, looked into DIDComm"),(0,o.kt)("li",{parentName:"ul"},"JSON Web Tokens. Discussions regarding Stronghold and crypto crates. Misc. OpenID topics")),(0,o.kt)("h3",{id:"-what-will-be-the-focus-for-this-week"},"\u23e9 What will be the focus for this week?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Discover DIDComm Message semantics (body specification)")),(0,o.kt)("h2",{id:"-discussion-topics"},"\ud83d\udcac Discussion topics"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"LD-Proofs vs JWT"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://hackmd.io/@WZdHn6o0TmiYck3zlENRsw/SJiFBDwSD/edit"},"Encryption and signing in DIDComm")),(0,o.kt)("li",{parentName:"ul"},"Stronghold/Account Module Blockers & Core/Diff/Macro PR. "),(0,o.kt)("li",{parentName:"ul"},"Stronghold crypto: Temp Crypto or Support Stronghold?"),(0,o.kt)("li",{parentName:"ul"},"Wen FFI"),(0,o.kt)("li",{parentName:"ul"},"Highlevel libraries")),(0,o.kt)("h3",{id:"new-library-cryptors"},"New library: crypto.rs"),(0,o.kt)("p",null,"A shared library for cryptography stuff within in the IF. "),(0,o.kt)("h3",{id:"ld-proofs-vs-jwt"},"LD-Proofs vs JWT"),(0,o.kt)("p",null,"The VC spec describes LD-Proofs and JWT, which have the same result."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"identity.rs supports both.")),(0,o.kt)("p",null,"JWT > LD-Proofs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"JWT is more adopted. "),(0,o.kt)("li",{parentName:"ul"},"LD-Proofs is more a concept, which has no adoption right now.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Focus on JWT.")),(0,o.kt)("h3",{id:"encryption-and-signing-in-didcomm"},"Encryption and signing in DIDComm"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/identity.rs/tree/feat/siop-did/libjose"},"libjose")," library within the identity.rs project."),(0,o.kt)("p",null,"Peer2peer transportation layer does the encryption. "),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"DIDComm should focus on message semantics."))),(0,o.kt)("p",null,"Routing: libp2p, Kademlia\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/libp2p/rust-libp2p"},"rust-libp2p")),(0,o.kt)("p",null,"PoC by Elena - Agent to agent communication"),(0,o.kt)("h3",{id:"strongholdaccount-module-blockers--corediffmacro-pr"},"Stronghold/Account Module Blockers & Core/Diff/Macro PR."),(0,o.kt)("p",null,"Stronghold.rs is a blocker right now."),(0,o.kt)("p",null,"Devin helps on crypto.rs\nTensor helps on Stronghold.rs"),(0,o.kt)("h3",{id:"wen-ffi"},"Wen FFI"),(0,o.kt)("p",null,"We could start right now, but we need to calculate  a lot of overhead."),(0,o.kt)("p",null,"When do we start with the FFI implementation?"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"After code stabilization")),(0,o.kt)("p",null,":::\xecnfo\n",(0,o.kt)("strong",{parentName:"p"},"Focus:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"WASM (Javascript)\n:::")),(0,o.kt)("h3",{id:"highlevel-libraries"},"Highlevel libraries"),(0,o.kt)("p",null,"Low level libs: "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"low level libs are (in general not used by external developers)")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"identity.rs"),(0,o.kt)("li",{parentName:"ul"},"crypto.rs")),(0,o.kt)("p",null,"High level lib:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"High level libs are for external devs")),(0,o.kt)("p",null,"TODO: method planning (we need a spec)"),(0,o.kt)("h2",{id:"-questions"},"\u2753 Questions"),(0,o.kt)("p",null,"Q1: Should we use Stronghold for encryption and signing in DIDComm or use rust crypto  crates?\nA1: We ",(0,o.kt)("strong",{parentName:"p"},"should")," use Stronghold (specifically crypto.rs) but functionality is lacking so use rust crypto crates for now. Eventually all crypto will be provided by crypto.rs"),(0,o.kt)("p",null,"Q2: Whats the progress of Stronghold encryption and signing?\nA2: ",(0,o.kt)("strong",{parentName:"p"},"Very")," early stages"))}d.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?i.createElement(k,l(l({ref:t},c),{},{components:n})):i.createElement(k,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var p=2;p<o;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);