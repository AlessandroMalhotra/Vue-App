<script setup>
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/services.js'
import { ref, onMounted, computed, watchEffect } from 'vue'

const events = ref(null)
const totalEvents = ref(0)

const hasNextPage = computed( () => {
  const totalPages = Math.ceil(totalEvents.value / 2)

  return page.value < totalPages
})

const props = defineProps(['page'])

const page = computed(() => props.page)

onMounted(() => {
  watchEffect(() => {
    events.value = null
    EventService.getEvents(2, page.value)
      .then((response) => {
          events.value = response.data
          totalEvents.value = response.headers['x-total-count']
      })
      .catch((error) => {
        router.push({ name: 'NetworkError'})
      })
  })
})

</script>

<template>
  <h1>Events For Good</h1>
  <div class="events">
    <EventCard v-for="event in events" v-bind:key="event.id" v-bind:event="event" />
    <div class="'pagination">
      <router-link
        id="page-prev"
        v-bind:to="{ name: 'event-list', query: { page: page -1 }}"
        rel="prev"
        v-if="page != 1"
        >Previous</router-link
      >
      <router-link
        id="page-next"
        v-bind:to="{ name: 'event-list', query: { page: page + 1 }}"
        rel="next"
        v-if="hasNextPage"
        >Next</router-link
      >
    </div>
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pagination {
  display: flex;
  width: 290px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}
</style>
