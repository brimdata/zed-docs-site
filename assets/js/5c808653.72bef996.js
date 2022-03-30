"use strict";(self.webpackChunkzed_docs=self.webpackChunkzed_docs||[]).push([[8993],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||l[m]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},69:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return l}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],u={},s=void 0,c={unversionedId:"zq/functions/quiet",id:"zq/functions/quiet",title:"quiet",description:"Function",source:"@site/docs/zq/functions/quiet.md",sourceDirName:"zq/functions",slug:"/zq/functions/quiet",permalink:"/zed-docs-site/docs/zq/functions/quiet",editUrl:"https://github.com/brimdata/zed-docs/tree/main/docs/zq/functions/quiet.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"pow",permalink:"/zed-docs-site/docs/zq/functions/pow"},next:{title:"replace",permalink:"/zed-docs-site/docs/zq/functions/replace"}},p={},l=[{value:"Function",id:"function",level:3},{value:"Synopsis",id:"synopsis",level:3},{value:"Description",id:"description",level:3},{value:"Examples",id:"examples",level:3}],d={toc:l};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"function"},"Function"),(0,o.kt)("p",null,"\u2003"," ",(0,o.kt)("strong",{parentName:"p"},"quiet")," ","\u2014",' quiet "missing" errors'),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"quiet(val: any) -> any\n")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"quiet")," function returns its argument ",(0,o.kt)("inlineCode",{parentName:"p"},"val")," unless ",(0,o.kt)("inlineCode",{parentName:"p"},"val")," is\n",(0,o.kt)("inlineCode",{parentName:"p"},'error("missing")'),", in which case it returns ",(0,o.kt)("inlineCode",{parentName:"p"},'error("quiet")'),".\nVarious operators and functions treat quiet errors differently than\nmissing errors, in particular, dropping them instead of propagating them.\nQuiet errors are ignored by operators ",(0,o.kt)("inlineCode",{parentName:"p"},"cut"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"summarize"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"yield"),"."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Yield processes a quiet error and thus no output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo 'error(\"missing\")' | zq -z 'yield quiet(this)' -\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"")),(0,o.kt)("p",null,"Wihtout quiet, yield producess the missing error:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo 'error(\"missing\")' | zq -z 'yield this' -\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},'error("missing")\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"cut")," operator drops quiet errors but retains missing errors:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '{a:1}' | zq -z 'cut b:=x+1,c:=quiet(x+1),d:=quiet(a+1)' -\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},'{b:error("missing"),d:2}\n')))}m.isMDXComponent=!0}}]);