<template>
  <div>
    <h2>Home</h2>

    <Card>
      <template #content>
        <span v-if="!errMsg">
          {{ users }}
        </span>
        <span v-else>{{ errMsg }}</span>
      </template></Card
    >
  </div>
</template>
<script setup>
import { ref, onBeforeMount } from 'vue'

const users = ref([])
const errMsg = ref('')

onBeforeMount(async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    users.value = await response.json()
  } catch (err) {
    errMsg.value = err
  }
})
</script>

<style scoped>
/* .p-card {
  height: 50vh;
} */
</style>
