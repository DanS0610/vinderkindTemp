<template>
  <div class="row title-row-landing">
    <div class="col-md-12 title-col-landing horizontal-space-between">
      <img src="../assets/img/title@2x.png" alt="title" class="landing-title-img" />
      <h3 id="main-landing-title" class="text-centered subtitle">
        שרייבט אייך איין פאר אינהאלטפולרייכע מעשיות און ניגונים פאר די גאנצע משפחה
      </h3>
    </div>
  </div>
  <div class="row tel-row-landing">
    <div class="col-md-12 tel-col-landing column-centered">
      <h6 class="small-subtitle">רופט אריין פאר א פריוויו</h6>
      <h1 class="bold-subtitle">123-456-KIND</h1>
    </div>
  </div>
  <div class="row sub-row-landing">
    <div class="col-md-12 sub-col-landing">
      <div id="subscription-container">
        <div id="price-toggle" class="half-width full-height column-centered mobile-full-width">
          <h1 id="yearly-price" class="bold-subtitle show">$359.99</h1>
          <h1 id="monthly-price" class="bold-subtitle hidden">$23.99</h1>
          <DynamicToggle @doAction="toggleSubPrice()"></DynamicToggle>
        </div>
        <div id="benefits-list" class="half-width full-height column-centered mobile-full-width">
          <ul id="benefit-list-ul" class="regular-list-line-height">
            <li class="small-list-li">
              <img src="../assets/img/list-bullet.png" class="vinder-list-bullet" alt="" />
              CD's delivered monthly
            </li>
            <li class="small-list-li">
              <img src="../assets/img/list-bullet.png" class="vinder-list-bullet" alt="" />
              Hotline with exclusive content
            </li>
            <li class="small-list-li">
              <img src="../assets/img/list-bullet.png" class="vinder-list-bullet" alt="" />
              Regular contests with prizes
            </li>
            <li class="small-list-li">
              <img src="../assets/img/list-bullet.png" class="vinder-list-bullet" alt="" />
              Stories, songs and hours of Kosher entertainment
            </li>
          </ul>
        </div>
      </div>
      <label
        id="sign-up-label"
        class="margin-label"
        for="subscription-container"
        @click="testMethod"
      >
        <RouterLink id="sign-up-link" to="subscribe"
          >Sign Up <img id="sign-up-arrow" src="../assets/img/btn-arrow.svg" alt="" />
        </RouterLink>
      </label>
    </div>
  </div>
  <div class="row footer-row">
    <div class="col-md-12 full-height">
      <HalfSizeNavBar></HalfSizeNavBar>
    </div>
  </div>
</template>
<script setup>
import DynamicToggle from '../components/buttons/DynamicToggle.vue'
import HalfSizeNavBar from '../components/layout/HalfSizeNavBar.vue'
import { useActiveHomePageStore } from '../stores/activeHomePage'

const store = useActiveHomePageStore()

store.activePage = 'home'

function toggleSubPrice() {
  let monthly = document.getElementById('monthly-price')
  let yearly = document.getElementById('yearly-price')

  if (yearly.classList.contains('show')) {
    yearly.classList.remove('show')
    yearly.classList.add('hidden')
    monthly.classList.remove('hidden')
    monthly.classList.add('show')
  } else {
    yearly.classList.remove('hidden')
    yearly.classList.add('show')
    monthly.classList.remove('show')
    monthly.classList.add('hidden')
  }
}
</script>
