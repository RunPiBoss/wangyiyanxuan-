<template>
    <div class="app-top-nav">
        <div class="w">
            <ul>
                <template v-if="userinfo.token">
                    <li><a href="javascript:">张三</a></li>
                    <li><a href="javascript:">退出登录</a></li>
                </template>
                <li v-else><a href="javascript:">登录/注册</a></li>
                <li><a href="javascript:">我的订单</a></li>
                <li><a href="javascript:">甄选家</a></li>
                <li><a href="javascript:">客户服务</a></li>
                <li>
                    <a href="javascript:">
                        <i class="iconfont icon-shouji"></i>
                        APP
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';
export default {
    // vue3使用setup函数来设置组件的逻辑,接收一个参数props，它是组件的属性对象。通过useStore()函数，我们可以在组件中访问全局的状态管理仓库（store）
    setup(props) {
        const store = useStore();
        let userinfo = computed(() => {
            return store.state.user.userinfo;
        })
        return { userinfo };
    }
};
</script>

<style lang="less" scoped>
// @import url('../assets/styles/variables.less');
.app-top-nav {
    background-color: #333;

    ul {
        display: flex;
        height: 36px;
        line-height: 36px;
        justify-content: flex-end;

        li {
            a {
                font-size: 12px;
                padding: 0 15px;
                color: #ccc;
                border-left: 1px solid #ccc;

                &:hover {
                    color: @xtxColor;
                }
            }
        }

        li:nth-child(1) {
            a {
                border-left: 0;
            }
        }
    }
}
</style>