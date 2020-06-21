<template>
	<div id="categoryContainer">
		<!-- 分类头部 -->
		<div class="searchHeader">
			<div class="search">
					<i class="iconfont icon-search"></i>
					<span>搜索商品, 共20008款好物</span>
			</div>
		</div>
		<!-- 分类内容区 -->
		<div class="contentContainer">
			<div class="leftContainer wrapper" ref="leftWrapper">
				<div class="navList" v-show="cateListData">
					<div class="navItem"
						:class="{active:navId === item.id}"
						v-for="(item) in cateListData"
						:key="item.id"
						@click="changeNavId(item.id)"
					>{{item.name}}</div>
				</div>
			</div>
			<div class="rightContainer wrapper" ref="rightWrapper">
				<div class="contentList" v-show="cateGoryObj">
					<img class="contentImg" :src="cateGoryObj.imgUrl" alt="">
					<div class="listItem" v-for='(item, index) in cateGoryObj.subCateList' :key='item.id'>
						<img :src="item.wapBannerUrl" alt="">
						<span>{{item.name}}</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {reqCateNavListData} from '@/api'
	import Bscroll from 'better-scroll'
	export default {
		name:'CateList',
		components: {

		},
		data(){
			return{
				cateListData:[],
				navId: '', // 导航标识id
			}
		},
		mounted(){
			this.getCateNavListData()
			this.$nextTick(() => {
				this.scroll = new Bscroll(this.$refs.leftWrapper, {})
			})
		},
		methods:{
			async	getCateNavListData(){
				const result = await reqCateNavListData()
				// console.log(result);
				this.cateListData = result
				this.navId = result[0].id
			},
			changeNavId(navId){
				this.navId = navId
			}
		},
		computed: {
			cateGoryObj(){
				/*find查找（根据已知条件返回条件为true的元素）
					filter过滤(返回条件为true的元素，返回一个过滤后的子数组)
				*/
				this.$nextTick(() => {
					this.scroll = new Bscroll(this.$refs.rightWrapper, {})
				})
				return this.cateListData.find(item => item.id === this.navId)
			}
		}
	}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
	#categoryContainer
		background #ffffff
		// background blue
		.searchHeader
			height 60px
			padding 10px 0
			.search
				width 90%
				height 60px
				background #ededed
				// background hotpink
				line-height 60px
				text-align center
				font-size 28px
				margin 0 auto
				border-radius 10px
				i 
					font-size 28px
					margin-right 15px
		.contentContainer
			height calc(100vh - 80px)
			display flex
			// background yellowgreen
			.leftContainer
				width 20%
				border-right 1px solid #eeeeee
				box-sizing border-box
				// background blue
				.navList
					height calc(100vh - 80upx)
					.navItem
						position relative
						width 162px
						height 80px
						line-height 80px
						text-align center
						font-size 28px
						color #333
						&.active::before
							position absolute
							content ''
							top 10px
							left 5px
							height 60px
							width 2px
							background #ab2b2b
			.rightContainer
				width 80%
				.contentList
					height calc(100vh - 80upx)
					display flex
					flex-wrap wrap
					.contentImg
						width 528px
						padding 30px 30px 21px 
					.listItem
						width 33.33%
						display flex
						flex-direction column
						align-items center
						img
							width 144px
							height 144px 
						span
							font-size 24px
              text-align center
.test	
	font-size 0	
</style>
