import request from '@/plugin/axios'
//用户拥有数据集
export function UserData (params) {
  return request({
    url:  '/user/data',
    method: 'get',
    params
  })
}
//用户数据集使用情况
export function UserStats (params) {
    return request({
      url: '/user/stats',
      method: 'get',
      params
    })
  }