import axios from 'axios'
import config from '../config'
import { Toast } from 'vant'

const baseURL = process.env.NODE_ENV === 'production' ? config.production : config.dev

const statusMessage = {
  400: '请求错误',
  401: '未授权的访问，请登录',
  403: '被拒绝的请求',
  404: '请求的资源不存在',
  405: '请求方法错误',
  406: '请求格式错误',
  408: '请求超时',
  410: '请求的资源已被永久删除',
  413: '请求数据过大',
  414: '请求链接过长',
  500: '服务器发生错误',
}

class HttpRequest {
  constructor() {
    this.service = axios.create({
      baseURL: baseURL,
      timeout: 10000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
      }
    })

    this.service.defaults.headers.post['Content-Type'] = 'application/json'

    this.requestInterceptor = this.service.interceptors.request.use(config => {
      this.toast = Toast.loading({
        duration: 0,       // 持续展示 toast
        forbidClick: true, // 禁用背景点击
        mask: false,
        loadingType: 'spinner',
        message: '加载中...'
      })

      const token = ''

      if (token) config.headers['Authorization'] = token

      return config
    }, error => {

      this.toast.clear()
      return Promise.reject(error)
    })

    this.responseInterceptor = this.service.interceptors.response.use(response => {
      this.toast.clear()
      const { config, data } = response
      console.log(`【${config.method.toUpperCase()} ${config.url.replace(config.baseURL, '')}】请求成功，响应数据：%o`, data)

      if (data.code !== 0) {
        Toast(data.msg)
      }

      return data
    }, error => {

      this.toast.clear()
      return Promise.reject(error)
    })
  }

  get(url, params) {
    return this.service.get(url, { params }).catch(this.validateStatus)
  }

  post(url, data, config = {}) {
    return this.service.post(url, data, config).catch(this.validateStatus)
  }

  validateStatus(error) {
    if (error && error.response) {
      const { status = 500, data = {}, statusText = '服务器发生错误' } = error.response
      let errorMessage = ''

      switch(status) {
        case 500:
          errorMessage = data.msg || '服务器发生错误'
          break
        default:
          errorMessage =  statusMessage[status] || statusText
          break
      }

      Toast(errorMessage)
    } else {
      if (error.code === 'ECONNABORTED') return Toast('连接超时')

      Toast(error.message)
    }

    return Promise.reject(error)
  }
}

const request = Reflect.construct(HttpRequest)

export default request
