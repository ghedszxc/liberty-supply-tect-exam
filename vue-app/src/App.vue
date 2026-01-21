<template>
  <!-- <div style="position: relative"> -->
  <TopNav />
  <!-- <NavDrawer /> -->
  <main>
    <RouterView />
  </main>
  <!-- </div> -->
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
<style scoped></style>
