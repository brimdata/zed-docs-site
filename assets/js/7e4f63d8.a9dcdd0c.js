"use strict";(self.webpackChunkzed_docs=self.webpackChunkzed_docs||[]).push([[7862],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(u,".").concat(f)]||d[f]||s[f]||l;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6373:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return s}});var r=n(7462),o=n(3366),l=(n(7294),n(3905)),i=["components"],a={},u=void 0,c={unversionedId:"zq/functions/len",id:"zq/functions/len",title:"len",description:"Function",source:"@site/docs/zq/functions/len.md",sourceDirName:"zq/functions",slug:"/zq/functions/len",permalink:"/docs/zq/functions/len",editUrl:"https://github.com/brimdata/zed-docs/tree/main/docs/zq/functions/len.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ksuid",permalink:"/docs/zq/functions/ksuid"},next:{title:"log",permalink:"/docs/zq/functions/log"}},p={},s=[{value:"Function",id:"function",level:3},{value:"Synopsis",id:"synopsis",level:3},{value:"Description",id:"description",level:3},{value:"Example:",id:"example",level:4}],d={toc:s};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"function"},"Function"),(0,l.kt)("p",null,"\u2003"," ",(0,l.kt)("strong",{parentName:"p"},"len")," ","\u2014"," the type-dependent length of a value"),(0,l.kt)("h3",{id:"synopsis"},"Synopsis"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"len(v: record|array|set|map|type|bytes|string|ip|net|error) -> int64\n")),(0,l.kt)("h3",{id:"description"},"Description"),(0,l.kt)("p",null,"The ",(0,l.kt)("em",{parentName:"p"},"len")," function returns the length of its argument ",(0,l.kt)("inlineCode",{parentName:"p"},"val"),".\nThe semantics of this length depend on the value's type."),(0,l.kt)("p",null,"Supported types include:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"record"),(0,l.kt)("li",{parentName:"ul"},"array"),(0,l.kt)("li",{parentName:"ul"},"set"),(0,l.kt)("li",{parentName:"ul"},"map"),(0,l.kt)("li",{parentName:"ul"},"error"),(0,l.kt)("li",{parentName:"ul"},"bytes"),(0,l.kt)("li",{parentName:"ul"},"string"),(0,l.kt)("li",{parentName:"ul"},"ip"),(0,l.kt)("li",{parentName:"ul"},"net"),(0,l.kt)("li",{parentName:"ul"},"type")),(0,l.kt)("h4",{id:"example"},"Example:"),(0,l.kt)("p",null,"Take the length of various types:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '[1,2,3] |[\"hello\"]| {a:1,b:2} \"hello\" 10.0.0.1 1' | zq -z 'yield {this,len:len(this)}' -\n")),(0,l.kt)("p",null,"=>"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mdtest-output"},'{this:[1,2,3],len:3}\n{this:|["hello"]|,len:1}\n{this:{a:1,b:2},len:2}\n{this:"hello",len:5}\n{this:10.0.0.1,len:4}\n{this:1,len:error("len: bad type: int64")}\n')))}f.isMDXComponent=!0}}]);