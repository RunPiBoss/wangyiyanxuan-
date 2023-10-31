<template>
    <div class="home-new">
        <MyPanel :title=title :subTitle=subtitle>
            <!-- 使用右边插槽 -->
            <template #right>
                <AppMore path="/"></AppMore>
            </template>
            <!-- 使用默认插槽 -->
            <ul class="goods-list" v-if="goods.length">
                <li class="item" v-for="item in goods" :key="item.id">
                    <router-link to="/category/1011000">
                        <img :src=item.listPicUrl alt="">
                        <div class="title ellipsis">{{ item.name }}</div>
                        <div class="price">￥{{ item.retailPrice }}<del>{{ item.counterPrice }}</del></div>
                    </router-link>
                </li>
            </ul>
            <!-- 骨架屏，如果网络很慢，获取数据慢，先显示骨架屏 -->
            <!-- element-plus的骨架屏 -->
            <!-- <div v-else class="goods-list">
                <el-space direction="vertical" alignment="flex-start" v-for="item_2 in 4" :key="item_2">
                    <el-skeleton style="width: 265px" :loading="loading" animated :throttle="500">
                        <template #template>
                            <el-skeleton-item variant="image" style="width: 265px; height: 265px" />
                            <div style="padding: 14px">
                                <el-skeleton-item variant="h3" style="width: 50%" />
                                <div style="
              display: flex;
              align-items: center;
              justify-items: space-between;
              margin-top: 16px;
              height: 16px;
            ">
                                    <el-skeleton-item variant="text" style="margin-right: 16px" />
                                    <el-skeleton-item variant="text" style="width: 30%" />
                                </div>
                            </div>
                        </template>
                    </el-skeleton>
                </el-space>
            </div> -->
            <!-- 自己封装的骨架屏 -->
            <HomeNewSkeleton v-else />
        </MyPanel>
    </div>
</template>

<script>
import { ref } from 'vue'
import MyPanel from '@/components/MyPanel.vue';
import AppMore from '@/components/library/AppMore.vue';
import { getNew } from '@/api';
import HomeNewSkeleton from '@/components/skeleton/HomeNewSkeleton.vue';

export default {
    components: {
        MyPanel,
        AppMore,
        HomeNewSkeleton
    },
    data() {
        return {
            title: "新品首发",
            subtitle: "为你寻觅时间好物"
        }
    },
    // setup取代了vue2的生命周期函数，是配置组件的入口函数，它在组件实例创建之前被调用，并且在组件实例创建之后返回一个对象，这个对象包含了组件中需要使用的数据、方法等
    setup(props) {
        const goods = ref([]);
        const getNewList = async () => {
            try {
                const res = await getNew();
                console.log(res);
                if (res.code == '200') {
                    var a = goods.value = res.data.result.slice(0, 4)
                    console.log(a)
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
.home-new {
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

            .price {
                text-align: center;
                color: @priceColor;
                font-size: 15 px;

                del {
                    color: #999999;
                }
            }
        }
    }
}
</style>