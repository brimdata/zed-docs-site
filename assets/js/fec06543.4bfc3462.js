"use strict";(self.webpackChunkzed_docs=self.webpackChunkzed_docs||[]).push([[6707],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5689:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={},p=void 0,s={unversionedId:"language/operators/cut",id:"version-v1.1.0/language/operators/cut",title:"cut",description:"Operator",source:"@site/versioned_docs/version-v1.1.0/language/operators/cut.md",sourceDirName:"language/operators",slug:"/language/operators/cut",permalink:"/docs/language/operators/cut",editUrl:"https://github.com/brimdata/zed/tree/main/versioned_docs/version-v1.1.0/language/operators/cut.md",tags:[],version:"v1.1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"combine",permalink:"/docs/language/operators/combine"},next:{title:"drop",permalink:"/docs/language/operators/drop"}},c={},u=[{value:"Operator",id:"operator",level:3},{value:"Synopsis",id:"synopsis",level:3},{value:"Description",id:"description",level:3},{value:"Examples",id:"examples",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"operator"},"Operator"),(0,o.kt)("p",null,"\u2003"," ",(0,o.kt)("strong",{parentName:"p"},"cut")," ","\u2014"," extract subsets of record fields into new records"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cut <field>[:=<expr>] [, <field>[:=<expr>] ...]\n")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"cut")," operator extracts values from each input record in the\nform of one or more ",(0,o.kt)("a",{parentName:"p",href:"/docs/language/#field-assignments"},"field assignments"),",\ncreating one field for each expression.  Unlike the ",(0,o.kt)("inlineCode",{parentName:"p"},"put")," operator,\nwhich adds or modifies the fields of a record, ",(0,o.kt)("inlineCode",{parentName:"p"},"cut")," retains only the\nfields enumerated, much like a SQL projection."),(0,o.kt)("p",null,"Each ",(0,o.kt)("inlineCode",{parentName:"p"},"<field>")," expression must be a field reference expressed as a dotted path or sequence of\nconstant index operations on ",(0,o.kt)("inlineCode",{parentName:"p"},"this"),", e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"a.b")," or ",(0,o.kt)("inlineCode",{parentName:"p"},'this["a"]["b"]'),"."),(0,o.kt)("p",null,"Each right-hand side ",(0,o.kt)("inlineCode",{parentName:"p"},"<expr>")," can be any Zed expression and is optional."),(0,o.kt)("p",null,"When the right-hand side expressions are omitted,\nthe ",(0,o.kt)("em",{parentName:"p"},"cut")," operation resembles the Unix shell command, e.g.,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"... | cut a,c | ...\n")),(0,o.kt)("p",null,"If an expression results in ",(0,o.kt)("inlineCode",{parentName:"p"},'error("quiet")'),", the corresponding field is omitted\nfrom the output.  This allows you to wrap expressions in a ",(0,o.kt)("inlineCode",{parentName:"p"},"quiet()")," function\nto filter out missing errors."),(0,o.kt)("p",null,"If an input value to cut is not a record, then the cut still operates as defined\nresulting in ",(0,o.kt)("inlineCode",{parentName:"p"},'error("missing")')," for expressions that reference fields of ",(0,o.kt)("inlineCode",{parentName:"p"},"this"),"."),(0,o.kt)("p",null,"Note that when the field references are all top level,\n",(0,o.kt)("inlineCode",{parentName:"p"},"cut")," is a special case of a yield with a\n",(0,o.kt)("a",{parentName:"p",href:"/docs/language/#record-literal"},"record literal")," having the form:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yield {<field>:<expr> [, <field>:<expr>...]}\n")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"A simple Unix-like cut")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '{a:1,b:2,c:3}' | zq -z 'cut a,c' -\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"{a:1,c:3}\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Missing fields show up as missing errors")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '{a:1,b:2,c:3}' | zq -z 'cut a,d' -\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},'{a:1,d:error("missing")}\n')),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"The missing fields can be ignored with quiet")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '{a:1,b:2,c:3}' | zq -z 'cut a:=quiet(a),d:=quiet(d)' -\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"{a:1}\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Non-record values generate missing errors for fields not present in a non-record ",(0,o.kt)("inlineCode",{parentName:"em"},"this"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '1 {a:1,b:2,c:3}' | zq -z 'cut a,b' -\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},'{a:error("missing"),b:error("missing")}\n{a:1,b:2}\n')))}m.isMDXComponent=!0}}]);