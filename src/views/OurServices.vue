<template>
  <div class="ourServices" :class="{'theme-dark': nightMode}">
    <div class="container">
      <!-- Start SideBar -->
      <SideBar />
      <!-- End Sidebar -->
      <main>
        <!-- Start Tabs -->
        <div class="tabs">
          <!-- tab-1 -->
          <div class="tab">
            <div class="image">
              <img src="../assets/images/code.png" alt="">
            </div>
             <p>Software Development</p>
          </div>
          <!-- tab-2 -->
          <div class="tab">
            <div class="image">
              <img src="../assets/images/chip.png" alt="">
            </div>
             <p>Automation Services & AI</p>
          </div>
          <!-- tab-3 -->
          <div class="tab">
            <div class="image">
              <img src="../assets/images/Processor-security.png" alt="">
            </div>
             <p>Security</p>
          </div>
        </div>
        <!-- Tabs Content -->
        <div class="tabs-content">
          <div class="sub-services">
            <div class="image">
              <img src="../assets/images/code.png" alt="" />
            </div>
            <h2>Custom Software Development</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since, Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since
            </p>
          </div>
          <div class="sub-services">
            <div class="image">
              <img src="../assets/images/code.png" alt="" />
            </div>
            <h2>Update Old App Development</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since, Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since
            </p>
          </div>
          <div class="sub-services">
            <div class="image">
              <img src="../assets/images/code.png" alt="" />
            </div>
            <h2>Monitor And Support The Application</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since, Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since
            </p>
          </div>
        </div>
        <!-- End Tabs -->

        <!-- Start Footer -->
        <Footer />
        <!-- End Footer -->
      </main>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/Sidebar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "OurServices",
  components: {
    SideBar,
    Footer
  }
};
</script>

<style lang="scss" scoped>
// @import  url("../scss/ourServices.scss");
</style>
