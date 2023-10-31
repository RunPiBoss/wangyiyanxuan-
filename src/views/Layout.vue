<template>
    <!-- 1、顶部通栏 -->
    <AppTopNav />
    <!-- 2、头部区域 -->
    <MyHeader />
    <!-- 3、主体区域 -->
    <div class="main">
        <!-- 二级路由 -->
        <router-view></router-view>
    </div>
    <!-- 4、底部区域 -->
    <div>底部区域</div>
</template>
<script>
import AppTopNav from '@/components/AppTopNav.vue';
import MyHeader from '@/components/MyHeader.vue';
export default {
    components: {
        AppTopNav,
        MyHeader
    }
};
</script>
<style lang="less" scoped>
</style>