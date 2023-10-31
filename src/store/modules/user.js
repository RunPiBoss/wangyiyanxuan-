export default {
    namespaced: true,
    state: () => {
        return {
            userinfo: {
                token: '123',
                username: '张三'
            }
        }
    },
    //  mutations同步操作,里面都是修改state状态的方法
    mutations:{
        updateName(state,payload){
            state.userinfo.username = payload
        }
    },
    // 里面写异步操作
    actions:{
        updateNameAsync({commit},payload){
            setTimeout(() => {
                commit('updateName',payload)
            },2000);
        }
    },
    // store的计算属性,对数据进行一些操作
    getters:{
        
    }
}