<script setup>
import HomeCategory from './components/home-category.vue'
import HomeBanner from './components/home-banner.vue'
import HomeHot from './components/home-hot.vue'
import HomeNew from './components/home-new.vue'
import HomeProduct from './components/home-product.vue'
import HomePanner from './components/home-panner.vue'
</script>
<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <HomeProduct />
  <HomePanner title="biaoti" subtitle="fubiaoti"> </HomePanner>
  <HomePanner title="2" subtitle="333"> </HomePanner>
</template>
