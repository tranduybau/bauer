<template>
  <div class="login-container">
    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
      auto-complete="on"
      label-position="left"
    >
      <div class="title-container">
        <h3 class="title">
          LOGIN
        </h3>
      </div>

      <el-form-item prop="username">
        <el-input
          v-model="loginForm.username"
          :placeholder="username"
          name="username"
          type="text"
          auto-complete="on"
        />
      </el-form-item>

      <el-form-item prop="password">
        <el-input
          v-model="loginForm.password"
          :type="loginForm.passwordType"
          :placeholder="password"
          @keyup.enter.native="handleLogin"
          name="password"
          auto-complete="on"
        />
        <span @click="showPwd" class="show-pwd">asd</span>
      </el-form-item>

      <el-button
        :loading="loginForm.loading"
        @click.native.prevent="handleLogin"
        type="primary"
        style="width:100%;margin-bottom:30px;"
      >
        LOGIN
      </el-button>
    </el-form>
  </div>
</template>

<script>
import formValidator from './formValidator'

export default {
  name: 'Login',
  mixins: [formValidator],
  methods: {
    showPwd() {
      return this.passwordType === 'password' ? 'text' : 'password'
    },
    handleLogin() {
      console.log(this.loginForm)
    },
  },
}
</script>

<style lang="scss" scoped></style>
