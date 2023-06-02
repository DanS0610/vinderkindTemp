<template>
  <div class="row title-row-landing">
    <div class="col-md-12 title-col-landing horizontal-space-between">
      <img src="../assets/img/title@2x.png" alt="title" class="landing-title-img" />
    </div>
  </div>
  <div class="row">
    <div
      id="contact-container-upper"
      class="col-md-12 sub-col-landing contact-box-height contact-box-margin-bottom"
    >
      <div class="box-container">
        <div class="box-img-container">
          <img class="box-img" src="../assets/img/mailbox.svg" alt="" />
        </div>
        <div class="box-list-container">
          <ul class="box-list">
            <li>
              <img class="box-list-img" src="../assets/img/mail.svg" alt="" />
              <span>subscriptions@vinderkind.com</span>
            </li>
            <li>
              <img class="box-list-img" src="../assets/img/phone.svg" alt="" />
              <span>718.717.1212 x2</span>
            </li>
            <li>
              <img class="box-list-img" src="../assets/img/fax.svg" alt="" />
              <span>718.211.1283</span>
            </li>
          </ul>
        </div>
      </div>
      <label for="contact-container-upper" class="box-label">Subscription Office</label>
    </div>
  </div>
  <div class="row">
    <div
      id="contact-container-lower"
      class="col-md-12 sub-col-landing contact-box-height contact-box-margin-bottom"
    >
      <div class="box-container">
        <div class="box-img-container">
          <img class="box-img" src="../assets/img/ads.svg" alt="" />
        </div>
        <div class="box-list-container">
          <ul class="box-list">
            <li>
              <img class="box-list-img" src="../assets/img/mail.svg" alt="" />
              <span>ads@vinderkind.com</span>
            </li>
            <li>
              <img class="box-list-img" src="../assets/img/phone.svg" alt="" />
              <span>718.717.1212 x2</span>
            </li>
            <li>
              <img class="box-list-img" src="../assets/img/fax.svg" alt="" />
              <span>718.211.1283</span>
            </li>
            <li><a class="vinder-link" href="http://">Download Media Kit</a></li>
          </ul>
        </div>
      </div>
      <label for="contact-container-lower" class="box-label">Advertising Office</label>
    </div>
  </div>
  <div class="row footer-row">
    <div class="col-md-12 full-height">
      <HalfSizeNavBar></HalfSizeNavBar>
    </div>
  </div>
</template>
<script setup>
import HalfSizeNavBar from '../components/layout/HalfSizeNavBar.vue'
import { useActiveHomePageStore } from '../stores/activeHomePage'

const store = useActiveHomePageStore()

store.activePage = 'contact'
</script>
