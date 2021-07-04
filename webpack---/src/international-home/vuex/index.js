import Vuex from 'vuex'
import Vue from 'vue'
import mutations from './mutations'
import actions from './actions'
import state from './state'

Vue.use(Vuex)


const createStore = () => (new Vuex.Store({
    state,
    mutations,
    actions
}))

export default createStore