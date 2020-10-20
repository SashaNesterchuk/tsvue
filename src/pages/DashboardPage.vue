<template>
  <div>
    <div>
      <detector-item
        v-for="item in items"
        :key="item.id"
        :item="item"
      ></detector-item>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import DetectorItem from '../components/detector/DetectorItem.vue'
import { DetectorsInterface } from '../types'

@Component({
  components: {
    DetectorItem
  }
})
export default class DashboardPage extends Vue {
  get items(): Array<DetectorsInterface> {
    return [
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
}
</script>

<style></style>
