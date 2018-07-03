<template>
<div>
  <div class="swiper-container my-swiper" v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="slide in slides" :key="slide">
        <img :src="slide">
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</div>
</template>

<style>
body {
  background: rgb(50,50,50);
}

.my-swiper {
  min-height: 500px;
  min-width: 100vw;
}
</style>

<script>
import { directive as swiper } from '~/swiper'

export default {
  directives: {
    swiper
  },
  data () {
    const rand = Math.round(Math.random() * 500 );
    return {
      slides: [1,2,3,4,5,6,7,8,9,10].map(i => `https://picsum.photos/500?image=${rand + i}`),
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
