export default {
    namespaced: true,
    state: {
        counter: 0
    },
    getters: {
        getCounter(state) {
            return state.counter
        }
    },
    mutations: {
        add(state, payload) {
            state.counter += payload
        },
        minus(state, payload) {
            state.counter -= payload
        }
    },
    actions: {
        asyncMinus(context, payload) {
            setTimeout(() => {
                // 假设这里在发送ajax请求
                context.commit('minus', payload)
            }, 2000)
        }
    }
}