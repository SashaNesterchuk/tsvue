import { expect } from 'chai'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import RoomItem from '@/components/rooms/RoomItem.vue'

describe.only('RoomItem', () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = shallowMount(RoomItem, {
      propsData: { room: { id: 1, name: 'Room 1' } }
    })
  })

  it('render rooms item', () => {
    expect(wrapper.is(RoomItem)).to.be.true
  })
})
