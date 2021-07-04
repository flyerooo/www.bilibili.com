import './assets/style/base.less'

import Vue from 'vue'

import Meta from 'vue-meta'
import App from './App.vue'

import createStore from './vuex'
import createRouter from './router'

import 'g-public/js/directive'
import adReport from 'g-public/js/plugin/adReport'

import Bfs from '@blink-common/component.bfs-utils'
import {
    Image,
    Danmu,
    Framepreview,
    Watchlater,
    Slide,
    Lazyload,
    Backtop,
    Report
} from '@bilibili/van'
import '@bilibili/van/dist/style/style.css'

import LiveLazyload from 'g-public/js/plugin/lazyload'


Vue.use(Image)
Vue.use(Danmu)
Vue.use(Framepreview)
Vue.use(Watchlater)
Vue.use(Slide)
Vue.use(Lazyload, {
    preload: 100
})
Vue.use(Backtop)
Vue.use(Report)
Vue.use(Meta)

Vue.use(LiveLazyload)

Vue.prototype.$bfs = new Bfs()

if (process.env.VUE_ENV === 'client') {
    // 引入iconfont
    require('g-public/style/bili-iconfont/iconfont.css')
    require('g-public/style/bili-iconfont/iconfont.js')

    Vue.use(adReport)
}

export function createApp(ssrContext) {
    const store = createStore()
    const router = createRouter()
    const app = new Vue({
        store,
        router,
        ssrContext,
        render: h => h(App)
    })
    return {
        app,
        router,
        store
    }
}