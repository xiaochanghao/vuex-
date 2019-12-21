import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 导入模块
import counter from './modules/counter'
import user from './modules/user'

export default new Vuex.Store({

  modules: {
    counter,
    user
  }
})
