"use strict";(self.webpackChunkmy_react_app=self.webpackChunkmy_react_app||[]).push([[327],{327:function(e,r,n){n.r(r),n.d(r,{default:function(){return A}});var t=n(1413),a=n(4165),o=n(5861),i=n(885),s=n(2563),c=n(9433),l=n(3477),d=n(679),u=n(2463),p=n(7640),m=n(2669),f=n(7313),Z=n(5627),h=n(8467),v=n(3463),g=n(2627),x=n(4207),w=n(6417),b=function(e){var r=e.open;return(0,w.jsx)(g.Z,{sx:{color:"#fff",zIndex:function(e){return e.zIndex.drawer+1}},open:r,children:(0,w.jsx)(x.Z,{color:"inherit"})})},y=n(1229),k=n(168),C=n(686);var _,I=n.p+"static/media/logo.6ce24c58023cc2f8fd88fe9d219db6c6.svg",P=n(1568),S=(0,C.F4)(_||(_=(0,k.Z)(["\n    from {\n        transform: rotate(0deg);\n    }\n    to {\n        transform: rotate(360deg);\n    }\n"]))),j=function(){return(0,P.tZ)("img",{src:I,css:{height:"40vmin",pointerEvents:"none","@media (prefers-reduced-motion: no-preference)":{animation:"".concat(S," infinite 20s linear")}},alt:"logo"})},X=v.Ry({user:v.Z_().trim().required("Please enter your user name."),password:v.Z_().trim().required("Please enter your user name.")});var A=function(){var e,r,n,v,g=(0,y.Z)(),x=(0,Z.cI)({resolver:(0,s.X)(X)}),w=x.formState.errors,k=x.handleSubmit,C=x.register,_=(0,h.TH)(),I=(0,h.s0)(),S=(0,f.useState)({loading:!1,error:void 0}),A=(0,i.Z)(S,2),B=A[0],T=A[1],q=(null===(e=_.state)||void 0===e||null===(r=e.from)||void 0===r?void 0:r.pathname)||"/";g.isAuthenticated&&(0,P.tZ)(h.Fg,{to:q,replace:!0});var z=function(){var e=(0,o.Z)((0,a.Z)().mark((function e(r){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!B.loading){e.next=2;break}return e.abrupt("return");case 2:return T({loading:!0,error:void 0}),e.prev=3,e.next=6,g.signin(r);case 6:if(!e.sent){e.next=10;break}I(q,{replace:!0}),e.next=11;break;case 10:T({loading:!1,error:new Error("Incorrect username or password.")});case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),T({loading:!1,error:e.t0});case 16:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(r){return e.apply(this,arguments)}}();return(0,P.BX)(d.Z,{css:{display:"flex",flexDirection:"column",justifyContent:"center",height:"100vh"},maxWidth:"md",children:[(0,P.BX)(u.Z,{direction:"row",flexWrap:"wrap",justifyContent:"center",alignItems:"center",children:[(0,P.tZ)(j,{}),(0,P.BX)(u.Z,{component:"form",noValidate:!0,spacing:1,onSubmit:k(z),children:[(0,P.tZ)(m.Z,{variant:"h2",component:"h1",css:{textAlign:"center"},children:"My React App"}),B.error&&(0,P.tZ)(c.Z,{severity:"error",children:B.error.message}),(0,P.tZ)(p.Z,(0,t.Z)((0,t.Z)({label:"User",type:"email",autoComplete:"username",variant:"filled",inputProps:{maxLength:255}},C("user")),{},{error:!!w.user,helperText:null===(n=w.user)||void 0===n?void 0:n.message})),(0,P.tZ)(p.Z,(0,t.Z)((0,t.Z)({label:"Password",type:"password",autoComplete:"current-password",variant:"filled",inputProps:{maxLength:1e3}},C("password")),{},{error:!!w.password,helperText:null===(v=w.password)||void 0===v?void 0:v.message})),(0,P.tZ)(l.Z,{type:"submit",variant:"contained",disabled:B.loading,children:"Sign in"})]})]}),(0,P.tZ)(b,{open:B.loading})]})}}}]);