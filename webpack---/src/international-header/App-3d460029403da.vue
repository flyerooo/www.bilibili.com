var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"international-header report-wrap-module",class:{'fixed-top': _vm.navFixed},attrs:{"id":"internationalHeader"}},[_c('MiniHeader',{staticClass:"m-header",class:{
      'mini-type': _vm.navType === 0 || _vm.navFixed,
      'mask-bg': !_vm.navFixed && _vm.navType === 2,
    },attrs:{"menuConfig":_vm.menuConfig,"navType":_vm.navType,"userInfo":_vm.userInfo,"locsData":_vm.locsData,"lang":_vm.lang}}),(_vm.navType === 1)?_c('Banner',{attrs:{"bid":_vm.bid,"bannerData":_vm.bannerData,"userInfo":_vm.userInfo}}):_vm._e(),(_vm.navType === 1)?_c('PrimaryMenu',{ref:"primaryMenu",attrs:{"menuConfig":_vm.menuConfig,"tid":Number(_vm.tid)}}):_vm._e()],1)}
var staticRenderFns = []

export { render, staticRenderFns }