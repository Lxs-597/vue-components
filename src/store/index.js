import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import * as getters from './getters'

import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

// 开发环境开启vuex日志
const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  modules: {
    app,
  },
  getters,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})

export default store
