<template>
  <div style="height: 3.25rem; place-content: center; padding: 0 1rem; background-color: #ffffff">
    <div style="display: flex; justify-content: space-between">
      <div style="place-content: center">
        <i
          class="pi pi-bars"
          style="font-size: 1.5rem; color: #abb1b4"
          @click="$globalStore.onUpdateShowNavDrawer(!$globalStore?.showNavDrawer)"
        ></i>
      </div>

      <div style="place-content: center">
        <i
          class="pi pi-user"
          style="
            font-size: 1.2rem;
            margin-right: 1rem;
            color: #abb1b4;
            background-color: #e1e3e4;
            border-radius: 25px;
            padding: 9px;
          "
        ></i>
        <i class="pi pi-sign-out" style="font-size: 1.2rem; color: #abb1b4"></i>
      </div>
    </div>
    <!-- <Button label="gera" class="my-button" /> -->
  </div>
</template>

<script>
export default {
  data: () => ({}),
}
</script>

<style scoped>
.my-button {
  background-color: var(--color-primaryszxc);
  padding: var(--space-sm);
}
</style>
