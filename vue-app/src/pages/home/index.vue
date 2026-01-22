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
<script>
export default {
  data: () => ({
    users: [],
    errMsg: '',
  }),
  async beforeMount() {
    try {
      const response = await fetch('https://jsonplacasdeholder.typicode.com/users')
      this.users = await response.json()
    } catch (err) {
      this.errMsg = err
    }
  },
}
</script>

<style scoped>
/* .p-card {
  height: 50vh;
} */
</style>
