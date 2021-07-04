var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"van-lazyload",rawName:"v-van-lazyload",value:(_vm.getCheeseRecommendData),expression:"getCheeseRecommendData"}],staticClass:"special-recommend home-slide"},[_c('header',{directives:[{name:"adReport",rawName:"v-adReport",value:({
      data: {
        resource_id: _vm.resource_id,
        pos_num: 1,
        src_id: _vm.src_id,
        id: _vm.id,
        url: ''
      }, 
      locId: _vm.resource_id 
    }),expression:"{\n      data: {\n        resource_id: resource_id,\n        pos_num: 1,\n        src_id: src_id,\n        id: id,\n        url: ''\n      }, \n      locId: resource_id \n    }"}],attrs:{"data-loc-id":_vm.resource_id}},[_vm._v(_vm._s(_vm.title))]),(_vm.fetchEnd)?_c('div',{staticClass:"carousel"},[(!_vm.list.length)?[_c('van-slide',{key:"0",ref:"special"},[_c('div',{staticClass:"item no_result"},[_c('a',{attrs:{"target":"_blank","href":"https://www.bilibili.com/cheese/","id":"cheese_right_banner_title"}},[_c('van-image',{attrs:{"src":"https://i0.hdslb.com/bfs/activity-plat/static/20200714/953d0bfef678072bd11ec5fb6ff04190/nMOp2aGOf.png","options":{c: 1, q: 100},"width":("" + _vm.width),"height":("" + _vm.height)}})],1)])])]:[_c('van-slide',{key:"1",ref:"special",attrs:{"auto":"","interval":5000},on:{"change":_vm.change}},_vm._l((_vm.list),function(item,index){return _c('div',{key:("sr-" + index),staticClass:"item"},[_c('a',{directives:[{name:"adReport",rawName:"v-adReport",value:({
              data: {
                resource_id: _vm.banner_resource_id,
                pos_num: index + 1,
                src_id: item.src_id,
                id: item.id,
                url: _vm.linkHandler(item.link)
              }, 
              locId: _vm.banner_resource_id,
              id: _vm.banner_resource_id 
            }),expression:"{\n              data: {\n                resource_id: banner_resource_id,\n                pos_num: index + 1,\n                src_id: item.src_id,\n                id: item.id,\n                url: linkHandler(item.link)\n              }, \n              locId: banner_resource_id,\n              id: banner_resource_id \n            }"}],attrs:{"target":item.link ? '_blank' : '_self',"data-loc-id":_vm.banner_resource_id}},[_c('van-image',{attrs:{"src":item.cover,"options":{c: 1, q: 100},"width":("" + _vm.width),"height":("" + _vm.height)}}),_c('p',{staticClass:"title"},[_vm._v(_vm._s(item.title))])],1)])}),0),(_vm.list.length > 1)?_c('div',{staticClass:"trigger"},_vm._l((_vm.list),function(item,index){return _c('span',{key:("trig-" + index),class:{'on': index === _vm.currentIndex},on:{"click":function($event){return _vm.go(index)}}})}),0):_vm._e()]],2):_vm._e()])}
var staticRenderFns = []

export { render, staticRenderFns }