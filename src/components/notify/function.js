import Vue from 'vue'
import NotifyComponent from './extends'

const NotifyConstructor = Vue.extend(NotifyComponent)

const instances = []

let seed = 1

const removeInstance = instance => {
  if (!instance) return
  const len = instances.length
  const index = instances.findIndex(inst => inst.id === instance.id)

  instances.splice(index, 1)

  if (len <=1) return
  const removeHeight = instance.vm.height
  for (let i = index; i < len - 1; i++) {
    instances[i].verticalOffset = parseInt(instances[i].verticalOffset) - removeHeight - 10
  }
}

const notify = options => {
  const { autoClose = 3000, ...rest } = options

  const instance = new NotifyConstructor({
    propsData: { ...rest },
    data: {
      autoClose
    }
  })

  const id = `notify_${seed++}`
  instance.id = id
  instance.vm = instance.$mount()
  document.body.append(instance.vm.$el)
  instance.vm.visible = true

  let verticalOffset = 0
  instances.forEach(item => {
    verticalOffset += item.$el.offsetHeight + 10
  })
  verticalOffset += 10
  instance.verticalOffset = verticalOffset
  instances.push(instance)

  instance.$on('close', () => {
    instance.vm.visible = false
  })

  instance.$on('closed', () => {
    removeInstance(instance)
    document.body.removeChild(instance.vm.$el)
    instance.vm.$destroy()
  })

  return instance.vm
}

export default notify
