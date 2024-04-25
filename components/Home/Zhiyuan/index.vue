<script setup lang="ts">
const configs = [
  {
    img: '/home/ziyuan/bps.png',
    title: '白皮书',
    desc:
      '以客户体验为中心，持续优化服务流程和质量，提供量身定制的个性化服务。通过实时反馈机制，我们紧贴客户需求和满意度变化，不断提升服务水平，赢得客户的信赖和忠诚。',
  },
  {
    img: '/home/ziyuan/bps.png',
    title: '方法论',
    desc:
      '以客户体验为中心，持续优化服务流程和质量，提供量身定制的个性化服务。通过实时反馈机制，我们紧贴客户需求和满意度变化，不断提升服务水平，赢得客户的信赖和忠诚。',
  },
  {
    img: '/home/ziyuan/blog.png',
    title: 'Blog',
    desc:
      '以客户体验为中心，持续优化服务流程和质量，提供量身定制的个性化服务。通过实时反馈机制，我们紧贴客户需求和满意度变化，不断提升服务水平，赢得客户的信赖和忠诚。',
  },
]
</script>

<template>
  <div class="h-[720px] wrap relative w-full overflow-x-hidden">
    <img src="/home/ziyuan/ball.png" alt="" class="w-[100px] absolute -left-6 bottom-6">
    <img src="/home/ziyuan/ball.png" alt="" class="w-[150px] absolute -right-8 top-6">
    <div flex flex-col items-center justify-center class="w-[1080px] mx-a">
      <div class="mt-[77px] text-9 text-[#181818] font-bold">
        资源中心
      </div>
      <div class="grid grid-cols-3 gap-12  mt-24 h-[386px]">
        <div v-for="item in configs" :key="item.title" class="bg-white  rounded-[17px]  flex flex-col  items-center gap-[20px]">
          <img :src="item.img" alt="" class="w-[75px] mt-7">
          <div class="text-[20px] font-500">
            {{ item.title }}
          </div>
          <div class="text-4 text-[#4E5B72] px-12">
            {{ item.desc }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrap {
  background: #f4f5ff;
}
</style>
