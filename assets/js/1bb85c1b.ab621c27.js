"use strict";(self.webpackChunkzed_docs=self.webpackChunkzed_docs||[]).push([[9203],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(t),d=o,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||i;return t?r.createElement(m,a(a({ref:n},u),{},{components:t})):r.createElement(m,a({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},6467:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],c={},s=void 0,l={unversionedId:"zq/functions/join",id:"zq/functions/join",title:"join",description:"Function",source:"@site/docs/zq/functions/join.md",sourceDirName:"zq/functions",slug:"/zq/functions/join",permalink:"/docs/zq/functions/join",editUrl:"https://github.com/brimdata/zed-docs/tree/main/docs/zq/functions/join.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"is_error",permalink:"/docs/zq/functions/is_error"},next:{title:"kind",permalink:"/docs/zq/functions/kind"}},u={},p=[{value:"Function",id:"function",level:3},{value:"Synopsis",id:"synopsis",level:3},{value:"Description",id:"description",level:3},{value:"Example:",id:"example",level:4}],f={toc:p};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"function"},"Function"),(0,i.kt)("p",null,"\u2003"," ",(0,i.kt)("strong",{parentName:"p"},"join")," ","\u2014"," concatenate array of strings with a separator"),(0,i.kt)("h3",{id:"synopsis"},"Synopsis"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"join(val: [string], sep: string) -> string\n")),(0,i.kt)("h3",{id:"description"},"Description"),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"join")," function concatenates the elements of string array ",(0,i.kt)("inlineCode",{parentName:"p"},"val")," to create a single\nstring. The string ",(0,i.kt)("inlineCode",{parentName:"p"},"sep")," is placed between each value in the resulting string."),(0,i.kt)("h4",{id:"example"},"Example:"),(0,i.kt)("p",null,"Join a symbol array of strings:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-mdtest-command"},'echo \'["a","b","c"]\' | zq -z \'yield join(this, ",")\' -\n')),(0,i.kt)("p",null,"=>"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-mdtest-output"},'"a,b,c"\n')),(0,i.kt)("p",null,"Join non-string arrays by first casting:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '[1,2,3] [10.0.0.1,10.0.0.2]' | zq -z 'yield join(cast(this, <[string]>), \"...\")' -\n")),(0,i.kt)("p",null,"=>"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-mdtest-output"},'"1...2...3"\n"10.0.0.1...10.0.0.2"\n')))}d.isMDXComponent=!0}}]);