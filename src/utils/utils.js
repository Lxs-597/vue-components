export function throttle(callback, threshold = 50) {
  let last = null,
      timer = null

  return () => {
    let ctx = this
    let now = +new Date()

    if (now && now < last + threshold) {
      clearTimeout(timer)

      timer = setTimeout(() => {
        last = now
        callback && callback.apply(ctx, [...arguments])
      }, threshold)
    } else {
      last = now
      callback && callback.apply(ctx, [...arguments])
    }
  }
}