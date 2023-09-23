import request from '@/plugin/axios'
//数据集目录
export function MarketList (params) {
  const num = params.pageCurrent
  const size = params.pageSize
  return request({
    url:  '/market/list/'+ num + '/' + size,
    method: 'get',
  })
}
//数据集详情
export function MarketDataDetail (id) {
    return request({
      url: '/data/detail/' + id,
      method: 'get'
    })
  }