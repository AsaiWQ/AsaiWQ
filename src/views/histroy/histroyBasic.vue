<template>
<!-- 基本信息页面 -->
 <div class="histroy_main">
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
          <span style="color:#689BEA">暂无内容</span>
        </div>
      </div>
      <div class="histroy_main-top card">
        <div>
          <span>拟办意见</span>
        </div>
        <div>
          <div class="van-ellipsis">
           <van-field type='textarea' rows="2" placeholder="请填写意见" />
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
          <span>传阅意见</span>
        </div>
        <div>
          <div class="van-ellipsis">
           <van-field type='textarea' rows="2" placeholder="请填写意见" />
          </div>
          <div class="histroy_mian-text">
            <span>admin</span>
            <span>2020年01月17日</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name:'HistroyBasic',
        created() {
      this.$bus.$emit('routers',this.$route.query.q,this.$route.query.y,this.$route.query.x)
    },
}
</script>


<style scoped>

</style>
