<template>
  <!-- Start Sidebar -->
  <div id="sidebar">
    <!-- sidebar-title -->
    <div class="sidebar-title">
      <h3>TURTANU</h3>
    </div>
    <!-- sidebar-menu -->
    <div class="sidebar-menu">
      <ul class="sidebar-link">
        <router-link to="/" tag="li" exact>
          <a>Home</a>
        </router-link>
        <router-link to="/ourServices" tag="li">
          <a>OurServices</a>
        </router-link>
        <router-link to="" tag="li">
          <a>About us</a>
        </router-link>
        <router-link to="" tag="li">
          <a>Contact</a>
        </router-link>
      </ul>
    </div>
  </div>
  <!-- End Sidebar  -->
</template>

<script>
export default {
  name: "SideBar",
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

<style lang="scss" scoped>
// @import "../scss/main.scss";
</style>
