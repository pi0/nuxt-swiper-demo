<template>
<div class="ctr">
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="banner in banners">
        <img :src="banner">
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</div>
</template>

<style scoped>
.ctr {
    background: grey;
    max-width: 70vw;
    margin: auto;
}
</style>

<script>
  export default {
    data () {
      return {
        banners: [1,2,3,4,5,6,7,8,9,10].map(i => `http://lorempixel.com/200/300/cats/${i}`),
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          },
          slidesPerView: 4,
          spaceBetween: 0,
        }
      }
    }
  }
</script>