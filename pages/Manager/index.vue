<template>
  <div>
    asd
  </div>
</template>

<script>
import { getToken } from '@/utils/auth' // get token from cookie

export default {
  name: 'Manager',
  created() {
    if (!getToken()) {
      this.$router.push('/manager/login')
    }
  },
}
</script>

<style lang="scss"></style>
