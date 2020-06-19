<template>
  <div id="indexContainer">
    <!-- 头部 -->
    <div class="header">
      <img src="../../assets/images/logo.png" alt="" srcset="">
      <div class="searchInput icon-sousuo">
        <i class=""></i>
        <input type="text" placeholder="搜索商品,共20008款好物">
      </div>
      <button>登录</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
	components:{
		
	}
}
</script>

<style lang="stylus" rel = "stylesheet/stylus">
  #indexContainer
    .header
    	display flex
    	padding 10px 0
    	image
    		width 140px
    		height 40px
    		margin 10px 20px
    	.searchInput
    		position relative
    		height 60px
    		background #eee
    		input
    			margin-left 50px
    		.placeholder
    			font-size 26px
    			text-align center
    		.iconfont 
    			position absolute
    			left 10px
    			top 25%
    			font-size 30px
    	button
    		width 144px
    		height 60px
    		line-height 60px
    		text-align center
    		font-size 24px
    		margin 0 10px
    		color #b4282d
</style>
