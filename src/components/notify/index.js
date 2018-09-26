import Notify from './Notify'
import $notify from './function'

export default Vue => {
  Vue.component(Notify.name, Notify)
  Vue.prototype.$notify = $notify
}