import type { PageResult } from '@/types/global'
import type { BannerItem, CategoryItem, GuessItem, HotItem } from '@/types/home'
import { http } from '@/utils/http'
/**
 *
 * @param distributionSite 广告区域展示位置[1为首页（默认值）2为商品分类页]
 * @returns
 */
export const getHomeBannerAPI = (distributionSite = 1) => {
  return http<BannerItem[]>({
    method: 'GET',
    url: '/home/banner',
    data: {
      distributionSite,
    },
  })
}

// 首页-前台分类-小程序
// GET
// /home/category/mutli

/**
 * 首页-前台分类-小程序
 */
export const getHomeCategoryAPI = () => {
  return http<CategoryItem[]>({
    method: 'GET',
    url: '/home/category/mutli',
  })
}

// 首页-热门推荐-小程序
// GET
// /home/hot/mutli
/**
 * 首页-热门推荐-小程序
 */
export const getHomeHotAPI = () => {
  return http<HotItem[]>({
    method: 'GET',
    url: '/home/hot/mutli',
  })
}

// 猜你喜欢-小程序
// GET
// /home/goods/guessLike
/**
 * 猜你喜欢
 * @returns
 */
export const getHomeGoodsGuessLikeAPI = () => {
  return http<PageResult<GuessItem>>({
    method: 'GET',
    url: '/home/goods/guessLike',
  })
}
