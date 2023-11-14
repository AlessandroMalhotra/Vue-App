<script setup>
defineProps(['event'])
const register = () => {
	router.push({
		name: 'EventDetails'
	})
}
</script>
<template>
	<p>Register form here</p>
	<button @click="register">Register Me!</button>
</template>