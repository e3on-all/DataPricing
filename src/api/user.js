import request from '@/plugin/axios'
//用户拥有数据集
export function MarketList (params) {
  const num = params.pageCurrent
  const size = params.pageSize
  return request({
    url: process.env.VUE_APP_DATA_URL +  '/' + num + '/' + size,
    method: 'get'
  })
}
//用户数据集使用情况
export function MarketDataDetail (id) {
    return request({
      url: '/data/detail/' + id,
      method: 'get'
    })
  }