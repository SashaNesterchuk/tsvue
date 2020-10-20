<template>
  <div>
    DetectorPage

    {{ detectorById.name }}
  </div>
</template>

<script lang="ts">
import { DetectorsInterface } from '@/detectors/DetectorsInterface'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class DetectorPage extends Vue {
  get detectorId(): number {
    return Number(this.$route.params.id)
  }

  get detectorById(): DetectorsInterface {
    return this.$store.getters['detectors/getDetectorById'](this.detectorId)
  }
}
</script>

<style></style>
