<template>
<!-- 附件信息 -->
    <div class="histroy_main">
      <div class="histroy_main-top">
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
          <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <div class="histroy_icon" v-for='(item,index) in listdata' :key="index">
              <div>
                <i :class='item.class'></i>
              </div>
              <van-cell-group>
                <van-cell  :title="item.title" :label="item.label">
                </van-cell>
              </van-cell-group>
            </div>
          </van-list>
        </van-pull-refresh>
      </div>
    </div>
</template>

<script>
export default {
  name: "HistroyEnclosure",
  data() {
    return {
      loading: false,
      finished: false,
      refreshing: false,
      listdata:[
        {
          class:'iconfont icon-wenjian_ppt',
          title:'关于印发《湖南省不动产登记条例》调研论证2019年工作方案的通知.pdf',
          label:'290.98KB'
        },
                {
          class:'iconfont icon-wenjian_pdf',
          title:'关于印发《湖南省不动产登记条例》调研论证2019年工作方案的通知.pdf',
          label:'290.98KB'
        },
                {
          class:'iconfont icon-wenjian_excel',
          title:'关于印发《湖南省不动产登记条例》调研论证2019年工作方案的通知.pdf',
          label:'290.98KB'
        },
                {
          class:'iconfont icon-wenjian_word',
          title:'关于印发《湖南省不动产登记条例》调研论证2019年工作方案的通知.pdf',
          label:'290.98KB'
        },
                {
          class:'iconfont icon-wenjian_txt',
          title:'关于印发《湖南省不动产登记条例》调研论证2019年工作方案的通知.pdf',
          label:'290.98KB'
        },
                {
          class:'iconfont icon-wenjian_ppt',
          title:'关于印发《湖南省不动产登记条例》调研论证2019年工作方案的通知.pdf',
          label:'290.98KB'
        }
      ],
    }
  },
      created() {
      this.$bus.$emit('routers',this.$route.query.q,this.$route.query.y,this.$route.query.x)
    },
  methods: {
    //延迟刷新时间方法
    onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          this.refreshing = false;
        }
        this.finished = true;
      }, 1000);
    },
    //下拉刷新方法
    onRefresh() {
      // 清空列表数据
      this.finished = false;
      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
  },
};
</script>

<style scope>
.histroy > .dynamic_top {
  height: 200px;
  background-image: url(../../../public/img/4.png) !important;
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