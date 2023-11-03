<script setup>
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/services.js'
import { ref, onMounted } from 'vue'

const events = ref(null)

onMounted( async () => {
  try {
    const response = await EventService.getEvents()
    console.log(response.data)
    events.value = response.data
  }
  catch (error) {
    console.log(error)
  }
})

</script>

<template>
  <h1>Events For Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
