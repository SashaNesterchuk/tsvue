import Vue from 'vue'
import Vuex from 'vuex'

import * as detectorsModule from './modules/detectors'

Vue.use(Vuex)

const detectors = { ...detectorsModule, namespaced: true, name: 'detectors' }

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    detectors
  }
})
