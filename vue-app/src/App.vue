<template>
  <!-- <div> -->
  <TopNav />
  <NavDrawer />
  <main>
    <RouterView />
  </main>
</template>
<script setup>
import { RouterView } from 'vue-router'
import TopNav from '@/components/topNav/index.vue'
import NavDrawer from '@/components/navDrawer/index.vue'
</script>

<style>
main {
  transition: margin-left 0.5s;
  margin-left: 250px;
  padding: 16px;
}

h1 {
  color: var(--p-palette-plain);
  text-align: center;
  text-transform: uppercase;
  font-size: var(--p-typography-h1);

  font-size: var(--p-typography-h1);
  padding: 1rem 0;
}

h2 {
  font-size: var(--p-typography-h2);
}

span {
  font-weight: 100;
  font-size: var(--p-typography-span);
}
</style>
