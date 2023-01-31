<template>
  <div class="container">
    <SideBar />
    <!-- Start Main -->
    <main>
      <!-- header -->
      <div class="header">
        <!-- text-box -->
        <div class="text-box-container">
          <div class="text-box">
            <h1 data-aos="fade-up" data-aos-duration="1000">
              Lorem Ipsum<br />is simply dummy text of the printing
            </h1>
          </div>
        </div>

        <!-- image-box -->
        <div class="image-box"></div>
      </div>

      <!-- Services -->
      <div class="services">
        <!-- automation-service -->
        <div class="automation-service service">
          <div class="automation-description service-description">
            <div class="circle-icon icon">
              <img src="../assets/images/chip.png" alt="Ai" />
            </div>
            <h2>
              Automation <br />
              Services & AI
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and <br />
              typesetting industry. Lorem Ipsum has been the industry's <br />
              standard dummy text ever since
            </p>
          </div>
          <div class="automation-image service-image">
            <img src="../assets/images/Artboard-1.png" alt="Ai" />
          </div>
        </div>
        <!-- software-service -->
        <div class="software-service service">
          <div class="software-image service-image">
            <img src="../assets/images/Artboard-2.png" alt="Ai" />
          </div>
          <div class="software-description service-description">
            <div class="circle-icon icon">
              <img src="../assets/images/code.png" alt="Ai" />
            </div>
            <h2>
              Software <br />
              Development
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and <br />
              typesetting industry. Lorem Ipsum has been the industry's <br />
              standard dummy text ever since
            </p>
          </div>
        </div>
        <!-- Cybersecurity-service -->
        <div class="cybersecurity-service service">
          <div class="cybersecurity-description service-description">
            <div class="circle-icon icon">
              <img src="../assets/images/Processor-security.png" alt="Ai" />
            </div>
            <h2>Cybersecurity</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and <br />
              typesetting industry. Lorem Ipsum has been the industry's <br />
              standard dummy text ever since
            </p>
          </div>
          <div class="cybersecurity-image service-image">
            <img src="../assets/images/Artboard-3.png" alt="Ai" />
          </div>
        </div>
      </div>

      <!-- Our clients -->
      <div class="our-clients">
        <h2>Our Clients</h2>
        <div class="our-clients-content">
          <div class="client">
            <span>client 1</span>
          </div>
          <div class="client">
            <span>client 2</span>
          </div>
          <div class="client">
            <span>client 3</span>
          </div>
          <div class="client">
            <span>client 4</span>
          </div>
        </div>
      </div>

      <!-- Testimonials -->
      <div class="testimonials">
        <h2>Testimonials</h2>
        <div class="testimonials-content">
          <div class="testimonial-card">
            <div class="image">
              <img src="../assets/images/Testimonial-1.jpg" alt="" />
            </div>
            <p class="name">Harrison Phillips</p>
            <p class="job-title">Senior Developer</p>
            <span class="line"></span>
            <p class="comment">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since
            </p>
          </div>
          <div class="testimonial-card">
            <div class="image">
              <img src="../assets/images/Testimonial-2.jpg" alt="" />
            </div>
            <p class="name">Harrison Phillips</p>
            <p class="job-title">Senior Developer</p>
            <span class="line"></span>
            <p class="comment">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since
            </p>
          </div>
          <div class="testimonial-card">
            <div class="image">
              <img src="../assets/images/Testimonial-3.jpg" alt="" />
            </div>
            <p class="name">Harrison Phillips</p>
            <p class="job-title">Senior Developer</p>
            <span class="line"></span>
            <p class="comment">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since
            </p>
          </div>
        </div>
      </div>

      <!-- Contact -->
      <div class="contact">
        <h2>Let's talk</h2>
        <p>Ask us anything</p>
        <form>
          <input type="text" class="name" placeholder="Your Name" />
          <input type="text" class="email" placeholder="Your Email" />
          <textarea rows="1" placeholder="Message" class="message"></textarea>
          <button>
            Send
            <i class="fas fa-paper-plane"></i>
          </button>
        </form>
      </div>
      <!-- Start Footer -->
      <Footer />
      <!-- End Footer -->
    </main>
    <!-- End Main -->
  </div>
</template>

<script>
import SideBar from "@/components/Sidebar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Home",
  components: {
    SideBar,
    Footer
  }
};
</script>

<style lang="scss">
// @import  url("../scss/main.scss");
</style>
