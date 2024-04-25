<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Keyboard, Pagination } from 'swiper'

const { MITT_KEY, $emit } = useMitt()

const modules = ref([Pagination, Autoplay, Keyboard])
const swiperEvt = (e: any) => {
  $emit(MITT_KEY.BANNER_CHANGE, e.activeIndex)
}

const config = ['/banner/banner02.jpg', '/banner/banner03.jpg']
</script>

<template>
  <div ref="rootRef" class="w-full">
    <Swiper
      class="swiper w-full !h-auto"
      :modules="modules"
      :space-between="0"
      :centered-slides="true"
      :navigation="false"
      :pagination="{
        clickable: true,
      }"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
      }"
      style="--swiper-navigation-sides-offset: 40px"
      @slideChange="swiperEvt"
    >
      <SwiperSlide v-for="item in config" :key="item">
        <div><img class="w-full" :src="item" alt=""></div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/swiper/variables.scss";
@import "@/styles/swiper/mixins.scss";
@import "@/styles/swiper/index.scss";

.swiper {
  @include swiper-wrapper();
}

.slide {
  @include swiper-slide();
}

@media (max-width: 768px) {
  .leftText {
    font-size: 12rem !important;
  }
}
</style>
