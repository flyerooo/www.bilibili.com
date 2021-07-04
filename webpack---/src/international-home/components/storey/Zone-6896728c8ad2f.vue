var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('SpaceBetween',[_c('VideoList',{attrs:{"info":_vm.info}}),(_vm.info.type === 'teleplay' || _vm.info.type === 'movie' || _vm.info.type === 'documentary')?_c('PgcRank',{attrs:{"info":_vm.info,"type":_vm.seasonTypeMap[_vm.info.type],"count":10}}):_c('Rank',{attrs:{"info":_vm.info}})],1)}
var staticRenderFns = []

export { render, staticRenderFns }