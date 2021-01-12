<template>
  <div>
      <el-button type="info" @click="loginOut">退出</el-button>
  </div>
</template>

<script>
export default {
  name: '',
  components: {

  },
  data () {
    return {

    }
  },
  mounted () {

  },
  created () {

  },
  methods: {
    loginOut () {
      // 销毁token
      window.sessionStorage.clear()
      // 跳转回登录
      this.$router.push('login')
    }
  }
}
</script>

<style lang="less" scoped>

</style>
