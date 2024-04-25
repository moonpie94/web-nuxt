<script setup lang="ts">
import { ref } from 'vue'
const question = ref('')
const configs = [
  {
    title: '公司',
    children: [
      {
        title: '关于我们',
      },
      {
        title: '发展历程',
      },
      {
        title: '企业文化',
      },
      {
        title: '联系我们',
      },
    ],
  },
  {
    title: '产品',
    children: [
      {
        title: '数据智能应用',
      },
      {
        title: '统一指标平台',
      },
      {
        title: '基础数据平台',
      },
    ],
  },
  {
    title: '资源中心',
    children: [
      {
        title: '白皮书',
      },
      {
        title: '方法论',
      },
      {
        title: 'Blog',
      },
    ],
  },

  {
    title: '联系',
    children: [
      {
        title: 'gwang@raftcloud.com',
      },
      {
        title: '+012-345-678-90',
      },
      {
        title: '上海市浦东新区康桥路1633弄42号1402室',
      },
    ],
  },
]

const footerConfigs = [
  { title: 'FAQ' }, { title: '条款和条件' },
  { title: '隐私政策' },

]
</script>

<template>
  <div class="w-full h-[774px]">
    <div class="h-[334px] question flex items-center flex-col">
      <div class="text-white text-9 font-500 mt-20">
        任何问题，可以联系我们！
      </div>
      <div class="mt-[34px]">
        <el-input
          v-model="question"
          style="width: 328px"
          :rows="4"
          type="textarea"
          placeholder="请输入您的问题或意见："
        />
      </div>
      <div class="flex mt-[10px] justify-between w-[328px] gap-[7px]">
        <el-input placeholder="请输入您的电话" /> <el-button>立即提交</el-button>
      </div>
    </div>

    <div class="w-[1080px] mt-[31px] mx-a">
      <div class="py-[110px] flex gap-[164px]">
        <div>
          <div>logo</div>
          <div class="text-[#5A5A5A] text-[14px] mt-[22px]">
            上海舟轻云上科技有限公司
          </div>
          <div class="mt-13">
            xxxxx
          </div>
        </div>

        <div class="flex flex-1 justify-between">
          <div v-for="item in configs" :key="item.title">
            <div class="text-[18px] text-[#2548C3] mb-7">
              {{ item.title }}
            </div>
            <div class="flex gap-4 flex-col">
              <div v-for="child in item.children" :key="child.title">
                <div class="text-[14px] text-[#5A5A5A]">
                  {{ child.title }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div />
      </div>
    </div>

    <div class="bg-[#2548C3] h-[114px]">
      <div class="w-[1080px] text-white flex justify-between  items-center h-full mx-a">
        <div>@2024</div>
        <div flex flex-row gap-6>
          <div v-for="item in footerConfigs" :key="item.title">
            {{ item.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.question {
  background-image: url("/footer/question.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
:deep(.el-textarea__inner) {
  background: #cce1f7;
}
:deep(.el-input__wrapper) {
  background: #cce1f7;
}
:deep(.el-input__inner) {
  background: #cce1f7;
}
</style>
