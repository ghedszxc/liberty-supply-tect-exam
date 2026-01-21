import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', () => {
  const showNavDrawer = ref(true)
  function onUpdateShowNavDrawer(payload) {
    showNavDrawer.value = payload
  }

  return { showNavDrawer, onUpdateShowNavDrawer }
})
