<template>
  <!-- 综合事务 -->
  <div class="Atop">
    <div class="Atop_top">
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
          <span>综合事务</span>
        </div>
        <div>
          <i class="iconfont icon-fangwuxinxi Dicon"></i>
          <i class="iconfont icon-shoucang Dicon"></i>
        </div>
      </div>
      <div class="Atop_top_b">
        <div>
          <van-badge :content="1" class="badge-dot">
            <div
              class="dot-box" :style="q == 1 ? mapStyle : normalStyle" @click="daiban()"
            >
              <span>代办</span>
            </div>
          </van-badge>
          <van-badge :content="2" class="badge-dot">
            <div
              class="dot-box" :style="y == '1' ? mapStyle : normalStyle" @click="daiyue()"
            >
              <span>待阅</span>
            </div>
          </van-badge>
          <van-badge class="badge-dot">
            <div
              class="dot-box" :style="x == '1' ? mapStyle : normalStyle" @click="chuanyue()"
            >
              <span>传阅</span>
            </div>
          </van-badge>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Top",
  data() {
    return {
      //点击相应的信息实现颜色的切换
      mapStyle: "borderColor:#689BEA;color:#689BEA;",
      normalStyle: "",
      choseValue: "",
      flog: "1",
      q: "",
      y:'',
      x:'',

    };
  },
  mounted() {
    this.$router.push({
      path:'/top/wait',
      query:{
        q:1,
        y:0,
        x:0
      }
    });
    this.$bus.$on("routers", (item1,item2,item3) => {
      this.q=item1;
      this.y=item2;
      this.x=item3;
    });
  },
  methods: {
    //跳转代办
    daiban() {
      this.$router.push({
      path:'/top/wait',
      query:{
        q:1,
        y:0,
        x:0
      }
      });
    },
    //跳转待阅
    daiyue() {
      this.$router.push({
        path:'/top/read',
      query:{
        q:0,
        y:1,
        x:0
      }
      });
    },
    //跳转传阅circulate
    chuanyue() {
      this.$router.push({
      path:'/top/circulate',
      query:{
        q:0,
        y:0,
        x:1
      }
      });
    },
    //返回index
    remove() {
      this.$router.push("/index");
    },
  },
};
</script>


<style>
</style>