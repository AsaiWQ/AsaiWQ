<template>
  <!-- 事务处理单页面 -->
  <div class="handle">
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
          <span>事务处理单</span>
        </div>
        <div>
          <van-icon name="star" color="#FFFFFF" />
          <span class="Atop_item">已收藏</span>
        </div>
      </div>
    </div>
    <div class="histroy_main hand">
      <div class="histroy_main-top">
        <div>
          <span>基本信息</span>
        </div>
        <div class="histroy_main-tag">
          <span>公文标题</span>
          <span>关于协助开展城镇空闲土地外业核查工作函</span>
        </div>
        <van-cell>
          <template #title>
            <span class="custom-title">来文单位</span>
          </template>
          <template #default>
            <span>省自然资源厅</span>
          </template>
        </van-cell>
        <div class="histroy_main-tag last">
          <span>备注</span>
          <span style="color: #689bea">暂无内容</span>
        </div>
      </div>
      <div class="histroy_main-top card">
        <div>
          <span>拟办意见</span>
        </div>
        <div>
          <div class="van-ellipsis">
            <van-field type="textarea" rows="2" placeholder="请填写意见" />
          </div>
          <div class="histroy_mian-text">
            <span>admin</span>
            <span>2020年01月17日</span>
          </div>
        </div>
      </div>
      <div class="histroy_main-main">
        <div>
          <span>局长意见</span>
        </div>
      </div>
      <div class="histroy_main-main">
        <div>
          <span>党组书记意见</span>
        </div>
      </div>
      <div class="histroy_main-top card">
        <div>
          <span>意见列表</span>
        </div>
        <div>
          <div class="van-ellipsis">
            <van-field type="textarea" rows="2" placeholder="请填写意见" />
          </div>
          <div class="histroy_mian-text">
            <span>彭文</span>
            <span>2020年01月17日</span>
          </div>
        </div>
        <div>
          <div class="van-ellipsis">
            <van-field type="textarea" rows="2" placeholder="请填写意见" />
          </div>
          <div class="histroy_mian-text">
            <span>彭文</span>
            <span>2020年01月17日</span>
          </div>
        </div>
      </div>
    </div>
    <div class="handle-buttom">
      <van-button type="square" color="#EE6161" @click="toOpinion()">意见签写</van-button>
      <van-button type="square" color="#689BEA" @click="dialog()">已阅</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Handle",
  methods: {
    // 阅读按钮跳转
    dialog() {
      this.$dialog
        .confirm({
          title: "提示",
          width: 272,
          messageAlign: "left",
          message: "已阅后，将只能在历史事务中查询，确定已阅？",
          confirmButtonText: "已阅",
          confirmButtonColor: "#689BEA",
        })
        .then(() => {
          //可以写路由跳转
          this.$router.push("/histroy");
        })
        .catch(() => {
          console.log("取消");
        });
    },
    //意见签写按钮跳转
    toOpinion() {
      this.$router.push("/option/optionindex");
    },
    //返回index页面路由
    remove() {
      this.$router.push("/index");
    },
  },
  mounted() {},
};
</script>

<style scope>
.handle > .dynamic_top {
  height: 200px;
  background-image: url(../../../public/img/4.png) !important;
  background-size: 375px 200px;
  background-repeat: no-repeat;
}
.handle > .dynamic_top > .dynamic_top_t > .time {
  color: #ffffff;
}
.handle > .dynamic_top > .dynamic_top_t > .tig > i {
  color: #ffffff;
}
.handle > .dynamic_top > .dynamic_top_m > div {
  color: #ffffff;
}
</style>