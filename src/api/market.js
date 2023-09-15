import request from '@/plugin/axios'
//数据集目录
export function MarketList (params) {
  const num = params.pageCurrent
  const size = params.pageSize
  return request({
    url: process.env.VUE_APP_DATA_URL +  '/' + num + '/' + size,
    method: 'get'
  })
}
//数据集详情
export function MarketDataDetail (id) {
    return request({
      url: '/data/detail/' + id,
      method: 'get'
    })
  }