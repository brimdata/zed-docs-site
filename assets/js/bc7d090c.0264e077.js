"use strict";(self.webpackChunkzed_docs=self.webpackChunkzed_docs||[]).push([[671],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),f=c(n),d=a,m=f["".concat(i,".").concat(d)]||f[d]||s[d]||o;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5849:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return s}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],u={},i=void 0,c={unversionedId:"language/functions/unflatten",id:"language/functions/unflatten",title:"unflatten",description:"Function",source:"@site/docs/language/functions/unflatten.md",sourceDirName:"language/functions",slug:"/language/functions/unflatten",permalink:"/docs/language/functions/unflatten",editUrl:"https://github.com/brimdata/zed/tree/main/docs/language/functions/unflatten.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"under",permalink:"/docs/language/functions/under"},next:{title:"upper",permalink:"/docs/language/functions/upper"}},p={},s=[{value:"Function",id:"function",level:3},{value:"Synopsis",id:"synopsis",level:3},{value:"Description",id:"description",level:3},{value:"Examples",id:"examples",level:3}],f={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"function"},"Function"),(0,o.kt)("p",null,"\u2003"," ",(0,o.kt)("strong",{parentName:"p"},"unflatten")," ","\u2014"," transform an array of key/value records into a\nrecord."),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"unflatten(val: [{key:[string],value:any}) -> record\n")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"unflatten")," function converts the key/value records in array ",(0,o.kt)("inlineCode",{parentName:"p"},"val")," into\na single record. ",(0,o.kt)("em",{parentName:"p"},"unflatten")," is the inverse of ",(0,o.kt)("em",{parentName:"p"},"flatten"),", i.e., ",(0,o.kt)("inlineCode",{parentName:"p"},"unflatten(flatten(r))"),"\nwill produce a record identical to ",(0,o.kt)("inlineCode",{parentName:"p"},"r"),"."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Simple:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '[{key:[\"a\"],value:1},{key:[\"b\"],value:2}]' | zq -z 'yield unflatten(this)' -\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"{a:1,b:2}\n")),(0,o.kt)("p",null,"Flatten to unflatten:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '{a:1,rm:2}' | zq -z 'over flatten(this) => (key[0] != \"rm\" | yield collect(this)) | yield unflatten(this)' -\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"{a:1}\n")))}d.isMDXComponent=!0}}]);