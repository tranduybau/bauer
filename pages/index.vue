<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        bauer
      </h1>
      <h2 class="subtitle">
        My Blog
      </h2>
      <div class="links">
        <el-link :underline="false" href="/manager" class="big-font">
          Edit
        </el-link>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo,
  },
}
</script>

<style scoped lang="scss">
.big-font {
  @apply text-5xl transition duration-500;
  &:hover {
    @apply text-red-500;
  }
}
</style>
