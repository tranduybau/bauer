<template>
  <div
    class="login-container h-screen w-screen flex items-center justify-center bg-gray-800 text-gray-100"
  >
    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
      auto-complete="on"
      label-position="left"
    >
      <h3 class="font-bold my-6 text-5xl">
        LOGIN FORM
      </h3>
      <client-only>
        <vue-material-icon
          :size="32"
          :name="
            loginForm.passwordType === 'password'
              ? 'visibility'
              : 'unvisibility'
          "
          @click="showPwd"
          color="white"
        />
      </client-only>

      <el-form-item prop="username">
        <el-input
          v-model="loginForm.username"
          placeholder="username"
          name="username"
          type="text"
          auto-complete="on"
        />
      </el-form-item>

      <el-form-item prop="password">
        <el-input
          v-model="loginForm.password"
          :type="loginForm.passwordType"
          @keyup.enter.native="handleLogin"
          placeholder="password"
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
      if (this.loginForm.passwordType === 'password')
        this.loginForm.passwordType = 'text'
      else this.loginForm.passwordType = 'password'
    },
    handleLogin() {
      console.log(this.loginForm)
    },
  },
}
</script>

<style lang="scss" scoped>
.login-form {
  @apply max-w-md w-full;
}
</style>
