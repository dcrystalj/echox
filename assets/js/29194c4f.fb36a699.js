"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3038],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),c=l(r),m=o,f=c["".concat(u,".").concat(m)]||c[m]||s[m]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var d={};for(var u in t)hasOwnProperty.call(t,u)&&(d[u]=t[u]);d.originalType=e,d[c]="string"==typeof e?e:o,i[1]=d;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},875:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={description:"Body dump middleware"},i="Body Dump",d={unversionedId:"middleware/body-dump",id:"middleware/body-dump",title:"Body Dump",description:"Body dump middleware",source:"@site/docs/middleware/body-dump.md",sourceDirName:"middleware",slug:"/middleware/body-dump",permalink:"/docs/middleware/body-dump",draft:!1,editUrl:"https://github.com/labstack/echox/blob/master/website/docs/middleware/body-dump.md",tags:[],version:"current",frontMatter:{description:"Body dump middleware"},sidebar:"docsSidebar",previous:{title:"Basic Auth",permalink:"/docs/middleware/basic-auth"},next:{title:"Body Limit",permalink:"/docs/middleware/body-limit"}},u={},l=[{value:"Usage",id:"usage",level:2},{value:"Custom Configuration",id:"custom-configuration",level:2},{value:"Usage",id:"usage-1",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Default Configuration*",id:"default-configuration",level:3}],p={toc:l},c="wrapper";function s(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"body-dump"},"Body Dump"),(0,o.kt)("p",null,"Body dump middleware captures the request and response payload and calls the registered handler. Generally used for debugging/logging purpose. Avoid using it if your request/response payload is huge e.g. file upload/download, but if you still need to, add an exception for your endpoints in the skipper function."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"e := echo.New()\ne.Use(middleware.BodyDump(func(c echo.Context, reqBody, resBody []byte) {\n}))\n")),(0,o.kt)("h2",{id:"custom-configuration"},"Custom Configuration"),(0,o.kt)("h3",{id:"usage-1"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"e := echo.New()\ne.Use(middleware.BodyDumpWithConfig(middleware.BodyDumpConfig{}))\n")),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"BodyDumpConfig struct {\n  // Skipper defines a function to skip middleware.\n  Skipper Skipper\n\n  // Handler receives request and response payload.\n  // Required.\n  Handler BodyDumpHandler\n}\n")),(0,o.kt)("h3",{id:"default-configuration"},"Default Configuration*"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"DefaultBodyDumpConfig = BodyDumpConfig{\n  Skipper: DefaultSkipper,\n}\n")))}s.isMDXComponent=!0}}]);