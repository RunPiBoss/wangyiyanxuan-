<template>
  <!-- <el-carousel height="500px">
    <el-carousel-item v-for="(item,index) in list" :key="item.id">
      <img :src="item.imgUrl" alt="">
    </el-carousel-item>
  </el-carousel> -->
  <el-carousel height="500px">
    <el-carousel-item v-for="item in list" :key="item.id">
      <img :src="item.imgUrl" alt="">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: "AppBanner",
  props: {
    list: {
      type: Array,
      default: []
    }
  }
};
</script>

<style lang="less" scoped>
    .el-carousel__item h3 {
      color: #475669;
      opacity: 0.75;
      line-height: 150px;
      margin: 0;
      text-align: center;
    }

    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n + 1) {
      background-color: #d3dce6;
    }
</style>