var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"storey-box b-wrap"},[_c('div',{staticClass:"proxy-box"},_vm._l((_vm.zoneList),function(item,index){return _c('Proxy',{key:("zone-" + (item.type) + "-" + index),attrs:{"item":item}})}),1),_c('SpecialRecommend',{staticClass:"report-wrap-module report-scroll-module",attrs:{"id":"bili_report_spe_rec"}}),_c('Elevator',{attrs:{"config":_vm.zoneConfig},on:{"on-change":_vm.updateZoneSort}})],1)}
var staticRenderFns = []

export { render, staticRenderFns }