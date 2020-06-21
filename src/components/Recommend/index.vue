<template>
  <div id="recommendContainer">
    <!-- 轮播图 -->
    <div class="banner">
      <div v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="banner in indexData.focusList" :key="banner.id">
            <img :src="banner.picUrl">
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <!-- 小图标 -->
    <div class="servicePolicyList">
      <div class="servicePolicyItem" v-for="(item, index) in indexData.policyDescList" :key="index">
        <img :src="item.icon">
        <span>{{item.desc}}</span>
      </div>
    </div>
    <!-- 内容区 -->
    <div class="contentWrap">
      <!-- 内容区导航 -->
      <div class="kingKongNav" v-if="indexData.kingKongModule">
        <div class="kingKongItem" v-for="(item,index) in indexData.kingKongModule.kingKongList" :key="index">
          <img :src="item.picUrl" alt="">
          <span>{{item.text}}</span>
        </div>
      </div>
      <!-- 类目热销榜 -->
      <div class="hot">
        <div class="title">类目热销榜</div>
        <div class="hotContent">
          <div class="twoColumn">
            <div class="itemTwo" >
              
            </div>
          </div>
          <div class="fourColumn">

          </div>
        </div>
      </div>
      <!-- 限时购 -->
      <div class="limitSale">
        <div class="title">
          <span>限时购物</span>
          <span>更多>>></span>
        </div>
        <div class="content" v-if="indexData.flashSaleModule">
          <div class="limitSaleItem" v-for="(item) in indexData.flashSaleModule.itemList" :key="item.itemId">
            <img :src="item.picUrl" alt="">
            <div>
              <span class="currentPrice">￥{{item.activityPrice}}</span>
              <span class="originalPrice">￥{{item.originPrice}}</span>
            </div>
          </div>
        </div>
      </div>
      <!-- 新品发售 -->
      <div class="newShop">
        <div class="title">
          <span>新品发售</span>
          <span>更多>>></span>
        </div>
        <div class="content">
          <div class="newShopItem" v-for="(item) in indexData.newItemList" :key="item.id">
            <img :src="item.showPicUrl" alt="">
            <span class="name">{{item.name}}</span>
            <span class="price">{{item.retailPrice}}</span>
            <span class="tagName">{{item.itemTagList[0].name}}</span>
          </div>
        </div>
      </div>
      <!-- 底部 -->
      <div class="footer">
        <div class="content">
          <div class="versions">
            <a href="#" class="btn active">下载APP</a>
            <a href="#" class="btn">电脑版</a>
          </div>
          <div class="copyright">
            <p>网易公司版权所有 © 1997-</p>
            <p>食品经营许可证：JY13301080111719</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from "vuex"
export default {
  name: 'Recommend',
  components:{
    
  },
  data(){
    return {
      swiperOption:{
        // 参数选项,显示小点
        pagination:{
          el:'.swiper-pagination'
        },
        //循环
        loop:true,
        //每张播放时长3秒，自动播放
        autoplay:{
          delay:1000,
          disableOnInteraction:false
        },
        //滑动速度
        speed:1000,
        // delay:1000
      },
      gotop:false
    };

  },
  mounted(){
   this.getIndexData()
  },
  methods:{
    ...mapActions({
      getIndexData:'getIndexData'
    })
  },
  computed:{
    ...mapState({
      indexData: state => state.home.indexData
    })
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #recommendContainer
    //轮播图
    .banner
      .swiper-slide
        height 296px
        img 
          width 100%
          height 100%
    //小图标
    .servicePolicyList
      display flex
      justify-content space-around
      align-items center
      height 74px
      img 
        width 32px
        height 32px
        vertical-align middle
        margin-left 8px
    //内容区导航
    .contentWrap
      padding-bottom 20px
      background #ededed
      .kingKongNav
        display flex
        flex-wrap wrap
        height 372px
        background #fff
        .kingKongItem
          display flex
          flex-direction column
          align-items center
          width 110px
          margin 10px 20px
          img
            width 110px
            height 110px
          span 
            margin-top 10px
            font-size 24px
      .limitSale
        padding 0 30px
        background #fff
        margin-top 20px
        .title
          display flex
          justify-content space-between
          height 100px
          font-size 32px
          line-height 100px
        .content
          display flex
          flex-wrap wrap
          justify-content space-between
          .limitSaleItem
            display flex
            flex-direction column
            width 216px
            margin-bottom 30px
            img 
              width 216px
              height 216px
              background rgb(245, 245, 245)
            .currentPrice
              color red
              font-size 28px
            .originalPrice
              text-decoration line-through
              margin-left 20px
      .newShop
        background #ffffff
        margin-top 20px
        padding 0 30px
        .title
          display flex
          justify-content space-between
          height 100px
        .content
          display flex
          flex-wrap wrap
          justify-content space-between
          .newShopItem
            width 216px
            display flex
            flex-direction column
            margin-bottom 13px
            img 
              width 216px
              height 216px
              background rgb(245, 245, 245)
            .name
              display -webkit-box
              -webkit-box-orient vertical
              -webkit-line-clamp 2
              overflow: hidden
              font-size 22px
            .price
              color rgb(221, 26, 33)
              font-size 28px
              margin-top 5px
              flex-shrink 0
            .tagName
              border 1px solid rgb(221, 26, 33)
              border-radius 15px
              font-size 18px
              line-height 28px
              height 28px
              text-align center
              margin-top 5px
      .footer
        height 244px
        background #414141
        border 1px solid rgba(0, 0, 0, 0.15)
        .content
          margin 54px 20px 28px
          height 162px
          .versions
            display flex
            justify-content center
            margin-bottom 36px
            .btn
              display block
              color #ffffff
              width 170px
              height 60px
              border 1px solid rgb(153, 153, 153)
              line-height 60px
              text-align center
              &.active
                margin-right 50px
          .copyright
            color rgb(153, 153, 153);
            p
              text-align center
</style>
