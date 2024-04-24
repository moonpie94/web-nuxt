<script setup lang="ts">
const left = [
  {
    logo: '/home/fangan/logo1.png',
    img: '/home/fangan/img1.jpeg',
    title: '数字化获客',
    desc:
      '通过用户画像的精细勾勒，实现目标客户的精准定位。我们采用数据驱动策略，为内容营销注入新的活力，确保每一次触达都精准有效，转化率显著提升。',
  },
  {
    logo: '/home/fangan/logo2.png',
    img: '/home/fangan/img2.png',
    title: '数字化风控',
    desc:
      '从风险的识别、评估到量化和决策，构建一个全面的数字化风控体系。我们利用先进技术深度解析风险，确保每一项决策都建立在坚实的数据基础之上，有效降低风险，保障企业稳健发展。',
  },
]

const right = [
  {
    logo: '/home/fangan/logo3.png',
    img: '/home/fangan/img3.jpeg',
    title: '数字化经营',
    desc:
      '在流程优化的基础上，推动产品和模式的双轮创新。通过高效的客户管理系统，我们重新定义数字化经营，为企业打造一个无缝、灵活的运营生态，实现业务的持续增长。',
  },

  {
    logo: '/home/fangan/logo4.png',
    img: '/home/fangan/img4.jpeg',
    title: '数字化服务',
    desc:
      '以客户体验为中心，持续优化服务流程和质量，提供量身定制的个性化服务。通过实时反馈机制，我们紧贴客户需求和满意度变化，不断提升服务水平，赢得客户的信赖和忠诚。',
  },
]
</script>

<template>
  <div flex flex-col items-center justify-center>
    <div class="mt-[55px] text-[27px] text-[#181818] font-bold">
      解决方案
    </div>
    <div class="mt-4 text-[10px] text-[#5A5A5A] font-400 w-72">
      智能搜索工具,支持对站内全文搜索和自动补全查询个人中心页,读者可以自定义个人主页和收藏专题
    </div>
    <div class="flex gap-6 mt-10">
      <div class="flex gap-6 flex-col">
        <div
          v-for="item in left"
          :key="item.title"
          class="relative w-[339px] h-[212px] item overflow-hidden"
        >
          <img :src="item.img" alt="" class="h-full absolute -z-1 w-full">
          <div class="px-6 pt-5">
            <img :src="item.logo" alt="" class=" ">
            <div class="title mt-5">
              {{ item.title }}
            </div>
            <div class="desc mt-3">
              {{ item.desc }}
            </div>
          </div>
        </div>
      </div>
      <div class="flex gap-6 flex-col mt-6">
        <div
          v-for="item in right"
          :key="item.title"
          class="relative w-[339px] h-[212px] item overflow-hidden"
        >
          <img :src="item.img" alt="" class="absolute -z-1 w-full h-full">
          <div class="px-6 pt-5">
            <img :src="item.logo" alt="">
            <div class="title mt-5">
              {{ item.title }}
            </div>
            <div class="desc mt-3">
              {{ item.desc }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <img src="/home/fangan/b-bg.png" alt="" class="h-[200px] w-full">
  </div>
</template>

<style scoped lang="scss">
.item {
  border-radius: 18px;
  color: #fff;
  margin-inline: 23px;
}
.title {
  font-family: Source Han Sans CN;
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;
  line-height: 18px;
}
.desc {
  font-family: Source Han Sans CN;
  font-weight: 400;
  font-size: 9px;
  color: #ffffff;
  line-height: 14px;
}
</style>
