export default {
    namespaced : true,
    state:{
        userName:''
    },
    getters:{
        getUserName(state){
            return state.userName
        }
    },
    mutations:{
        setUserName(state,payload){
            state.userName=payload
        }
    },
    actions:{
        asyncSetUserName({commit},payload){
            setTimeout(() => {
                commit('setUserName',payload)
            }, 1000);
        }
    }
}