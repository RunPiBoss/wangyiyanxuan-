import { getCategoryList } from '@/api/index.js'
import { topCategory } from '@/utils/constants'

export default {
    namespaced: true,
    state: () => {
        return {
            cateList: topCategory //默认值，如果请求不到数据展示
        }
    },
    //  mutations同步操作,里面都是修改state状态的方法
    mutations: {
        setList(state, payload) {
            state.cateList = payload
        }
    },
    // 里面写异步操作
    actions: {
        //    请求后台,加载分类数据
        async getAllCategory({ commit }) {
            try {
                const res = await getCategoryList();
                console.log(res)
                if (res.code == '200') {
                    commit('setList', res.data.cateList)
                }
            } catch (error) {
                console.log(error);
                console.log('执行');
            }

        }
    },
    // store的计算属性,对数据进行一些操作
    getters: {

    }
}