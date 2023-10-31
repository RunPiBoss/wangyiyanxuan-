<template>
  <router-link :to="path" class="more">
      <span>查看更多</span>
      <i class="iconfont icon-youjiantou"></i>
  </router-link>
</template>

<script>
export default {
  name: "AppMore",
  props: {
    path: {
      type: String,
      default: "/"
    }
  }
};
</script>

<style lang="less" scoped>
.more{
    span{
        font-size: 16px;
        color: #999;
        margin-right: 5px;
    }
    i{
        font-size: 14px;
        color: #ccc;
    }
}
</style>