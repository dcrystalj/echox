"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3722],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(r),m=a,f=c["".concat(u,".").concat(m)]||c[m]||p[m]||i;return r?n.createElement(f,o(o({ref:t},d),{},{components:r})):n.createElement(f,o({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5315:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const i={description:"Request ID middleware"},o="Request ID",l={unversionedId:"middleware/request-id",id:"middleware/request-id",title:"Request ID",description:"Request ID middleware",source:"@site/docs/middleware/request-id.md",sourceDirName:"middleware",slug:"/middleware/request-id",permalink:"/docs/middleware/request-id",draft:!1,editUrl:"https://github.com/labstack/echox/blob/master/website/docs/middleware/request-id.md",tags:[],version:"current",frontMatter:{description:"Request ID middleware"},sidebar:"docsSidebar",previous:{title:"Redirect",permalink:"/docs/middleware/redirect"},next:{title:"Rewrite",permalink:"/docs/middleware/rewrite"}},u={},s=[{value:"Usage",id:"usage",level:2},{value:"Custom Configuration",id:"custom-configuration",level:2},{value:"Usage",id:"usage-1",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Default Configuration",id:"default-configuration",level:3},{value:"Set ID",id:"set-id",level:2},{value:"Request",id:"request",level:3},{value:"Log",id:"log",level:3}],d={toc:s},c="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"request-id"},"Request ID"),(0,a.kt)("p",null,"Request ID middleware generates a unique id for a request."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"e.Use(middleware.RequestID())\n")),(0,a.kt)("h2",{id:"custom-configuration"},"Custom Configuration"),(0,a.kt)("h3",{id:"usage-1"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"e.Use(middleware.RequestIDWithConfig(middleware.RequestIDConfig{\n  Generator: func() string {\n    return customGenerator()\n  },\n}))\n")),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"RequestIDConfig struct {\n  // Skipper defines a function to skip middleware.\n  Skipper Skipper\n\n  // Generator defines a function to generate an ID.\n  // Optional. Default value random.String(32).\n  Generator func() string\n\n  // TargetHeader defines what header to look for to populate the id\n  TargetHeader string\n}\n")),(0,a.kt)("h3",{id:"default-configuration"},"Default Configuration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"DefaultRequestIDConfig = RequestIDConfig{\n  Skipper:   DefaultSkipper,\n  Generator: generator,\n  TargetHeader: echo.HeaderXRequestID,\n}\n")),(0,a.kt)("h2",{id:"set-id"},"Set ID"),(0,a.kt)("p",null,"You can set the id from the requester with the ",(0,a.kt)("inlineCode",{parentName:"p"},"X-Request-ID"),"-Header"),(0,a.kt)("h3",{id:"request"},"Request"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'curl -H "X-Request-ID: 3" --compressed -v "http://localhost:1323/?my=param"\n')),(0,a.kt)("h3",{id:"log"},"Log"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'{"time":"2017-11-13T20:26:28.6438003+01:00","id":"3","remote_ip":"::1","host":"localhost:1323","method":"GET","uri":"/?my=param","my":"param","status":200, "latency":0,"latency_human":"0s","bytes_in":0,"bytes_out":13}\n')))}p.isMDXComponent=!0}}]);