"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3603],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),i=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=i(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=i(n),m=r,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:r,l[1]=s;for(var i=2;i<o;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1975:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var a=n(7462),r=(n(7294),n(3905));const o={description:"Sending response",slug:"/response",sidebar_position:9},l="Response",s={unversionedId:"guide/response",id:"guide/response",title:"Response",description:"Sending response",source:"@site/docs/guide/response.md",sourceDirName:"guide",slug:"/response",permalink:"/docs/response",draft:!1,editUrl:"https://github.com/labstack/echox/blob/master/website/docs/guide/response.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{description:"Sending response",slug:"/response",sidebar_position:9},sidebar:"docsSidebar",previous:{title:"Request",permalink:"/docs/request"},next:{title:"Routing",permalink:"/docs/routing"}},p={},i=[{value:"Send String",id:"send-string",level:2},{value:"Send HTML (Reference to templates)",id:"send-html-reference-to-templates",level:2},{value:"Send HTML Blob",id:"send-html-blob",level:3},{value:"Render Template",id:"render-template",level:2},{value:"Send JSON",id:"send-json",level:2},{value:"Stream JSON",id:"stream-json",level:3},{value:"JSON Pretty",id:"json-pretty",level:3},{value:"JSON Blob",id:"json-blob",level:3},{value:"Send JSONP",id:"send-jsonp",level:2},{value:"Send XML",id:"send-xml",level:2},{value:"Stream XML",id:"stream-xml",level:3},{value:"XML Pretty",id:"xml-pretty",level:3},{value:"XML Blob",id:"xml-blob",level:3},{value:"Send File",id:"send-file",level:2},{value:"Send Attachment",id:"send-attachment",level:2},{value:"Send Inline",id:"send-inline",level:2},{value:"Send Blob",id:"send-blob",level:2},{value:"Send Stream",id:"send-stream",level:2},{value:"Send No Content",id:"send-no-content",level:2},{value:"Redirect Request",id:"redirect-request",level:2},{value:"Hooks",id:"hooks",level:2},{value:"Before Response",id:"before-response",level:3},{value:"After Response",id:"after-response",level:3}],c={toc:i},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"response"},"Response"),(0,r.kt)("h2",{id:"send-string"},"Send String"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Context#String(code int, s string)")," can be used to send plain text response with status\ncode."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func(c echo.Context) error {\n  return c.String(http.StatusOK, "Hello, World!")\n}\n')),(0,r.kt)("h2",{id:"send-html-reference-to-templates"},"Send HTML (Reference to templates)"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Context#HTML(code int, html string)")," can be used to send simple HTML response with\nstatus code. If you are looking to send dynamically generate HTML see ",(0,r.kt)("a",{parentName:"p",href:"/docs/templates"},"templates"),"."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func(c echo.Context) error {\n  return c.HTML(http.StatusOK, "<strong>Hello, World!</strong>")\n}\n')),(0,r.kt)("h3",{id:"send-html-blob"},"Send HTML Blob"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Context#HTMLBlob(code int, b []byte)")," can be used to send HTML blob with status\ncode. You may find it handy using with a template engine which outputs ",(0,r.kt)("inlineCode",{parentName:"p"},"[]byte"),"."),(0,r.kt)("h2",{id:"render-template"},"Render Template"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/templates"},"Learn more")),(0,r.kt)("h2",{id:"send-json"},"Send JSON"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Context#JSON(code int, i interface{})")," can be used to encode a provided Go type into\nJSON and send it as response with status code."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// User\ntype User struct {\n  Name  string `json:"name" xml:"name"`\n  Email string `json:"email" xml:"email"`\n}\n\n// Handler\nfunc(c echo.Context) error {\n  u := &User{\n    Name:  "Jon",\n    Email: "jon@labstack.com",\n  }\n  return c.JSON(http.StatusOK, u)\n}\n')),(0,r.kt)("h3",{id:"stream-json"},"Stream JSON"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Context#JSON()")," internally uses ",(0,r.kt)("inlineCode",{parentName:"p"},"json.Marshal")," which may not be efficient to large JSON,\nin that case you can directly stream JSON."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func(c echo.Context) error {\n  u := &User{\n    Name:  "Jon",\n    Email: "jon@labstack.com",\n  }\n  c.Response().Header().Set(echo.HeaderContentType, echo.MIMEApplicationJSONCharsetUTF8)\n  c.Response().WriteHeader(http.StatusOK)\n  return json.NewEncoder(c.Response()).Encode(u)\n}\n')),(0,r.kt)("h3",{id:"json-pretty"},"JSON Pretty"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Context#JSONPretty(code int, i interface{}, indent string)")," can be used to a send\na JSON response which is pretty printed based on indent, which could be spaces or tabs."),(0,r.kt)("p",null,"Example below sends a pretty print JSON indented with spaces:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func(c echo.Context) error {\n  u := &User{\n    Name:  "Jon",\n    Email: "joe@labstack.com",\n  }\n  return c.JSONPretty(http.StatusOK, u, "  ")\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "email": "joe@labstack.com",\n  "name": "Jon"\n}\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can also use ",(0,r.kt)("inlineCode",{parentName:"p"},"Context#JSON()")," to output a pretty printed JSON (indented with spaces)\nby appending ",(0,r.kt)("inlineCode",{parentName:"p"},"pretty")," in the request URL query string.")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl http://localhost:1323/users/1?pretty\n")),(0,r.kt)("h3",{id:"json-blob"},"JSON Blob"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Context#JSONBlob(code int, b []byte)")," can be used to send pre-encoded JSON blob directly\nfrom external source, for example, database."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func(c echo.Context) error {\n  encodedJSON := []byte{} // Encoded JSON from external source\n  return c.JSONBlob(http.StatusOK, encodedJSON)\n}\n")),(0,r.kt)("h2",{id:"send-jsonp"},"Send JSONP"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Context#JSONP(code int, callback string, i interface{})")," can be used to encode a provided\nGo type into JSON and send it as JSONP payload constructed using a callback, with\nstatus code."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/cookbook/jsonp"},(0,r.kt)("em",{parentName:"a"},"Example"))),(0,r.kt)("h2",{id:"send-xml"},"Send XML"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Context#XML(code int, i interface{})")," can be used to encode a provided Go type into\nXML and send it as response with status code."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func(c echo.Context) error {\n  u := &User{\n    Name:  "Jon",\n    Email: "jon@labstack.com",\n  }\n  return c.XML(http.StatusOK, u)\n}\n')),(0,r.kt)("h3",{id:"stream-xml"},"Stream XML"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Context#XML")," internally uses ",(0,r.kt)("inlineCode",{parentName:"p"},"xml.Marshal")," which may not be efficient to large XML,\nin that case you can directly stream XML."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func(c echo.Context) error {\n  u := &User{\n    Name:  "Jon",\n    Email: "jon@labstack.com",\n  }\n  c.Response().Header().Set(echo.HeaderContentType, echo.MIMEApplicationXMLCharsetUTF8)\n  c.Response().WriteHeader(http.StatusOK)\n  return xml.NewEncoder(c.Response()).Encode(u)\n}\n')),(0,r.kt)("h3",{id:"xml-pretty"},"XML Pretty"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Context#XMLPretty(code int, i interface{}, indent string)")," can be used to a send\nan XML response which is pretty printed based on indent, which could be spaces or tabs."),(0,r.kt)("p",null,"Example below sends a pretty print XML indented with spaces:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func(c echo.Context) error {\n  u := &User{\n    Name:  "Jon",\n    Email: "joe@labstack.com",\n  }\n  return c.XMLPretty(http.StatusOK, u, "  ")\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<User>\n  <Name>Jon</Name>\n  <Email>joe@labstack.com</Email>\n</User>\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can also use ",(0,r.kt)("inlineCode",{parentName:"p"},"Context#XML()")," to output a pretty printed XML (indented with spaces) by appending ",(0,r.kt)("inlineCode",{parentName:"p"},"pretty")," in the request URL query string.")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl http://localhost:1323/users/1?pretty\n")),(0,r.kt)("h3",{id:"xml-blob"},"XML Blob"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Context#XMLBlob(code int, b []byte)")," can be used to send pre-encoded XML blob directly\nfrom external source, for example, database."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func(c echo.Context) error {\n  encodedXML := []byte{} // Encoded XML from external source\n  return c.XMLBlob(http.StatusOK, encodedXML)\n}\n")),(0,r.kt)("h2",{id:"send-file"},"Send File"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Context#File(file string)")," can be used to send the content of file as response.\nIt automatically sets the correct content type and handles caching gracefully."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func(c echo.Context) error {\n  return c.File("<PATH_TO_YOUR_FILE>")\n}\n')),(0,r.kt)("h2",{id:"send-attachment"},"Send Attachment"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Context#Attachment(file, name string)")," is similar to ",(0,r.kt)("inlineCode",{parentName:"p"},"File()")," except that it is\nused to send file as attachment with provided name."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func(c echo.Context) error {\n  return c.Attachment("<PATH_TO_YOUR_FILE>", "<ATTACHMENT_NAME>")\n}\n')),(0,r.kt)("h2",{id:"send-inline"},"Send Inline"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Context#Inline(file, name string)")," is similar to ",(0,r.kt)("inlineCode",{parentName:"p"},"File()")," except that it is\nused to send file as inline with provided name."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func(c echo.Context) error {\n  return c.Inline("<PATH_TO_YOUR_FILE>")\n}\n')),(0,r.kt)("h2",{id:"send-blob"},"Send Blob"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Context#Blob(code int, contentType string, b []byte)")," can be used to send an arbitrary\ndata response with provided content type and status code."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func(c echo.Context) (err error) {\n  data := []byte(`0306703,0035866,NO_ACTION,06/19/2006\n      0086003,"0005866",UPDATED,06/19/2006`)\n    return c.Blob(http.StatusOK, "text/csv", data)\n}\n')),(0,r.kt)("h2",{id:"send-stream"},"Send Stream"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Context#Stream(code int, contentType string, r io.Reader)")," can be used to send an\narbitrary data stream response with provided content type, ",(0,r.kt)("inlineCode",{parentName:"p"},"io.Reader")," and status\ncode."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func(c echo.Context) error {\n  f, err := os.Open("<PATH_TO_IMAGE>")\n  if err != nil {\n    return err\n  }\n  return c.Stream(http.StatusOK, "image/png", f)\n}\n')),(0,r.kt)("h2",{id:"send-no-content"},"Send No Content"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Context#NoContent(code int)")," can be used to send empty body with status code."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func(c echo.Context) error {\n  return c.NoContent(http.StatusOK)\n}\n")),(0,r.kt)("h2",{id:"redirect-request"},"Redirect Request"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Context#Redirect(code int, url string)")," can be used to redirect the request to\na provided URL with status code."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func(c echo.Context) error {\n  return c.Redirect(http.StatusMovedPermanently, "<URL>")\n}\n')),(0,r.kt)("h2",{id:"hooks"},"Hooks"),(0,r.kt)("h3",{id:"before-response"},"Before Response"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Context#Response#Before(func())")," can be used to register a function which is called just before the response is written."),(0,r.kt)("h3",{id:"after-response"},"After Response"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Context#Response#After(func())"),' can be used to register a function which is called just\nafter the response is written. If the "Content-Length" is unknown, none of the after\nfunction is executed.'),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func(c echo.Context) error {\n  c.Response().Before(func() {\n    println("before response")\n  })\n  c.Response().After(func() {\n    println("after response")\n  })\n  return c.NoContent(http.StatusNoContent)\n}\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"It is possible to register multiple Before and After functions.")))}u.isMDXComponent=!0}}]);