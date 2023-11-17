<script setup>
import { useRouter } from 'vue-router'
import { useFlashStore } from '@/stores/flashMessage.js'
import { storeToRefs } from 'pinia'


const { event } = defineProps(['event'])
const router = useRouter()
const store = useFlashStore()

const register = () => {
	store.setMessage('You are successfully registered for'+ event.title)
	setTimeout(() => {
		store.setMessage('')
	}, 3000)
	router.push({
		name: 'event-list'
	})
}
</script>
<template>
	<p>Register form here</p>
	<button @click="register">Register Me!</button>
</template>