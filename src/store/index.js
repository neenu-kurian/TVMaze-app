import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)
Vue.config.devtools = true

const store = new Vuex.Store({
  state: {
    shows: {},
    loading: false,
    show: {},
    searchText: ''
  },
  getters: getters,
  mutations: mutations,
  actions: actions
})

export default store
