"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[46103,29514,1755],{91891:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(67294),r=n(45697),l=n.n(r),o=n(86010),s=n(3905),i=n(54416),c=n(51384),m=n(51402),u=n(29085),d=n(83949),p=n(30513),f={blogHeader:"blogHeader_11Jz",blogPostTitle:"blogPostTitle_nmLu",blogPost__body:"blogPost__body_1F6N",blogPostData:"blogPostData_3WzT",blogPostDetailsFull:"blogPostDetailsFull_3bEF",blogPostDataContainer:"blogPostDataContainer_1pWc"},g=n(21192),v=n(16509);function b(e){var t,n,r,l,b=(r=(0,u.c2)().selectMessage,function(e){var t=Math.ceil(e);return r(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),h=(0,m.C)().withBaseUrl,_=e.children,E=e.frontMatter,N=e.assets,k=e.metadata,y=e.truncated,Z=e.isBlogPostPage,w=void 0!==Z&&Z,T=k.date,P=k.formattedDate,D=k.tags,C=k.readingTime,x=k.title,B=k.editUrl,O=k.authors,R=null!=(t=N.image)?t:E.image,U=E.url;return a.createElement("article",{className:w?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(l=w?"h1":"h2",a.createElement("header",{className:f.blogHeader},a.createElement(l,{className:f.blogPostTitle,itemProp:"headline"},w?x:a.createElement(c.Z,{itemProp:"url",to:U},x)),a.createElement("div",{className:"row row--no-gutters"},a.createElement("div",{className:"col"},a.createElement(v.Z,{authors:O,assets:N})),a.createElement("div",{className:(0,o.Z)(f.blogPostData,"margin-vert--md","col")},a.createElement("div",{className:f.blogPostDataContainer},a.createElement("time",{dateTime:T,itemProp:"datePublished"},P),void 0!==C&&a.createElement(a.Fragment,null," \xb7 ",b(C))))))),R&&a.createElement("meta",{itemProp:"image",content:h(R,{absolute:!0})}),a.createElement("div",{className:(0,o.Z)("markdown",[f.blogPost__body]),itemProp:"articleBody"},a.createElement(s.Zo,{components:d.Z},_)),(D.length>0||y)&&a.createElement("footer",{className:(0,o.Z)("row docusaurus-mt-lg",(n={},n[f.blogPostDetailsFull]=w,n))},D.length>0&&a.createElement("div",{className:(0,o.Z)("col",{"col--9":!w})},a.createElement("div",{className:f.tagsList},a.createElement(g.Z,{tags:D}))),w&&B&&a.createElement("div",{className:"col margin-top--sm"},a.createElement(p.Z,{editUrl:B})),!w&&y&&a.createElement("div",{className:"col col--3 text--right"},a.createElement(c.Z,{to:k.permalink,"aria-label":"Read more about "+x},a.createElement("b",null,a.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}b.propTypes={children:l().node,frontMatter:l().object,assets:l().object,metadata:l().shape({date:l().string,formattedDate:l().string,permalink:l().string,tags:l().arrayOf(l().object),readingTime:l().string,title:l().string,editUrl:l().string,authors:l().arrayOf(l().object)}),truncated:l().bool,isBlogPostPage:l().bool},b.defaultProps={isBlogPostPage:!1};var h=b},30513:function(e,t,n){var a=n(67294),r=n(54416),l=n(23779),o=n(76725),s=n(45697),i=n.n(s);function c(e){var t=e.editUrl,n=function(e){var t=new RegExp("external/[^/]*/","i");return e.replace(t,"")}(t);return a.createElement(a.Fragment,null,function(e){return new RegExp("external/[^/]*/","i").test(e)}(t)?a.createElement("a",{href:n,target:"_blank",rel:"noreferrer noopener"},a.createElement(l.Z,null),a.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page")):a.createElement(o.Z,{editUrl:t}))}c.propTypes={editUrl:i().string},t.Z=c},32577:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(74034),r=n(79973),l=n(67294),o=n(86010),s=n(51384),i=n(29085),c=n(51402),m=n(45697),u=n.n(m),d=n(34455);function p(e){var t=e.title,n=e.icon,a=e.url,r=e.backgroundColor;return l.createElement("a",{className:"social__link padding-horiz--sm padding-vert--md",style:{backgroundColor:r},href:a},l.createElement("div",{className:"social__font social__icon"},n),l.createElement("div",{className:"social__title"},t))}p.propTypes={title:u().string,icon:u().string,url:u().string,backgroundColor:u().string};var f=function(){var e=(0,i.LU)().socials;return l.createElement("div",{className:"social"},e&&e.map((function(e,t){return l.createElement(p,(0,a.Z)({key:t},e))})))},g=["to","href","label","prependBaseUrlToHref"];function v(e){var t=e.to,n=e.href,o=e.label,i=e.prependBaseUrlToHref,m=(0,r.Z)(e,g),u=(0,c.Z)(t),d=(0,c.Z)(n,{forcePrependBaseUrl:!0});return l.createElement(s.Z,(0,a.Z)({className:"footer__link-item"},n?{href:i?d:n}:{to:u},m),o)}v.propTypes={to:u().string,href:u().string,label:u().string,prependBaseUrlToHref:u().bool};var b=function(e){var t=e.sources,n=e.alt;return l.createElement(d.Z,{className:"footer__logo",alt:n,sources:t})};b.propTypes={sources:u().shape({light:u().string,dark:u().string}),alt:u().string};var h=function(){var e=(0,i.LU)().footer,t=e||{},n=t.copyright,a=t.links,r=void 0===a?[]:a,m=t.logo,u=void 0===m?{}:m,d={light:(0,c.Z)(u.src),dark:(0,c.Z)(u.srcDark||u.src)};return e?l.createElement("footer",{className:(0,o.Z)("footer","padding--none",{"footer--dark":"dark"===e.style})},l.createElement("div",{className:"container"},r&&r.length>0&&l.createElement("div",{className:"row footer__links padding-vert--xl"},r.map((function(e,t){return l.createElement("div",{key:t,className:"col footer__col"},null!=e.title?l.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?l.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?l.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):l.createElement("li",{key:e.href||e.to,className:"footer__item"},l.createElement(v,e))}))):null)}))),(u||n)&&l.createElement("div",{className:"footer__bottom padding-bottom--xl"},u&&(u.src||u.srcDark)&&l.createElement("div",null,u.href?l.createElement(s.Z,{href:u.href},l.createElement(b,{alt:u.alt,sources:d})):l.createElement(b,{alt:u.alt,sources:d})),n?l.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:n}}):null)),l.createElement(f,null)):null}},78358:function(e,t,n){n.d(t,{O:function(){return b}});var a=n(74034),r=n(79973),l=n(67294),o=n(86010),s=n(45697),i=n.n(s),c=n(51384),m=n(51402),u=n(78168),d=n(71699),p=["activeBasePath","activeBaseRegex","to","href","label","sublabel","icon","activeClassName","prependBaseUrlToHref"],f=["className","isDropdownItem"],g=["className"],v=["mobile","to","label"];function b(e){var t=e.activeBasePath,n=e.activeBaseRegex,o=e.to,s=e.href,i=e.label,f=e.sublabel,g=e.icon,v=e.activeClassName,b=void 0===v?"navbar__link--active":v,h=e.prependBaseUrlToHref,_=(0,r.Z)(e,p),E=(0,m.Z)(o),N=(0,m.Z)(t),k=(0,m.Z)(s,{forcePrependBaseUrl:!0}),y=i&&s&&!(0,d.Z)(s),Z="dropdown__link--active"===b;return l.createElement(c.Z,(0,a.Z)({},s?{href:h?k:s}:Object.assign({isNavLink:!0,activeClassName:b,to:E},t||n?{isActive:function(e,t){return n?new RegExp(n).test(t.pathname):t.pathname.startsWith(N)}}:null),_),l.createElement("div",{className:"link"},g&&l.createElement("div",{className:"link__icon"},g),l.createElement("div",{className:"link__body"},l.createElement("div",{className:"link__label"},y?l.createElement("span",null,i,l.createElement(u.Z,Z&&{width:12,height:12})):i),f&&l.createElement("div",{className:"link__sublabel"},f))))}function h(e){var t=e.className,n=e.isDropdownItem,s=void 0!==n&&n,i=(0,r.Z)(e,f),c=l.createElement(b,(0,a.Z)({className:(0,o.Z)(s?"dropdown__link":"navbar__item navbar__link",t)},i));return s?l.createElement("li",null,c):c}function _(e){var t=e.className,n=(0,r.Z)(e,g);return delete n.isDropdownItem,l.createElement("li",{className:"menu__list-item"},l.createElement(b,(0,a.Z)({className:(0,o.Z)("menu__link",t)},n)))}function E(e){var t=e.mobile,n=void 0!==t&&t,o=e.to,s=e.label,i=(0,r.Z)(e,v);if(delete i.position,"category-header"===o){return l.createElement("li",{style:{fontSize:"10px",color:"var(--ifm-color-emphasis-600)",paddingTop:"10px"}},s)}var c=n?_:h;return l.createElement(c,(0,a.Z)({to:o,label:s},i))}b.propTypes={activeBasePath:i().string,activeBaseRegex:i().string,to:i().string,href:i().string,label:i().string,sublabel:i().string,icon:i().string,activeClassName:i().string,prependBaseUrlToHref:i().bool},b.defaultProps={activeClassName:"navbar__link--active"},h.propTypes={className:i().string,isDropdownItem:i().bool},h.defaultProps={isDropdownItem:!1},_.propTypes={className:i().string},E.propTypes={mobile:i().bool,to:i().string,label:i().string},E.defaultProps={mobile:!1},t.Z=E},61142:function(e,t,n){var a=n(74034),r=n(79973),l=n(67294),o=n(86010),s=n(45697),i=n.n(s),c=n(29085),m=n(78358),u=n(52807),d=["items","position","className"],p=["items","className"],f=["mobile"];function g(e,t){return!!(0,c.Mg)(e.to,t)||(!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||!(!e.activeBasePath||!t.startsWith(e.activeBasePath)))}function v(e){var t,n=e.items,s=e.position,i=e.className,p=(0,r.Z)(e,d),f=(0,l.useRef)(null),v=(0,l.useRef)(null),b=(0,l.useState)(!1),h=b[0],_=b[1],E=function(e,t,n){var a=t.filter((function(e){return g(e,n)}));return a.length?Object.assign({},a[0],{label:e.label+" > "+a[0].label}):e}(p,n,(0,c.be)());return(0,l.useEffect)((function(){var e=function(e){f.current&&!f.current.contains(e.target)&&_(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[f]),l.createElement("div",{ref:f,className:(0,o.Z)("dropdown","dropdown--hoverable",{"dropdown--right":"right"===s,"dropdown--show":h})},l.createElement(m.O,(0,a.Z)({className:(0,o.Z)("navbar__item navbar__link",i)},E,{onClick:p.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),_(!h))}}),null!=(t=p.children)?t:p.label),l.createElement("ul",{ref:v,className:"dropdown__menu"},n.map((function(e,t){return l.createElement(u.Z,(0,a.Z)({isDropdownItem:!0,onKeyDown:function(e){if(t===n.length-1&&"Tab"===e.key){e.preventDefault(),_(!1);var a=f.current.nextElementSibling;a&&a.focus()}},activeClassName:"dropdown__link--active"},e,{key:t}))}))))}function b(e){var t,n=e.items,s=e.className,i=(0,r.Z)(e,p);delete i.position;var d=(0,c.be)(),f=function(e,t){return e.some((function(e){return g(e,t)}))}(n,d),v=(0,c.uR)({initialState:function(){return!f}}),b=v.collapsed,h=v.toggleCollapsed,_=v.setCollapsed;return(0,l.useEffect)((function(){f&&_(!f)}),[d,f]),l.createElement("li",{className:(0,o.Z)("menu__list-item",{"menu__list-item--collapsed":b})},l.createElement(m.O,(0,a.Z)({role:"button",className:(0,o.Z)("menu__link menu__link--sublist",s)},i,{onClick:function(e){e.preventDefault(),h()}}),null!=(t=i.children)?t:i.label),l.createElement(c.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:b},n.map((function(e,t){return l.createElement(u.Z,(0,a.Z)({mobile:!0,isDropdownItem:!0,onClick:i.onClick,activeClassName:"menu__link--active"},e,{key:t}))}))))}function h(e){var t=e.mobile,n=void 0!==t&&t,a=(0,r.Z)(e,f);delete a.isDropdownItem;var o=n?b:v;return l.createElement(o,a)}v.propTypes=Object.assign({items:i().array,position:i().string,className:i().string},m.O.propTypes),b.propTypes=Object.assign({items:i().array,className:i().string},m.O.propTypes),h.propTypes={mobile:i().bool},h.defaultProps={mobile:!1},t.Z=h},52807:function(e,t,n){n.d(t,{Z:function(){return x}});var a=n(74034),r=n(79973),l=n(67294),o=n(45697),s=n.n(o),i=n(78358),c=n(61142),m=n(86010),u=n(29085),d=n(98565),p=["items","label","className"],f=["className","to","href","label"],g=["items_","layout","position","className"],v=["items_","className"],b=["mobile"];function h(e,t){return e.some((function(e){e.items?h(e.items,t):function(e,t){!!(0,u.Mg)(e.to,t)||!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||(!e.activeBasePath||t.startsWith(e.activeBasePath))}(e,t)}))}function _(e){var t,n=e.items,a=e.label,l=e.className,o=(0,r.Z)(e,p),s={items:[],index:0};n?(a&&s.items.push({label:a,className:l}),(t=s.items).push.apply(t,n)):s.items.push(Object.assign({label:a,className:l},o));return s}function E(e){var t=e.className,n=e.to,o=e.href,s=e.label,c=(0,r.Z)(e,f);if(n||o)return l.createElement(i.O,(0,a.Z)({className:(0,m.Z)("dropdown__link",t),activeClassName:"dropdown__link--active",to:n,href:o,label:s},c));if(s)return l.createElement("div",{className:"dropdown__label"},s);throw"Mega dropdown item must be a link or a category header."}function N(e){var t,n=e.items_,o=e.layout,s=e.position,c=e.className,p=(0,r.Z)(e,g),f=h(n,(0,u.be)()),v=(0,l.useRef)(null),b=(0,l.useState)(!1),N=b[0],k=b[1],y=(0,u.LU)().navbar.hideOnScroll,Z=(0,d.Z)(y).isNavbarVisible,w=n.map(_),T=o.length,P=Math.max.apply(Math,o.map((function(e){return e.split(/\s+/).length}))),D=[];o.forEach((function(e,t){e.split(/\s+/).forEach((function(e,n){e&&"."!==e&&(D[t+n*T]=e)}))}));for(var C=D.map((function(e){var t,n=w[e];if(n)return null!=(t=n.items[n.index++])?t:null})),x=[],B=null,O=0;O<T;O++){for(var R=[],U=0;U<P;U++){var I=C[O+U*T];R.push(I),I&&(B=I)}x.push(R)}return B.onKeyDown=function(e){"Tab"===e.key&&k(!1)},(0,l.useEffect)((function(){Z||k(!1)}),[Z]),(0,l.useEffect)((function(){var e=function(e){v.current&&!v.current.contains(e.target)&&k(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[v]),l.createElement("div",{ref:v,className:(0,m.Z)("dropdown","dropdown--hoverable","dropdown--mega",{"dropdown--right":"right"===s,"dropdown--show":N}),onMouseLeave:function(){return k(!1)}},l.createElement(i.O,(0,a.Z)({className:(0,m.Z)("navbar__item navbar__link",c,{"navbar__link--active":f})},p,{onClick:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),k(!N))},onMouseEnter:function(){return k(!0)}}),null!=(t=p.children)?t:p.label),l.createElement("div",{className:"dropdown__container"},l.createElement("div",{className:"dropdown__menu"},x.map((function(e,t){return l.createElement("div",{className:"row row--no-gutters dropdown__row",key:t},e.map((function(e,t){return l.createElement("div",{className:"col margin-horiz--xs dropdown__col",key:t},e?l.createElement(E,e):null)})))})))))}function k(e){var t,n=e.items_,o=e.className,s=(0,r.Z)(e,v);delete s.position,delete s.layout;var c=(0,u.be)(),d=h(n,c),p=(0,u.uR)({initialState:function(){return!d}}),f=p.collapsed,g=p.toggleCollapsed,b=p.setCollapsed;return(0,l.useEffect)((function(){d&&b(!d)}),[c,d]),l.createElement("li",{className:(0,m.Z)("menu__list-item",{"menu__list-item--collapsed":f})},l.createElement(i.O,(0,a.Z)({role:"button",className:(0,m.Z)("menu__link menu__link--sublist",o)},s,{onClick:function(e){e.preventDefault(),g()}}),null!=(t=s.children)?t:s.label),l.createElement(u.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:f},n.map((function(e,t){return l.createElement(x,(0,a.Z)({mobile:!0,isDropdownItem:!0,onClick:s.onClick,activeClassName:"menu__link--active"},e,{key:t}))}))))}function y(e){var t=e.mobile,n=void 0!==t&&t,a=(0,r.Z)(e,b),o=n?k:N;return l.createElement(o,a)}E.propTypes={className:s().string,to:s().string,href:s().string,label:s().string},N.propTypes=Object.assign({items_:s().array,layout:s().arrayOf(s().string),position:s().string,className:s().string},i.O.propTypes),k.propTypes=Object.assign({items_:s().array,className:s().string},i.O.propTypes),y.propTypes={mobile:s().bool},y.defaultProps={mobile:!1};var Z=y,w=n(36508),T=n(62437),P=["type","items","layout"],D={default:function(){return i.Z},localeDropdown:function(){return w.Z},search:function(){return T.Z},dropdown:function(){return c.Z},megaDropdown:function(){return Z},docsVersion:function(){return n(39693).Z},docsVersionDropdown:function(){return n(74493).Z},doc:function(){return n(36673).Z}};function C(e){var t=e.type,n=e.items,o=e.layout,s=(0,r.Z)(e,P),i=function(e,t,n){return n?"megaDropdown":e&&"default"!==e?e:t?"dropdown":"default"}(t,void 0!==n,void 0!==o),c=function(e){var t=D[e];if(!t)throw new Error('No NavbarItem component found for type "'+e+'".');return t()}(i);return l.createElement(c,(0,a.Z)({items:n,layout:o},s))}C.propTypes={type:s().string,items:s().array,layout:s().arrayOf(s().string)};var x=C},5086:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(74034),r=n(67294),l=n(45697),o=n.n(l),s=n(29085),i=n(5730),c=n(86010),m=(0,r.memo)((function(e){var t=e.className,n=e.styles,a=e.icons,l=e.checked,o=e.disabled,s=e.onChange,i=(0,r.useState)(l),m=i[0],u=i[1],d=(0,r.useState)(!1),p=d[0],f=d[1],g=(0,r.useRef)(null);return r.createElement("div",{className:(0,c.Z)("toggle",t,{"toggle--checked":m,"toggle--focused":p,"toggle--disabled":o}),role:"button",tabIndex:-1,onClick:function(){var e;return null==(e=g.current)?void 0:e.click()}},r.createElement("div",{className:"toggle__icon toggle__icon--unchecked",style:n.unchecked},a.unchecked),r.createElement("div",{className:"toggle__icon toggle__icon--checked",style:n.checked},a.checked),r.createElement("input",{ref:g,checked:m,type:"checkbox",className:"toggle__screenreader-only","aria-label":"Switch between dark and light mode",onChange:s,onClick:function(){return u(!m)},onFocus:function(){return f(!0)},onBlur:function(){return f(!1)},onKeyDown:function(e){var t;"Enter"===e.key&&(null==(t=g.current)||t.click())}}))}));function u(e){var t=(0,s.LU)().colorMode.switchConfig,n=t.darkIcon,l=t.darkIconStyle,o=t.lightIcon,c=t.lightIconStyle,u=(0,i.Z)();return r.createElement(m,(0,a.Z)({disabled:!u,styles:{unchecked:c,checked:l},icons:{unchecked:o,checked:n}},e))}m.displayName="ToggleMemo",m.propTypes={className:o().string,styles:o().shape({unchecked:o().any,checked:o().any}),icons:o().shape({unchecked:o().string,checked:o().string}),checked:o().bool,disabled:o().bool,onChange:o().func}}}]);