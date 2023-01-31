<template>
  <footer>
    <div class="footer-content">
      <div class="logo">
        <img src="../assets/images/logo.png" alt="Logo" />
      </div>
      <ul class="menu-link">
        <router-link to="/ourServices" tag="li" exact>
          <a>Our Services</a>
        </router-link>
        <router-link to="" tag="li" exact>
          <a>About us</a>
        </router-link>
        <router-link to="" tag="li" exact>
          <a>Contact Us</a>
        </router-link>
      </ul>
      <ul class="social-media">
        <li>
          <a
            href="https://www.linkedin.com/company/turtanu/about/"
            target="_blank"
            ><i class="fab fa-linkedin-in"></i
          ></a>
        </li>
        <li>
          <a href="https://www.facebook.com/turtanu" target="_blank"
            ><i class="fab fa-facebook-square"></i
          ></a>
        </li>
        <li>
          <a href="https://www.instagram.com/turtanu.en/" target="_blank"
            ><i class="fab fa-instagram"></i
          ></a>
        </li>
      </ul>
    </div>
    <div class="footer-bottom">
      <div class="line-container">
        <span class="line"></span>
      </div>
      <div class="copyright">&copy; 2021 TURTANU</div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss">
// @import "../scss/footer.scss";
</style>
