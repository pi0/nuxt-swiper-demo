<template>
<div>
  <swiper-container class="my-swiper" :options="swiperOption" pagination>
      <swiper-slide v-for="slide in slides" :key="slide">
        <img :src="slide">
      </swiper-slide>
  </swiper-container>
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
import { SwiperContainer, SwiperSlide } from '~/swiper'

export default {
  components: {
    SwiperContainer,
    SwiperSlide
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
