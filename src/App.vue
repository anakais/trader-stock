<template>
  <div id="app">
    <!-- component -->
    <NavBar/>
    <transition name="slide" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>

import NavBar from "./components/NavBar";

export default {
  name: 'App',
  components: {NavBar},
    created() {
    this.$store.dispatch('initAcoes')
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

@keyframes slide-in {
  from { transform: translateY(-30px); opacity: 0}
  to { transform: translateY(0px); opacity: 1}
}
@keyframes slide-out {
  from { transform: translateY(0px); opacity: 1}
  to { transform: translateY(-30px); opacity: 0}
}

.slide-enter-active {
  animation: slide-in 0.3s ease;
}
.slide-leave-active {
  animation: slide-out 0.3s ease;
}
</style>
