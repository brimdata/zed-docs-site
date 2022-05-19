"use strict";(self.webpackChunkzed_docs=self.webpackChunkzed_docs||[]).push([[8308],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(t),d=a,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||o;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3642:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],c={},p=void 0,l={unversionedId:"language/functions/compare",id:"version-v1.1.0/language/functions/compare",title:"compare",description:"Function",source:"@site/versioned_docs/version-v1.1.0/language/functions/compare.md",sourceDirName:"language/functions",slug:"/language/functions/compare",permalink:"/docs/language/functions/compare",editUrl:"https://github.com/brimdata/zed/tree/main/versioned_docs/version-v1.1.0/language/functions/compare.md",tags:[],version:"v1.1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"cidr_match",permalink:"/docs/language/functions/cidr_match"},next:{title:"crop",permalink:"/docs/language/functions/crop"}},u={},s=[{value:"Function",id:"function",level:3},{value:"Synopsis",id:"synopsis",level:3},{value:"Description",id:"description",level:3},{value:"Examples",id:"examples",level:3}],m={toc:s};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"function"},"Function"),(0,o.kt)("p",null,"\u2003"," ",(0,o.kt)("strong",{parentName:"p"},"compare")," ","\u2014"," return an integer comparing two values"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"compare(a: any, b: any) -> int64\n")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"compare")," function returns an integer comparing two values. The result will\nbe 0 if a is equal to b, +1 if a is greater than b, and -1 if a is less than b.\n",(0,o.kt)("em",{parentName:"p"},"compare")," differs from ",(0,o.kt)("inlineCode",{parentName:"p"},"<"),", ",(0,o.kt)("inlineCode",{parentName:"p"},">"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"<="),", ",(0,o.kt)("inlineCode",{parentName:"p"},">="),", ",(0,o.kt)("inlineCode",{parentName:"p"},"=="),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"!=")," in that it will\nwork for any type (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},'compare(1, "1")'),"). ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," values compare greater than non-",(0,o.kt)("inlineCode",{parentName:"p"},"null")," values."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '{a: 2, b: \"1\"}' | zq -z 'yield compare(a, b)' -\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"-1\n")))}d.isMDXComponent=!0}}]);