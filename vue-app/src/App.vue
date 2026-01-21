<template>
  <TopNav />
  <RouterView />
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
