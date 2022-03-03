"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[69825],{3412:function(e,i,t){t.r(i),t.d(i,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return m},default:function(){return p}});var a=t(87462),r=t(63366),n=(t(67294),t(3905)),o=t(13441),l=["components"],s={title:"Infographics",description:"A picture says sometimes more than a thousand words... Downloadable fact sheets and informations for every audience to explain IOTA."},d=void 0,c={unversionedId:"media-library/infographics",id:"media-library/infographics",title:"Infographics",description:"A picture says sometimes more than a thousand words... Downloadable fact sheets and informations for every audience to explain IOTA.",source:"@site/internal/learn/media-library/infographics.mdx",sourceDirName:"media-library",slug:"/media-library/infographics",permalink:"/learn/media-library/infographics",editUrl:"https://github.com/iota-community/iota-wiki/edit/main/internal/learn/media-library/infographics.mdx",tags:[],version:"current",lastUpdatedAt:1645298674,formattedLastUpdatedAt:"2/19/2022",frontMatter:{title:"Infographics",description:"A picture says sometimes more than a thousand words... Downloadable fact sheets and informations for every audience to explain IOTA."},sidebar:"learn",previous:{title:"Network Token Migration",permalink:"/learn/networks/network-token-migration"},next:{title:"Videos",permalink:"/learn/media-library/videos"}},m=[{value:"Core Protocol",id:"core-protocol",children:[],level:2},{value:"Frameworks",id:"frameworks",children:[],level:2},{value:"Use Cases",id:"use-cases",children:[],level:2},{value:"IOTA Foundation Projects",id:"iota-foundation-projects",children:[],level:2},{value:"Standards",id:"standards",children:[],level:2},{value:"IOTA Tangle vs Blockchain",id:"iota-tangle-vs-blockchain",children:[],level:2},{value:"Smart Contracts",id:"smart-contracts",children:[],level:2},{value:"Tokenization",id:"tokenization",children:[],level:2},{value:"Staking",id:"staking",children:[],level:2},{value:"Shimmer",id:"shimmer",children:[],level:2},{value:"Sharding",id:"sharding",children:[],level:2},{value:"Treasury Vote",id:"treasury-vote",children:[],level:2},{value:"Coordicide (IOTA 2.0)",id:"coordicide-iota-20",children:[],level:2},{value:"Chrysalis (IOTA 1.5)",id:"chrysalis-iota-15",children:[],level:2}],h={toc:m};function p(e){var i=e.components,t=(0,r.Z)(e,l);return(0,n.kt)("wrapper",(0,a.Z)({},h,t,{components:i,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This page contains collections of infographics that have been released by the IOTA Foundation. They aim to provide you\nwith an overview of most of the components of the IOTA ecosystem and help to let you grasp the concepts of IOTA more easily."),(0,n.kt)("h2",{id:"core-protocol"},"Core Protocol"),(0,n.kt)(o.Z,{path:"/img/infographics/core_protocol",mdxType:"ImageSlider"}),(0,n.kt)("h2",{id:"frameworks"},"Frameworks"),(0,n.kt)(o.Z,{path:"/img/infographics/frameworks",mdxType:"ImageSlider"}),(0,n.kt)("h2",{id:"use-cases"},"Use Cases"),(0,n.kt)(o.Z,{path:"/img/infographics/use_cases",mdxType:"ImageSlider"}),(0,n.kt)("h2",{id:"iota-foundation-projects"},"IOTA Foundation Projects"),(0,n.kt)(o.Z,{path:"/img/infographics/IF_projects",mdxType:"ImageSlider"}),(0,n.kt)("h2",{id:"standards"},"Standards"),(0,n.kt)(o.Z,{path:"/img/infographics/standards",mdxType:"ImageSlider"}),(0,n.kt)("h2",{id:"iota-tangle-vs-blockchain"},"IOTA Tangle vs Blockchain"),(0,n.kt)(o.Z,{path:"/img/infographics/blockchain-vs-tangle",mdxType:"ImageSlider"}),(0,n.kt)("h2",{id:"smart-contracts"},"Smart Contracts"),(0,n.kt)(o.Z,{path:"/img/infographics/ISCP",mdxType:"ImageSlider"}),(0,n.kt)("h2",{id:"tokenization"},"Tokenization"),(0,n.kt)(o.Z,{path:"/img/infographics/tokenization",mdxType:"ImageSlider"}),(0,n.kt)("h2",{id:"staking"},"Staking"),(0,n.kt)(o.Z,{path:"/img/infographics/staking",mdxType:"ImageSlider"}),(0,n.kt)("h2",{id:"shimmer"},"Shimmer"),(0,n.kt)(o.Z,{path:"/img/infographics/shimmer",mdxType:"ImageSlider"}),(0,n.kt)("h2",{id:"sharding"},"Sharding"),(0,n.kt)(o.Z,{path:"/img/infographics/sharding",mdxType:"ImageSlider"}),(0,n.kt)("h2",{id:"treasury-vote"},"Treasury Vote"),(0,n.kt)(o.Z,{path:"/img/infographics/treasury_vote",mdxType:"ImageSlider"}),(0,n.kt)("h2",{id:"coordicide-iota-20"},"Coordicide (IOTA 2.0)"),(0,n.kt)(o.Z,{path:"/img/infographics/Coordicide",mdxType:"ImageSlider"}),(0,n.kt)("h2",{id:"chrysalis-iota-15"},"Chrysalis (IOTA 1.5)"),(0,n.kt)(o.Z,{path:"/img/infographics/Chrysalis",mdxType:"ImageSlider"}))}p.isMDXComponent=!0},13441:function(e,i,t){t.d(i,{Z:function(){return c}});var a=t(67294),r=t(66982),n=t.n(r),o=t(51402),l=t(9669),s=t.n(l),d=t(12829);function c(e){var i=e.path,t=(0,d.LU)().imageSlider,r=(0,o.Z)(i),l=(0,o.Z)(t.videoPlaceholder),c=/(png|jpe?g|svg)$/,m=(0,a.useState)([]),h=m[0],p=m[1];(0,a.useEffect)((function(){var e=new AbortController;return s().get(r,{signal:e.signal}).then((function(e){var i=e.data.map((function(e){var i=r+"/"+e,t=e.split(".").pop(),n=null;return"mp4"===t?n={original:i,thumbnail:l,renderItem:function(){return a.createElement("video",{controls:!0,autoPlay:!0,muted:!0,className:"image-gallery-video"},a.createElement("source",{src:i,type:"video/mp4"}))}}:c.test(t)&&(n={original:i,thumbnail:i,thumbnailHeight:48}),n})).filter((function(e){return e}));p(i)})),function(){e.abort()}}),[]);var u=(0,a.useRef)(null);return a.createElement(n(),{onClick:function(){var e;return null==u||null==(e=u.current)?void 0:e.fullScreen()},ref:u,items:h,showPlayButton:!1,lazyLoad:!0})}}}]);