<template>
<!-- 全局内容界面 -->
  <div class="dynamic">
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
          <van-icon name="arrow-left"/>
          <span>全局内容</span>
        </div>
        <div>
          <i class="iconfont icon-fangwuxinxi Dicon"></i>
        </div>
      </div>
      <div class="dynamic_top_b">
        <van-search  placeholder="请输入搜索关键词">
          <template #left-icon>
            <i class="iconfont icon-sousuo"></i>
          </template>
        </van-search>
      </div>
    </div>

    <div class="dynamic_bottom">
      <div>
        <div>
          <i class="dynamic_bottom_dot"></i>
          <span class="dynamic_bottom_span">2020年春节放假通知</span>
        </div>
        <div class="dynamic_bottom_tar">
          <span style="color: #689bea">通知</span>
          <span style="color: #999999">2020-01-17</span>
        </div>
      </div>
      <div>
        <div>
          <i class="dynamic_bottom_dot"></i>
          <span class="dynamic_bottom_span">2020年春节放假通知</span>
        </div>
        <div class="dynamic_bottom_tar">
          <span style="color: #689bea">通知</span>
          <span style="color: #999999">2020-01-17</span>
        </div>
      </div>
      <div>
        <div>
          <i class="dynamic_bottom_dot"></i>
          <span class="dynamic_bottom_span">春节期间值班人员安排</span>
        </div>
        <div class="dynamic_bottom_tar">
          <span style="color: #689bea">通知</span>
          <span style="color: #999999">2020-01-17</span>
        </div>
      </div>
      <div>
        <div>
          <i class="dynamic_bottom_dot"></i>
          <span class="dynamic_bottom_span">关于修改电子政务系统用户名密码的通知</span>
        </div>
        <div class="dynamic_bottom_tar">
          <span style="color: #689bea">通知</span>
          <span style="color: #999999">2020-01-17</span>
        </div>
      </div>
      <div>
        <div>
          <i class="dynamic_bottom_dot"></i>
          <span class="dynamic_bottom_span">固定资产盘点表</span>
        </div>
        <div class="dynamic_bottom_tar">
          <span style="color: #689bea">通知</span>
          <span style="color: #999999">2020-01-17</span>
        </div>
      </div>
      <div>
        <div>
          <i class="dynamic_bottom_dot"></i>
          <span class="dynamic_bottom_span">个人所得税六项专项附加扣除申报操作培训</span>
        </div>
        <div class="dynamic_bottom_tar">
          <span style="color: #689bea">通知</span>
          <span style="color: #999999">2020-01-17</span>
        </div>
      </div>
      <div>
        <div>
          <i class="dynamic_bottom_dot"></i>
          <span class="dynamic_bottom_span">关于深化国土资源政务服务“一次办结”改个升级运行郴州市国土资源电子政务系统的通知</span>
        </div>
        <div class="dynamic_bottom_tar">
          <span style="color: #689bea">通知</span>
          <span style="color: #999999">2020-01-17</span>
        </div>
      </div>
      <div>
        <div>
          <i class="dynamic_bottom_dot"></i>
          <span class="dynamic_bottom_span">2020年春节放假通知</span>
        </div>
        <div class="dynamic_bottom_tar">
          <span style="color: #689bea">通知</span>
          <span style="color: #999999">2020-01-17</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"Dynamic",
  methods:{
    remove(){
      this.$router.go(-1)
    }
  }
};
</script>


<style>
</style>