<template>
  <div class="items-block">
    <div class="item" @click="onClickItem(item)">
      {{ item.name }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { DetectorsInterface } from '../../types'

@Component
export default class DetectorItem extends Vue {
  @Prop({ required: true, type: Object }) readonly item!: object

  public onClickItem(item: DetectorsInterface): void {
    this.$router.push({
      name: 'detectors.item',
      params: { id: item.id.toString() }
    })
  }
}
</script>

<style scoped>
.items-block {
  display: flex;
}
.item {
  padding: 20px 40px;
  border: 1px solid grey;
}
</style>
