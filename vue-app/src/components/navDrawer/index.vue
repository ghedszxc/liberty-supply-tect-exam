<template>
  <aside>
    <h1>Messenger App</h1>
    <div v-for="(data, key) in pages" :key="key" style="margin-bottom: 20px">
      <RouterLink
        :to="data?.url"
        :style="{
          backgroundColor: $route.path == data.url ? '#009BD4' : '',
        }"
      >
        <i :class="data?.icon" style="margin-right: 3px"></i>
        {{ data?.text }}
      </RouterLink>
    </div>
  </aside>
</template>
<script>
import { RouterLink } from 'vue-router'
export default {
  data: () => ({
    pages: [
      { text: 'Home', icon: 'pi pi-home', url: '/' },
      { text: 'Messages', icon: 'pi pi-comments', url: '/messages' },
    ],
  }),
}
</script>
<style scoped>
aside {
  height: 100%;
  width: 20vw;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #1c3c70;
  overflow-x: hidden;
  transition: 0.5s;
}

/* @media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 0;
  }
} */

h1 {
  color: #ffffff;
  text-align: center;
}

a {
  color: #ffffff;
  padding: 10px;
  /* border: 2px solid red; */
  width: 100px !important;
  height: 50px !important;
  place-items: center;
  text-decoration: none;
  border-radius: 8px;
}
</style>
