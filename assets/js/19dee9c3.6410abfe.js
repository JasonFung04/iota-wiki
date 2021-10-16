"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[99299],{9076:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return p},default:function(){return u}});var n=a(74034),o=a(79973),i=(a(67294),a(3905)),s=["components"],r={id:"messages",title:"Messages",description:"This topic explores messages, models, and payloads that encompass the transfer of data within the Tangle."},l="Messages",d={unversionedId:"about-iota/messages",id:"about-iota/messages",isDocsHomePage:!1,title:"Messages",description:"This topic explores messages, models, and payloads that encompass the transfer of data within the Tangle.",source:"@site/internal/learn/about-iota/messages.md",sourceDirName:"about-iota",slug:"/about-iota/messages",permalink:"/learn/about-iota/messages",editUrl:"https://github.com/iota-community/iota-wiki/edit/develop/internal/learn/about-iota/messages.md",tags:[],version:"current",lastUpdatedAt:1634137574,formattedLastUpdatedAt:"10/13/2021",frontMatter:{id:"messages",title:"Messages",description:"This topic explores messages, models, and payloads that encompass the transfer of data within the Tangle."},sidebar:"learn",previous:{title:"Roadmap to Decentralization",permalink:"/learn/about-iota/roadmap-to-decentralization"},next:{title:"Energy efficiency",permalink:"/learn/about-iota/energy-efficiency"}},p=[{value:"UTXO",id:"utxo",children:[],level:2},{value:"Message payloads",id:"message-payloads",children:[{value:"Transaction payload",id:"transaction-payload",children:[],level:3},{value:"Indexation payload",id:"indexation-payload",children:[],level:3},{value:"Milestone payload",id:"milestone-payload",children:[],level:3},{value:"Conflict",id:"conflict",children:[],level:3}],level:2},{value:"Validation",id:"validation",children:[],level:2}],c={toc:p};function u(e){var t=e.components,a=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"messages"},"Messages"),(0,i.kt)("p",null,"A message is an object that nodes gossip around in the network. It always references two to eight other messages, which are known as ",(0,i.kt)("strong",{parentName:"p"},"parents"),". It is stored as a vertex on the Tangle data structure maintained by the nodes."),(0,i.kt)("p",null,"Messages can contain payloads. Some of them are core payloads that are processed by all nodes as part of the core protocol. Others are community payloads that enable the building of new functionalities on top of the Tangle. And some payloads have other nested payloads embedded inside. So, the parsing of the message is done layer by layer, to ensure also embedded payloads have a correct syntax structure."),(0,i.kt)("h2",{id:"utxo"},"UTXO"),(0,i.kt)("p",null,"Previously, the IOTA protocol used transactions (which were vertices in the Tangle), where each transaction defined either an input or an output. A grouping of those input/output transaction vertices made up a bundle that transferred the given values as an atomic unit. But this approach was seen as too time-consuming. So, we adopted a new transaction structure called the ",(0,i.kt)("strong",{parentName:"p"},"unspent transaction outputs "),"(UTXO)."),(0,i.kt)("p",null,"The UTXO model defines a ledger state where balances are not directly associated with addresses but with the outputs of transactions. In this model, transactions specify the outputs of previous transactions as inputs, which are consumed to create new outputs. A transaction must consume the entirety of the specified inputs."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/77154511/127794259-10071fbe-4f04-4ab2-81eb-a0589f025a00.png",alt:"utxo-model"})),(0,i.kt)("p",null,"So, the UTXO is a part of a larger, self-contained, and flexible message structure known as a ",(0,i.kt)("strong",{parentName:"p"},"payload"),". This approach is meant to enable a self-contained message structure defining the data of the entire transfer as a payload to be embedded into a message."),(0,i.kt)("p",null,"Overall, these payload structures are simple:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Payload Type"),(0,i.kt)("td",{parentName:"tr",align:null},"uint32"),(0,i.kt)("td",{parentName:"tr",align:null},"must be set to ",(0,i.kt)("strong",{parentName:"td"},"2"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Index"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"The index key of the message, a UTF-8 encoded string")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"DATA"),(0,i.kt)("td",{parentName:"tr",align:null},"ByteArray"),(0,i.kt)("td",{parentName:"tr",align:null},"Data we are attaching")))),(0,i.kt)("p",null,"Additionally, there can be three types of message payloads:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A transaction payload"),(0,i.kt)("li",{parentName:"ul"},"An indexation payload"),(0,i.kt)("li",{parentName:"ul"},"A milestone payload")),(0,i.kt)("h2",{id:"message-payloads"},"Message payloads"),(0,i.kt)("h3",{id:"transaction-payload"},"Transaction payload"),(0,i.kt)("p",null,"A transaction payload is made up of two parts:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The Transaction Essence part, which contains the inputs, outputs, and an optional embedded payload."),(0,i.kt)("li",{parentName:"ol"},"The Unlock Blocks, which unlocks the Transaction Essence's inputs. In case the unlock block contains a signature, it signs the entire Transaction Essence part.")),(0,i.kt)("p",null,"In general, all parts of a transaction payload begin with a byte describing the type of the given part to keep the flexibility to introduce new types/versions of the given part in the future."),(0,i.kt)("p",null,"And, as mentioned above, the payload part of a Transaction Essence can hold an optional payload. This payload does not affect the validity of the Transaction Essence. If the transaction is not valid, then the payload must also be discarded."),(0,i.kt)("h3",{id:"indexation-payload"},"Indexation payload"),(0,i.kt)("p",null,"The concept of the payload allows for the addition of an index to the encapsulating message, as well as some arbitrary data. Nodes expose an application programming interface that enables the querying of messages by the index. Index payloads may also be contained within a transaction payload."),(0,i.kt)("h3",{id:"milestone-payload"},"Milestone payload"),(0,i.kt)("p",null,"A milestone payload contains the Milestone Essence, which consists of the actual milestone information (like its index number or position in the tangle), which is signed using the Ed25519 signature scheme. It uses keys of 32 bytes, while the generated signatures are 64 bytes."),(0,i.kt)("p",null,"To increase the security of the design, a milestone can (optionally) be independently signed by multiple keys at once. These keys should be operated by detached signature provider services running on independent infrastructure elements. This assists in mitigating the risk of an attacker having access to all the key material necessary for forging milestones."),(0,i.kt)("p",null,"In addition, a key rotation policy can also be enforced by limiting key validity to certain milestone intervals."),(0,i.kt)("h3",{id:"conflict"},"Conflict"),(0,i.kt)("p",null,"Additionally, if messages conflict, milestones can confirm them by enforcing deterministic ordering by applying only the first message that will not violate the ledger state; this is accomplished by using the White Flag feature."),(0,i.kt)("h2",{id:"validation"},"Validation"),(0,i.kt)("p",null,"Finally, a message is considered valid if the following syntactic rules are met:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The message size must not exceed 32 KiB (32 ","*"," 1024 bytes)."),(0,i.kt)("li",{parentName:"ol"},"When parsing the message is complete, there should not be any trailing bytes left that were not parsed."),(0,i.kt)("li",{parentName:"ol"},"If the payload type is in the core payload range (0-127) and the node is familiar with it, or if it is above this range."),(0,i.kt)("li",{parentName:"ol"},"If the Message Proof of Work Hash will contain at least the number of trailing 0 trits the node defines as required."),(0,i.kt)("li",{parentName:"ol"},"Parents' length must be between two and eight.")))}u.isMDXComponent=!0},3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return h}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=d(a),h=o,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||i;return a?n.createElement(m,s(s({ref:t},p),{},{components:a})):n.createElement(m,s({ref:t},p))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,s=new Array(i);s[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,s[1]=r;for(var d=2;d<i;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);