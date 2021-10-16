"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[48610,29514,1755,46103],{18607:function(e,t,a){a.d(t,{Z:function(){return v}});var n=a(79973),r=a(67294),l=a(86010),o=a(70301),i=a(51384),s="sidebar_2ahu",c="sidebarItemTitle_2hhb",m="sidebarItemList_2xAf",u="sidebarItem_2UVv",d="sidebarItemLink_1RT6",p="sidebarItemLinkActive_12pM",g=a(54416);function f(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("nav",{className:(0,l.Z)(s,"thin-scrollbar"),"aria-label":(0,g.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(c,"margin-bottom--md")},t.title),r.createElement("ul",{className:m},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:u},r.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:p},e.title))}))))}var h=["sidebar","toc","children"];var v=function(e){var t=e.sidebar,a=e.toc,i=e.children,s=(0,n.Z)(e,h),c=t&&t.items.length>0;return r.createElement(o.Z,s,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},c&&r.createElement("aside",{className:"col col--3"},r.createElement(f,{sidebar:t})),r.createElement("main",{className:(0,l.Z)("col",{"col--7":c,"col--9 col--offset-1":!c}),itemScope:!0,itemType:"http://schema.org/Blog"},i),a&&r.createElement("div",{className:"col col--2"},a))))}},16509:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(67294),r=a(86010),l=a(51384),o="image_1yU8";var i=function(e){var t=e.author,a=t.name,r=t.title,i=t.url,s=t.imageURL;return n.createElement("div",{className:"avatar margin-bottom--sm"},s&&n.createElement(l.Z,{className:"avatar__photo-link avatar__photo",href:i},n.createElement("img",{className:o,src:s,alt:a})),a&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(l.Z,{href:i,itemProp:"url"},n.createElement("span",{itemProp:"name"},a))),r&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},r)))},s="authorCol_1R69";function c(e){var t=e.authors,a=e.assets;return 0===t.length?n.createElement(n.Fragment,null):n.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map((function(e,t){var l;return n.createElement("div",{className:(0,r.Z)("col col--6",s),key:t},n.createElement(i,{author:Object.assign({},e,{imageURL:null!=(l=a.authorsImageUrls[t])?l:e.imageURL})}))})))}},82100:function(e,t,a){a.r(t),a.d(t,{default:function(){return c}});var n=a(67294),r=a(51384),l=a(18607),o=a(91891),i=a(54416),s=a(29085);function c(e){var t,a=e.metadata,c=e.items,m=e.sidebar,u=a.allTagsPath,d=a.name,p=a.count,g=(t=(0,s.c2)().selectMessage,function(e){return t(e,(0,i.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}),f=(0,i.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:g(p),tagName:d});return n.createElement(l.Z,{title:f,wrapperClassName:s.kM.wrapper.blogPages,pageClassName:s.kM.page.blogTagPostListPage,searchMetadatas:{tag:"blog_tags_posts"},sidebar:m},n.createElement("header",{className:"margin-bottom--xl"},n.createElement("h1",null,f),n.createElement(r.Z,{href:u},n.createElement(i.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),c.map((function(e){var t=e.content;return n.createElement(o.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:!0},n.createElement(t,null))})))}},76725:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(67294),r=a(54416),l=a(23779),o=a(29085);function i(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:o.kM.common.editThisPage},n.createElement(l.Z,null),n.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},60153:function(e,t,a){a.d(t,{N:function(){return d},Z:function(){return p}});var n=a(79973),r=a(74034),l=a(67294),o=a(86010),i=a(54416),s=a(29085),c="anchorWithStickyNavbar_31ik",m="anchorWithHideOnScrollNavbar_3R7-",u=["id"],d=function(e){var t=Object.assign({},e);return l.createElement("header",null,l.createElement("h1",(0,r.Z)({},t,{id:void 0}),t.children))},p=function(e){return"h1"===e?d:(t=e,function(e){var a,d=e.id,p=(0,n.Z)(e,u),g=(0,s.LU)().navbar.hideOnScroll;return d?l.createElement(t,(0,r.Z)({},p,{className:(0,o.Z)("anchor",(a={},a[m]=g,a[c]=!g,a)),id:d}),p.children,l.createElement("a",{"aria-hidden":"true",className:"hash-link",href:"#"+d,title:(0,i.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):l.createElement(t,p)});var t}},23779:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(74034),r=a(79973),l=a(67294),o=a(86010),i="iconEdit_2_ui",s=["className"],c=function(e){var t=e.className,a=(0,r.Z)(e,s);return l.createElement("svg",(0,n.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,o.Z)(i,t),"aria-hidden":"true"},a),l.createElement("g",null,l.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}},83949:function(e,t,a){a.d(t,{Z:function(){return f}});var n=a(74034),r=a(79973),l=a(67294),o=a(9932),i=a(51384),s=a(48235),c=a(60153),m=a(86010),u=a(29085),d="details_1VDD";function p(e){var t=Object.assign({},e);return l.createElement(u.PO,(0,n.Z)({},t,{className:(0,m.Z)("alert alert--info",d,t.className)}))}var g=["mdxType","originalType"];var f={head:function(e){var t=l.Children.map(e.children,(function(e){return function(e){var t,a;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(a=e.props)&&a.originalType){var n=e.props,o=(n.mdxType,n.originalType,(0,r.Z)(n,g));return l.createElement(e.props.originalType,o)}return e}(e)}));return l.createElement(o.Z,e,t)},code:function(e){var t=e.children;return(0,l.isValidElement)(t)?t:t.includes("\n")?l.createElement(s.Z,e):l.createElement("code",e)},a:function(e){return l.createElement(i.Z,e)},pre:function(e){var t,a=e.children;return(0,l.isValidElement)(a)&&(0,l.isValidElement)(null==a||null==(t=a.props)?void 0:t.children)?a.props.children:l.createElement(s.Z,(0,l.isValidElement)(a)?null==a?void 0:a.props:Object.assign({},e))},details:function(e){var t=l.Children.toArray(e.children),a=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),r=l.createElement(l.Fragment,null,t.filter((function(e){return e!==a})));return l.createElement(p,(0,n.Z)({},e,{summary:a}),r)},h1:(0,c.Z)("h1"),h2:(0,c.Z)("h2"),h3:(0,c.Z)("h3"),h4:(0,c.Z)("h4"),h5:(0,c.Z)("h5"),h6:(0,c.Z)("h6")}},19004:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(67294),r=a(86010),l=a(51384),o="tag_1Okp",i="tagRegular_3MiF",s="tagWithCount_1HU1";var c=function(e){var t,a=e.permalink,c=e.name,m=e.count;return n.createElement(l.Z,{href:a,className:(0,r.Z)(o,(t={},t[i]=!m,t[s]=m,t))},c,m&&n.createElement("span",null,m))}},21192:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(67294),r=a(86010),l=a(54416),o=a(19004),i="tags_2ga9",s="tag_11ep";function c(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,r.Z)(i,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:s},n.createElement(o.Z,{name:t,permalink:a}))}))))}},91891:function(e,t,a){a.d(t,{Z:function(){return b}});var n=a(67294),r=a(45697),l=a.n(r),o=a(86010),i=a(3905),s=a(54416),c=a(51384),m=a(51402),u=a(29085),d=a(83949),p=a(30513),g={blogHeader:"blogHeader_11Jz",blogPostTitle:"blogPostTitle_nmLu",blogPost__body:"blogPost__body_1F6N",blogPostData:"blogPostData_3WzT",blogPostDetailsFull:"blogPostDetailsFull_3bEF",blogPostDataContainer:"blogPostDataContainer_1pWc"},f=a(21192),h=a(16509);function v(e){var t,a,r,l,v=(r=(0,u.c2)().selectMessage,function(e){var t=Math.ceil(e);return r(t,(0,s.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),b=(0,m.C)().withBaseUrl,E=e.children,_=e.frontMatter,N=e.assets,Z=e.metadata,k=e.truncated,y=e.isBlogPostPage,w=void 0!==y&&y,T=Z.date,P=Z.formattedDate,C=Z.tags,D=Z.readingTime,x=Z.title,B=Z.editUrl,L=Z.authors,O=null!=(t=N.image)?t:_.image,U=_.url;return n.createElement("article",{className:w?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(l=w?"h1":"h2",n.createElement("header",{className:g.blogHeader},n.createElement(l,{className:g.blogPostTitle,itemProp:"headline"},w?x:n.createElement(c.Z,{itemProp:"url",to:U},x)),n.createElement("div",{className:"row row--no-gutters"},n.createElement("div",{className:"col"},n.createElement(h.Z,{authors:L,assets:N})),n.createElement("div",{className:(0,o.Z)(g.blogPostData,"margin-vert--md","col")},n.createElement("div",{className:g.blogPostDataContainer},n.createElement("time",{dateTime:T,itemProp:"datePublished"},P),void 0!==D&&n.createElement(n.Fragment,null," \xb7 ",v(D))))))),O&&n.createElement("meta",{itemProp:"image",content:b(O,{absolute:!0})}),n.createElement("div",{className:(0,o.Z)("markdown",[g.blogPost__body]),itemProp:"articleBody"},n.createElement(i.Zo,{components:d.Z},E)),(C.length>0||k)&&n.createElement("footer",{className:(0,o.Z)("row docusaurus-mt-lg",(a={},a[g.blogPostDetailsFull]=w,a))},C.length>0&&n.createElement("div",{className:(0,o.Z)("col",{"col--9":!w})},n.createElement("div",{className:g.tagsList},n.createElement(f.Z,{tags:C}))),w&&B&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(p.Z,{editUrl:B})),!w&&k&&n.createElement("div",{className:"col col--3 text--right"},n.createElement(c.Z,{to:Z.permalink,"aria-label":"Read more about "+x},n.createElement("b",null,n.createElement(s.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}v.propTypes={children:l().node,frontMatter:l().object,assets:l().object,metadata:l().shape({date:l().string,formattedDate:l().string,permalink:l().string,tags:l().arrayOf(l().object),readingTime:l().string,title:l().string,editUrl:l().string,authors:l().arrayOf(l().object)}),truncated:l().bool,isBlogPostPage:l().bool},v.defaultProps={isBlogPostPage:!1};var b=v},30513:function(e,t,a){var n=a(67294),r=a(54416),l=a(23779),o=a(76725),i=a(45697),s=a.n(i);function c(e){var t=e.editUrl,a=function(e){var t=new RegExp("external/[^/]*/","i");return e.replace(t,"")}(t);return n.createElement(n.Fragment,null,function(e){return new RegExp("external/[^/]*/","i").test(e)}(t)?n.createElement("a",{href:a,target:"_blank",rel:"noreferrer noopener"},n.createElement(l.Z,null),n.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page")):n.createElement(o.Z,{editUrl:t}))}c.propTypes={editUrl:s().string},t.Z=c},32577:function(e,t,a){a.d(t,{Z:function(){return b}});var n=a(74034),r=a(79973),l=a(67294),o=a(86010),i=a(51384),s=a(29085),c=a(51402),m=a(45697),u=a.n(m),d=a(34455);function p(e){var t=e.title,a=e.icon,n=e.url,r=e.backgroundColor;return l.createElement("a",{className:"social__link padding-horiz--sm padding-vert--md",style:{backgroundColor:r},href:n},l.createElement("div",{className:"social__font social__icon"},a),l.createElement("div",{className:"social__title"},t))}p.propTypes={title:u().string,icon:u().string,url:u().string,backgroundColor:u().string};var g=function(){var e=(0,s.LU)().socials;return l.createElement("div",{className:"social"},e&&e.map((function(e,t){return l.createElement(p,(0,n.Z)({key:t},e))})))},f=["to","href","label","prependBaseUrlToHref"];function h(e){var t=e.to,a=e.href,o=e.label,s=e.prependBaseUrlToHref,m=(0,r.Z)(e,f),u=(0,c.Z)(t),d=(0,c.Z)(a,{forcePrependBaseUrl:!0});return l.createElement(i.Z,(0,n.Z)({className:"footer__link-item"},a?{href:s?d:a}:{to:u},m),o)}h.propTypes={to:u().string,href:u().string,label:u().string,prependBaseUrlToHref:u().bool};var v=function(e){var t=e.sources,a=e.alt;return l.createElement(d.Z,{className:"footer__logo",alt:a,sources:t})};v.propTypes={sources:u().shape({light:u().string,dark:u().string}),alt:u().string};var b=function(){var e=(0,s.LU)().footer,t=e||{},a=t.copyright,n=t.links,r=void 0===n?[]:n,m=t.logo,u=void 0===m?{}:m,d={light:(0,c.Z)(u.src),dark:(0,c.Z)(u.srcDark||u.src)};return e?l.createElement("footer",{className:(0,o.Z)("footer","padding--none",{"footer--dark":"dark"===e.style})},l.createElement("div",{className:"container"},r&&r.length>0&&l.createElement("div",{className:"row footer__links padding-vert--xl"},r.map((function(e,t){return l.createElement("div",{key:t,className:"col footer__col"},null!=e.title?l.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?l.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?l.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):l.createElement("li",{key:e.href||e.to,className:"footer__item"},l.createElement(h,e))}))):null)}))),(u||a)&&l.createElement("div",{className:"footer__bottom padding-bottom--xl"},u&&(u.src||u.srcDark)&&l.createElement("div",null,u.href?l.createElement(i.Z,{href:u.href},l.createElement(v,{alt:u.alt,sources:d})):l.createElement(v,{alt:u.alt,sources:d})),a?l.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:a}}):null)),l.createElement(g,null)):null}},78358:function(e,t,a){a.d(t,{O:function(){return v}});var n=a(74034),r=a(79973),l=a(67294),o=a(86010),i=a(45697),s=a.n(i),c=a(51384),m=a(51402),u=a(78168),d=a(71699),p=["activeBasePath","activeBaseRegex","to","href","label","sublabel","icon","activeClassName","prependBaseUrlToHref"],g=["className","isDropdownItem"],f=["className"],h=["mobile","to","label"];function v(e){var t=e.activeBasePath,a=e.activeBaseRegex,o=e.to,i=e.href,s=e.label,g=e.sublabel,f=e.icon,h=e.activeClassName,v=void 0===h?"navbar__link--active":h,b=e.prependBaseUrlToHref,E=(0,r.Z)(e,p),_=(0,m.Z)(o),N=(0,m.Z)(t),Z=(0,m.Z)(i,{forcePrependBaseUrl:!0}),k=s&&i&&!(0,d.Z)(i),y="dropdown__link--active"===v;return l.createElement(c.Z,(0,n.Z)({},i?{href:b?Z:i}:Object.assign({isNavLink:!0,activeClassName:v,to:_},t||a?{isActive:function(e,t){return a?new RegExp(a).test(t.pathname):t.pathname.startsWith(N)}}:null),E),l.createElement("div",{className:"link"},f&&l.createElement("div",{className:"link__icon"},f),l.createElement("div",{className:"link__body"},l.createElement("div",{className:"link__label"},k?l.createElement("span",null,s,l.createElement(u.Z,y&&{width:12,height:12})):s),g&&l.createElement("div",{className:"link__sublabel"},g))))}function b(e){var t=e.className,a=e.isDropdownItem,i=void 0!==a&&a,s=(0,r.Z)(e,g),c=l.createElement(v,(0,n.Z)({className:(0,o.Z)(i?"dropdown__link":"navbar__item navbar__link",t)},s));return i?l.createElement("li",null,c):c}function E(e){var t=e.className,a=(0,r.Z)(e,f);return delete a.isDropdownItem,l.createElement("li",{className:"menu__list-item"},l.createElement(v,(0,n.Z)({className:(0,o.Z)("menu__link",t)},a)))}function _(e){var t=e.mobile,a=void 0!==t&&t,o=e.to,i=e.label,s=(0,r.Z)(e,h);if(delete s.position,"category-header"===o){return l.createElement("li",{style:{fontSize:"10px",color:"var(--ifm-color-emphasis-600)",paddingTop:"10px"}},i)}var c=a?E:b;return l.createElement(c,(0,n.Z)({to:o,label:i},s))}v.propTypes={activeBasePath:s().string,activeBaseRegex:s().string,to:s().string,href:s().string,label:s().string,sublabel:s().string,icon:s().string,activeClassName:s().string,prependBaseUrlToHref:s().bool},v.defaultProps={activeClassName:"navbar__link--active"},b.propTypes={className:s().string,isDropdownItem:s().bool},b.defaultProps={isDropdownItem:!1},E.propTypes={className:s().string},_.propTypes={mobile:s().bool,to:s().string,label:s().string},_.defaultProps={mobile:!1},t.Z=_},61142:function(e,t,a){var n=a(74034),r=a(79973),l=a(67294),o=a(86010),i=a(45697),s=a.n(i),c=a(29085),m=a(78358),u=a(52807),d=["items","position","className"],p=["items","className"],g=["mobile"];function f(e,t){return!!(0,c.Mg)(e.to,t)||(!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||!(!e.activeBasePath||!t.startsWith(e.activeBasePath)))}function h(e){var t,a=e.items,i=e.position,s=e.className,p=(0,r.Z)(e,d),g=(0,l.useRef)(null),h=(0,l.useRef)(null),v=(0,l.useState)(!1),b=v[0],E=v[1],_=function(e,t,a){var n=t.filter((function(e){return f(e,a)}));return n.length?Object.assign({},n[0],{label:e.label+" > "+n[0].label}):e}(p,a,(0,c.be)());return(0,l.useEffect)((function(){var e=function(e){g.current&&!g.current.contains(e.target)&&E(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[g]),l.createElement("div",{ref:g,className:(0,o.Z)("dropdown","dropdown--hoverable",{"dropdown--right":"right"===i,"dropdown--show":b})},l.createElement(m.O,(0,n.Z)({className:(0,o.Z)("navbar__item navbar__link",s)},_,{onClick:p.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),E(!b))}}),null!=(t=p.children)?t:p.label),l.createElement("ul",{ref:h,className:"dropdown__menu"},a.map((function(e,t){return l.createElement(u.Z,(0,n.Z)({isDropdownItem:!0,onKeyDown:function(e){if(t===a.length-1&&"Tab"===e.key){e.preventDefault(),E(!1);var n=g.current.nextElementSibling;n&&n.focus()}},activeClassName:"dropdown__link--active"},e,{key:t}))}))))}function v(e){var t,a=e.items,i=e.className,s=(0,r.Z)(e,p);delete s.position;var d=(0,c.be)(),g=function(e,t){return e.some((function(e){return f(e,t)}))}(a,d),h=(0,c.uR)({initialState:function(){return!g}}),v=h.collapsed,b=h.toggleCollapsed,E=h.setCollapsed;return(0,l.useEffect)((function(){g&&E(!g)}),[d,g]),l.createElement("li",{className:(0,o.Z)("menu__list-item",{"menu__list-item--collapsed":v})},l.createElement(m.O,(0,n.Z)({role:"button",className:(0,o.Z)("menu__link menu__link--sublist",i)},s,{onClick:function(e){e.preventDefault(),b()}}),null!=(t=s.children)?t:s.label),l.createElement(c.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:v},a.map((function(e,t){return l.createElement(u.Z,(0,n.Z)({mobile:!0,isDropdownItem:!0,onClick:s.onClick,activeClassName:"menu__link--active"},e,{key:t}))}))))}function b(e){var t=e.mobile,a=void 0!==t&&t,n=(0,r.Z)(e,g);delete n.isDropdownItem;var o=a?v:h;return l.createElement(o,n)}h.propTypes=Object.assign({items:s().array,position:s().string,className:s().string},m.O.propTypes),v.propTypes=Object.assign({items:s().array,className:s().string},m.O.propTypes),b.propTypes={mobile:s().bool},b.defaultProps={mobile:!1},t.Z=b},52807:function(e,t,a){a.d(t,{Z:function(){return x}});var n=a(74034),r=a(79973),l=a(67294),o=a(45697),i=a.n(o),s=a(78358),c=a(61142),m=a(86010),u=a(29085),d=a(98565),p=["items","label","className"],g=["className","to","href","label"],f=["items_","layout","position","className"],h=["items_","className"],v=["mobile"];function b(e,t){return e.some((function(e){e.items?b(e.items,t):function(e,t){!!(0,u.Mg)(e.to,t)||!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||(!e.activeBasePath||t.startsWith(e.activeBasePath))}(e,t)}))}function E(e){var t,a=e.items,n=e.label,l=e.className,o=(0,r.Z)(e,p),i={items:[],index:0};a?(n&&i.items.push({label:n,className:l}),(t=i.items).push.apply(t,a)):i.items.push(Object.assign({label:n,className:l},o));return i}function _(e){var t=e.className,a=e.to,o=e.href,i=e.label,c=(0,r.Z)(e,g);if(a||o)return l.createElement(s.O,(0,n.Z)({className:(0,m.Z)("dropdown__link",t),activeClassName:"dropdown__link--active",to:a,href:o,label:i},c));if(i)return l.createElement("div",{className:"dropdown__label"},i);throw"Mega dropdown item must be a link or a category header."}function N(e){var t,a=e.items_,o=e.layout,i=e.position,c=e.className,p=(0,r.Z)(e,f),g=b(a,(0,u.be)()),h=(0,l.useRef)(null),v=(0,l.useState)(!1),N=v[0],Z=v[1],k=(0,u.LU)().navbar.hideOnScroll,y=(0,d.Z)(k).isNavbarVisible,w=a.map(E),T=o.length,P=Math.max.apply(Math,o.map((function(e){return e.split(/\s+/).length}))),C=[];o.forEach((function(e,t){e.split(/\s+/).forEach((function(e,a){e&&"."!==e&&(C[t+a*T]=e)}))}));for(var D=C.map((function(e){var t,a=w[e];if(a)return null!=(t=a.items[a.index++])?t:null})),x=[],B=null,L=0;L<T;L++){for(var O=[],U=0;U<P;U++){var I=D[L+U*T];O.push(I),I&&(B=I)}x.push(O)}return B.onKeyDown=function(e){"Tab"===e.key&&Z(!1)},(0,l.useEffect)((function(){y||Z(!1)}),[y]),(0,l.useEffect)((function(){var e=function(e){h.current&&!h.current.contains(e.target)&&Z(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[h]),l.createElement("div",{ref:h,className:(0,m.Z)("dropdown","dropdown--hoverable","dropdown--mega",{"dropdown--right":"right"===i,"dropdown--show":N}),onMouseLeave:function(){return Z(!1)}},l.createElement(s.O,(0,n.Z)({className:(0,m.Z)("navbar__item navbar__link",c,{"navbar__link--active":g})},p,{onClick:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),Z(!N))},onMouseEnter:function(){return Z(!0)}}),null!=(t=p.children)?t:p.label),l.createElement("div",{className:"dropdown__container"},l.createElement("div",{className:"dropdown__menu"},x.map((function(e,t){return l.createElement("div",{className:"row row--no-gutters dropdown__row",key:t},e.map((function(e,t){return l.createElement("div",{className:"col margin-horiz--xs dropdown__col",key:t},e?l.createElement(_,e):null)})))})))))}function Z(e){var t,a=e.items_,o=e.className,i=(0,r.Z)(e,h);delete i.position,delete i.layout;var c=(0,u.be)(),d=b(a,c),p=(0,u.uR)({initialState:function(){return!d}}),g=p.collapsed,f=p.toggleCollapsed,v=p.setCollapsed;return(0,l.useEffect)((function(){d&&v(!d)}),[c,d]),l.createElement("li",{className:(0,m.Z)("menu__list-item",{"menu__list-item--collapsed":g})},l.createElement(s.O,(0,n.Z)({role:"button",className:(0,m.Z)("menu__link menu__link--sublist",o)},i,{onClick:function(e){e.preventDefault(),f()}}),null!=(t=i.children)?t:i.label),l.createElement(u.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:g},a.map((function(e,t){return l.createElement(x,(0,n.Z)({mobile:!0,isDropdownItem:!0,onClick:i.onClick,activeClassName:"menu__link--active"},e,{key:t}))}))))}function k(e){var t=e.mobile,a=void 0!==t&&t,n=(0,r.Z)(e,v),o=a?Z:N;return l.createElement(o,n)}_.propTypes={className:i().string,to:i().string,href:i().string,label:i().string},N.propTypes=Object.assign({items_:i().array,layout:i().arrayOf(i().string),position:i().string,className:i().string},s.O.propTypes),Z.propTypes=Object.assign({items_:i().array,className:i().string},s.O.propTypes),k.propTypes={mobile:i().bool},k.defaultProps={mobile:!1};var y=k,w=a(36508),T=a(62437),P=["type","items","layout"],C={default:function(){return s.Z},localeDropdown:function(){return w.Z},search:function(){return T.Z},dropdown:function(){return c.Z},megaDropdown:function(){return y},docsVersion:function(){return a(39693).Z},docsVersionDropdown:function(){return a(74493).Z},doc:function(){return a(36673).Z}};function D(e){var t=e.type,a=e.items,o=e.layout,i=(0,r.Z)(e,P),s=function(e,t,a){return a?"megaDropdown":e&&"default"!==e?e:t?"dropdown":"default"}(t,void 0!==a,void 0!==o),c=function(e){var t=C[e];if(!t)throw new Error('No NavbarItem component found for type "'+e+'".');return t()}(s);return l.createElement(c,(0,n.Z)({items:a,layout:o},i))}D.propTypes={type:i().string,items:i().array,layout:i().arrayOf(i().string)};var x=D},5086:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(74034),r=a(67294),l=a(45697),o=a.n(l),i=a(29085),s=a(5730),c=a(86010),m=(0,r.memo)((function(e){var t=e.className,a=e.styles,n=e.icons,l=e.checked,o=e.disabled,i=e.onChange,s=(0,r.useState)(l),m=s[0],u=s[1],d=(0,r.useState)(!1),p=d[0],g=d[1],f=(0,r.useRef)(null);return r.createElement("div",{className:(0,c.Z)("toggle",t,{"toggle--checked":m,"toggle--focused":p,"toggle--disabled":o}),role:"button",tabIndex:-1,onClick:function(){var e;return null==(e=f.current)?void 0:e.click()}},r.createElement("div",{className:"toggle__icon toggle__icon--unchecked",style:a.unchecked},n.unchecked),r.createElement("div",{className:"toggle__icon toggle__icon--checked",style:a.checked},n.checked),r.createElement("input",{ref:f,checked:m,type:"checkbox",className:"toggle__screenreader-only","aria-label":"Switch between dark and light mode",onChange:i,onClick:function(){return u(!m)},onFocus:function(){return g(!0)},onBlur:function(){return g(!1)},onKeyDown:function(e){var t;"Enter"===e.key&&(null==(t=f.current)||t.click())}}))}));function u(e){var t=(0,i.LU)().colorMode.switchConfig,a=t.darkIcon,l=t.darkIconStyle,o=t.lightIcon,c=t.lightIconStyle,u=(0,s.Z)();return r.createElement(m,(0,n.Z)({disabled:!u,styles:{unchecked:c,checked:l},icons:{unchecked:o,checked:a}},e))}m.displayName="ToggleMemo",m.propTypes={className:o().string,styles:o().shape({unchecked:o().any,checked:o().any}),icons:o().shape({unchecked:o().string,checked:o().string}),checked:o().bool,disabled:o().bool,onChange:o().func}}}]);