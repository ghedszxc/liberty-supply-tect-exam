<template>
  <aside>
    <h1>Messenger App</h1>
    <div v-for="(data, key) in pages" :key="key" style="margin-bottom: 10px">
      <RouterLink :to="data?.url">
        <Button
          fluid
          :style="{
            backgroundColor:
              $route.path == data.url ? 'var(--p-current-page-indicator)' : 'var(--p-palette-none)',
          }"
        >
          <i :class="data?.icon" style="margin-right: 3px"></i>
          <span>{{ data?.text }}</span>
        </Button>
      </RouterLink>
    </div>

    <footer><span>v1.0.0</span></footer>
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
  background-color: var(--p-nav-drawer-background);

  height: 100%;
  width: 250px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  transition: 0.5s;
  padding: 0 1rem;
}

footer {
  color: var(--p-palette-plain);
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 1rem;
}

button {
  border: var(--p-palette-primary);
}
.p-button {
  justify-content: left;
}
</style>
