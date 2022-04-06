"use strict";(self.webpackChunkzed_docs=self.webpackChunkzed_docs||[]).push([[4430],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return f}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=s(t),f=i,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return t?r.createElement(m,a(a({ref:n},l),{},{components:t})):r.createElement(m,a({ref:n},l))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5808:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return p}});var r=t(7462),i=t(3366),o=(t(7294),t(3905)),a=["components"],u={},c=void 0,s={unversionedId:"language/functions/ksuid",id:"language/functions/ksuid",title:"ksuid",description:"Function",source:"@site/docs/language/functions/ksuid.md",sourceDirName:"language/functions",slug:"/language/functions/ksuid",permalink:"/docs/language/functions/ksuid",editUrl:"https://github.com/brimdata/zed/tree/main/docs/language/functions/ksuid.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"kind",permalink:"/docs/language/functions/kind"},next:{title:"len",permalink:"/docs/language/functions/len"}},l={},p=[{value:"Function",id:"function",level:3},{value:"Synopsis",id:"synopsis",level:3},{value:"Description",id:"description",level:3},{value:"Example:",id:"example",level:4}],d={toc:p};function f(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"function"},"Function"),(0,o.kt)("p",null,"\u2003"," ",(0,o.kt)("strong",{parentName:"p"},"ksuid")," ","\u2014"," encode/decode KSUID-style unique identifiers"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ksuid() -> bytes\nksuid(b: bytes) -> string\nksuid(s: string) -> bytes\n")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"ksuid")," function either encodes a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/segmentio/ksuid"},"KSUID"),"\n(a byte sequence of length 20) ",(0,o.kt)("inlineCode",{parentName:"p"},"b")," into a Base62 string or decodes\na KSUID Base62 string into a 20-byte Zed bytes value."),(0,o.kt)("p",null,"If ",(0,o.kt)("em",{parentName:"p"},"ksuid")," is called with no arguments, a new KSUID is generated and\nreturned as a bytes value."),(0,o.kt)("h4",{id:"example"},"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo  '{id:0x0dfc90519b60f362e84a3fdddd9b9e63e1fb90d1}' | zq -z 'id := ksuid(id)' -\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},'{id:"1zjJzTWWCJNVrGwqB8kZwhTM2fR"}\n')))}f.isMDXComponent=!0}}]);