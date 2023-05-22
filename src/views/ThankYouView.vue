<template>
  <div class="row title-row-landing margin-bottom-subtitle">
    <div class="col-md-12 title-col-landing horizontal-space-between">
      <img src="../assets/img/title@2x.png" alt="title" class="landing-title-img" />
      <h3 id="main-landing-title" class="text-centered subtitle">איר זענט יעצט איינגעשריבן</h3>
    </div>
  </div>
  <div class="row thank-you-row">
    <div class="col-md-12 column-centered">
      <h5 id="thank-you-row-t1" class="subtitle-bigger hidden-desktop text-centered mobile-medium-font">איר זענט יעצט איינגעשריבן</h5> 
      <h5 id="thank-you-row-t2" class="subtitle-bigger text-centered mobile-medium-font">די ערשטע וועט ווערן ארויסגעשיקט</h5> 
      <h3 id="thank-you-row-t3" class="bold-subtitle text-centered mobile-large-font">דינסטאג פרשת בא</h3>
    </div>
  </div>
  <div id="tel-row-thank" class="row tel-row-landing">
    <div class="col-md-12 tel-col-thank column-centered">
      <h6 class="small-subtitle">רופט אריין פאר א פריוויו</h6>
      <h1 class="bold-subtitle">123-456-KIND</h1>
    </div>
  </div>
  <div class="row sub-row-landing">
    <DynamicButton
      btnType="button"
      btnTitle="View Account"
      btnId="account-btn"
      :defaultStyles="thankYouBtnStyles"
    ></DynamicButton>
  </div>
  <div class="row footer-row">
    <div class="col-md-12 full-height">
      <HalfSizeNavBar></HalfSizeNavBar>
    </div>
  </div>
</template>
<script setup>
import HalfSizeNavBar from '../components/layout/HalfSizeNavBar.vue'
import DynamicButton from '../components/buttons/DynamicButton.vue'
import { useActiveHomePageStore } from '../stores/activeHomePage'

const store = useActiveHomePageStore()

store.activePage = "thankyou"

const thankYouBtnStyles = [
  {
    'background-color': '#9601C7',
    'border-radius': '34px',
    color: 'white',
    'min-width': '10rem',
    width: '16.75rem',
    'max-width': '16.75rem',
    height: '3.438rem !important',
    'font-size': '24px',
    'font-weight': 'bold'
  }
]
</script>
