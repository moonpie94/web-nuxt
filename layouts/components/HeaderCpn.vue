<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { THEME } from '@/constants/unocss'
const isMd = useBreakpoints(breakpointsTailwind).md
const { $emit, MITT_KEY, $on } = useMitt()
const { headerList, activeIndex } = useHeader()
const drawer = ref(false)

const handleSelect = (key: string) => {
  // $emit(MITT_KEY.HEADER_SELECT_EVENT, key)
}

$on(MITT_KEY.BANNER_CHANGE, (e) => {

})

const drawerSize = computed(() => {
  return isMd.value ? '16%' : '80%'
})
</script>

<template>
  <div class="relative">
    <div w-screen absolute z-9999 flex justify-center>
      <div mx-a class="flex justify-between h-17 items-center w-[1080px] z-9999">
        <!-- 左侧部分 -->
        <div>
          <img src="/home/logo.png" alt="">
        </div>
        <!-- 中间部分 -->
        <div h-17 flex-1>
          <el-menu
            mode="horizontal"
            background-color="#cccccc"
            :active-text-color="THEME.PRIMARY"
            text-color="black"
            style="height: calc(100% - 0px)"
            @select="handleSelect"
          >
            <el-menu-item
              v-for="(item, index) in headerList"
              :key="index"
              :index="item.href"
              class="!text-lg text-black"
            >
              {{ item.title }}
            </el-menu-item>
          </el-menu>
        </div>
        <!-- 右侧部分 -->
        <!-- <div  col-span-3 flex justify-end mr-8>
          <div class="i-carbon-grid text-primary text-2xl" @click="openDrawer" />
        </div> -->
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.el-menu {
  background-color: unset !important;
}

:deep(.el-menu--horizontal) {
  justify-content: end;
  border-bottom: unset !important;

  .el-menu-item {
    transition: unset !important;

    &:hover {
      background-color: unset;
    }

    &:focus {
      background-color: unset;
    }
  }

  .el-menu-item.is-active {
    border-bottom: unset;
    border-top: 3px solid var(--el-menu-active-color);
  }
}
</style>
