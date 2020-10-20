<template>
  <div>
    RoomsPage
    <room-item v-for="room in rooms" :key="room.id" :room="room" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import RoomItem from '@/components/rooms/RoomItem.vue'
import { RoomsInterface } from '../../types'

@Component({
  components: {
    RoomItem
  }
})
export default class RoomsPage extends Vue {
  get rooms(): Array<RoomsInterface> {
    return this.$store.state.rooms.rooms
  }
}
</script>

<style></style>
