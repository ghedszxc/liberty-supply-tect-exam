<template>
  <nav
    style="
      position: relative;
      height: 3.25rem;
      place-content: center;
      padding: 0 1rem;
      background-color: #ffffff;
    "
  >
    <div style="display: flex; justify-content: space-between">
      <div style="place-content: center">
        <i class="pi pi-bars" style="font-size: 1.5rem; color: #abb1b4" @click="openNav()"></i>
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
  </nav>
</template>

<script>
export default {
  data: () => ({}),
  methods: {
    openNav() {
      if (!this.$globalStore?.showNavDrawer) {
        document.querySelector('aside').style.visibility = 'visible'
        document.querySelector('aside').style.opacity = '1'

        // document.querySelector('aside').style.width = '20vw'
        // document.querySelector('aside').style.display = 'inline'
        document.querySelector('main').style.marginLeft = '20vw'
        document.querySelector('nav').style.marginLeft = '20vw'
      } else {
        document.querySelector('aside').style.visibility = 'hidden'
        document.querySelector('aside').style.opacity = '0'
        document.querySelector('aside').style.transition = 'visibility 0s, opacity 0.5s linear'

        // document.querySelector('aside').style.width = '0'
        // document.querySelector('aside').style.display = 'none'
        document.querySelector('main').style.marginLeft = '0'
        document.querySelector('nav').style.marginLeft = '0'
      }

      this.$globalStore.onUpdateShowNavDrawer(!this.$globalStore?.showNavDrawer)
    },
  },
}
</script>

<style scoped>
nav {
  transition: margin-left 0.5s;
  margin-left: 20vw;
}
</style>
