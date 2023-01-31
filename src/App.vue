<template>
  <div id="app" :class="{ 'theme-dark': nightMode }">
    <transition
      mode="out-in"
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
    >
      <router-view></router-view>
    </transition>
    <!-- Dark-mmod -->
    <div class="dark-mmod">
      <i
        class="fas fa-sun"
        v-if="nightMode"
        @click="nightMode = !nightMode"
      ></i>
      <i class="fas fa-moon" v-else @click="nightMode = !nightMode"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => {
    return {
      nightMode: false
    };
  },
  watch: {
    nightMode: function() {
      localStorage.setItem("nightMode", JSON.stringify(this.nightMode));
    }
  },
  created() {
    this.nightMode = JSON.parse(localStorage.getItem("nightMode"));
  }
};
</script>

<style lang="scss">
// &.{
//   background-color: bisque;
// }
</style>
