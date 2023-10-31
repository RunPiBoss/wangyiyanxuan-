<template>
   <div class="my-panel w">
      <!-- 头部区域 -->
      <div class="header">
         <h3>{{ title }} <small>{{ subTitle }}</small></h3>
         <!-- 右边插槽 -->
         <slot name="right" />
      </div>
      <!-- 默认插槽 -->
      <slot />
   </div>
</template>

<script>
export default {
   props: {
      title: {
         type: String,
         default: '主标题'
      },
      subTitle:{
         type:String,
         default:'副标题'
      }
   }
}
</script>

<style lang="less" scoped>
   .my-panel{
      background-color: #fff;
      .header{
         padding: 40px 0;
         display: flex;
         align-items: flex-end;
         h3{
            flex: 1;
            font-size: 29px;
            text-align: left;
            font-weight: 700;
            small{
               font-size: 16px;
               color: #999;
               margin-left: 10px;
            }
         }
      }
   }
</style>
<!-- 插槽相当于占位符,但是使用的时候是在父组件当中使用该子组件的标签后,在标签中子组件写slot的位置可以写任意的HTML结构 -->