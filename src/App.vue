<template>
  <div id="root">
    <router-view></router-view>
		<TabBar/>
  </div>
</template>

<script>
import TabBar from "@/components/TabBar"
export default {
	name:'App',
  components: {
    TabBar
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
	#app
		margin-bottom 100px
		width 100%
		height 100%
		background #eee
	
</style>
