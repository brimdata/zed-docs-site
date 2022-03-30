"use strict";(self.webpackChunkzed_docs=self.webpackChunkzed_docs||[]).push([[8817],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,m=d["".concat(u,".").concat(f)]||d[f]||s[f]||l;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9433:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return s}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],o={},u=void 0,c={unversionedId:"zq/functions/fill",id:"zq/functions/fill",title:"fill",description:"Function",source:"@site/docs/zq/functions/fill.md",sourceDirName:"zq/functions",slug:"/zq/functions/fill",permalink:"/zed-docs-site/docs/zq/functions/fill",editUrl:"https://github.com/brimdata/zed-docs/tree/main/docs/zq/functions/fill.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"fields",permalink:"/zed-docs-site/docs/zq/functions/fields"},next:{title:"flatten",permalink:"/zed-docs-site/docs/zq/functions/flatten"}},p={},s=[{value:"Function",id:"function",level:3},{value:"Synopsis",id:"synopsis",level:3},{value:"Description",id:"description",level:3},{value:"Examples",id:"examples",level:3}],d={toc:s};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"function"},"Function"),(0,l.kt)("p",null,"\u2003"," ",(0,l.kt)("strong",{parentName:"p"},"fill")," ","\u2014"," add null values for missing record fields"),(0,l.kt)("h3",{id:"synopsis"},"Synopsis"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"fill(val: any, t: type) -> any\n")),(0,l.kt)("h3",{id:"description"},"Description"),(0,l.kt)("p",null,"The ",(0,l.kt)("em",{parentName:"p"},"fill")," function adds to the input record ",(0,l.kt)("inlineCode",{parentName:"p"},"val")," any fields that are\npresent in the output type ",(0,l.kt)("inlineCode",{parentName:"p"},"t")," but not in the input."),(0,l.kt)("p",null,"Filled fields are added with a ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," value.  Filling is useful when\nyou want to be sure that all fields in a schema are present in a record."),(0,l.kt)("p",null,"If ",(0,l.kt)("inlineCode",{parentName:"p"},"val")," is not a record, it is returned unmodified."),(0,l.kt)("h3",{id:"examples"},"Examples"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Fill a record")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '{a:1}' | zq -z 'fill(this, <{a:int64,b:string}>)' -\n")),(0,l.kt)("p",null,"produces"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"{a:1,b:null(string)}\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Fill an array of records")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '[{a:1},{a:2}]' | zq -z 'fill(this, <[{a:int64,b:int64}]>)' -\n")),(0,l.kt)("p",null,"produces"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"[{a:1,b:null(int64)},{a:2,b:null(int64)}]\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Non-records are returned unmodified")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '10.0.0.1 1 \"foo\"' | zq -z 'fill(this, <{a:int64,b:int64}>)' -\n")),(0,l.kt)("p",null,"produces"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mdtest-output"},'10.0.0.1\n1\n"foo"\n')))}f.isMDXComponent=!0}}]);