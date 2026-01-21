<template>
  <!-- <div> -->
  <TopNav />
  <NavDrawer />
  <main>
    <RouterView />
  </main>
</template>
<script>
import { RouterView } from 'vue-router'
import TopNav from '@/components/topNav/index.vue'
import NavDrawer from '@/components/navDrawer/index.vue'

export default {
  components: {
    TopNav,
    NavDrawer,
  },
}
</script>

<style scoped>
main {
  transition: margin-left 0.5s;
  margin-left: 20vw;
  padding: 16px;
}
</style>
