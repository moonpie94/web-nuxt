<script setup lang="ts">
import { ref } from 'vue'
const backgroundUrl = ref('/home/youshi/bg.png')
const configs = [
  {
    img: '/home/youshi/img1.png',
    title: '端到端支撑全局数据驱动的决策',
    desc: '全面数据支撑，确保每个决策点都基于精确数据，驱动全局优化',
  },
  {
    img: '/home/youshi/img2.png',
    title: '从数据准备到洞察生成的时效显著提升',
    desc:
      '通过我们的解决方案，企业能够显著缩短从数据准备到洞察生成的时间。快速转化数据为行动力，加速决策过程。',
  },
  {
    img: '/home/youshi/img3.png',
    title: '建立企业可信单一数据源',
    desc:
      '通过建立企业级的可信单一数据源，我们保证信息的一致性和准确性，为决策提供坚实的数据基础，助力企业做出更明智的选择。',
  },
  {
    img: '/home/youshi/img4.png',
    title: '数据治理开发运营一体化',
    desc:
      '我们提供全面的数据治理解决方案，将开发、运营与数据治理融为一体，确保数据流动高效且安全，帮助企业实现数据价值最大化。',
  },
]
</script>

<template>
  <div class="mt-[55px] min-h-[513px] relative">
    <img :src="backgroundUrl" alt="" class="w-full absolute -z-1  bg-img">
    <div class="flex flex-col items-center justify-center">
      <div class="mt-[55px] text-9 text-[#181818] font-bold">
        我们的优势
      </div>
      <div class="mt-4 text-[14px] text-[#5A5A5A] font-400">
        满足您的各种需求并提供更优质的用户体验
      </div>
      <div class="mt-[55px] grid grid-cols-4 px-22 gap-7">
        <div
          v-for="item in configs"
          :key="item.title"
          class="min-h-[257px] c-item flex flex-col justify-center items-center"
        >
          <img :src="item.img" alt="" class="w-[142px]">
          <div class="c-title px-4 mt-6">
            {{ item.title }}
          </div>
          <div class="c-desc px-6 mt-[25px]">
            {{ item.desc }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.bg-img {
  width: 100%; /* 宽度充满容器 */
  height: 100%; /* 高度也充满容器 */
  object-fit: cover; /* 按比例扩展来覆盖整个容器，可能会裁剪图像 */
  position: absolute;
  top: 0; /* 定位到容器顶部 */
  left: 0; /* 定位到容器左侧 */
  z-index: -1; /* 确保在内容之下 */
}
.bg-full {
  background-image: url("/home/youshi/bg.png"); /* 替换为你的图片 URL */
  background-size: cover; /* 宽度铺满，高度自适应 */
  width: 100%; /* 元素宽度铺满容器 */
  height: auto; /* 高度自适应 */
}
.c-item {
  background: #ffffff;
  border-radius: 18px;
  border: 1px solid #eeeeee;
  opacity: 0.8;
}
.c-title {
  font-family: Source Han Sans CN;
  font-weight: bold;
  font-size: 18px;
  color: #181818;
}
.c-desc {
  font-family: Source Han Sans CN;
  font-weight: 400;
  font-size: 14px;
  color: #5a5a5a;
  line-height: 18px;
}
</style>
