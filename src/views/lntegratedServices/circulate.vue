<template>
  <!-- 传阅界面 -->
  <van-empty class="custom-image" :image="require('../../../public/img/229.png')">
  </van-empty>
</template>

<script>
export default {
  name: "Circulate",
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

<style>
.custom-image .van-empty__image {
  width: 62px;
  height: 88px;
  margin-top: 115px;
}
</style>