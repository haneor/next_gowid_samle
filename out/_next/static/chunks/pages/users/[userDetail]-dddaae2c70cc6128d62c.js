(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[263],{245:function(r,t,n){"use strict";n.d(t,{Z:function(){return b}});var o=n(3366),a=n(7462),e=n(7294),i=n(6010),s=n(9766),u=n(4178);const p=["sx"];function c(r){const{sx:t}=r,n=(0,o.Z)(r,p),{systemProps:e,otherProps:i}=(r=>{const t={systemProps:{},otherProps:{}};return Object.keys(r).forEach((n=>{u.Gc[n]?t.systemProps[n]=r[n]:t.otherProps[n]=r[n]})),t})(n);let c;return c=Array.isArray(t)?[e,...t]:"function"===typeof t?(...r)=>{const n=t(...r);return(0,s.P)(n)?(0,a.Z)({},e,n):e}:(0,a.Z)({},e,t),(0,a.Z)({},i,{sx:c})}var h=n(4780),l=n(1861),g=n(6122),d=n(1220),f=n(8562);function m(r){return(0,f.Z)("MuiTypography",r)}(0,n(1588).Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var v=n(5893);const y=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],x=(0,l.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(r,t)=>{const{ownerState:n}=r;return[t.root,n.variant&&t[n.variant],"inherit"!==n.align&&t[`align${(0,d.Z)(n.align)}`],n.noWrap&&t.noWrap,n.gutterBottom&&t.gutterBottom,n.paragraph&&t.paragraph]}})((({theme:r,ownerState:t})=>(0,a.Z)({margin:0},t.variant&&r.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16}))),Z={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},P={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"};var b=e.forwardRef((function(r,t){const n=(0,g.Z)({props:r,name:"MuiTypography"}),e=(r=>P[r]||r)(n.color),s=c((0,a.Z)({},n,{color:e})),{align:u="inherit",className:p,component:l,gutterBottom:f=!1,noWrap:b=!1,paragraph:w=!1,variant:j="body1",variantMapping:_=Z}=s,B=(0,o.Z)(s,y),N=(0,a.Z)({},s,{align:u,color:e,className:p,component:l,gutterBottom:f,noWrap:b,paragraph:w,variant:j,variantMapping:_}),W=l||(w?"p":_[j]||Z[j])||"span",E=(r=>{const{align:t,gutterBottom:n,noWrap:o,paragraph:a,variant:e,classes:i}=r,s={root:["root",e,"inherit"!==r.align&&`align${(0,d.Z)(t)}`,n&&"gutterBottom",o&&"noWrap",a&&"paragraph"]};return(0,h.Z)(s,m,i)})(N);return(0,v.jsx)(x,(0,a.Z)({as:W,ref:t,ownerState:N,className:(0,i.Z)(E.root,p)},B))}))},5228:function(r,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var o=n(1163),a=n(245),e=n(6501),i=n(5893),s=function(r){var t=r.data;return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(e.Z,{sx:{margin:"50px auto",textAlign:"center",padding:"50px"},children:[(0,i.jsxs)(a.Z,{lineHeight:"2",children:["\uc544\uc774\ub514 : ",null===t||void 0===t?void 0:t.id]}),(0,i.jsxs)(a.Z,{lineHeight:"2",children:["\uc774\ub984 : ",null===t||void 0===t?void 0:t.name]}),(0,i.jsxs)(a.Z,{lineHeight:"2",children:["\ubcf4\uc720\ub7c9 : ",null===t||void 0===t?void 0:t.amount]})]})})},u=n(7294),p=n(5998),c=n(9349),h=n(1712),l=n(7079),g=function(){var r=(0,p.I0)(),t=(0,o.useRouter)().query.userDetail,n=(0,p.v9)(h.bP),a=(0,p.v9)(h.S6);return(0,u.useEffect)((function(){r((0,c.Rz)(t))}),[t]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.Z,{open:a}),(0,i.jsx)(s,{data:n})]})}},7079:function(r,t,n){"use strict";n(7294);var o=n(6020),a=n(9062),e=n(5893);t.Z=function(r){var t=r.open,n=void 0!==t&&t,i=r.size,s=void 0===i?100:i;return(0,e.jsx)("div",{children:(0,e.jsx)(o.Z,{sx:{color:"#fff",zIndex:function(r){return r.zIndex.drawer+1}},open:n,children:(0,e.jsx)(a.Z,{color:"primary",size:s})})})}},1712:function(r,t,n){"use strict";n.d(t,{G:function(){return e},S6:function(){return i},bP:function(){return s}});var o=n(573),a=function(r){return r.user},e=(0,o.P1)(a,(function(r){return r.list})),i=(0,o.P1)(a,(function(r){return r.loading})),s=(0,o.P1)(a,(function(r){return r.user}))},2418:function(r,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/users/[userDetail]",function(){return n(5228)}])}},function(r){r.O(0,[428,480,774,888,179],(function(){return t=2418,r(r.s=t);var t}));var t=r.O();_N_E=t}]);