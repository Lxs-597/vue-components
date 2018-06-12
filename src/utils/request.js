import axios from 'axios'
import Qs from 'qs'

const service = axios.create({
  baseURL: 'http://localhost:9000',
  timeout: 10000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  }
})

service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

service.interceptors.request.use(config => {
  const token = '' // 获取token

  if (token) {
    config.headers.common['Authorization'] = token
  }

  // loading

  return config
}, error => {
  return Promise.reject(error)
})

service.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.resolve(error.response)
})

export default {
  get(url, params) {
    return service({
      method: 'get',
      url,
      params
    })
  },
  post(url, data) {
    return service({
      method: 'post',
      url,
      data: Qs.stringify(data)
    })
  }
}
