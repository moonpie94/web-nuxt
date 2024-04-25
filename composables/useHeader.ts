import { MITT_KEY_ENUM } from '@/enums/mittEnum'

const { $emit } = useMitt()
interface HeaderItem {
  href: string
  title: string
  eventKey: string
  component?: any
}
const headerList: HeaderItem[] = [
  {
    href: 'HomeFirst',
    title: '首页',
    eventKey: MITT_KEY_ENUM.CHANGE_TO_HOME,
  },
  {
    href: 'HomeBusiness',
    title: '我们的优势',
    eventKey: MITT_KEY_ENUM.CHANGE_TO_BUSINESS,

  },
  {
    href: 'HomeQuality',
    title: '解决方案',
    eventKey: MITT_KEY_ENUM.CHANGE_TO_QUALITY,

  },

  {
    href: 'HomeData',
    title: '资源中心',
    eventKey: MITT_KEY_ENUM.CHANGE_TO_DATA,

  },
  {
    href: 'HomeTechnology',
    title: '关于我们',
    eventKey: MITT_KEY_ENUM.CHANGE_TO_TECHNOLOGY,

  },
  {
    href: 'HomeAbout',
    title: '联系我们',
    eventKey: MITT_KEY_ENUM.CHANGE_TO_ABOUT,

  },

]
const activeIndex = ref < string >(headerList[0].href)
watch(activeIndex, (val) => {
  const flag = headerList.find(item => item.href === val)
  flag && ($emit(flag.eventKey))
})

export default () => {
  const findIndexByHref = (href: string): number => {
    if (!href)
      throw new Error('请传入href参数')
    return headerList.findIndex(item => item.href === href)
  }
  const changeCurrentIndexBySwiper = (swiperIndex: number): void => {
    const flag = headerList[swiperIndex].href
    flag && (activeIndex.value = flag)
  }
  return {
    /** 菜单默认的索引 */
    activeIndex,
    /** 菜单列表 */
    headerList,
    /** 通过href找到数组索引 */
    findIndexByHref,
    /** 通过数组索引修改当前激活项 */
    changeCurrentIndexBySwiper,
  }
}
