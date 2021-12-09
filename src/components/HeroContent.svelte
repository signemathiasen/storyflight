<script>
import HeroVideoInfo from './HeroVideoInfo.svelte';
import HeroVideo from './HeroVideo.svelte';
export let cases;
export let videoTypes;
let activeSlideIndex = 0;

// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/svelte';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css';
import "swiper/css/effect-fade"

import SwiperCore, {
  EffectFade, Autoplay
} from 'swiper';

// install Swiper modules
SwiperCore.use([EffectFade, Autoplay]);

const getCurrentSlideIndex = (e) => {
      const [slide] = e.detail;
      const activeIndex = slide[0].activeIndex;
      activeSlideIndex = activeIndex;
      console.log(activeSlideIndex)
    //   let currentSlide = document.querySelector(`[data-swiper-slide-index="${activeIndex}"] > video`)
    //   let previousSlide = document.querySelector(".swiper-slide-prev > video")
    //   console.log(`this is the current slide ${currentSlide}`);
    //   console.log(`this is the previous slide ${previousSlide}`);

    //   previousSlide.pause();
    //   currentSlide.play();
    }

</script>

<div class="hero-content-wrap">
    <Swiper
    loop="{false}"
    slidesPerView="{1}"
    effect="{'fade'}"
    speed="{700}"
    autoplay='{{
        "delay": 20000,
        "disableOnInteraction": false
      }}'
      on:snapIndexChange={getCurrentSlideIndex}>
    {#each cases as singleCase, index}
        {#if index <= 5}
        <SwiperSlide data-swiper-slide-index={index}>
                <HeroVideo bind:activeSlideIndex={activeSlideIndex} videoIndex={index} videoSource={singleCase.case_video.guid}/>
            <div class="video-info-wrap">
                <HeroVideoInfo {singleCase} {videoTypes}/>
            </div>
        </SwiperSlide>
        {/if}
    {/each}
</Swiper>
</div>

<style lang="scss">
.video-info-wrap{
    position: absolute;
    top: 0;
}
</style>
