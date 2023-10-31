<template>
    <div class="home-product">
        <MyPanel v-for="item in products" :key="item.id" :title= item.name>
            <!-- 使用右侧插槽,#right指定插槽的名称 -->
            <template #right>
                <div v-for="item_2 in item.children" :key="item_2.id" class="sub">
                    <router-link to="/">{{ item_2.name }}</router-link>
                </div>
                <AppMore />
            </template>
            <!-- 默认插槽 -->
            <div class="goods">
                <!-- 左侧 -->
                <router-link to="/" class="left">
                    <img :src=item.picture alt="">
                </router-link>
                <!-- 右侧 -->
                <div class="right">
                    <ul class="goos-list">
                        <li v-for="item_3 in item.goods" :key="item_3.id">
                            <MyGoodsitem :good="item_3"/>
                        </li>
                    </ul>
                </div>
            </div>
        </MyPanel>
    </div>
</template>

<script>
import MyPanel from '@/components/MyPanel.vue';
import MyGoodsitem from '@/components/MyGoodsitem.vue';
import { getProducts } from '@/api';
import { ref } from 'vue';
export default {
    components: {
        MyPanel,
        MyGoodsitem
    },
    setup(props) {
        const products = ref([]);
        const getProduct = async () => {
            try {
                const res = await getProducts();
                console.log(res);
                if(res.msg == '操作成功'){
                    products.value = res.result
                }
            } catch (error) {
                console.log(error);
            }
        }
        getProduct();

        return { products };
    }
}
</script>

<style lang="less" scoped>
.home-product {
    background-color: #fff;

    .sub {
        transform: skew(-15deg);

        a {
            padding: 2px 10px;
            // border-radius: 4px;
            margin-right: 0 7px;
            font-size: 16px;
            border-right: 1.6px solid #333333;

            &:hover {
                background-color: @xtxColor;
                color: #fff;
            }

            &:last-child {
                margin-right: 40px;
                border-right: 0;
            }
        }
    }

    .goods {
        height: 610px;
        display: flex;

        .left {
            width: 240px;
            margin-right: 10px;

            // border: 1px solid #ccc;
            img {
                width: 100%;
                height: 100%;
            }
        }

        .right {
            flex: 1;

            // border: 1px solid #ccc;
            .goos-list {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
            }


        }
    }
}</style>