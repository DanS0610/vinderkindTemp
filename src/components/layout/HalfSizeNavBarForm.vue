<template>
  <div class="full-screen-nav footer-form">
    <form action="">
      <div class="footer-btn-div">
        <!-- <a type="button">X</a> -->
        <RouterLink class="form-router" to="contact">X</RouterLink>
        <label for="get-updates">Get Updates</label>
      </div>
      <div class="form-input-div">
        <input type="email" name="get-updates" id="getupdates" placeholder="Email address" />
        <button type="submit">Submit <img src="../../assets/img/btn-arrow.svg" alt="" /></button>
      </div>
    </form>
  </div>
  <div class="footer-copyright">
    <p id="copyright-text" class="smaller-text">Copyright © 2023 Vinderkind, All Rights Reserved</p>
  </div>
</template>
<script setup></script>
