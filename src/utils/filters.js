const filters = new Map()

filters
  .set('priceFilter', priceFilterHandler)
  .set('formatDate', formatDate)
  .set('ConfidentialMobile', ConfidentialMobile)

// 价格分转元保存两位小数
function priceFilterHandler(v1, v2, operate) {
  if (v1 == undefined || v1 === '') return '0.00'

  if (v1 != undefined && !/^\d+$/.test(+v1))
    throw new Error('value必须为整数')

  if (v2 == undefined)
    return (v1 / 100).toFixed(2)

  if (v2 != undefined && !/^\d+$/.test(+v2))
    throw new Error('第一个参数必须为整数')

  switch(operate) {
    case 'add':
      return ((v1 + v2) / 100).toFixed(2)
    case 'sub':
      return ((v1 - v2) / 100).toFixed(2)
    case 'mul':
      return ((v1 * v2) / 100).toFixed(2)
    case 'div':
      return ((v1 / v2) / 100).toFixed(2)
    default:
      return ((v1 + v2) / 100).toFixed(2)
  }
}

// 日期格式化
function formatDate(stamp, fmt='yyyy-MM-dd HH-mm-ss') {
  if (stamp == undefined) return ''

  const date = new Date(+stamp)

  if (/(y+)/.test(fmt)) {
    let str = date.getFullYear() + ''
    fmt = fmt.replace(RegExp.$1, str.substring(4 - RegExp.$1.length))
  }

  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'H+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }

  for (let k in o) {
    let str = o[k] + ''

    if (new RegExp(`(${k})`).test(fmt)) {
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : str.padStart(2, '0'))
    }
  }

  return fmt
}

// 隐藏电话中间四位
function ConfidentialMobile(phone) {
  if (phone == undefined || phone === '') return ''

  phone = phone + ''

  return phone.replace(/(^\d{3})(\d+)(\d{4}$)/, (input, $1, $2, $3) => {
    return $1 + ('*'.repeat($2.length)) + $3
  }) || ''
}

export default {
  install: Vue => {
    for (let [filter, handler] of filters) {
      Vue.filter(filter, (...args) => handler(...args))
    }
  }
}

