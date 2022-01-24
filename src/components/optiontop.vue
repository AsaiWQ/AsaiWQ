<template>
  <div class="option">
    <div class="dynamic_top">
      <div class="dynamic_top_t">
        <div class="time">
          <span>9:41</span>
        </div>
        <div class="tig">
          <i class="iconfont icon-phone-signal-full"></i>
          <i class="iconfont icon-xinhao"></i>
          <i class="iconfont icon-tubiao-dianchiman"></i>
        </div>
      </div>
      <div class="dynamic_top_m">
        <div @click="remove()">
          <van-icon name="arrow-left" />
          <span>意见签写</span>
        </div>
        <div>
          <i class="iconfont icon-fangwuxinxi home"></i>
        </div>
      </div>
    </div>

    <van-steps
      :active="active" active-icon="circle" active-color="#689BEA" finish-icon="checked"
    >
      <van-step>填写意见</van-step>
      <van-step>选择环节</van-step>
      <van-step>选择人员</van-step>
      <van-step>完成</van-step>
    </van-steps>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "OptionTop",
  data() {
    return {
      //进度条控制
      active: 0,
    };
  },
  //监听步骤条的变化
  watch: {
    active: function () {
      this.$bus.$emit("OptionActive", this.active);
    },
  },
  methods: {
    remove() {
      this.$router.push("/index");
    },
  },
  //接受步骤条参数
  mounted() {
    this.$bus.$on("avtives", (item) => {
      this.active = item;
    });
  },
};
</script>

<style scoped>
.option > .dynamic_top {
  height: 64px;
  background-image: url(../../public/img/4.png) !important;
  background-repeat: no-repeat;
}
.option > .dynamic_top > .dynamic_top_t > .time {
  color: #ffffff;
}
.option > .dynamic_top > .dynamic_top_t > .tig > i {
  color: #ffffff;
}
.option > .dynamic_top > .dynamic_top_m > div {
  color: #ffffff;
}
</style>