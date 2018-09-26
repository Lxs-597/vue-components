import Vue from 'vue'
import NotifyComponent from './extends'

const NotifyConstructor = Vue.extend(NotifyComponent)

const instances = []

let seed = 1

const notify = options => {
  if (Vue.prototype.$isServer) return

  const instance = new NotifyConstructor({
    propsData: options
  })

  const id = `notify_${seed++}`
  instance.id = id
  instance.vm = instance.$mount()
  document.body.append(instance.vm.$el)

  let verticalOffset = 0
  instances.forEach(item => {
    verticalOffset += item.$el.offsetHeight + 10
  })
  verticalOffset += 16
  instance.verticalOffset = verticalOffset
  instances.push(instance)
  return instance.vm
}

export default notify
