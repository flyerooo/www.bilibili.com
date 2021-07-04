var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mini-header"},[_c('div',{staticClass:"mini-header__content",class:{
      'mini-header--login': _vm.loginStatus === 'LOGIN'
    }},[_c('NavLink',{attrs:{"locsData":_vm.locsData,"menuConfig":_vm.menuConfig,"navType":_vm.navType}}),(_vm.loginStatus !== 'PENDING')?_c('NavSearch'):_vm._e(),_c('NavUserCenter',{attrs:{"locsData":_vm.locsData,"lang":_vm.lang,"userInfo":_vm.userInfo,"loginStatus":_vm.loginStatus}})],1)])}
var staticRenderFns = []

export { render, staticRenderFns }