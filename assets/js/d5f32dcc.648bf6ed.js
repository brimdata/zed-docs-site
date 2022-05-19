"use strict";(self.webpackChunkzed_docs=self.webpackChunkzed_docs||[]).push([[5628],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return t?r.createElement(f,u(u({ref:n},p),{},{components:t})):r.createElement(f,u({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,u=new Array(o);u[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,u[1]=i;for(var s=2;s<o;s++)u[s]=t[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},244:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),u=["components"],i={},l=void 0,s={unversionedId:"language/functions/under",id:"version-v1.1.0/language/functions/under",title:"under",description:"Function",source:"@site/versioned_docs/version-v1.1.0/language/functions/under.md",sourceDirName:"language/functions",slug:"/language/functions/under",permalink:"/docs/language/functions/under",editUrl:"https://github.com/brimdata/zed/tree/main/versioned_docs/version-v1.1.0/language/functions/under.md",tags:[],version:"v1.1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"typeunder",permalink:"/docs/language/functions/typeunder"},next:{title:"unflatten",permalink:"/docs/language/functions/unflatten"}},p={},c=[{value:"Function",id:"function",level:3},{value:"Synopsis",id:"synopsis",level:3},{value:"Description",id:"description",level:3},{value:"Examples",id:"examples",level:3}],d={toc:c};function m(e){var n=e.components,t=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"function"},"Function"),(0,o.kt)("p",null,"\u2003"," ",(0,o.kt)("strong",{parentName:"p"},"under")," ","\u2014"," the underlying value"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"under(val: any) -> any\n")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"under")," function returns the value underlying the argument ",(0,o.kt)("inlineCode",{parentName:"p"},"val"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"for unions, it returns the value as its elemental type of the union,"),(0,o.kt)("li",{parentName:"ul"},"for errors, it returns the value that the error wraps,"),(0,o.kt)("li",{parentName:"ul"},"for types, it returns the value typed as ",(0,o.kt)("inlineCode",{parentName:"li"},"typeunder()")," indicates; otherwise,"),(0,o.kt)("li",{parentName:"ul"},"it returns ",(0,o.kt)("inlineCode",{parentName:"li"},"val")," unmodified.")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Unions are unwrapped:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '1((int64,string)) \"foo\"((int64,string))' | zq -z 'yield this' -\necho '1((int64,string)) \"foo\"((int64,string))' | zq -z 'yield under(this)' -\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},'1((int64,string))\n"foo"((int64,string))\n1\n"foo"\n')),(0,o.kt)("p",null,"Errors are unwrapped:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo 'error(\"foo\") error({err:\"message\"})' | zq -z 'yield this' -\necho 'error(\"foo\") error({err:\"message\"})' | zq -z 'yield under(this)' -\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},'error("foo")\nerror({err:"message"})\n"foo"\n{err:"message"}\n')),(0,o.kt)("p",null,"Values of named types are unwrapped:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '80(port=uint16)' | zq -z 'yield this' -\necho '80(port=uint16)' | zq -z 'yield under(this)' -\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"80(port=uint16)\n80(uint16)\n")),(0,o.kt)("p",null,"Values that are not wrapped are unmodified:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '1 \"foo\" <int16> {x:1}' | zq -z 'yield under(this)' -\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},'1\n"foo"\n<int16>\n{x:1}\n')))}m.isMDXComponent=!0}}]);