"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[29720],{61163:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var i=n(74034),a=n(79973),o=(n(67294),n(3905)),s=["components"],r={description:"Fast Probabilistic Consensus (FPC) is a binary voting protocol where each node starts with an initial opinion (a nulled boolean) on an object. This specification describes how this binary voting protocol interacts with the rest of the IOTA protocol.",image:"/img/logo/Coordicide_Logo_Black.png",keywords:["binary voting protocol","node","initial opinion","fast probabilistic consensus"]},l="6.1 Objects of Consensus",p={unversionedId:"6.1ObjectsOfConsensus",id:"6.1ObjectsOfConsensus",isDocsHomePage:!1,title:"6.1 Objects of Consensus",description:"Fast Probabilistic Consensus (FPC) is a binary voting protocol where each node starts with an initial opinion (a nulled boolean) on an object. This specification describes how this binary voting protocol interacts with the rest of the IOTA protocol.",source:"@site/external/IOTA-2.0-Research-Specifications/docs/6.1ObjectsOfConsensus.md",sourceDirName:".",slug:"/6.1ObjectsOfConsensus",permalink:"/IOTA-2.0-Research-Specifications/6.1ObjectsOfConsensus",tags:[],version:"current",frontMatter:{description:"Fast Probabilistic Consensus (FPC) is a binary voting protocol where each node starts with an initial opinion (a nulled boolean) on an object. This specification describes how this binary voting protocol interacts with the rest of the IOTA protocol.",image:"/img/logo/Coordicide_Logo_Black.png",keywords:["binary voting protocol","node","initial opinion","fast probabilistic consensus"]},sidebar:"tutorialSidebar",previous:{title:"5.3Mana",permalink:"/IOTA-2.0-Research-Specifications/5.3Mana"},next:{title:"6.2 Opinion Setting",permalink:"/IOTA-2.0-Research-Specifications/6.2OpinionSetting"}},c=[{value:"6.1.1 Preliminaries",id:"611-preliminaries",children:[{value:"6.1.1.1 Motivation",id:"6111-motivation",children:[],level:3},{value:"6.1.1.2 Summary",id:"6112-summary",children:[],level:3},{value:"6.1.1.3 Dependencies",id:"6113-dependencies",children:[],level:3},{value:"6.1.1.4 Parameters and lists",id:"6114-parameters-and-lists",children:[],level:3}],level:2},{value:"6.1.2 Detailed design",id:"612-detailed-design",children:[],level:2},{value:"6.1.2.1 Voting Objects list",id:"6121-voting-objects-list",children:[{value:"6.1.2.2 How opinions on objects are stored",id:"6122-how-opinions-on-objects-are-stored",children:[],level:3},{value:"6.1.2.3 Query Status",id:"6123-query-status",children:[],level:3},{value:"6.1.2.4 Answer Status",id:"6124-answer-status",children:[],level:3}],level:2}],d={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"61-objects-of-consensus"},"6.1 Objects of Consensus"),(0,o.kt)("h2",{id:"611-preliminaries"},"6.1.1 Preliminaries"),(0,o.kt)("h3",{id:"6111-motivation"},"6.1.1.1 Motivation"),(0,o.kt)("p",null,"FPC is a binary voting protocol where each node starts with an initial opinion (a nulled boolean) on an object.  Nodes then exchange queries and responses about their opinions during several rounds, until each node terminates with a final boolean value: see specification ",(0,o.kt)("a",{parentName:"p",href:"./6.3FastProbabilisticConsensus"},"6.3 Fast Probabilistic Consensus"),".  "),(0,o.kt)("p",null,"FPC votes on two specific objects types: messages, in order to enforce timestamps, and transactions, in order to decide double spends. Additionally, applications can use FPC to query opinions about their opinion on other object types, although there is no guarantee that they will get a response.  "),(0,o.kt)("p",null,"The FPC is agnostic about the rest of the protocol, particularly the questions being decided voting and how the initial opinions are set.  We require a generic way for FPC to interact with data structures in other applications. Specifically, an application needs a way to trigger FPC run. "),(0,o.kt)("p",null,"Deciding when FPC should run is a delicate question for two reasons."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"It is inefficient for FPC to vote on every single transaction."),(0,o.kt)("li",{parentName:"ol"},"If only a sub set of nodes participate in FPC, they are more vulnerable to attack since the consensus mana held by this collection of nodes is potentially much smaller.\nThus, since it cannot vote on everything, it must use subjective criterion to trigger voting which does not leave any group vulnerable to attack.  ")),(0,o.kt)("p",null,"Voting is a two-part process: querying and answering queries.  The function ",(0,o.kt)("inlineCode",{parentName:"p"},"QueryStatus")," determines if a node should query about a particular object, and the function ",(0,o.kt)("inlineCode",{parentName:"p"},"AnswerStatus")," determines if the node should respond.  "),(0,o.kt)("h3",{id:"6112-summary"},"6.1.1.2 Summary"),(0,o.kt)("p",null,"This specification describes how this binary voting protocol interacts with the rest of the IOTA protocol.  Specifically, we define two functions, ",(0,o.kt)("inlineCode",{parentName:"p"},"QueryStatus")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"AnswerStatus")," which govern when an object should be included in a query or response respectively. These functions depend on the metatdata ",(0,o.kt)("inlineCode",{parentName:"p"},"opinionField")," which is also defined in this specification.  "),(0,o.kt)("p",null,"This specification only includes the format on how applications requiring FPC should interact with it, not how to set initial opinions or, more specifically, ",(0,o.kt)("inlineCode",{parentName:"p"},"opinionField"),".  For this information, see ",(0,o.kt)("a",{parentName:"p",href:"./6.2OpinionSetting"},"6.2 Opinion Setting")," ."),(0,o.kt)("h3",{id:"6113-dependencies"},"6.1.1.3 Dependencies"),(0,o.kt)("p",null,"This specification depends on the following specifications"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"FPC ",(0,o.kt)("a",{parentName:"li",href:"./6.3FastProbabilisticConsensus"},"6.3 Fast Probabilistic Consensus")," "),(0,o.kt)("li",{parentName:"ul"},"Opinion Setting ",(0,o.kt)("a",{parentName:"li",href:"./6.2OpinionSetting"},"6.2 Opinion Setting")," ")),(0,o.kt)("h3",{id:"6114-parameters-and-lists"},"6.1.1.4 Parameters and lists"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"DSMALL")),(0,o.kt)("td",{parentName:"tr",align:null},"duration"),(0,o.kt)("td",{parentName:"tr",align:null},"small estimated network delay, set to 5 seconds")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"votingEnabledObjectTypes")),(0,o.kt)("td",{parentName:"tr",align:null},"list"),(0,o.kt)("td",{parentName:"tr",align:null},"object types which will be voted upon")))),(0,o.kt)("h2",{id:"612-detailed-design"},"6.1.2 Detailed design"),(0,o.kt)("h2",{id:"6121-voting-objects-list"},"6.1.2.1 Voting Objects list"),(0,o.kt)("p",null,"FPC can potentially vote on a variety of matters.  The ",(0,o.kt)("inlineCode",{parentName:"p"},"votingEnabledObjectTypes")," effectively lists which things will be voted upon by listing the object types which must be queried by FPC.  Specifically, when FPC prepares a query, it iterates through each object type, and then finds which objects of that type it must include in the query.  "),(0,o.kt)("p",null,"By default, the object types ",(0,o.kt)("inlineCode",{parentName:"p"},"message")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"transaction")," are in the list ",(0,o.kt)("inlineCode",{parentName:"p"},"votingEnabledObjectTypes"),".  However, a second layer application can add other object types to this list, allowing other applications to use FPC. These applications will have no guarantee that they will receive responses with about custom object types, particularly if the application is not widely used.   "),(0,o.kt)("h3",{id:"6122-how-opinions-on-objects-are-stored"},"6.1.2.2 How opinions on objects are stored"),(0,o.kt)("p",null,"For every object whose type is in ",(0,o.kt)("inlineCode",{parentName:"p"},"votingEnabledObjectTypes"),", that the local meta data stored with the object must include an ",(0,o.kt)("inlineCode",{parentName:"p"},"opinionField")," which is either ",(0,o.kt)("inlineCode",{parentName:"p"},"NULL"),"  or the triplet ",(0,o.kt)("inlineCode",{parentName:"p"},"(opinion,level,timeFormed)"),".  The field ",(0,o.kt)("inlineCode",{parentName:"p"},"opinion")," is a nullable boolean value,  ",(0,o.kt)("inlineCode",{parentName:"p"},"level")," is a number in the list ",(0,o.kt)("span",{parentName:"p",className:"math math-inline"},(0,o.kt)("span",{parentName:"span",className:"katex"},(0,o.kt)("span",{parentName:"span",className:"katex-mathml"},(0,o.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,o.kt)("semantics",{parentName:"math"},(0,o.kt)("mrow",{parentName:"semantics"},(0,o.kt)("mo",{parentName:"mrow",stretchy:"false"},"{"),(0,o.kt)("mn",{parentName:"mrow"},"1"),(0,o.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,o.kt)("mn",{parentName:"mrow"},"2"),(0,o.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,o.kt)("mn",{parentName:"mrow"},"3"),(0,o.kt)("mo",{parentName:"mrow",stretchy:"false"},"}")),(0,o.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\{1,2,3\\}")))),(0,o.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,o.kt)("span",{parentName:"span",className:"base"},(0,o.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,o.kt)("span",{parentName:"span",className:"mopen"},"{"),(0,o.kt)("span",{parentName:"span",className:"mord"},"1"),(0,o.kt)("span",{parentName:"span",className:"mpunct"},","),(0,o.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,o.kt)("span",{parentName:"span",className:"mord"},"2"),(0,o.kt)("span",{parentName:"span",className:"mpunct"},","),(0,o.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,o.kt)("span",{parentName:"span",className:"mord"},"3"),(0,o.kt)("span",{parentName:"span",className:"mclose"},"}"))))),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"timeFormed")," is the time the field was changed from ",(0,o.kt)("inlineCode",{parentName:"p"},"NULL"),"."),(0,o.kt)("p",null,"As will be discussed in a different specification, an opinion field will be  ",(0,o.kt)("inlineCode",{parentName:"p"},"NULL")," until the node has received information allowing it to form an opinion, e.g. detect a conflict.  For example,  a transaction should have opinion field  ",(0,o.kt)("inlineCode",{parentName:"p"},"NULL"),' until a conflict is detected.  Such transactions should be considered "good", and, in the honest setting, most transactions will have a ',(0,o.kt)("inlineCode",{parentName:"p"},"NULL")," opinion. "),(0,o.kt)("h3",{id:"6123-query-status"},"6.1.2.3 Query Status"),(0,o.kt)("p",null,"When FPC prepares a query, see the ",(0,o.kt)("a",{parentName:"p",href:"./6.3FastProbabilisticConsensus"},"FPC")," specification, it ",(0,o.kt)("em",{parentName:"p"},"shall")," determine which objects to include.  Conceptually, for each type in ",(0,o.kt)("inlineCode",{parentName:"p"},"votingEnabledObjectTypes"),", the node ",(0,o.kt)("em",{parentName:"p"},"shall")," iterate through all objects of that type and individually decide if that object is to be included in the query. Clearly, this iteration would be inefficient expensive, and a node can use some method to speed up the process.  However, this is an implementation detail and thus beyond the scope of this document."),(0,o.kt)("p",null,"To determine whether or not each object should be included into a query, a node shall apply the following ",(0,o.kt)("inlineCode",{parentName:"p"},"QueryStatus")," function.  If the function returns true, then the object should be included into the query."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vbnet"},"FUNCTION Bool = QueryStatus(type,objectID)\nIF type not in VotingEnabledObjectTypes\n    RETURN FALSE\nELSE IF opinionField != NULL AND level =1 and currentTime > timeFormed+DSMALL\n    RETURN TRUE\nELSE RETURN FALSE      \nIF the object does not exist\n    RETURN `FALSE`.\n")),(0,o.kt)("p",null,"When FPC succesfully stops voting on an object, it sets in the ",(0,o.kt)("inlineCode",{parentName:"p"},"opinionField")," the ",(0,o.kt)("inlineCode",{parentName:"p"},"opinion")," to the final opinion and modifies ",(0,o.kt)("inlineCode",{parentName:"p"},"level"),"  to ",(0,o.kt)("inlineCode",{parentName:"p"},"2")," so that ",(0,o.kt)("inlineCode",{parentName:"p"},"QueryStatus")," returns false."),(0,o.kt)("h3",{id:"6124-answer-status"},"6.1.2.4 Answer Status"),(0,o.kt)("p",null,"Every time FPC receives a query request, it checks whether or not it should reply; see ",(0,o.kt)("a",{parentName:"p",href:"./6.3FastProbabilisticConsensus"},"FPC"),".  To do so, it applies the following  ",(0,o.kt)("inlineCode",{parentName:"p"},"AnswerStatus")," function to object in the query request to determine if a response should be made.  If ",(0,o.kt)("inlineCode",{parentName:"p"},"AnswerStatus")," returns ",(0,o.kt)("inlineCode",{parentName:"p"},"FALSE")," for any object in the query request, a query response will not be prepared."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vbnet"},"FUNCTION Bool=AnswerStatus(type,objectID)\nIf type not in VotingEnabledObjectTypes\n    RETURN FALSE\nELSE IF opinionField not = NULL AND (level = 1 OR level = 2) \n    RETURN TRUE\nELSE RETURN FALSE \n")),(0,o.kt)("p",null,"Lastly, if the object does not exist, the function should return ",(0,o.kt)("inlineCode",{parentName:"p"},"FALSE"),"."),(0,o.kt)("h1",{id:"613-rationale-and-alternatives"},"6.1.3 Rationale and Alternatives"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"level")," field indicates the level of knowledge. It tells us information about what other nodes know."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Level 1 means that the node only knows that it holds this opinion."),(0,o.kt)("li",{parentName:"ul"},"Level 2 means that the node knows that all nodes have this opinion too (with high probability)."),(0,o.kt)("li",{parentName:"ul"},"Level 3 means that the node knows that all nodes have level 2 knowledge (with high probability).")),(0,o.kt)("p",null,"If a node node only has level 1 knowledge, it needs to vote.  However, if it has level 2 knowledge, it does not need to query as it knows that all nodes have the same opinion. With level 3 knowledge, it knows that no other nodes have level 2 knowledge and thus should not send its node queries.  Thus, with level 3 knowledge, the node does not need to respond. The level of knowledge is the primary criterion in these functions.  "),(0,o.kt)("p",null,"Moreover, we should not query about objects whose opinion is ",(0,o.kt)("inlineCode",{parentName:"p"},"NULL"),". In a similar vein, we need should not query about an object until ",(0,o.kt)("inlineCode",{parentName:"p"},"d")," time after the opinion was set, so we can be sure that all other nodes have set their opinion too. "),(0,o.kt)("p",null,'Alternatively, we can attempt to manage the same system with a series of finality flags.  However, this has two problems.  First,  we either mark objects which we have never voted upon as final, or some objects will never get a finality flag.  This leads to some complicated, unintuitive logic.\nSecond, if an attacker can cause only small portions of the network to vote on an object, that vote would be susceptible to an attack.  Thus we need consensus about what to vote on. However, if voting is a binary "yes" or "no", we would need a consensus algorithm to determine when to vote.  The levels of knowledge does not treat voting in a binary way, bypassing this problem.'))}u.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=p(n),h=a,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return n?i.createElement(m,s(s({ref:t},c),{},{components:n})):i.createElement(m,s({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,s[1]=r;for(var p=2;p<o;p++)s[p]=n[p];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);