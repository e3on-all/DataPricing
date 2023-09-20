import request from '@/plugin/axios'

export function AccountLogin (data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

export function AccountRegister (data) {
  return request({
    // url: process.env.VUE_APP_USER_URL + '/user/register',
    url: '/user/register',
    method: 'post',
    data
  })
}

// export function AccountLogin (params) {
//   return request({
//     url: process.env.VUE_APP_USERMOCK_URL + '/user/login',
//     method: 'post',
//     params,
//   })
// }

// export function AccountRegister (params) {
//   return request({
//     url: process.env.VUE_APP_USERMOCK_URL + '/user/register',
//     method: 'post',
//     params
//   })
// }
