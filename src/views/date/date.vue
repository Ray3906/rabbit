<!-- <template>
  我是分类
</template> -->
<script setup>
</script>
<template>
  <!-- 顶部分类 -->
  <div class="top-category">
    <!-- 容器 -->
    <div class="container m-top-20">
      <!-- 面包屑 -->
      <div class="bread-container">
        <!-- 面包屑导航 -->
        <el-breadcrumb separator=">">
          <!-- 导航到首页 -->
          <el-breadcrumb-item :to="{ path: '/layout' }">首页</el-breadcrumb-item>
          <!-- 导航到居家 -->
          <el-breadcrumb-item>居家</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.top-category {
  h3 {
    font-size: 28px;
    color: #666;
    font-weight: normal;
    text-align: center;
    line-height: 100px;
  }
  .sub-list {
    margin-top: 20px;
    background-color: #fff;
    ul {
      display: flex;
      padding: 0 32px;
      flex-wrap: wrap;
      li {
        width: 168px;
        height: 160px;
        a {
          text-align: center;
          display: block;
          font-size: 16px;
          img {
            width: 100px;
            height: 100px;
          }
          p {
            line-height: 40px;
          }
          &:hover {
            color: $xtxColor;
          }
        }
      }
    }
  }
  .ref-goods {
    background-color: #fff;
    margin-top: 20px;
    position: relative;
    .head {
      .xtx-more {
        position: absolute;
        top: 20px;
        right: 20px;
      }
      .tag {
        text-align: center;
        color: #999;
        font-size: 20px;
        position: relative;
        top: -20px;
      }
    }
    .body {
      display: flex;
      justify-content: space-around;
      padding: 0 40px 30px;
    }
  }
  .bread-container {
    padding: 25px 0;
  }
}
</style>
