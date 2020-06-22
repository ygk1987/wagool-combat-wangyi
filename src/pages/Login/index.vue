<template>
  <div id="loginContainer">
    <Header/>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  name: 'Login',
  components:{
    Header
  },
  data(){
    return{

    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #loginContainer
    height 100vh
    overflow hidden
    background #eee

</style>
