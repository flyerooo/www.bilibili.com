var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"live-tabs"},[_c('TabSwitch',{directives:[{name:"van-report",rawName:"v-van-report:liveTabs.click",value:({
    value: _vm.selected,
    position: _vm.selected + 1,
    tab_name: _vm.tabConfigForReport[_vm.selected]
  }),expression:"{\n    value: selected,\n    position: selected + 1,\n    tab_name: tabConfigForReport[selected]\n  }",arg:"liveTabs",modifiers:{"click":true}}],attrs:{"tabs":_vm.tabConfig,"selected":_vm.selected},on:{"on-change":_vm.onChange}}),_c('LiveUpList',{directives:[{name:"show",rawName:"v-show",value:(_vm.selected === 0),expression:"selected === 0"}],attrs:{"name":"rank","list":_vm.rankList}}),_c('LiveUpList',{directives:[{name:"show",rawName:"v-show",value:(_vm.selected === 1),expression:"selected === 1"}],attrs:{"name":"follow","list":_vm.followList,"showNumber":false}}),_c('RecommendActivity',{directives:[{name:"show",rawName:"v-show",value:(_vm.selected === 2),expression:"selected === 2"}],attrs:{"bannerList":_vm.bannerList || []}})],1)}
var staticRenderFns = []

export { render, staticRenderFns }