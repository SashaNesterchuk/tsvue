import { expect } from 'chai'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import DetectorPage from '@/pages/DetectorPage.vue'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('DetectorPage', () => {
  let wrapper: any
  let store: any

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        detectors: {
          namespaced: true,
          getters: {
            getDetectorById: () => () => {
              return { id: 1, name: 'Test' }
            }
          }
        }
      }
    })

    wrapper = shallowMount(DetectorPage, {
      mocks: {
        $route: { params: { id: 1 } }
      },
      localVue,
      store
    })
  })

  it('render detector page', () => {
    expect(wrapper.text()).to.include('DetectorPage')
  })
})
