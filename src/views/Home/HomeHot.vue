<template>
    <div class="home-hot">
        <MyPanel :title=title :subTitle=subtitle>
            <!-- 使用默认插槽 -->
            <ul class="goods-list">
                <li class="item" v-for="item in goods" :key="item.id">
                    <router-link to="/category/1011000">
                        <img :src=item.listPicUrl alt="">
                        <!-- ellipsis-2超出两行...在全局的less中已经设置过了 -->
                        <div class="title ellipsis-2">{{ item.name }}</div>
                    </router-link>
                </li>
            </ul>
        </MyPanel>
    </div>
</template>

<script>
import { ref } from 'vue'
import MyPanel from '@/components/MyPanel.vue';
import AppMore from '@/components/library/AppMore.vue';
import { getHot } from '@/api';
export default {
    components: {
        MyPanel,
        AppMore
    },
    data() {
        return {
            title: "人气推荐",
            subtitle: "人气爆款 不容错过"
        }
    },
    // setup取代了vue2的生命周期函数，是配置组件的入口函数，它在组件实例创建之前被调用，并且在组件实例创建之后返回一个对象，这个对象包含了组件中需要使用的数据、方法等
    setup(props) {
        const goods = ref([]);
        const getNewList = async () => {
            try {
                const res = await getHot();
                console.log(res);
                if (res.msg == '操作成功') {
                    var a = goods.value = res.result.slice(0, 4)
                }
            } catch (error) {
                console.log(error);
            }
        }
        getNewList();
        // 一定要有返回并且返回时候一定要加{}
        return { goods }
    }
}
</script>

<style lang="less" scoped>
.home-hot {
    .goods-list {
        display: flex;
        justify-content: space-between;
        margin-bottom: 30px;

        .item {
            width: 265px;
            height: 365px;
            background-color: #f5f5f5;

            img {
                width: 265px;
                width: 265px;
            }

            .hoverShadow();

            .title {
                font-size: 16px;
                text-align: center;
                padding: 15px 25px;
                font-weight: bold;
            }
        }
    }
}
</style>