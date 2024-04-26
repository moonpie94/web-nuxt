<script lang="ts" setup>
onMounted(() => {
  (function (a, b, c, d, e, j, s) {
    a[d]
      = a[d]
      || function () {
        (a[d].a = a[d].a || []).push(arguments)
      };
    (j = b.createElement(c)), (s = b.getElementsByTagName(c)[0])
    j.async = true
    j.charset = 'UTF-8'
    j.src = 'https://static.meiqia.com/widget/loader.js'
    s.parentNode.insertBefore(j, s)
  })(window, document, 'script', '_MEIQIA')
  _MEIQIA('entId', 'a6225e66f7e952884aefe82967ef0dac')
})
</script>

<template>
  <div class="h-screen overflow-auto">
    <HomeFirst />
    <HomeProduct />
    <HomeAdvantage />
    <HomeSolve />
    <HomeZhiyuan />
    <CommonFooter />
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
