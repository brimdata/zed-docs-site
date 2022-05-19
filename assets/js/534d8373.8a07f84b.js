"use strict";(self.webpackChunkzed_docs=self.webpackChunkzed_docs||[]).push([[3080],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),p=o,h=d["".concat(i,".").concat(p)]||d[p]||m[p]||r;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var u=2;u<r;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},831:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return m}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),s=["components"],l={sidebar_position:3,sidebar_label:"ZST"},i="ZST Specification",u={unversionedId:"formats/zst",id:"version-v1.1.0/formats/zst",title:"ZST Specification",description:'ZST, pronounced "zest", is a file format for columnar data based on',source:"@site/versioned_docs/version-v1.1.0/formats/zst.md",sourceDirName:"formats",slug:"/formats/zst",permalink:"/docs/formats/zst",editUrl:"https://github.com/brimdata/zed/tree/main/versioned_docs/version-v1.1.0/formats/zst.md",tags:[],version:"v1.1.0",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"ZST"},sidebar:"tutorialSidebar",previous:{title:"ZSON",permalink:"/docs/formats/zson"},next:{title:"ZJSON",permalink:"/docs/formats/zjson"}},c={},m=[{value:"ZST Files",id:"zst-files",level:2},{value:"Column Streams",id:"column-streams",level:2},{value:"The Physical Layout",id:"the-physical-layout",level:2},{value:"The Data Section",id:"the-data-section",level:3},{value:"The Reassembly Section",id:"the-reassembly-section",level:3},{value:"The Super Types",id:"the-super-types",level:4},{value:"Segment Maps",id:"segment-maps",level:4},{value:"The Super Column",id:"the-super-column",level:4},{value:"The Reassembly Records",id:"the-reassembly-records",level:4},{value:"Record Column",id:"record-column",level:4},{value:"Array Column",id:"array-column",level:4},{value:"Map Column",id:"map-column",level:4},{value:"Union Column",id:"union-column",level:4},{value:"Primitive Column",id:"primitive-column",level:4},{value:"Presence Columns",id:"presence-columns",level:4},{value:"The Trailer",id:"the-trailer",level:3},{value:"Decoding",id:"decoding",level:2},{value:"Examples",id:"examples",level:2},{value:"Hello, world",id:"hello-world",level:3}],d={toc:m};function p(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"zst-specification"},"ZST Specification"),(0,r.kt)("p",null,'ZST, pronounced "zest", is a file format for columnar data based on\n',(0,r.kt)("a",{parentName:"p",href:"/docs/formats/zed"},"the Zed data model"),'.\nZST is the "stacked" version of Zed, where the fields from a stream of\nZed records are stacked into vectors that form columns.\nIts purpose is to provide for efficient analytics and search over\nbounded-length sequences of ',(0,r.kt)("a",{parentName:"p",href:"/docs/formats/zng"},"ZNG")," data that is stored in columnar form."),(0,r.kt)("p",null,"Like ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/parquet-format"},"Parquet"),",\nZST provides an efficient columnar representation for semi-structured data,\nbut unlike Parquet, ZST is not based on schemas and does not require\na schema to be declared when writing data to a file.  Instead,\nZST exploits the super-structured nature of Zed data: columns of data\nself-organize around their type structure."),(0,r.kt)("h2",{id:"zst-files"},"ZST Files"),(0,r.kt)("p",null,"A ZST file encodes a bounded, ordered sequence of Zed values.\nTo provide for efficient access to subsets of ZST-encoded data (e.g., columns),\nthe ZST file is presumed to be accessible via random access\n(e.g., range requests to a cloud object store or seeks in a Unix file system)\nand ZST is therefore not intended as a streaming or communication format."),(0,r.kt)("p",null,"A ZST file can be stored entirely as one storage object\nor split across separate objects that are treated\ntogether as a single ZST entity.  While the ZST format provides much flexibility\nfor how data is laid out, it is left to an implementation to lay out data\nin intelligent ways for efficient sequential read accesses of related data."),(0,r.kt)("h2",{id:"column-streams"},"Column Streams"),(0,r.kt)("p",null,"The ZST data abstraction is built around a collection of ",(0,r.kt)("em",{parentName:"p"},"column streams"),"."),(0,r.kt)("p",null,'There is one column stream for each top-level type encountered in the input where\neach column stream is encoded according to its type.  For top-level complex types,\nthe embedded elements are encoded recursively in additional column streams\nas described below.  For example,\na record column encodes a "presence" vector encoding any null value for\neach field then encodes each non-null field recursively, whereas\nan array column encodes a "lengths" vector and encodes each\nelement recursively.'),(0,r.kt)("p",null,"Values are reconstructed one by one from the column streams by picking values\nfrom each appropriate column stream based on the type structure of the value and\nits relationship to the various column streams.  For hierarchical records\n(i.e., records inside of records, or records inside of arrays inside of records, etc),\nthe reconstruction process is recursive (as described below)."),(0,r.kt)("h2",{id:"the-physical-layout"},"The Physical Layout"),(0,r.kt)("p",null,"The overall layout of a ZST file is comprised of the following sections,\nin this order:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the data section,"),(0,r.kt)("li",{parentName:"ul"},"the reassembly section, and"),(0,r.kt)("li",{parentName:"ul"},"the trailer.")),(0,r.kt)("p",null,"This layout allows an implementation to buffer metadata in\nmemory while writing column data in a natural order to the\ndata section (based on the volume statistics of each column),\nthen write the metadata into the reassembly section along with the trailer\nat the end.  This allows a ZNG stream to be converted to a ZST file\nin a single pass."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"That said, the layout is\nflexible enough that an implementation may optimize the data layout with\nadditional passes or by writing the output to multiple files then\nmerging them together (or even leaving the ZST entity as separate files).")),(0,r.kt)("h3",{id:"the-data-section"},"The Data Section"),(0,r.kt)("p",null,"The data section contains raw data values organized into ",(0,r.kt)("em",{parentName:"p"},"segments"),",\nwhere a segment is a seek offset and byte length relative to the\ndata section.  Each segment contains a sequence of\n",(0,r.kt)("a",{parentName:"p",href:"/docs/formats/zed#1-primitive-types"},"primitive-type Zed values"),",\nencoded as counted-length byte sequences where the counted-length is\nvariable-length encoded as in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/formats/zng"},"ZNG specification"),"."),(0,r.kt)("p",null,"There is no information in the data section for how segments relate\nto one another or how they are reconstructed into columns.  They are just\nblobs of ZNG data."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'Unlike Parquet, there is no explicit arrangement of the column chunks into\nrow groups but rather they are allowed to grow at different rates so a\nhigh-volume column might be comprised of many segments while a low-volume\ncolumn must just be one or several.  This allows scans of low-volume record types\n(the "mice") to perform well amongst high-volume record types (the "elephants"),\ni.e., there are not a bunch of seeks with tiny reads of mice data interspersed\nthroughout the elephants.'),(0,r.kt)("p",{parentName:"blockquote"},'TBD: The mice/elephants model creates an interesting and challenging layout\nproblem.  If you let the row indexes get too far apart (call this "skew"), then\nyou have to buffer very large amounts of data to keep the column data aligned.\nThis is the point of row groups in Parquet, but the model here is to leave it\nup to the implementation to do layout as it sees fit.  You can also fall back\nto doing lots of seeks and that might work perfectly fine when using SSDs but\nthis also creates interesting optimization problems when sequential reads work\na lot better.  There could be a scan optimizer that lays out how the data is\nread that lives under the column stream reader.  Also, you can make tradeoffs:\nif you use lots of buffering on ingest, you can write the mice in front of the\nelephants so the read path requires less buffering to align columns.  Or you can\ndo two passes where you store segments in separate files then merge them at close\naccording to an optimization plan.')),(0,r.kt)("p",null,"Segments are subdivided into frames where frames are compressed\nindependently of each other, similar to ZNG compression framing."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"TBD: use the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/formats/zng#2-the-zng-format"},"same compression format"),"\nexactly?"),(0,r.kt)("p",{parentName:"blockquote"},"The intent here is that segments are sized so that sequential read access\nperforms well (e.g., 5MB) while frames are comparatively smaller (say 32KB)\nso that they can be decompressed and processed in a multi-threaded fashion where\nsearch and analytics can be performed on the decompressed buffer by the same\nthread that decompressed the frame enhancing read-locality and L1/L2 cache\nperformance.")),(0,r.kt)("h3",{id:"the-reassembly-section"},"The Reassembly Section"),(0,r.kt)("p",null,"The reassembly section provides the information needed to reconstruct\ncolumn streams from segments, and in turn, to reconstruct the original Zed values\nfrom column streams, i.e., to map columns back to composite values."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Of course, the reassembly section also provides the ability to extract just subsets of columns\nto be read and searched efficiently without ever needing to reconstruct\nthe original rows.  How well this performs is up to any particular\nZST implementation."),(0,r.kt)("p",{parentName:"blockquote"},"Also, the reassembly section is in general vastly smaller than the data section\nso the goal here isn't to express information in cute and obscure compact forms\nbut rather to represent data in an easy-to-digest, programmer-friendly form that\nleverages ZNG.")),(0,r.kt)("p",null,"The reassembly section is a ZNG stream.  Unlike Parquet,\nwhich uses an externally described schema\n(via ",(0,r.kt)("a",{parentName:"p",href:"https://thrift.apache.org/"},"Thrift"),") to describe\nanalogous data structures, we simply reuse ZNG here."),(0,r.kt)("h4",{id:"the-super-types"},"The Super Types"),(0,r.kt)("p",null,'This reassembly stream encodes 2*N+1 Zed values, where N is equal to the number\nof top-level Zed types that are present in the encoded input.\nTo simplify terminology, we call a top-level Zed type a "super type",\ne.g., there are N unique super types encoded in the ZST file.'),(0,r.kt)("p",null,"These N super types are defined by the first N values of the reassembly stream\nand are encoded as a null value of the indicated super type.\nA super type's integer position in this sequence defines its identifier\nencoded in the super column (defined below).  This identifier is called\nthe super ID."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Change the first N values to type values instead of nulls?")),(0,r.kt)("p",null,"The next N+1 records contain reassembly information for each of the N super types\nwhere each record defines the column streams needed to reconstruct the original\nZed values."),(0,r.kt)("h4",{id:"segment-maps"},"Segment Maps"),(0,r.kt)("p",null,"The foundation of column reconstruction is based on ",(0,r.kt)("em",{parentName:"p"},"segment maps"),".\nA segment map is a list of the segments from the data area that are\nconcatenated to form the data for a column stream."),(0,r.kt)("p",null,"Each segment map that appears within the reassembly records is represented\nwith a Zed array of records that represent seek ranges conforming to this\ntype signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[{offset:uint64,length:uint32}]\n")),(0,r.kt)("p",null,"In the rest of this document, we will refer to this type as ",(0,r.kt)("inlineCode",{parentName:"p"},"<segmap>"),' for\nshorthand and refer to the concept as a "segmap".'),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'We use the type name "segmap" to emphasize that this information represents\na set of byte ranges where data is stored and must be read from ',(0,r.kt)("em",{parentName:"p"},"rather than"),"\nthe data itself.")),(0,r.kt)("h4",{id:"the-super-column"},"The Super Column"),(0,r.kt)("p",null,"The first of the N+1 reassembly records defines the \"super column\", where this column\nrepresents the sequence of super types of each original Zed value, i.e., indicating\nwhich super type's column stream to select from to pull column values to form\nthe reconstructed value.\nThe sequence of super types is defined by each type's super ID (as defined above),\n0 to N-1, within the set of N super types."),(0,r.kt)("p",null,"The super column stream is encoded as a sequence of ZNG-encoded ",(0,r.kt)("inlineCode",{parentName:"p"},"int32")," primitive values.\nWhile there are a large number entries in the super column (one for each original row),\nthe cardinality of super IDs is small in practice so this column\nwill compress very significantly, e.g., in the special case that all the\nvalues in the ZST file have the same super ID,\nthe super column will compress trivially."),(0,r.kt)("p",null,"The reassembly map appears as the next value in the reassembly section\nand is of type ",(0,r.kt)("inlineCode",{parentName:"p"},"<segmap>"),"."),(0,r.kt)("h4",{id:"the-reassembly-records"},"The Reassembly Records"),(0,r.kt)("p",null,"Following the root reassembly map are N reassembly maps, one for each unique super type."),(0,r.kt)("p",null,"Each reassembly record is a record of type ",(0,r.kt)("inlineCode",{parentName:"p"},"<any_column>"),', as defined below,\nwhere each reassembly record appears in the same sequence as the original N schemas.\nNote that there is no "any" type in Zed, but rather this terminology is used\nhere to refer to any of the concrete type structures that would appear\nin a given ZST file.'),(0,r.kt)("p",null,"In other words, the reassembly record of the super column\ncombined with the N reassembly records collectively define the original sequence\nof Zed data values in the original order.\nTaken in pieces, the reassembly records allow efficient access to sub-ranges of the\nrows, to subsets of columns of the rows, to sub-ranges of columns of the rows, and so forth."),(0,r.kt)("p",null,"This simple top-down arrangement, along with the definition of the other\ncolumn structures below, is all that is needed to reconstruct all of the\noriginal data."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note that each row reassembly record has its own layout of columnar\nvalues and there is no attempt made to store like-typed columns from different\nschemas in the same physical column.")),(0,r.kt)("p",null,"The notation ",(0,r.kt)("inlineCode",{parentName:"p"},"<any_column>")," refers to any instance of the five column types:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<record_column>"),","),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<array_column>"),","),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<union_column>"),","),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<map_column>"),", or"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<primitive_column>"),".")),(0,r.kt)("p",null,"Note that when decoding a column, all type information is known\nfrom the super type in question so there is no need\nto encode the type information again in the reassembly record."),(0,r.kt)("h4",{id:"record-column"},"Record Column"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"<record_column>")," is defined recursively in terms of the column types of\nits fields, i.e., other types that represent arrays, unions, or primitive types\nand has the form:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"{\n        <fld1>:{column:<any_column>,presence:<segmap>},\n        <fld2>:{column:<any_column>,presence:<segmap>},\n        ...\n        <fldn>:{column:<any_column>,presence:<segmap>}\n}        \n")),(0,r.kt)("p",null,"where"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<fld1>")," through ",(0,r.kt)("inlineCode",{parentName:"li"},"<fldn>")," are the names of the top-level fields of the\noriginal row record,"),(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"column")," fields are column stream definitions for each field, and"),(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"presence")," columns are ",(0,r.kt)("inlineCode",{parentName:"li"},"int32")," ZNG column streams comprised of a\nrun-length encoding of the locations of column values in their respective rows,\nwhen there are null values (as described below).")),(0,r.kt)("p",null,"If there are no null values, then the ",(0,r.kt)("inlineCode",{parentName:"p"},"presence")," field contains an empty ",(0,r.kt)("inlineCode",{parentName:"p"},"<segmap>"),".\nIf all of the values are null, then the ",(0,r.kt)("inlineCode",{parentName:"p"},"column")," field is null (and the ",(0,r.kt)("inlineCode",{parentName:"p"},"presence"),"\ncontains an empty ",(0,r.kt)("inlineCode",{parentName:"p"},"<segmap>"),").  For an empty ",(0,r.kt)("inlineCode",{parentName:"p"},"<segmap>"),", there is no\ncorresponding data stored in the data section.  Since a ",(0,r.kt)("inlineCode",{parentName:"p"},"<segmap>")," is a Zed\narray, an empty ",(0,r.kt)("inlineCode",{parentName:"p"},"<segmap>")," is simply the empty array value ",(0,r.kt)("inlineCode",{parentName:"p"},"[]"),"."),(0,r.kt)("h4",{id:"array-column"},"Array Column"),(0,r.kt)("p",null,"An ",(0,r.kt)("inlineCode",{parentName:"p"},"<array_column>")," has the form:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"{values:<any_column>,lengths:<segmap>}\n")),(0,r.kt)("p",null,"where"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"values")," represents a continuous sequence of values of the array elements",(0,r.kt)("br",{parentName:"li"}),"that are sliced into array values based on the length information, and"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"lengths")," encodes a Zed ",(0,r.kt)("inlineCode",{parentName:"li"},"int32")," sequence of values that represent the length\nof each array value.")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"<array_column>")," structure is used for both Zed arrays and sets."),(0,r.kt)("h4",{id:"map-column"},"Map Column"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"<map_column>")," has the form:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"{key:<any_column>,value:<any_column>}\n")),(0,r.kt)("p",null,"where"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"key")," encodes the column of map keys and"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"value")," encodes the column of map values.")),(0,r.kt)("h4",{id:"union-column"},"Union Column"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"<union_column>")," has the form:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"{columns:[<any_column>],tags:<segmap>}\n")),(0,r.kt)("p",null,"where"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"columns")," is an array containing the reassembly information for each tagged union value\nin the same column order implied by the union type, and"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tags")," is a column of ",(0,r.kt)("inlineCode",{parentName:"li"},"int32")," values where each subsequent value encodes\nthe tag of the union type indicating which column the value falls within.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"TBD: change code to conform to columns array instead of record{c0,c1,...}")),(0,r.kt)("p",null,"The number of times each value of ",(0,r.kt)("inlineCode",{parentName:"p"},"tags")," appears must equal the number of values\nin each respective column."),(0,r.kt)("h4",{id:"primitive-column"},"Primitive Column"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"<primitive_column>")," is a ",(0,r.kt)("inlineCode",{parentName:"p"},"<segmap>")," that defines a column stream of\nprimitive values."),(0,r.kt)("h4",{id:"presence-columns"},"Presence Columns"),(0,r.kt)("p",null,"The presence column is logically a sequence of booleans, one for each position\nin the original column, indicating whether a value is null or present.\nThe number of values in the encoded column is equal to the number of values\npresent so that null values are not encoded."),(0,r.kt)("p",null,"Instead the presence column is encoded as a sequence of alternating runs.\nFirst, the number of values present is encoded, then the number of values not present,\nthen the number of values present, and so forth.   These runs are then stored\nas Zed ",(0,r.kt)("inlineCode",{parentName:"p"},"int32")," values in the presence column (which may be subject to further\ncompression based on segment framing)."),(0,r.kt)("h3",{id:"the-trailer"},"The Trailer"),(0,r.kt)("p",null,'After the reassembly section is a ZNG stream with a single record defining\nthe "trailer" of the ZST file.  The trailer provides a magic field\nindicating the "zst" format, a version number,\nthe size of the segment threshold for decomposing segments into frames,\nthe size of the skew threshold for flushing all segments to storage when\nthe memory footprint roughly exceeds this threshold,\nand an array of sizes in bytes of the sections of the ZST file.'),(0,r.kt)("p",null,"This type of this record has the format"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"{magic:string,type:string,version:int64,sections:[int64],meta:{skew_thresh:int64,segment_thresh:int64}\n")),(0,r.kt)("p",null,"The trailer can be efficiently found by scanning backward from the end of the\nZST file to find a valid ZNG stream containing a single record value\nconforming to the above type."),(0,r.kt)("h2",{id:"decoding"},"Decoding"),(0,r.kt)("p",null,"To decode an entire ZST file into rows, the trailer is read to find the sizes\nof the sections, then the ZNG stream of the reassembly section is read,\ntypically in its entirety."),(0,r.kt)("p",null,"Since this data structure is relatively small compared to all of the columnar\ndata in the ZST file,\nit will typically fit comfortably in memory and it can be very fast to scan the\nentire reassembly structure for any purpose."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'For example, for a given query, a "scan planner" could traverse all the\nreassembly records to figure out which segments will be needed, then construct\nan intelligent plan for reading the needed segments and attempt to read them\nin mostly sequential order, which could serve as\nan optimizing intermediary between any underlying storage API and the\nZST decoding logic.')),(0,r.kt)("p",null,'To decode the "next" row, its schema index is read from the root reassembly\ncolumn stream.'),(0,r.kt)("p",null,"This schema index then determines which reassembly record to fetch\ncolumn values from."),(0,r.kt)("p",null,"The top-level reassembly fetches column values as a ",(0,r.kt)("inlineCode",{parentName:"p"},"<record_column>"),"."),(0,r.kt)("p",null,"For any ",(0,r.kt)("inlineCode",{parentName:"p"},"<record_column>"),", a value from each field is read from each field's column,\naccounting for the presence column indicating null,\nand the results are encoded into the corresponding ZNG record value using\nZNG type information from the corresponding schema."),(0,r.kt)("p",null,"For a ",(0,r.kt)("inlineCode",{parentName:"p"},"<primitive_column>")," a value is determined by reading the next\nvalue from its segmap."),(0,r.kt)("p",null,"For an ",(0,r.kt)("inlineCode",{parentName:"p"},"<array_column>"),", a length is read from its ",(0,r.kt)("inlineCode",{parentName:"p"},"lengths")," segmap as an ",(0,r.kt)("inlineCode",{parentName:"p"},"int32"),"\nand that many values are read from its the ",(0,r.kt)("inlineCode",{parentName:"p"},"values")," sub-column,\nencoding the result as a ZNG array value."),(0,r.kt)("p",null,"For a ",(0,r.kt)("inlineCode",{parentName:"p"},"<union_column>"),", a value is read from its ",(0,r.kt)("inlineCode",{parentName:"p"},"selector")," segmap\nand that value is used to select the corresponding column stream\n",(0,r.kt)("inlineCode",{parentName:"p"},"c0"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"c1"),", etc.  The value read is then encoded as a ZNG union value\nusing the same selector value within the union value."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"hello-world"},"Hello, world"),(0,r.kt)("p",null,"Start with this ZNG data (shown as human-readable ",(0,r.kt)("a",{parentName:"p",href:"/docs/formats/zson"},"ZSON"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{a:"hello",b:"world"}\n{a:"goodnight",b:"gracie"}\n')),(0,r.kt)("p",null,"To convert to ZST format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"zq -f zst hello.zson > hello.zst\n")),(0,r.kt)("p",null,"Segments in the ZST format would be laid out like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"=== column for a\nhello\ngoodnight\n=== column for b\nworld\ngracie\n=== column for schema IDs\n0\n0\n===\n")),(0,r.kt)("p",null,"To see the detailed ZST structure described as ZSON, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"zst"),"\ncommand like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"zed dev dig section -Z 1 hello.zst\n")),(0,r.kt)("p",null,"which provides the Zed output (comments added with explanations):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// First, all of the types of the encoded value sequence are declared\n// with null values (just one here).\n\nnull ({a:string,b:string})\n\n// Then comes the root reassembly map.\n\n[\n    {\n        offset: 29,\n        length: 2 (int32)\n    }\n]\n\n// Finally comes the column assembly records.\n// (Again, only one schema in this example, so only one such record.)\n\n{\n    a: {\n        column: [\n            {\n                offset: 0,\n                length: 16 (int32)\n            }\n        ],\n        presence: [] ([{offset:int64,length:int32}])\n    },\n    b: {\n        column: [\n            {\n                offset: 16,\n                length: 13 (int32)\n            }\n        ],\n        presence: [] ([{offset:int64,length:int32}])\n    }\n}\n\n")),(0,r.kt)("p",null,"The ZST trailer can be viewed with this command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"zed dev dig trailer -Z hello.zst\n")),(0,r.kt)("p",null,"giving"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    magic: "ZNG Trailer",\n    type: "zst",\n    version: 2,\n    sections: [\n        31,\n        95\n    ],\n    meta: {\n        skew_thresh: 26214400,\n        segment_thresh: 5242880\n    } (=zst.FileMeta)\n} (=zngio.Trailer)\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note finally, if there were 10MB of ZNG row data here, the reassembly section\nwould be basically the same size, with perhaps a few segmaps.  This emphasizes\njust how small this data structure is compared to the data section.")))}p.isMDXComponent=!0}}]);