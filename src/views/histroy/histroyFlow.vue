<template>
  <!-- 流程信息页面 -->
  <div class="histroy_main">
    <div class="histroy_main-top">
      <div>
        <span>基本信息</span>
      </div>
      <div class="histroy_main-tag">
        <span>流程名称</span>
        <span>关于协助开展城镇空闲土地外业核查工作函</span>
      </div>
      <van-cell>
        <template #title>
          <span class="custom-title">登记类型</span>
        </template>
        <template #default>
          <span>公文收文（批办）</span>
        </template>
      </van-cell>
      <van-cell>
        <template #title>
          <span class="custom-title">开始时间</span>
        </template>
        <template #default>
          <span>2019-01-17 13:10:11</span>
        </template>
      </van-cell>
      <van-cell>
        <template #title>
          <span class="custom-title">当前状态</span>
        </template>
        <template #default>
          <span>已办</span>
        </template>
      </van-cell>
      <div class="histroy_main-tag last">
        <span>当前环节</span>
        <span>送领导审批</span>
      </div>
    </div>
    <div class="histroy_main-main">
      <div>
        <span>流程描述</span>
      </div>
    </div>
    <div class="histroy_main-buttom">
      <div class="histroy_main-buttom_left">
        <div>
          <i class="iconfont icon-yuan"></i>
          <span class="histroy-item_one"></span>
          <span class="histroy-item"></span>
          <span class="histroy-item"></span>
        </div>
      </div>
      <div class="histroy_main-buttom_right">
        <div>
          <span>办理进度</span>
          <span>2/4</span>
        </div>
        <div>
          <van-progress :percentage="50" :show-pivot="false" />
        </div>
        <div class="cell-box">
          <van-cell is-link>
            <template #title>
              <span class="cell-box-span">环节：</span>
              <span class="custom-title">送领导审批</span>
            </template>
          </van-cell>
        </div>
        <div class="cell-box">
          <van-cell is-link>
            <template #title>
              <span class="cell-box-span">环节：</span>
              <span class="custom-title">办公室主任阅</span>
            </template>
          </van-cell>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HistroyFlow",
  created() {
    this.$bus.$emit(
      "routers",
      this.$route.query.q,
      this.$route.query.y,
      this.$route.query.x
    );
  },
};
</script>


<style scoped>
</style>
