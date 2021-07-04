var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"van-lazyload",rawName:"v-van-lazyload",value:(_vm.getPGCRankData),expression:"getPGCRankData"}],staticClass:"pgc-rank"},[_c('RankTitle',{attrs:{"link":_vm.moreLinkMap[_vm.type]}}),_vm._l((_vm.list),function(item,index){return _c('PgcRankItem',{key:("rankitem-" + index),attrs:{"index":index,"info":item,"pgc-type":_vm.info.type}})})],2)}
var staticRenderFns = []

export { render, staticRenderFns }