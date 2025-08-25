import type { OrderPreResult } from '@/types/order'
import { http } from '@/utils/http'

/**
 * 预付订单
 * @returns
 */
export const getMemberOrderPreAPI = () => {
  return http<OrderPreResult>({
    method: 'GET',
    url: '/member/order/pre',
  })
}
