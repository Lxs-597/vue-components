import axios from 'axios'
import Qs from 'qs'

// import { getToken } from 'utils/catch'

const service = axios.create({
  baseURL: '',
  timeout: 10000,
  'X-Requested-With': 'XMLHttpRequest'
})

service.defaults.retry = 3
service.defaults.retryDelay = 1000
service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

service.interceptors.request.use(config => {
  const token = getToken()

  if (token) {
    config.headers['Authorization'] = token
  }

  // loading
  return config
}, error => {
  console.log('request error', error)
  return Promise.reject(error.message)
})

service.interceptors.response.use(response => {

  return response
}, error => {
  const config = error.config

  if (!config || !config.retry) {
    return Promise.reject(error.message)
  }

  console.log(error)

  config.__retryCount = config.__retryCount || 0

  if (config.__retryCount >= config.retry) {
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          return Promise.reject('请求错误!')
        case 401:
          return Promise.reject('权限错误!')
        case 403:
          return Promise.reject('拒绝访问!')
        case 404:
          return Promise.reject('请求失败!')
        case 408:
          return Promise.reject('请求超时!')
        case 500:
          return Promise.reject('服务器错误!')
        default:
          return Promise.reject('未知错误!')
      }
    }

    if (error.code == 'ECONNABORTED') {
      return Promise.reject('请求超时!')
    }

    return Promise.reject(error.message)
  }

  config.__retryCount += 1

  const backOff = new Promise(resolve => {
    setTimeout(resolve, config.retryDelay || 1000)
  })
  
  return backOff.then(() => service(config))
})

export default {
  post (url, data, conifg={}) {
    return service({
      method: 'post',
      url,
      data: Qs.stringify(data),
      conifg
    }).then(
      res => Promise.resolve(res.data)
    )
  },
  get (url, params) {
    return service({
      method: 'get',
      url,
      params,
    }).then(
      res => Promise.resolve(res.data)
    )
  }
}