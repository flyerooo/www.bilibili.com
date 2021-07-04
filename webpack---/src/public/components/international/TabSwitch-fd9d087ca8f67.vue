var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tab-switch"},_vm._l((_vm.tabs),function(item,index){return _c('div',{key:("ts-" + index),staticClass:"tab-switch-item",class:{'on': _vm.selected === index},domProps:{"textContent":_vm._s(_vm.getName(item))},on:{"mouseover":function($event){return _vm.tabOver(item.value)},"click":function($event){return _vm.tabClick(item.value)}}})}),0)}
var staticRenderFns = []

export { render, staticRenderFns }