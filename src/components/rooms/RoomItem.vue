<template>
  <div>
    {{ room.name }}
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { RoomsInterface } from '../../types'

@Component
export default class RoomItem extends Vue {
  @Prop({ required: true }) readonly room!: RoomsInterface
}
</script>

<style></style>
