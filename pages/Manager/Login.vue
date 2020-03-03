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
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input
          v-model="loginForm.username"
          :placeholder="username"
          name="username"
          type="text"
          auto-complete="on"
        />
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input
          v-model="loginForm.password"
          :type="passwordType"
          :placeholder="password"
          @keyup.enter.native="handleLogin"
          name="password"
          auto-complete="on"
        />
        <span @click="showPwd" class="show-pwd">
          <svg-icon
            :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"
          />
        </span>
      </el-form-item>

      <el-button
        :loading="loading"
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
  },
}
</script>

<style lang="scss" scoped></style>
