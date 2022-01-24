<template>
  <!-- 历史事务详情 -->
  <div class="histroy">
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
          <span>历史事务详情</span>
        </div>
        <div>
          <i class="iconfont icon-fangwuxinxi home"></i>
        </div>
      </div>
      <div class="histroy_buttom">
        <div @click="daiban()" :style="q == 1 ? mapStyle : normalStyle">
          <span>流程信息</span>
          <span :style="q == 1 ? mapStyle : normalStyle"></span>
        </div>
        <div @click="daiyue()" :style="y == 1 ? mapStyle : normalStyle">
          <span>基本信息</span>
          <span :style="y == 1 ? mapStyle : normalStyle"></span>
        </div>
        <div @click="chuanyue()" :style="x == 1 ? mapStyle : normalStyle">
          <span>附件信息</span>
          <span :style="x == 1 ? mapStyle : normalStyle"></span>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "histroytop",
  data() {
    return {
      mapStyle: "borderColor:#FFFFFF;opacity:1;",
      normalStyle: "",
      choseValue: "",
      q: "",
      y: "",
      x: "",
    };
  },
  mounted() {
    this.$router.push({
      path: "/histroy/flow",
      query: {
        q: 1,
        y: 0,
        x: 0,
      },
    });
    this.$bus.$on("routers", (item1, item2, item3) => {
      this.q = item1;
      this.y = item2;
      this.x = item3;
    });
  },
  methods: {
    //返回index界面
    remove() {
      this.$router.push("/index");
    },
    //跳转流程信息
    daiban() {
      this.$router.push({
        path: "/histroy/flow",
        query: {
          q: 1,
          y: 0,
          x: 0,
        },
      });
    },
    //跳转基本信息
    daiyue() {
      this.$router.push({
        path: "/histroy/basic",
        query: {
          q: 0,
          y: 1,
          x: 0,
        },
      });
    },
    //跳转附件信息
    chuanyue() {
      this.$router.push({
        path: "/histroy/enclosure",
        query: {
          q: 0,
          y: 0,
          x: 1,
        },
      });
    },
  },
};
</script>

<style scope>
.histroy > .dynamic_top {
  height: 200px;
  background-image: url(../../public/img/4.png) !important;
  background-size: 375px 200px;
  background-repeat: no-repeat;
}
.histroy_main-top > .van-cell {
  color: #999999 !important;
}
.histroy_main-top > .van-cell > .van-cell__value {
  color: #333333 !important;
}
.last {
  border: none;
}
</style>