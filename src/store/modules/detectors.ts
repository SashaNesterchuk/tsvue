import { DetectorsInterface } from '@/types'

export const state = {
  detectors: [
    {
      id: 1,
      name: 'temperatures'
    },
    {
      id: 2,
      name: 'cameras'
    },
    {
      id: 3,
      name: 'water detector'
    }
  ]
}

export const getters = {
  getDetectorById: (state: any) => (id: number) => {
    const detector = state.detectors.find(
      (item: DetectorsInterface) => item.id === id
    )

    if (!detector) {
      throw new Error('detector is undefined')
    }
    return detector
  }
}

export const mutations = {}

export const actions = {}
