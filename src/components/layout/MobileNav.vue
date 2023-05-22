<template>
  <div class="mobile-collapsed-nav">
    <div class="topnav">
      <div class="main-mob-nav">
        <img src="../../assets/img/title.png" alt="title" class="landing-title-img" />
        <a href="javascript:void(0);" class="icon" @click="toggleNavBar()">
          <img src="../../assets/img/burger.png" alt="" />
        </a>
      </div>

      <div id="myLinks" ref="myLinks">
        <RouterLink class="no-decoration-black small-subtitle no-decoration-black" to="/contact"
          >Contact Us</RouterLink
        >
        <RouterLink
          class="no-decoration-black small-subtitle no-decoration-black"
          to="managesubscription"
          >Manage Subscriptions</RouterLink
        >
        <RouterLink class="no-decoration-black small-subtitle no-decoration-black" to="getupdates"
          >Get Updates</RouterLink
        >
      </div>
      <h3 id="main-landing-title" class="text-centered subtitle">
        שרייבט אייך איין פאר אינהאלטפולרייכע מעשיות און ניגונים פאר די גאנצע משפחה
      </h3>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const myLinks = ref(null)
const container = document.getElementsByClassName('landing-img-padding')

function toggleNavBar() {
  if (myLinks.value.style.display === 'block') {
    myLinks.value.style.display = 'none'
    container[0].style.maxHeight = '33rem'
  } else {
    myLinks.value.style.display = 'block'
    container[0].style.maxHeight = '43rem'
  }
}
</script>
<style>
.main-mob-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.938rem;
}
.topnav {
  overflow: hidden;
  background-color: transparent;
  position: relative;
  margin-bottom: 3.313rem;
  margin-top: 1rem;
}

.topnav #myLinks {
  display: none;
}

.topnav a {
  color: black;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  display: block;
}

.topnav a.icon {
  background: transparent;
  display: block;
  position: absolute;
  right: 0;
  top: 0;
  padding: 0;
}

.topnav a:hover {
  background-color: transparent;
  color: black;
}

.active {
  background-color: transparent;
  color: black;
}
</style>
