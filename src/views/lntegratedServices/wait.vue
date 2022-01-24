<template>
  <!-- 待办页面 -->
  <div class="Atop_main">
    <van-search placeholder="请输入搜索关键词">
      <template #left-icon>
        <i class="iconfont icon-sousuo"></i>
      </template>
    </van-search>

    <div class="Atop_main_box" v-for="(item, index) in maindata" :key="index">
      <div class="Atop_main_box_top">
        <span v-show="item.flog == 1 ? true : false" class="Atop_main_box_dot"></span>
        <span class="Atop_main_box_span">{{ item.top }}</span>
      </div>
      <div class="Atop_main_box_bottom">
        <span>{{ item.spanone }}</span>
        <span>{{ item.spantwo }}</span>
        <span>{{ item.spanthree }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Wait",
  data() {
    return {
      maindata: [
        {
          flog: 1,
          top: "郴州市市局公文发文正文郴州市市局公文发文正文郴州市市局公文发文正文",
          spanone: "类型:市局机关发文",
          spantwo: "环节:局办公室复核发文登记",
          spanthree: "时间:2020-01-17",
        },
        {
          flog: 1,
          top: "郴州市市局公文发文正文郴州市市局公文发文正文郴州市市局公文发文正文",
          spanone: "类型:市局机关发文",
          spantwo: "环节:局办公室复核发文登记",
          spanthree: "时间:2020-01-17",
        },
        {
          flog: 0,
          top: "郴州市市局公文发文正文郴州市市局公文发文正文郴州市市局公文发文正文",
          spanone: "类型:市局机关发文",
          spantwo: "环节:局办公室复核发文登记",
          spanthree: "时间:2020-01-17",
        },
        {
          flog: 0,
          top: "郴州市市局公文发文正文郴州市市局公文发文正文郴州市市局公文发文正文",
          spanone: "类型:市局机关发文",
          spantwo: "环节:局办公室复核发文登记",
          spanthree: "时间:2020-01-17",
        },
      ],
    };
  },
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