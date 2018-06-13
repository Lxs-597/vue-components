function padZore(num, fill) {
  let len = ('' + num).length

  return Array(fill > len ? fill - len + 1 || 0 : 0).join(0) + num
}

export const formatDate = (stamp, fmt='yyyy-MM-dd HH-mm-ss') => {
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
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padZore(str, 2))
    }
  }

  return fmt
}