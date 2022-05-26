"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[56430],{39080:function(e,t,n){n.r(t),n.d(t,{default:function(){return oe}});var a=n(67294),r=n(86010),l=n(87462),i=n(11614),c=n(61428);function o(e){var t=e.previous,n=e.next;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&a.createElement(c.Z,(0,l.Z)({},t,{subLabel:a.createElement(i.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&a.createElement(c.Z,(0,l.Z)({},n,{subLabel:a.createElement(i.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}var s=n(6832),m=n(88746),d=n(35601),u=n(4049),v=n(18015),f=n(6141);var p={unreleased:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(i.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(i.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function h(e){var t=p[e.versionMetadata.banner];return a.createElement(t,e)}function b(e){var t=e.versionLabel,n=e.to,r=e.onClick;return a.createElement(i.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(m.Z,{to:n,onClick:r},a.createElement(i.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function g(e){var t,n=e.className,l=e.versionMetadata,i=(0,s.Z)().siteConfig.title,c=(0,d.gA)({failfast:!0}).pluginId,o=(0,u.J)(c).savePreferredVersionName,m=(0,d.Jo)(c),f=m.latestDocSuggestion,p=m.latestVersionSuggestion,g=null!=f?f:(t=p).docs.find((function(e){return e.id===t.mainDocId}));return a.createElement("div",{className:(0,r.Z)(n,v.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(h,{siteTitle:i,versionMetadata:l})),a.createElement("div",{className:"margin-top--md"},a.createElement(b,{versionLabel:p.label,to:g.path,onClick:function(){return o(p.name)}})))}function E(e){var t=e.className,n=(0,f.E)();return n.banner?a.createElement(g,{className:t,versionMetadata:n}):null}function Z(e){var t=e.className,n=(0,f.E)();return n.badge?a.createElement("span",{className:(0,r.Z)(t,v.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(i.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}function N(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt;return a.createElement(i.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function L(e){var t=e.lastUpdatedBy;return a.createElement(i.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function _(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt,r=e.lastUpdatedBy;return a.createElement("span",{className:v.k.common.lastUpdated},a.createElement(i.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(N,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:r?a.createElement(L,{lastUpdatedBy:r}):""}},"Last updated{atDate}{byUser}"),!1)}var k=n(12937),y=n(41921),C="lastUpdated_foO9";function T(e){return a.createElement("div",{className:(0,r.Z)(v.k.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(y.Z,e)))}function x(e){var t=e.editUrl,n=e.lastUpdatedAt,l=e.lastUpdatedBy,i=e.formattedLastUpdatedAt;return a.createElement("div",{className:(0,r.Z)(v.k.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},t&&a.createElement(k.Z,{editUrl:t})),a.createElement("div",{className:(0,r.Z)("col",C)},(n||l)&&a.createElement(_,{lastUpdatedAt:n,formattedLastUpdatedAt:i,lastUpdatedBy:l})))}function H(e){var t=e.content.metadata,n=t.editUrl,l=t.lastUpdatedAt,i=t.formattedLastUpdatedAt,c=t.lastUpdatedBy,o=t.tags,s=o.length>0,m=!!(n||l||c);return s||m?a.createElement("footer",{className:(0,r.Z)(v.k.docs.docFooter,"docusaurus-mt-lg")},s&&a.createElement(T,{tags:o}),m&&a.createElement(x,{editUrl:n,lastUpdatedAt:l,lastUpdatedBy:c,formattedLastUpdatedAt:i})):null}var A=n(78473),U=n(17940),w="tocCollapsible_bZGK",M="tocCollapsibleContent_NNA8",B="tocCollapsibleExpanded_IqtF",I=n(91553),S=n(63366),O="tocCollapsibleButton_l22C",D="tocCollapsibleButtonExpanded_KeTX",V=["collapsed"];function R(e){var t=e.collapsed,n=(0,S.Z)(e,V);return a.createElement("button",(0,l.Z)({type:"button"},n,{className:(0,r.Z)("clean-btn",O,!t&&D,n.className)}),a.createElement(i.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}function P(e){var t=e.toc,n=e.className,l=e.minHeadingLevel,i=e.maxHeadingLevel,c=(0,U.u)({initialState:!0}),o=c.collapsed,s=c.toggleCollapsed;return a.createElement("div",{className:(0,r.Z)(w,!o&&B,n)},a.createElement(R,{collapsed:o,onClick:s}),a.createElement(U.z,{lazy:!0,className:M,collapsed:o},a.createElement(I.Z,{toc:t,minHeadingLevel:l,maxHeadingLevel:i})))}var z=n(38676),F="docItemContainer_vinB",j="docItemCol_DM6M",q="tocMobile_TmEX",W=n(44873),X=n(94980),G=n(85919),J=n(18407),Q={breadcrumbsContainer:"breadcrumbsContainer_Xlws",breadcrumbHomeIcon:"breadcrumbHomeIcon_kU5B"},K=n(51402);function Y(e){return a.createElement("svg",(0,l.Z)({viewBox:"0 0 24 24"},e),a.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}function $(e){var t=e.children,n=e.href,r="breadcrumbs__link";return e.isLast?a.createElement("span",{className:r,itemProp:"name"},t):n?a.createElement(m.Z,{className:r,href:n,itemProp:"item"},a.createElement("span",{itemProp:"name"},t)):a.createElement("span",{className:r},t)}function ee(e){var t=e.children,n=e.active,i=e.index,c=e.addMicrodata;return a.createElement("li",(0,l.Z)({},c&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,r.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,a.createElement("meta",{itemProp:"position",content:String(i+1)}))}function te(){var e=(0,K.Z)("/");return a.createElement("li",{className:"breadcrumbs__item"},a.createElement(m.Z,{"aria-label":(0,i.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,r.Z)("breadcrumbs__link",Q.breadcrumbsItemLink),href:e},a.createElement(Y,{className:Q.breadcrumbHomeIcon})))}function ne(){var e=(0,G.s1)(),t=(0,J.Ns)();return e?a.createElement("nav",{className:(0,r.Z)(v.k.docs.docBreadcrumbs,Q.breadcrumbsContainer),"aria-label":(0,i.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},a.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&a.createElement(te,null),e.map((function(t,n){var r=n===e.length-1;return a.createElement(ee,{key:n,active:r,index:n,addMicrodata:!!t.href},a.createElement($,{href:t.href,isLast:r},t.label))})))):null}var ae=n(3905),re=n(38181);function le(e){var t=e.children;return a.createElement(ae.Zo,{components:re.Z},t)}function ie(e){var t,n=e.content,r=n.metadata,l=n.frontMatter,i=n.assets,c=l.keywords,o=r.description,s=r.title,m=null!=(t=i.image)?t:l.image;return a.createElement(W.d,{title:s,description:o,keywords:c,image:m})}function ce(e){var t=e.content,n=t.metadata,l=t.frontMatter,i=l.hide_title,c=l.hide_table_of_contents,s=l.toc_min_heading_level,m=l.toc_max_heading_level,d=n.title,u=!i&&void 0===t.contentTitle,f=(0,X.i)(),p=!c&&t.toc&&t.toc.length>0,h=p&&("desktop"===f||"ssr"===f);return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,r.Z)("col",!c&&j)},a.createElement(E,null),a.createElement("div",{className:F},a.createElement("article",null,a.createElement(ne,null),a.createElement(Z,null),p&&a.createElement(P,{toc:t.toc,minHeadingLevel:s,maxHeadingLevel:m,className:(0,r.Z)(v.k.docs.docTocMobile,q)}),a.createElement("div",{className:(0,r.Z)(v.k.docs.docMarkdown,"markdown")},u&&a.createElement("header",null,a.createElement(z.Z,{as:"h1"},d)),a.createElement(le,null,a.createElement(t,null))),a.createElement(H,e)),a.createElement(o,{previous:n.previous,next:n.next}))),h&&a.createElement("div",{className:"col col--3"},a.createElement(A.Z,{toc:t.toc,minHeadingLevel:s,maxHeadingLevel:m,className:v.k.docs.docTocDesktop})))}function oe(e){var t="docs-doc-id-"+e.content.metadata.unversionedId;return a.createElement(W.FG,{className:t},a.createElement(ie,e),a.createElement(ce,e))}},38676:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(87462),r=n(63366),l=n(67294),i=n(86010),c=n(11614),o=n(96793),s="anchorWithStickyNavbar_mojV",m="anchorWithHideOnScrollNavbar_R0VQ",d=["as","id"];function u(e){var t=e.as,n=e.id,u=(0,r.Z)(e,d),v=(0,o.L)().navbar.hideOnScroll;return"h1"!==t&&n?l.createElement(t,(0,a.Z)({},u,{className:(0,i.Z)("anchor",v?m:s),id:n}),u.children,l.createElement("a",{className:"hash-link",href:"#"+n,title:(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):l.createElement(t,(0,a.Z)({},u,{id:void 0}))}},88584:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(87462),r=n(63366),l=n(67294),i=n(86010),c="iconEdit_dcUD",o=["className"];function s(e){var t=e.className,n=(0,r.Z)(e,o);return l.createElement("svg",(0,a.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(c,t),"aria-hidden":"true"},n),l.createElement("g",null,l.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}},38181:function(e,t,n){n.d(t,{Z:function(){return y}});var a=n(87462),r=n(67294),l=n(63366),i=n(32411),c=["mdxType","originalType"];var o=n(31531);var s=n(88746);var m=n(86010),d=n(5730),u=n(17940),v="details_lb9f",f="isBrowser_bmU9",p="collapsibleContent_i85q",h=["summary","children"];function b(e){return!!e&&("SUMMARY"===e.tagName||b(e.parentElement))}function g(e,t){return!!e&&(e===t||g(e.parentElement,t))}function E(e){var t=e.summary,n=e.children,a=(0,l.Z)(e,h),i=(0,d.Z)(),c=(0,r.useRef)(null),o=(0,u.u)({initialState:!a.open}),s=o.collapsed,E=o.setCollapsed,Z=(0,r.useState)(a.open),N=Z[0],L=Z[1];return r.createElement("details",Object.assign({},a,{ref:c,open:N,"data-collapsed":s,className:(0,m.Z)(v,i&&f,a.className),onMouseDown:function(e){b(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;b(t)&&g(t,c.current)&&(e.preventDefault(),s?(E(!1),L(!0)):E(!0))}}),t||r.createElement("summary",null,"Details"),r.createElement(u.z,{lazy:!1,collapsed:s,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){E(e),L(!e)}},r.createElement("div",{className:p},n)))}var Z="details_BAp3";function N(e){var t=Object.assign({},e);return r.createElement(E,(0,a.Z)({},t,{className:(0,m.Z)("alert alert--info",Z,t.className)}))}var L=n(38676);function _(e){return r.createElement(L.Z,e)}var k="img_E7b_";var y={head:function(e){var t=r.Children.map(e.children,(function(e){return function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){var a=e.props,i=(a.mdxType,a.originalType,(0,l.Z)(a,c));return r.createElement(e.props.originalType,i)}return e}(e)}));return r.createElement(i.Z,e,t)},code:function(e){var t=["a","b","big","i","span","em","strong","sup","sub","small"];return r.Children.toArray(e.children).every((function(e){return"string"==typeof e&&!e.includes("\n")||(0,r.isValidElement)(e)&&t.includes(e.props.mdxType)}))?r.createElement("code",e):r.createElement(o.Z,e)},a:function(e){return r.createElement(s.Z,e)},pre:function(e){var t;return r.createElement(o.Z,(0,r.isValidElement)(e.children)&&"code"===e.children.props.originalType?null==(t=e.children)?void 0:t.props:Object.assign({},e))},details:function(e){var t=r.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),l=r.createElement(r.Fragment,null,t.filter((function(e){return e!==n})));return r.createElement(N,(0,a.Z)({},e,{summary:n}),l)},ul:function(e){return r.createElement("ul",(0,a.Z)({},e,{className:(t=e.className,(0,m.Z)(t,(null==t?void 0:t.includes("contains-task-list"))&&"clean-list"))}));var t},img:function(e){return r.createElement("img",(0,a.Z)({loading:"lazy"},e,{className:(t=e.className,(0,m.Z)(t,k))}));var t},h1:function(e){return r.createElement(_,(0,a.Z)({as:"h1"},e))},h2:function(e){return r.createElement(_,(0,a.Z)({as:"h2"},e))},h3:function(e){return r.createElement(_,(0,a.Z)({as:"h3"},e))},h4:function(e){return r.createElement(_,(0,a.Z)({as:"h4"},e))},h5:function(e){return r.createElement(_,(0,a.Z)({as:"h5"},e))},h6:function(e){return r.createElement(_,(0,a.Z)({as:"h6"},e))}}},61428:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(67294),r=n(86010),l=n(88746);function i(e){var t=e.permalink,n=e.title,i=e.subLabel,c=e.isNext;return a.createElement(l.Z,{className:(0,r.Z)("pagination-nav__link",c?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},i&&a.createElement("div",{className:"pagination-nav__sublabel"},i),a.createElement("div",{className:"pagination-nav__label"},n))}},78473:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(87462),r=n(63366),l=n(67294),i=n(86010),c=n(91553),o="tableOfContents_cNA8",s=["className"];function m(e){var t=e.className,n=(0,r.Z)(e,s);return l.createElement("div",{className:(0,i.Z)(o,"thin-scrollbar",t)},l.createElement(c.Z,(0,a.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},91553:function(e,t,n){n.d(t,{Z:function(){return b}});var a=n(87462),r=n(63366),l=n(67294);function i(e){var t=e.toc,n=e.className,a=e.linkClassName,r=e.isChild;return t.length?l.createElement("ul",{className:r?void 0:n},t.map((function(e){return l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(i,{isChild:!0,toc:e.children,className:n,linkClassName:a}))}))):null}var c=l.memo(i),o=["parentIndex"];function s(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),n=Array(7).fill(-1);t.forEach((function(e,t){var a=n.slice(2,e.level);e.parentIndex=Math.max.apply(Math,a),n[e.level]=t}));var a=[];return t.forEach((function(e){var n=e.parentIndex,l=(0,r.Z)(e,o);n>=0?t[n].children.push(l):a.push(l)})),a}function m(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return t.flatMap((function(e){var t=m({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[Object.assign({},e,{children:t})]:t}))}var d=n(96793);function u(e){var t=e.getBoundingClientRect();return t.top===t.bottom?u(e.parentNode):t}function v(e,t){var n,a,r=t.anchorTopOffset,l=e.find((function(e){return u(e).top>=r}));return l?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(u(l))?l:null!=(a=e[e.indexOf(l)-1])?a:null:null!=(n=e[e.length-1])?n:null}function f(){var e=(0,l.useRef)(0),t=(0,d.L)().navbar.hideOnScroll;return(0,l.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function p(e){var t=(0,l.useRef)(void 0),n=f();(0,l.useEffect)((function(){if(!e)return function(){};var a=e.linkClassName,r=e.linkActiveClassName,l=e.minHeadingLevel,i=e.maxHeadingLevel;function c(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),c=function(e){for(var t=e.minHeadingLevel,n=e.maxHeadingLevel,a=[],r=t;r<=n;r+=1)a.push("h"+r+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:l,maxHeadingLevel:i}),o=v(c,{anchorTopOffset:n.current}),s=e.find((function(e){return o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,n){if(n){var a;t.current&&t.current!==e&&(null==(a=t.current)||a.classList.remove(r)),e.classList.add(r),t.current=e}else e.classList.remove(r)}(e,e===s)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),function(){document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,n])}var h=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function b(e){var t=e.toc,n=e.className,i=void 0===n?"table-of-contents table-of-contents__left-border":n,o=e.linkClassName,u=void 0===o?"table-of-contents__link":o,v=e.linkActiveClassName,f=void 0===v?void 0:v,b=e.minHeadingLevel,g=e.maxHeadingLevel,E=(0,r.Z)(e,h),Z=(0,d.L)(),N=null!=b?b:Z.tableOfContents.minHeadingLevel,L=null!=g?g:Z.tableOfContents.maxHeadingLevel,_=function(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return(0,l.useMemo)((function(){return m({toc:s(t),minHeadingLevel:n,maxHeadingLevel:a})}),[t,n,a])}({toc:t,minHeadingLevel:N,maxHeadingLevel:L});return p((0,l.useMemo)((function(){if(u&&f)return{linkClassName:u,linkActiveClassName:f,minHeadingLevel:N,maxHeadingLevel:L}}),[u,f,N,L])),l.createElement(c,(0,a.Z)({toc:_,className:i,linkClassName:u},E))}},63865:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(67294),r=n(86010),l=n(88746),i="tag_hD8n",c="tagRegular_D6E_",o="tagWithCount_i0QQ";function s(e){var t=e.permalink,n=e.label,s=e.count;return a.createElement(l.Z,{href:t,className:(0,r.Z)(i,s?o:c)},n,s&&a.createElement("span",null,s))}},41921:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(67294),r=n(86010),l=n(11614),i=n(63865),c="tags_XVD_",o="tag_JSN8";function s(e){var t=e.tags;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,r.Z)(c,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,n=e.permalink;return a.createElement("li",{key:n,className:o},a.createElement(i.Z,{label:t,permalink:n}))}))))}},6141:function(e,t,n){n.d(t,{E:function(){return c},q:function(){return i}});var a=n(67294),r=n(58494),l=a.createContext(null);function i(e){var t=e.children,n=e.version;return a.createElement(l.Provider,{value:n},t)}function c(){var e=(0,a.useContext)(l);if(null===e)throw new r.i6("DocsVersionProvider");return e}},15987:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(67294),r=n(76775),l=n(51402),i=n(52426),c=n(11614),o=n(35601);function s(e){var t=e.editUrl,n=(0,r.TH)().pathname,s=(0,o.gA)(),m=(0,i.usePluginData)("docusaurus-plugin-docs-editor"),d=function(){if(s){var e=n;return n.startsWith("/")&&(e=e.slice(1)),"/"+m.route+"/"+e}}();return a.createElement(a.Fragment,null,d&&a.createElement(a.Fragment,null,a.createElement("a",{href:(0,l.Z)(d),target:"_blank",rel:"noreferrer noopener"},"Open in editor"),a.createElement("span",{className:"margin-horiz--sm"},"|")),a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},a.createElement(c.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Open on GitHub")))}}}]);