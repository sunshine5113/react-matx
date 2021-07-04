(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[27],{1411:function(e,a,t){"use strict";var n=t(6),l=t(2),o=t(0),r=(t(5),t(4)),i=t(8),c=t(554),s=t(10),d=o.forwardRef((function(e,a){var t=e.children,i=e.classes,d=e.className,m=e.color,u=void 0===m?"default":m,b=e.component,p=void 0===b?"button":b,E=e.disabled,h=void 0!==E&&E,y=e.disableFocusRipple,N=void 0!==y&&y,g=e.focusVisibleClassName,v=e.size,f=void 0===v?"large":v,x=e.variant,k=void 0===x?"round":x,w=Object(n.a)(e,["children","classes","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"]);return o.createElement(c.a,Object(l.a)({className:Object(r.a)(i.root,d,"round"!==k&&i.extended,"large"!==f&&i["size".concat(Object(s.a)(f))],h&&i.disabled,{primary:i.primary,secondary:i.secondary,inherit:i.colorInherit}[u]),component:p,disabled:h,focusRipple:!N,focusVisibleClassName:Object(r.a)(i.focusVisible,g),ref:a},w),o.createElement("span",{className:i.label},t))}));a.a=Object(i.a)((function(e){return{root:Object(l.a)({},e.typography.button,{boxSizing:"border-box",minHeight:36,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,boxShadow:e.shadows[6],"&:active":{boxShadow:e.shadows[12]},color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],"&:hover":{backgroundColor:e.palette.grey.A100,"@media (hover: none)":{backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground},textDecoration:"none"},"&$focusVisible":{boxShadow:e.shadows[6]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},primary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},secondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},extended:{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48,"&$sizeSmall":{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"&$sizeMedium":{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40}},focusVisible:{},disabled:{},colorInherit:{color:"inherit"},sizeSmall:{width:40,height:40},sizeMedium:{width:48,height:48}}}),{name:"MuiFab"})(d)},1974:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return u}));var n=t(0),l=t.n(n),o=t(1269),r=t(1304),i=t(1245),c=t(1296),s=t(1411),d=t(101),m=Object(o.a)((function(e){return{button:{margin:e.spacing(1)},input:{display:"none"}}}));function u(){var e=m();return l.a.createElement("div",{className:"m-sm-30"},l.a.createElement("div",{className:"mb-sm-30"},l.a.createElement(d.a,{routeSegments:[{name:"Material",path:"/material"},{name:"Buttons"}]})),l.a.createElement(d.q,{title:"contained buttons"},l.a.createElement(r.a,{variant:"contained",className:e.button},"Default"),l.a.createElement(r.a,{variant:"contained",color:"primary",className:e.button},"Primary"),l.a.createElement(r.a,{variant:"contained",color:"secondary",className:e.button},"Secondary"),l.a.createElement(r.a,{variant:"contained",color:"secondary",disabled:!0,className:e.button},"Disabled"),l.a.createElement(r.a,{variant:"contained",href:"#contained-buttons",className:e.button},"Link"),l.a.createElement("input",{accept:"image/*",className:e.input,id:"contained-button-file",multiple:!0,type:"file"}),l.a.createElement("label",{htmlFor:"contained-button-file"},l.a.createElement(r.a,{variant:"contained",component:"span",className:e.button},"Upload"))),l.a.createElement("div",{className:"py-3"}),l.a.createElement(d.q,{title:"text buttons"},l.a.createElement(r.a,{className:e.button},"Default"),l.a.createElement(r.a,{color:"primary",className:e.button},"Primary"),l.a.createElement(r.a,{color:"secondary",className:e.button},"Secondary"),l.a.createElement(r.a,{disabled:!0,className:e.button},"Disabled"),l.a.createElement(r.a,{href:"#text-buttons",className:e.button},"Link"),l.a.createElement("input",{accept:"image/*",className:e.input,id:"text-button-file",multiple:!0,type:"file"}),l.a.createElement("label",{htmlFor:"text-button-file"},l.a.createElement(r.a,{component:"span",className:e.button},"Upload"))),l.a.createElement("div",{className:"py-3"}),l.a.createElement(d.q,{title:"outlined buttons"},l.a.createElement(r.a,{variant:"outlined",className:e.button},"Default"),l.a.createElement(r.a,{variant:"outlined",color:"primary",className:e.button},"Primary"),l.a.createElement(r.a,{variant:"outlined",color:"secondary",className:e.button},"Secondary"),l.a.createElement(r.a,{variant:"outlined",disabled:!0,className:e.button},"Disabled"),l.a.createElement(r.a,{variant:"outlined",href:"#outlined-buttons",className:e.button},"Link"),l.a.createElement("input",{accept:"image/*",className:e.input,id:"outlined-button-file",multiple:!0,type:"file"}),l.a.createElement("label",{htmlFor:"outlined-button-file"},l.a.createElement(r.a,{variant:"outlined",component:"span",className:e.button},"Upload")),l.a.createElement(r.a,{variant:"outlined",color:"inherit",className:e.button},"Inherit")),l.a.createElement("div",{className:"py-3"}),l.a.createElement(d.q,{title:"icon buttons"},l.a.createElement(i.a,{className:e.button,"aria-label":"Delete"},l.a.createElement(c.a,null,"delete")),l.a.createElement(i.a,{className:e.button,"aria-label":"Delete",disabled:!0,color:"primary"},l.a.createElement(c.a,null,"delete")),l.a.createElement(i.a,{color:"secondary",className:e.button,"aria-label":"Add an alarm"},l.a.createElement(c.a,null,"alarm")),l.a.createElement(i.a,{color:"primary",className:e.button,"aria-label":"Add to shopping cart"},l.a.createElement(c.a,null,"add_shopping_cart")),l.a.createElement("input",{accept:"image/*",className:e.input,id:"icon-button-file",type:"file"}),l.a.createElement("label",{htmlFor:"icon-button-file"},l.a.createElement(i.a,{color:"primary",className:e.button,"aria-label":"Upload picture",component:"span"},l.a.createElement(c.a,null,"photo_camera")))),l.a.createElement("div",{className:"py-3"}),l.a.createElement(d.q,{title:"different size buttons"},l.a.createElement(s.a,{size:"small",color:"secondary","aria-label":"Add",className:e.button},l.a.createElement(c.a,null,"add")),l.a.createElement(s.a,{size:"medium",color:"secondary","aria-label":"Add",className:e.button},l.a.createElement(c.a,null,"add")),l.a.createElement(s.a,{color:"secondary","aria-label":"Add",className:e.button},l.a.createElement(c.a,null,"add"))),l.a.createElement("div",{className:"py-3"}),l.a.createElement(d.q,{title:"outlined buttons"},l.a.createElement(s.a,{color:"primary","aria-label":"Add",className:e.button},l.a.createElement(c.a,null,"add")),l.a.createElement(s.a,{color:"secondary","aria-label":"Edit",className:e.button},l.a.createElement(c.a,null,"edit_icon")),l.a.createElement(s.a,{variant:"extended","aria-label":"Delete",className:e.button},l.a.createElement(c.a,{className:"mr-8"},"navigation"),"Extended"),l.a.createElement(s.a,{disabled:!0,"aria-label":"Delete",className:e.button},l.a.createElement(c.a,null,"delete"))))}}}]);
//# sourceMappingURL=27.ddc0dabe.chunk.js.map