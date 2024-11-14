<script setup>
import FeatureSection from './FeatureSection.vue'
import ProductSection from './ProductSection.vue'

const options = {
  navigation: true
}
</script>

<template>
  <!-- <full-page ref="fullpage" :options>
    <div class="section bg-cover" />
    <div class="section overflow-hidden">
      <FeatureSection />
    </div>
    <div class="section section-3"></div>
  </full-page> -->

  <!-- <ProductSection /> -->

  <v-sheet class="bg-cover w-100" />
  <FeatureSection />
  <ProductSection />
</template>

<style scoped>
.bg-cover {
  background: url('../../assets/images/banner/banner.gif') no-repeat;
  background-size: cover;
  height: calc(100vh - 70px);
}

.fp-section.section-3 {
  justify-content: flex-start;
}

:deep(.fp-overflow) {
  overflow: hidden;
}
</style>
