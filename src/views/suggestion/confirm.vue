<template>
  <!-- 意见签写弹出框界面 -->
  <div class="confirm" style="position: relative; z-index: 111">
    <div class="option_main confirm">
      <van-cell-group inset>
        <div class="group-top">
          <span>请确认环节及人员是否准确</span>
        </div>
        <div class="group-title">
          <span style="color: #689bea"> 环节列表</span>
          <span style="color: #689bea">（3）</span>
        </div>
        <div>
          <ul class="option_ul">
            <li>
              <div class="li_confirm">
                <span>曹诗国</span>
                <span>（市规划设计院）</span>
              </div>
              <div class="li_confirm boxtwo">
                <span>曹诗国</span>
                <span>（市规划设计院）</span>
              </div>
            </li>
            <li>
              <div class="li_confirm">
                <span>曹诗国</span>
                <span>（市规划设计院）</span>
              </div>
            </li>
          </ul>
        </div>

        <div class="group-title">
          <span style="color: #689bea"> 主办科室承办</span>
          <span style="color: #689bea">（13人）</span>
        </div>
        <div>
          <ul class="option_ul">
            <li>
              <div class="li_confirm">
                <span>曹诗国</span>
                <span>（市规划设计院）</span>
              </div>
              <div class="li_confirm boxtwo">
                <span>曹诗国</span>
                <span>（市规划设计院）</span>
              </div>
            </li>
            <li>
              <div class="li_confirm">
                <span>李小白</span>
                <span>（市规划设计院）</span>
              </div>
              <div class="li_confirm">
                <span>曹诗国</span>
                <span>（市规划设计院）</span>
              </div>
            </li>
            <li>
              <div class="li_confirm">
                <span>王小二</span>
              </div>
              <div class="li_confirm">
                <span>王小二</span>
              </div>
            </li>
            <li>
              <div class="li_confirm">
                <span>王小二</span>
              </div>
              <div class="li_confirm">
                <span>王小二</span>
              </div>
            </li>
          </ul>
        </div>
      </van-cell-group>
    </div>

    <div class="option-buttom">
      <van-button color="#689BEA" class="confirm_buttom" @click="confirmDialog()">确认</van-button>
      <van-dialog v-model="ShowDialog" ref="Dialog" width="272px" @close="dialogClose()" :close-on-click-overlay="true" :show-confirm-button="false">
        <template #default>
          <div class="dialog-div">
            <img src="../../../public/img/246.png" alt="" />
            <span>提交成功</span>
          </div>
        </template>
      </van-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: "OptionTop",
  data() {
    return {
      //进度条控制
      active: 0,
      ShowDialog: false,
    };
  },
  methods: {
    //控制弹出框
    confirmDialog() {
      this.ShowDialog = true;
      this.$bus.$emit("avtives", 4);
    },
    //关闭弹出框触发跳转
    dialogClose() {
      setTimeout(() => {
        this.$router.push("/handle");
      }, 1000);
    },
  },
};
</script>

<style>
</style>