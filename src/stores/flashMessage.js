import { defineStore } from 'pinia'

export const useFlashStore = defineStore('flashMessage', {
  state: () => ({
    message: undefined,
  }),
  getters: {
    getMessage(state) {
      return state.message
    }
  },
  actions: {
    setMessage(message) {
      this.message = message
    }
  }
})
