import Vue from 'vue'
import Vuex from 'vuex'
import { set } from '@/common/vuex'
import modules from './modules'

Vue.use(Vuex)

const mutations = {
  setLayout: set('layout')
}

export default new Vuex.Store({
  state: {},
  mutations,
  actions: {},
  modules
})
