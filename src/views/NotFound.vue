<script setup>
defineProps({
	resource: {
			type: String,
			required: true,
			default: 'page'
	}
})
</script>

<template>
    <h1>Ooops!</h1>
    <h3>The {{ resource }} you're looking for is not here.</h3>
    <router-link v-bind="{ name: 'event-list'}">Back to the home page</router-link>
</template>