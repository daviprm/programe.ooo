(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{261:function(t,e,n){var content=n(267);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(104).default)("22ff17ec",content,!0,{sourceMap:!1})},266:function(t,e,n){"use strict";n(261)},267:function(t,e,n){var o=n(103)(!1);o.push([t.i,".word_container[data-v-3afd7c72]{display:flex;flex-direction:column;align-items:center;grid-row-gap:10px;row-gap:10px}.word_container .f_word_row[data-v-3afd7c72]{width:100%;display:flex;justify-content:space-between;align-items:center;grid-column-gap:10px;-moz-column-gap:10px;column-gap:10px}.word_container .f_word_row input[data-v-3afd7c72]{width:60px;height:60px;text-align:center;display:flex;justify-content:center;align-items:center;background:var(--sec);color:#fff;border-radius:5px;font-weight:800;font-size:25px;cursor:pointer;outline:none;caret-color:transparent;text-transform:uppercase}.word_container .f_word_row input[data-v-3afd7c72]:focus{margin-top:-6px}",""]),t.exports=o},273:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{word:{fr_f_input:"",fr_s_input:"",fr_t_input:"",fr_fo_input:"",fr_fi_input:""}}},mounted:function(){},methods:{onKeyUp:function(t){var input=t.target,e=input.maxLength;if(input.value.length==e){var n=input.nextElementSibling;n&&n.focus()}if(8==t.keyCode){if(0!=t.target.value.length)return t.target.value="",void t.target.focus();var o=input.previousElementSibling;o&&o.focus()}}}},r=(n(266),n(49)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"word_container"},[n("div",{staticClass:"f_word_row"},[n("input",{attrs:{autocomplete:"off",type:"text",id:"fr_f_input",maxlength:"1"},on:{keydown:t.onKeyUp}}),t._v(" "),n("input",{attrs:{autocomplete:"off",type:"text",id:"fr_s_input",maxlength:"1"},on:{keydown:t.onKeyUp}}),t._v(" "),n("input",{attrs:{autocomplete:"off",type:"text",id:"fr_t_input",maxlength:"1"},on:{keydown:t.onKeyUp}}),t._v(" "),n("input",{attrs:{autocomplete:"off",type:"text",id:"fr_fo_input",maxlength:"1"},on:{keydown:t.onKeyUp}}),t._v(" "),n("input",{attrs:{autocomplete:"off",type:"text",id:"fr_fi_input",maxlength:"1"},on:{keydown:t.onKeyUp}})])])}),[],!1,null,"3afd7c72",null);e.default=component.exports}}]);