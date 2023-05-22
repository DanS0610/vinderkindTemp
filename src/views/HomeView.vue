<script setup>
import { useActiveHomePageStore } from '../stores/activeHomePage'
import MobileNav from '../components/layout/MobileNav.vue'
const store = useActiveHomePageStore()

console.log(store.activePage)
</script>

<template>
  <main class="container-fluid full-height full-body-container">
    <div class="row full-height">
      <div class="col-md-6 landing-img-padding">
        <div class="image-container landing-image-container">
          <MobileNav></MobileNav>
          <h1
            v-if="store.activePage === 'home' || store.activePage === 'subscribe'"
            class="home-view-title"
          >
            לערנען. לאכן. פרעגן
          </h1>
          <h1 v-if="store.activePage === 'thankyou'" class="home-view-title thank-you-img-title">יישר כח</h1>
          <img src="../assets/img/kids2@2x.png" alt="boys playing" class="landing-main-img" />
        </div>
      </div>
      <div class="col-md-6 main-body-container">
        <div class="router-view-container">
          <RouterView></RouterView>
        </div>
      </div>
    </div>
  </main>
</template>
