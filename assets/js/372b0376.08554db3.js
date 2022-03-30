"use strict";(self.webpackChunkzed_docs=self.webpackChunkzed_docs||[]).push([[8159],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7179:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={},p=void 0,s={unversionedId:"zq/operators/join",id:"zq/operators/join",title:"join",description:"Operator",source:"@site/docs/zq/operators/join.md",sourceDirName:"zq/operators",slug:"/zq/operators/join",permalink:"/docs/zq/operators/join",editUrl:"https://github.com/brimdata/zed-docs/tree/main/docs/zq/operators/join.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"head",permalink:"/docs/zq/operators/head"},next:{title:"merge",permalink:"/docs/zq/operators/merge"}},u={},c=[{value:"Operator",id:"operator",level:3},{value:"Synopsis",id:"synopsis",level:3},{value:"Description",id:"description",level:3},{value:"Examples",id:"examples",level:3}],d={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"operator"},"Operator"),(0,i.kt)("p",null,"\u2003"," ",(0,i.kt)("strong",{parentName:"p"},"join")," ","\u2014"," combine data from two inputs using a join predicate"),(0,i.kt)("h3",{id:"synopsis"},"Synopsis"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"( => left path => right path )\n| [anti|inner|left|right] join on <left-key>=<right-key> [<field>:=<right-expr>, ...]\n")),(0,i.kt)("h3",{id:"description"},"Description"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"join")," operator combines records from two inputs based on whether\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"<left-key>")," expression (evaluated in the context of the left input)\nis equal to the ",(0,i.kt)("inlineCode",{parentName:"p"},"<right-key>")," expression (evaluated in the context of\nthe right input) omitting values where there is no match (or including them\nint the case of anti join)."),(0,i.kt)("p",null,"The available join types are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"inner")," - output only values that match"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"left")," - output all left values with merged components from ",(0,i.kt)("inlineCode",{parentName:"li"},"<right-expr>")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"right")," - output as a left join but with the roles of the inputs and ",(0,i.kt)("inlineCode",{parentName:"li"},"<right-expr>")," reversed"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"anti")," - output left values whose left key does not have a matching right key")),(0,i.kt)("p",null,"For anti join, the ",(0,i.kt)("inlineCode",{parentName:"p"},"<right-expr>")," is undefined and thus cannot be specified."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Currently, only exact equi-join is supported and the inputs must be sorted\nin ascending order by their respective keys.  Also, the join keys must\nbe field expressions.  A future version of join will not require sorted inputs\nand will have more flexible join expressions.")),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("p",null,"TBD"))}m.isMDXComponent=!0}}]);