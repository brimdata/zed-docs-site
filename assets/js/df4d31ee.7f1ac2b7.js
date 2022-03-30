"use strict";(self.webpackChunkzed_docs=self.webpackChunkzed_docs||[]).push([[5951],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(n),g=a,d=m["".concat(i,".").concat(g)]||m[g]||p[g]||o;return n?r.createElement(d,u(u({ref:t},l),{},{components:n})):r.createElement(d,u({ref:t},l))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,u=new Array(o);u[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,u[1]=s;for(var c=2;c<o;c++)u[c]=n[c];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},793:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return g},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),u=["components"],s={},i=void 0,c={unversionedId:"zq/aggregates/sum",id:"zq/aggregates/sum",title:"sum",description:"Aggregate Function",source:"@site/docs/zq/aggregates/sum.md",sourceDirName:"zq/aggregates",slug:"/zq/aggregates/sum",permalink:"/docs/zq/aggregates/sum",editUrl:"https://github.com/brimdata/zed-docs/tree/main/docs/zq/aggregates/sum.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"or",permalink:"/docs/zq/aggregates/or"},next:{title:"union",permalink:"/docs/zq/aggregates/union"}},l={},p=[{value:"Aggregate Function",id:"aggregate-function",level:3},{value:"Synopsis",id:"synopsis",level:3},{value:"Description",id:"description",level:3},{value:"Examples",id:"examples",level:3}],m={toc:p};function g(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"aggregate-function"},"Aggregate Function"),(0,o.kt)("p",null,"\u2003"," ",(0,o.kt)("strong",{parentName:"p"},"sum")," ","\u2014"," sum of input values"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sum(number) -> number\n")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"sum")," aggregate function computes the mathematical sum of its input."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Sume of simple sequence:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '1 2 3 4' | zq -z 'sum(this)' -\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"{sum:10}\n")),(0,o.kt)("p",null,"Continuous sum of simple sequence:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '1 2 3 4' | zq -z 'yield sum(this)' -\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"1\n3\n6\n10\n")),(0,o.kt)("p",null,"Unrecognized types are ignored:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '1 2 3 4 \"foo\"' | zq -z 'sum(this)' -\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"{sum:10}\n")))}g.isMDXComponent=!0}}]);