"use strict";(self.webpackChunkzed_docs=self.webpackChunkzed_docs||[]).push([[1418],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=s(n),d=i,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:i,o[1]=u;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9835:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return c}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],u={},l=void 0,s={unversionedId:"language/functions/quiet",id:"language/functions/quiet",title:"quiet",description:"Function",source:"@site/docs/language/functions/quiet.md",sourceDirName:"language/functions",slug:"/language/functions/quiet",permalink:"/docs/next/language/functions/quiet",editUrl:"https://github.com/brimdata/zed/tree/main/docs/language/functions/quiet.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"pow",permalink:"/docs/next/language/functions/pow"},next:{title:"replace",permalink:"/docs/next/language/functions/replace"}},p={},c=[{value:"Function",id:"function",level:3},{value:"Synopsis",id:"synopsis",level:3},{value:"Description",id:"description",level:3},{value:"Examples",id:"examples",level:3}],m={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"function"},"Function"),(0,a.kt)("p",null,"\u2003"," ",(0,a.kt)("strong",{parentName:"p"},"quiet")," ","\u2014",' quiet "missing" errors'),(0,a.kt)("h3",{id:"synopsis"},"Synopsis"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"quiet(val: any) -> any\n")),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("em",{parentName:"p"},"quiet")," function returns its argument ",(0,a.kt)("inlineCode",{parentName:"p"},"val")," unless ",(0,a.kt)("inlineCode",{parentName:"p"},"val")," is\n",(0,a.kt)("inlineCode",{parentName:"p"},'error("missing")'),", in which case it returns ",(0,a.kt)("inlineCode",{parentName:"p"},'error("quiet")'),".\nVarious operators and functions treat quiet errors differently than\nmissing errors, in particular, dropping them instead of propagating them.\nQuiet errors are ignored by operators ",(0,a.kt)("inlineCode",{parentName:"p"},"cut"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"summarize"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"yield"),"."),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Yield processes a quiet error and thus no output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo 'error(\"missing\")' | zq -z 'yield quiet(this)' -\n")),(0,a.kt)("p",null,"=>"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"")),(0,a.kt)("p",null,"Wihtout quiet, yield producess the missing error:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo 'error(\"missing\")' | zq -z 'yield this' -\n")),(0,a.kt)("p",null,"=>"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-mdtest-output"},'error("missing")\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"cut")," operator drops quiet errors but retains missing errors:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '{a:1}' | zq -z 'cut b:=x+1,c:=quiet(x+1),d:=quiet(a+1)' -\n")),(0,a.kt)("p",null,"=>"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-mdtest-output"},'{b:error("missing"),d:2}\n')))}d.isMDXComponent=!0}}]);