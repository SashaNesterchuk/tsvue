import Vue from 'vue'
import Vuex from 'vuex'

import * as detectorsModule from './modules/detectors'
import * as roomsModule from './modules/rooms'

Vue.use(Vuex)

const detectors = { ...detectorsModule, namespaced: true, name: 'detectors' }
const rooms = { ...roomsModule, namespaced: true, name: 'rooms' }

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    detectors,
    rooms
  }
})
