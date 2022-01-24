<template>
  <!-- 个人中心页面 -->
  <div class="mycord">
    <div class="mycord_top">
      <div class="mycord_top_t">
        <div class="time">
          <span>9:41</span>
        </div>
        <div class="tig">
          <i class="iconfont icon-phone-signal-full"></i>
          <i class="iconfont icon-xinhao"></i>
          <i class="iconfont icon-tubiao-dianchiman"></i>
        </div>
      </div>
      <div class="mycord_top_m">
        <div @click="go()">
          <van-icon name="arrow-left" />
          <span>我的</span>
        </div>
        <div class="mycord_top-tig">
          <i class="iconfont icon-fangwuxinxi"></i>
          <i class="iconfont icon-lingdang"></i>
        </div>
      </div>
      <div class="mycord_top_b">
        <div class="mycord_top_b-img">
          <img src="../../../public/img/2.jpg" alt="" />
        </div>
        <div class="mycord_top_b-card">
          <span>李小白</span>
          <span>系统管理员-市局</span>
        </div>
      </div>
    </div>
    <div class="mycord_bottom">
      <van-list class="mycord_list">
        <van-cell is-link class="mycord_cell">
          <template #title>
            <i class="iconfont icon-ziti Micon"></i>
            <span>字体设置</span>
          </template>
        </van-cell>
        <van-cell value="34.34MB" class="mycord_cell">
          <template #title>
            <i class="iconfont icon-qingchu Micon"></i>
            <span>清除缓存</span>
          </template>
        </van-cell>
        <van-cell is-link class="mycord_cell">
          <template #title>
            <i class="iconfont icon-wenhao Micon"></i>
            <span>系统帮助</span>
          </template>
        </van-cell>
        <van-cell is-link class="mycord_cell">
          <template #title>
            <i class="iconfont icon-guanyuwomen Micon"></i>
            <span>关于我们</span>
          </template>
        </van-cell>
        <van-cell is-link value="安全升级" class="mycord_cell">
          <template #title>
            <i class="iconfont icon-gengxin Micon"></i>
            <span>检查更新</span>
          </template>
        </van-cell>
      </van-list>
      <van-button type="primary" block color="#FFFFFF" to="login">
        <span style="color: #e9322f">退出登录</span>
      </van-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Mycord",
  methods: {
    //路由回退
    go() {
      this.$router.go(-1);
    },
  },
};
</script>


<style scoped>
.mycord_top {
  background-image: url(../../../public/img/4.png) !important;
  height: 140px;
}
.mycord_top > div {
  display: flex;
  justify-content: space-between;
}
.mycord_top > div {
  padding: 0 12px;
}
.mycord_top_m {
  color: #ffffff;
  margin: 10px 0px;
}
.mycord_top_m > div:nth-child(1) > span {
  padding-left: 10px;
}
.mycord_top_t > .time {
  color: #ffffff;
  padding: 5px 0 0 0;
}
.mycord_top_t > .tig {
  padding: 5px 0px 0px 0px;
}
.mycord_top_t > .tig > i {
  color: #ffffff;
}
.mycord_top-tig > i {
  font-size: 18px !important;
  color: #ffffff;
}
.mycord_top-tig > i:nth-child(1) {
  margin-right: 20px;
}
.mycord_top-tig > i:nth-child(2)::after {
  content: "";
  position: absolute;
  border: 3px solid #e9322f;
  border-radius: 50%;
  top: 30px;
  right: 12px;
}
</style>