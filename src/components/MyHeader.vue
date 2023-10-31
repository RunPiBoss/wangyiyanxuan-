<template>
    <div class="my-header w">
        <!-- 上面区域 -->
        <div class="header-top">
            <!-- logo -->
            <h1 class="logo">
                <router-link to="/"></router-link>
            </h1>
            <!-- 中心 -->
            <div class="center">
                <div class="center-search">
                    <input type="text" placeholder="618...">
                    <button class="search-btn">搜索</button>

                </div>
                <!-- 搜索下面的导航 -->
                <ul class="center-navs">
                    <li><a href="#">水杯</a></li>
                    <li><a href="#">牙刷</a></li>
                    <li><a href="#">收纳</a></li>
                    <li><a href="#">女鞋</a></li>
                    <li><a href="#">咖啡</a></li>
                    <li><a href="#">美食</a></li>
                    <li><a href="#">艺术</a></li>
                    <li><a href="#">蓝牙耳机</a></li>
                    <li><a href="#">行李箱</a></li>
                </ul>
            </div>
            <!-- 购物车 -->
            <div class="cart">
                <a href="##">
                    <i class="iconfont icon-icon-"></i>
                    购物车
                    <em>2</em>
                </a>
            </div>
        </div>
        <!-- 二级导航 -->
        <AppHeaderNav/>
    </div>
</template>

<script>
import { useStore } from 'vuex'
import AppHeaderNav from './AppHeaderNav.vue'
export default {
    components:{
        AppHeaderNav
    },
    setup(){
        const store =useStore();
        // 出发action
        store.dispatch('category/getAllCategory');
    }
}
</script>

<style lang="less" scoped>
.my-header {
    height: 120px;
    padding: 25px 0 0 0;
    background-color: #fff;

    .header-top {
        display: flex;

        .logo {
            width: 370px;
            height: 60px;

            a {
                display: inline-block;
                height: 60px;
                width: 100%;
                background: url('../assets/images/logo.webp') 0 -298px no-repeat;
            }
        }

        .center {
            flex: 1;

            .center-search {
                width: 540px;
                height: 36px;

                input {
                    width: 440px;
                    height: 38px;
                    border: 1px solid @xtxColor;
                    border-radius: 20px 0 0 20px;
                    padding-left: 15px;
                    box-sizing: border-box;
                }

                .search-btn {
                    float: right;
                    width: 100px;
                    height: 38px;
                    color: #fff;
                    background-color: @xtxColor;
                    border-radius: 0 20px 20px 0;
                    border: 0;
                    font-size: 16px;
                    cursor: pointer;
                }
            }

            .center-navs {
                width: 540px;

                li {
                    float: left;
                    height: 32px;
                    padding: 5px;

                    a {
                        color: #999;
                        padding: 0 5px;
                        border-right: 1px solid #ccc;
                        font-size: 12px;

                        &:hover {
                            color: @xtxColor;
                        }
                    }
                }

                li:last-child a {
                    border-right: 0;
                }
            }
        }

        .cart {
            box-sizing: border-box;
            width: 134px;
            height: 38px;
            line-height: 32px;
            border-radius: 20px;
            border: 1px solid @xtxColor;
            font-size: 14px;
            text-align: center;

            a {
                color:@xtxColor;
            }

        }

        em {
            color: #fff;
            background-color: red;
            border-radius: 50%;
            padding: 5px;
            width: 11px;
            height: 9px;
            display: inline-block;
            line-height: 10px;
            font-size: 10px;
            // padding: 2px 6px;
        }
    }
}</style>