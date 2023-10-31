<template>
    <div class="skeleton" :style="{ width, height, background: bg }">
        加载中.....
    </div>
</template>

<script>
export default {
    name: 'AppSkeleton',
    props: {
        width: {
            type: String,
            default: '100px'
        },
        height: {
            type: String,
            default: '30px'
        },
        bg: {
            type: String,
            default: '#ddd'
        }
    }
}
</script>

<style lang="less" scoped>
.skeleton {
    // width: 100px;
    // height: 30px;
    // background-color: #ccc;
    display: flex;
    // 使每行对其，左右居中
    justify-content: center;    
    // 使排列对其，列对其
    align-items: center;
}
</style>