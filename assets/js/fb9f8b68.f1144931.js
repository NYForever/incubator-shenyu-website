"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[1849],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,y=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(y,o(o({ref:t},s),{},{components:n})):r.createElement(y,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},11034:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],p={sidebar_position:2,title:"Binary Packages Deployment",keywords:["Deployment"],description:"Binary Packages Deployment"},l=void 0,c={unversionedId:"deployment/deployment-package",id:"version-2.4.1/deployment/deployment-package",isDocsHomePage:!1,title:"Binary Packages Deployment",description:"Binary Packages Deployment",source:"@site/versioned_docs/version-2.4.1/deployment/deployment-package.md",sourceDirName:"deployment",slug:"/deployment/deployment-package",permalink:"/docs/2.4.1/deployment/deployment-package",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/versioned_docs/version-2.4.1/deployment/deployment-package.md",version:"2.4.1",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Binary Packages Deployment",keywords:["Deployment"],description:"Binary Packages Deployment"},sidebar:"version-2.4.1/tutorialSidebar",previous:{title:"Local Quick Deployment",permalink:"/docs/2.4.1/deployment/deployment-quick"},next:{title:"Docker Deployment",permalink:"/docs/2.4.1/deployment/deployment-docker"}},s=[{value:"Start Apache ShenYu Admin",id:"start-apache-shenyu-admin",children:[]},{value:"Start Apache ShenYu Bootstrap",id:"start-apache-shenyu-bootstrap",children:[]}],u={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This article introduces the deployment of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway using the binary packages."),(0,i.kt)("h3",{id:"start-apache-shenyu-admin"},"Start Apache ShenYu Admin"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"download ",(0,i.kt)("inlineCode",{parentName:"p"},"apache-shenyu-incubating-2.4.1-admin-bin.tar.gz"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"unzip ",(0,i.kt)("inlineCode",{parentName:"p"},"apache-shenyu-incubating-2.4.1-admin-bin.tar.gz"),"\u3002 go to the ",(0,i.kt)("inlineCode",{parentName:"p"},"bin")," directory.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"use ",(0,i.kt)("inlineCode",{parentName:"p"},"h2")," to store data\uff1a"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"> windows: start.bat --spring.profiles.active = h2\n\n> linux: ./start.sh --spring.profiles.active = h2\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"use ",(0,i.kt)("inlineCode",{parentName:"li"},"MySQL")," to store data, go to the ",(0,i.kt)("inlineCode",{parentName:"li"},"/conf")," directory, and modify the configuration of ",(0,i.kt)("inlineCode",{parentName:"li"},"mysql")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"application.yaml"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"> windows: start.bat \n\n> linux: ./start.sh \n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"use ",(0,i.kt)("inlineCode",{parentName:"li"},"PostgreSql")," to store data, go to the ",(0,i.kt)("inlineCode",{parentName:"li"},"/conf")," directory, and  modify ",(0,i.kt)("inlineCode",{parentName:"li"},"spring.profiles.active")," of the configuration in ",(0,i.kt)("inlineCode",{parentName:"li"},"application.yaml")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"pg"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"> windows: start.bat \n\n> linux: ./start.sh \n")),(0,i.kt)("h3",{id:"start-apache-shenyu-bootstrap"},"Start Apache ShenYu Bootstrap"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"download ",(0,i.kt)("inlineCode",{parentName:"p"},"apache-shenyu-incubating-2.4.1-bootstrap-bin.tar.gz"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"unzip ",(0,i.kt)("inlineCode",{parentName:"p"},"apache-shenyu-incubating-2.4.1-bootstrap-bin.tar.gz"),"\u3002 go to the ",(0,i.kt)("inlineCode",{parentName:"p"},"bin")," directory."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"> windwos : start.bat \n\n> linux : ./start.sh \n")))}d.isMDXComponent=!0}}]);