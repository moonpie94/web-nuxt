<script lang="ts" setup></script>

<template>
  <div class="h-screen  overflow-auto">
    <HomeFirst />
    <HomeProduct />
    <HomeAdvantage />
    <HomeSolve />
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/swiper/variables.scss";
@import "@/styles/swiper/mixins.scss";
@import "@/styles/swiper/index.scss";

.swiper {
  @include swiper-wrapper();
}

.slide {
  @include swiper-slide();
}

:deep(.swiper-wrapper) {
  transition: all 0.5s !important;
}
</style>
