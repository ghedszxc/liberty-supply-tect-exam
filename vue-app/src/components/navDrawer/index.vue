<template>
  <aside>
    <h1>Messenger App</h1>
    <div v-for="(data, key) in pages" :key="key" style="margin-bottom: 10px">
      <RouterLink :to="data?.url">
        <Button
          fluid
          :style="{
            backgroundColor: $route.path == data.url ? '#009BD4' : '',
          }"
        >
          <i :class="data?.icon" style="margin-right: 3px"></i>
          <span>{{ data?.text }}</span>
        </Button>
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
  width: 250px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #1c3c70;
  overflow-x: hidden;
  transition: 0.5s;
  padding: 0 1rem;
}

h1 {
  color: #ffffff;
  text-align: center;
  text-transform: uppercase;
  font-size: x-large;
  padding: 1rem 0;
}

.p-button {
  justify-content: left;
}

span {
  font-weight: 100;
}
</style>
