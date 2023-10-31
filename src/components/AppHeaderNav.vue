<template>
    <ul class="app-header-nav">
        <li class="item">
            <RouterLink class="link" to="/">首页</RouterLink>
        </li>
        <li class="item" v-for="item in list" :key="item.id" @mouseenter="show(item)" @mouseleave="hide(item)">
            <RouterLink class="link" :to="'/category/' + item.id" @click="hide(item)">
            {{item.name }}</RouterLink>
            <!-- 弹出层 -->
            <div class="layer" :class="{active: item.open}">
                <ul>
                    <li v-for="ele in item.subCateGroupList" :key="ele.id">
                        <a href="#">
                            <img :src="ele.categoryList[0].bannerUrl" alt="">
                            <div>{{ item.name }}</div>
                        </a>
                    </li>
                </ul>
            </div>
        </li>
    </ul>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex'
export default {
    setup(props) {
        const store = useStore();
        // 从仓库中读取分类列表
        const list = computed(() => {
            return store.state.category.cateList;
        })
        // 这是list
        console.log(list)

        const show = item => {
            item.open = true;
        };
        const hide = item => {
            item.open = false;
            console.log('点击了');
            console.log(item.open);
        }
        return { list, hide ,show};
    },

}
</script>

<style lang="less" scoped>
.app-header-nav {
    position: relative;

    .item {
        float: left;
        padding: 0 10px;
        font-weight: bold;
        height: 40px;
        line-height: 40px;

        // x选中高亮设置
        .router-link-exact-active {
            color: @xtxColor;
            border-bottom: 2.5px solid @xtxColor;
        }

        .link {
            padding-bottom: 6px;
        }

        // 划过
        &:hover {
            .link {
                color: @xtxColor;
                border-bottom: 2.5px solid @xtxColor;
            }

            .layer {
                z-index: 3;
                opacity: 0;
                height: 130px;
            }

            .active {
                opacity: 1;
            }
        }
    }

    .layer {
        position: absolute;
        left: 0;
        top: 38.5px;
        opacity: 0;
        background-color: #fff;
        box-shadow: 0 0 5px #ccc;
        // border: 1px solid #ccc;
        // padding: 5px;
        width: 1100px;
        height: 0;
        overflow: hidden;
        transition: all 0.5s;

        ul {
            display: flex;

            li {
                height: 100px;
                width: 110px;
                text-align: center;

                a {
                    border-bottom: 0;
                }

                img {
                    width: 50px;
                    height: 50px;
                    text-align: center;
                }
            }
        }
    }
}
</style>