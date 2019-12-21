import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
    getCount(state){
      return state.count
    }
  },
  mutations: {
    add(state, payload) {
      state.count += payload
    },
    minus(state, payload) {
      state.count -= payload
    }
  },
  actions: {
    asyncMinus(context, payload) {
      setTimeout(() => {
        context.commit('minus', payload)
      }, 2000)
    }
  },
  modules: {
  }
})
