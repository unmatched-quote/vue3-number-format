(function(t,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue"),require("numeral")):typeof define=="function"&&define.amd?define(["exports","vue","numeral"],e):(t=typeof globalThis<"u"?globalThis:t||self,e(t.NumberFormat={},t.Vue,t.numeral))})(this,function(t,e,l){"use strict";const a=e.defineComponent({__name:"NumberFormat",props:{number:{},to:{default:"0,0.00"}},setup(i){const m=i,r=e.ref(!0),s=()=>{const{number:n,to:o}=m;if(n==null||n===""){r.value=!1;return}let u=parseFloat(n);if(isNaN(u)){r.value=!1;return}try{return l(u).format(o)}catch(d){return console.warn(d),null}};return(n,o)=>(e.openBlock(),e.createElementBlock(e.Fragment,null,[e.createElementVNode("span",null,e.toDisplayString(s()),1),r.value?e.createCommentVNode("",!0):e.renderSlot(n.$slots,"default",{key:0},()=>[e.createTextVNode("Invalid number supplied: "+e.toDisplayString(n.number),1)])],64))}});t.VNumberFormat=a,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})});
