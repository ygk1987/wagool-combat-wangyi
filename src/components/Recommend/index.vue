<template>
  <div id="recommendContainer">
    <!-- 轮播图 -->
    <!-- <div class="banner">
      <div v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
          <div class="swiper-slide" :key="banner" v-for="banner in banners">
            <img :src="banner">
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div> -->
    
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
}
</script>

<style lang="less" scoped>
  
      
</style>
