<template>
    <div>
        <!-- 全局轮播图组件 -->
        <AppBanner :list="list"></AppBanner>
    </div>
</template>

<script>
import { ref } from 'vue';
import {getBanner} from '@/api'
export default {
    setup(props){
        const list = ref([]);
        getBanner().then(res=>{
            console.log(res);
            if(res.msg='操作成功'){
                list.value=res.result;
            }
        }).catch(err=>{
            console.log(err)
        })

        return {list}
    }
}
</script>

<style lang="less" scoped>

</style>