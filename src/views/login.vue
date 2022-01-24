<template>
  <!-- 登陆页面 -->
  <div class="login">
    <div class="login_top">
      <div class="login_top_t">
        <div class="time">
          <span>9:41</span>
        </div>
        <div class="tig">
          <i class="iconfont icon-phone-signal-full"></i>
          <i class="iconfont icon-xinhao"></i>
          <i class="iconfont icon-tubiao-dianchiman"></i>
        </div>
      </div>
      <div class="login_top_b">
        <div class="login_tig">
          <i class="iconfont icon-xinhao"></i>
          <span>网络请求失败，请检查您的网络设置</span>
          <van-icon name="arrow" class="icon" />
        </div>
      </div>
    </div>
    <div class="login_main">
      <div class="login_main_top">
        <span>郴州市自然资源和规划局移动办公系统</span>
      </div>
      <van-form @submit="onSubmit" class="form">
        <van-field v-model="username" name="用户名" placeholder="用户名" :rules="[{ required: true, message: '请填写用户名' }]"/>
        <van-field v-model="password" type="password" name="密码" placeholder="密码" :rules="[{ required: true, message: '请填写密码' }]" right-icon="closed-eye"/>
        <van-field name="radio" class="field" :rules="[{ required: false }]">
          <template #input>
            <van-radio-group v-model="radio" direction="horizontal">
              <van-radio name="1">记住密码</van-radio>
            </van-radio-group>
          </template>
        </van-field>

        <div style="margin: 16px">
          <van-button block type="info" native-type="submit" color="#689BEA" class="login_button">登录</van-button>
        </div>
      </van-form>
      <div class="login_main_bottom">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      radio: "1",
    };
  },
  methods: {
    //登陆到index页面
    onSubmit() {
      this.$router.push("/index");
    },
  },
};
</script>

<style scope>
.login_top > div {
  display: flex;
  justify-content: space-between;
}
.login_top_t > .time {
  color: #333;
}
.login_top_t > .tig > i {
  color: #333;
}
.login {
  background: #ffffff;
}
.login_top_b {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 29px;
  font-size: 14px;
}
.login_tig {
  width: 318px;
  height: 36px;
  background: rgba(255, 239, 239, 0.39);
  border-radius: 30px;
  border: 1px solid #ffefef;
  line-height: 36px;
  text-align: center;
  opacity: 1;
  color: #e9322f;
}
.login_tig > .iconfont.icon-xinhao {
  margin-right: 5px;
}
.icon {
  margin-left: 30px;
}
.login_main {
  margin: 62px 39px 0px 39px;
}
.login_main_top {
  height: 66px;
  font-size: 24px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  line-height: 35px;
  color: #333333;
  opacity: 1;
  padding-bottom: 26px;
}
.field {
  border: none;
}
.field.van-cell::after {
  border: none;
}
.login_button {
  border-radius: 4px !important;
}
.login_main_bottom {
  text-align: center;
  padding: 196px 0px 19px 0px;
  width: 290px;
  height: 12px;
  font-size: 10px;
  font-family: SF Pro Text;
  font-weight: 300;
  line-height: 12px;
  color: #999999;
  opacity: 1;
}
</style>