<template>
  <nav>
    <div class="custom-space-between">
      <div>
        <Button
          icon="pi pi-bars"
          variant="text"
          rounded
          severity="secondary"
          @click="updateNavDrawer()"
        />
      </div>

      <div>
        <Button
          icon="pi pi-user"
          variant="text"
          rounded
          style="background-color: var(--p-gray-100)"
        />
        <Button icon="pi pi-sign-out" variant="text" rounded />
      </div>
    </div>
  </nav>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '@/stores/index'

const store = useGlobalStore()

const { showNavDrawer } = storeToRefs(store)
const { onUpdateShowNavDrawer } = store

function updateNavDrawer() {
  if (!showNavDrawer.value) {
    document.querySelector('aside').style.visibility = 'visible'
    document.querySelector('aside').style.opacity = '1'

    document.querySelector('main').style.marginLeft = '250px'
    document.querySelector('nav').style.marginLeft = '250px'
  } else {
    document.querySelector('aside').style.visibility = 'hidden'
    document.querySelector('aside').style.opacity = '0'
    document.querySelector('aside').style.transition = 'visibility 0s, opacity 0.5s linear'

    document.querySelector('main').style.marginLeft = '0'
    document.querySelector('nav').style.marginLeft = '0'
  }

  onUpdateShowNavDrawer(!showNavDrawer.value)
}
</script>

<style scoped>
nav {
  position: relative;
  height: 3.25rem;
  place-content: center;
  padding: 0 1rem;
  background-color: var(--p-white-0);

  transition: margin-left 0.5s;
  margin-left: 250px;
}

.custom-space-between {
  display: flex;
  justify-content: space-between;
}
</style>
