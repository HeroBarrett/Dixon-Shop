import type { BannerItem } from '@/types/home'
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
