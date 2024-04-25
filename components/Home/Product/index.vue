<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Keyboard, Pagination } from 'swiper'

const modules = ref([Pagination, Autoplay, Keyboard])
const configs = [
  {
    title: '数据资产管理平台',
    logo: '/home/product/sjzc.png',
    desc: 'DateGovOps治理开发生产运营一体化',
    functions: ['智能数据目录', '数据湖生产线', '数据治理中心', '数据仓库产线'],
    funCols: 2,
    abilitys: ['数据治理框架', '数据模型设计', '分层数据架构', '统一数据摄取'],
  },
  {
    title: '指标管理平台',
    logo: '/home/product/zbgl.png',
    desc: '一次定义，处处使用',
    functions: ['指标生产线', '宽表生产线', '变量批量衍生', 'Cohort分析', '标签生产线'],
    funCols: 3,

    abilitys: ['指标体系设计', '指标平台建设', '指标平台运营'],
  },
  {
    title: 'AI模型管理平台',
    logo: '/home/product/ai.png',
    functions: ['模型开发', '模型监控', '模型服务', '大模型应用构建'],
    funCols: 3,

    abilitys: ['业务洞察模型', '营销模型', '风控模型', '运营模型'],
  },
  {
    title: '数据资产管理平台',
    logo: '/home/product/sjzc.png',
    desc: 'DateGovOps治理开发生产运营一体化',
    functions: ['智能数据目录', '数据湖生产线', '数据治理中心', '数据仓库产线'],
    funCols: 2,
    abilitys: ['数据治理框架', '数据模型设计', '分层数据架构', '统一数据摄取'],
  },
  {
    title: '指标管理平台',
    logo: '/home/product/zbgl.png',
    desc: '一次定义，处处使用',
    functions: ['指标生产线', '宽表生产线', '变量批量衍生', 'Cohort分析', '标签生产线'],
    funCols: 3,

    abilitys: ['指标体系设计', '指标平台建设', '指标平台运营'],
  },
  {
    title: 'AI模型管理平台',
    logo: '/home/product/ai.png',
    functions: ['模型开发', '模型监控', '模型服务', '大模型应用构建'],
    funCols: 3,

    abilitys: ['业务洞察模型', '营销模型', '风控模型', '运营模型'],
  },
]
</script>

<template>
  <div class="w-full mt-12 flex justify-center text-center relative">
    <img src="/home/ziyuan/ball.png" alt="" class="w-[150px] absolute -left-18 top-10">
    <div class="w-[1080px] flex flex-col justify-center">
      <div class="text-9 font-700">
        产品与服务
      </div>
      <div mt-4 class="text-[#5A5A5A] text-[14px]">
        深入了解产品细节，获取更多相关信息
      </div>
      <div class="mt-[84px]">
        <Swiper
          class="swiper w-full !h-auto  "
          :slides-per-view="3"
          :loop="true"
          :modules="modules"
          :space-between="17"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
          }"
          style="--swiper-navigation-sides-offset: 40px"
        >
          <SwiperSlide v-for="item in configs" :key="item">
            <div class="h-[660px]">
              <div class="item-container flex items-center flex-col p-6">
                <img :src="item.logo" class="w-[125px]" alt="">
                <div class="text-[23px] font-700 mt-[11px]">
                  {{ item.title }}
                </div>
                <div v-if="item.desc" class="text-[14px] text-[#848484] mt-2">
                  {{ item.desc }}
                </div>

                <div class="mt-7 w-full">
                  <div class="product-label w-[73px] mx-a my-0">
                    <div class="z-999 relative">
                      产品功能
                    </div>
                  </div>
                  <div
                    grid
                    class="mt-4"
                    :class="{
                      'grid-cols-2  gap-x-13 gap-y-4': item.funCols === 2,
                      'grid-cols-3 gap-x-2 gap-y-4': item.funCols === 3,
                    }"
                  >
                    <div v-for="fun in item.functions" :key="fun" class="grid-item">
                      {{ fun }}
                    </div>
                  </div>

                  <div class="product-label w-[73px] mx-a my-0 mt-7">
                    <div class="z-999 relative">
                      交付能力
                    </div>
                  </div>

                  <div grid class="mt-4 grid-cols-2 gap-y-6">
                    <div v-for="fun in item.abilitys" :key="fun" class="ab-item flex  items-center gap-1">
                      <img src="/checked.svg" alt="" class="w-[24px]">  {{ fun }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div>
        <ElButton type="primary" size="large" class="mt-6">
          了解更多
        </ElButton>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.item-container {
  height: 520px;
  background: #ffffff;
  box-shadow: 0px 4px 17px 0px rgba(90, 114, 234, 0.06),
    0px 2px 7px 0px rgba(90, 114, 234, 0.04), 0px 1px 3px 0px rgba(90, 114, 234, 0.03);
  border-radius: 18px;
  border: 1px solid rgba(217, 230, 247, 0.6118);
}
.product-label {
  font-size: 18px;
  font-weight: bold;
  position: relative;
}
.product-label::after {
  content: "";
  display: block;
  width: 100%;
  height: 7px;
  background: #b7d3fe;
  position: absolute;
  bottom: 0;
  left: 0;
}
.grid-item {
  padding: 7px 0;
  background: #f0f8ff;
  border-radius: 6px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  font-size: 15px;
  color: #3785fb;
}
.ab-item {
  font-family: Source Han Sans CN;
  font-weight: 400;
  font-size: 16px;
  color: #181818;
  line-height: 21px;
}
.swiper-slide {
  transform: translateY(50px);
}
.swiper-slide-next {
  transform: translateY(0);
}
</style>
