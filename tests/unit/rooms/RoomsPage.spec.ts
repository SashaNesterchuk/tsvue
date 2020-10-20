import { expect } from 'chai'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import RoomsPage from '@/pages/rooms/RoomsPage.vue'
import RoomItem from '@/components/rooms/RoomItem.vue'

import Vuex from 'vuex'
const localVue = createLocalVue()
localVue.use(Vuex)

describe('RoomsPage', () => {
  let wrapper: any
  let store: any

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        rooms: {
          namespaced: true,
          state: {
            rooms: [
              { id: 1, name: 'Room 1' },
              { id: 2, name: 'Room 2' }
            ]
          }
        }
      }
    })

    wrapper = shallowMount(RoomsPage, {
      localVue,
      store
    })
  })

  it('render rooms page', () => {
    expect(wrapper.is(RoomsPage)).to.be.true
  })

  //   describe('room item', () => {
  //     it('show', () => {
  //       expect(wrapper.is(RoomItem)).to.be.true
  //     })
  //   })
})
