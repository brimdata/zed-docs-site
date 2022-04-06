"use strict";(self.webpackChunkzed_docs=self.webpackChunkzed_docs||[]).push([[3299],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3028:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={},l=void 0,u={unversionedId:"language/functions/cidr_match",id:"language/functions/cidr_match",title:"cidr_match",description:"Function",source:"@site/docs/language/functions/cidr_match.md",sourceDirName:"language/functions",slug:"/language/functions/cidr_match",permalink:"/docs/language/functions/cidr_match",editUrl:"https://github.com/brimdata/zed/tree/main/docs/language/functions/cidr_match.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ceil",permalink:"/docs/language/functions/ceil"},next:{title:"crop",permalink:"/docs/language/functions/crop"}},s={},p=[{value:"Function",id:"function",level:3},{value:"Synopsis",id:"synopsis",level:3},{value:"Description",id:"description",level:3},{value:"Examples",id:"examples",level:3}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"function"},"Function"),(0,o.kt)("p",null,"\u2003"," ",(0,o.kt)("strong",{parentName:"p"},"cidr_match")," ","\u2014"," test if IP is in a network"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cidr_match(mask: net, val: any) -> bool\n")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"cidr_match")," function returns true if ",(0,o.kt)("inlineCode",{parentName:"p"},"val")," contains an IP address that\nfalls within the network given by ",(0,o.kt)("inlineCode",{parentName:"p"},"mask"),".  When ",(0,o.kt)("inlineCode",{parentName:"p"},"val")," is a complex type, the\nfunction traverses its nested structured to find any network values.\nIf ",(0,o.kt)("inlineCode",{parentName:"p"},"mask")," is not type ",(0,o.kt)("inlineCode",{parentName:"p"},"net"),", then an error is returned."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Test whether values are IP addresses in a network:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '10.1.2.129 11.1.2.129 10 \"foo\"' | zq -z 'yield cidr_match(10.0.0.0/8, this)' -\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"true\nfalse\nfalse\nfalse\n")),(0,o.kt)("p",null,"It also works for IPs in nested values:\necho '","[10.1.2.129,11.1.2.129]"," {a:10.0.0.1} {a:11.0.0.1}' | zq -z 'yield cidr_match(10.0.0.0/8, this)' -"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"=>\n```mdtest-output\ntrue\ntrue\nfalse\n")),(0,o.kt)("p",null,"The first argument must be a network:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"echo '10.0.0.1' | zq -z 'yield cidr_match([1,2,3], this)' -\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'error("cidr_match: not a net: [1,2,3]")\n')))}m.isMDXComponent=!0}}]);