<template>
  <div>
    <h2>Home</h2>

    <Card>
      <template #content>
        <span>
          {{ users }}
        </span>
      </template></Card
    >
  </div>
</template>
<script>
export default {
  data: () => ({
    users: [],
  }),
  async beforeMount() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    this.users = await response.json()
  },
}
</script>

<style scoped>
/* .p-card {
  height: 50vh;
} */
</style>
