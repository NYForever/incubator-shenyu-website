"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[1930],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),u=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(t),d=a,g=m["".concat(o,".").concat(d)]||m[d]||c[d]||i;return t?r.createElement(g,p(p({ref:n},s),{},{components:t})):r.createElement(g,p({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,p=new Array(i);p[0]=m;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,p[1]=l;for(var u=2;u<i;u++)p[u]=t[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},95941:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return s},default:function(){return m}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),p=["components"],l={title:"ParamMapping Plugin",keywords:["paramMapping-plugin"],description:"paramMapping-plugin"},o=void 0,u={unversionedId:"plugin-center/http-process/parammapping-plugin",id:"version-2.4.2/plugin-center/http-process/parammapping-plugin",isDocsHomePage:!1,title:"ParamMapping Plugin",description:"paramMapping-plugin",source:"@site/versioned_docs/version-2.4.2/plugin-center/http-process/parammapping-plugin.md",sourceDirName:"plugin-center/http-process",slug:"/plugin-center/http-process/parammapping-plugin",permalink:"/docs/plugin-center/http-process/parammapping-plugin",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/versioned_docs/version-2.4.2/plugin-center/http-process/parammapping-plugin.md",version:"2.4.2",frontMatter:{title:"ParamMapping Plugin",keywords:["paramMapping-plugin"],description:"paramMapping-plugin"},sidebar:"version-2.4.2/tutorialSidebar",previous:{title:"ModifyResponse Plugin",permalink:"/docs/plugin-center/http-process/modifyresponse-plugin"},next:{title:"Redirect Plugin",permalink:"/docs/plugin-center/http-process/redirect-plugin"}},s=[{value:"Description",id:"description",children:[]},{value:"Plugin Setting",id:"plugin-setting",children:[]},{value:"Plugin Use",id:"plugin-use",children:[]},{value:"ParamMappingPlugin Guide",id:"parammappingplugin-guide",children:[]}],c={toc:s};function m(e){var n=e.components,l=(0,a.Z)(e,p);return(0,i.kt)("wrapper",(0,r.Z)({},c,l,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"paramMapping")," is a native plugin of Apache ShenYu Gateway and is used to edit your request param.")),(0,i.kt)("h2",{id:"plugin-setting"},"Plugin Setting"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In ",(0,i.kt)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e BasicConfig --\x3e Plugin --\x3e ",(0,i.kt)("inlineCode",{parentName:"li"},"paramMapping")," , set to enable.")),(0,i.kt)("h2",{id:"plugin-use"},"Plugin Use"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Introduce ",(0,i.kt)("inlineCode",{parentName:"li"},"paramMapping")," dependency in the pom.xml file of the gateway.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"  \x3c!-- apache shenyu param_mapping plugin start--\x3e\n<dependency>\n  <groupId>org.apache.shenyu</groupId>\n  <artifactId>shenyu-spring-boot-starter-plugin-param-mapping</artifactId>\n  <version>${project.version}</version>\n</dependency>\n        \x3c!-- apache shenyu param_mapping plugin end--\x3e\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Selectors and rules, please refer to:",(0,i.kt)("a",{parentName:"p",href:"../../user-guide/admin-usage/selector-and-rule"},"Selector And Rule Config"),"\u3002"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Only those matched requests can be modified your request body.")))),(0,i.kt)("h2",{id:"parammappingplugin-guide"},"ParamMappingPlugin Guide"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"1.Configuration selector"),(0,i.kt)("li",{parentName:"ul"},"2.Configuration rule"),(0,i.kt)("li",{parentName:"ul"},"3.modify request body\n",(0,i.kt)("img",{src:t(64591).Z})),(0,i.kt)("li",{parentName:"ul"},"param details:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"addParameterKeys"),": add a new ",(0,i.kt)("inlineCode",{parentName:"li"},"key-value")," on body"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"replaceParameterKeys"),": replace request body's ",(0,i.kt)("inlineCode",{parentName:"li"},"key")," \uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"key")," is the value to be replaced\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"value")," is the value after replacement"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"removeParameterKeys"),": remove a body ",(0,i.kt)("inlineCode",{parentName:"li"},"key"))))),(0,i.kt)("p",null,"param_mapping modify the request body is achieved through ",(0,i.kt)("inlineCode",{parentName:"p"},"JSONPath")," , ",(0,i.kt)("inlineCode",{parentName:"p"},"$.")," represents the root directory."),(0,i.kt)("p",null,"use the configuration\uff0cunopened the plugin\uff0crequest body is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{"id":3,"data":{"value":"18","age":"36"}}\n')),(0,i.kt)("p",null,"open the plugin\uff0cthe final request body is"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{"name":"shenyu","userId":3,"data":{"age":"36"}}\n')),(0,i.kt)("p",null,"add a new key-value ",(0,i.kt)("inlineCode",{parentName:"p"},"name:shenyu"),",replace the key ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"userId"),", remove the key ",(0,i.kt)("inlineCode",{parentName:"p"},"data.value")," ."))}m.isMDXComponent=!0},64591:function(e,n,t){n.Z=t.p+"assets/images/param-mapping-48f0bc50c54e2044a1904fe4870ba9b5.png"}}]);