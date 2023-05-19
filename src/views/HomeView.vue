<script setup></script>

<template>
  <main class="container-fluid full-height">
    <div class="row full-height">
      <div class="col-md-6 landing-img-padding">
        <div class="image-container landing-image-container">
          <h1 class="home-view-title">לערנען. לאכן. פרעגן</h1>
          <img src="../assets/img/boys@2x.png" alt="boys playing" class="landing-main-img" />
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
