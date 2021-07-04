var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{directives:[{name:"adReport",rawName:"v-adReport",value:({data: _vm.info, locId: _vm.locId}),expression:"{data: info, locId: locId}"}],staticClass:"banner-card b-wrap",attrs:{"data-loc-id":_vm.locId,"target":"_blank"}},[(_vm.info.url)?_c('img',{attrs:{"src":_vm.trimHttp(_vm.info.pic),"alt":_vm.info.name}}):_vm._e(),(_vm.info.is_ad && _vm.info.url)?_c('i',{staticClass:"gg-icon"}):_vm._e()])}
var staticRenderFns = []

export { render, staticRenderFns }