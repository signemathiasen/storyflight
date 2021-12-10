<script>
import HeroVideoInfo from './HeroVideoInfo.svelte';
import HeroVideo from './HeroVideo.svelte';

export let cases;
export let videoTypes;
let activeSlideIndex = 0;

//Get random cases
cases = cases.sort(() => Math.random() - 0.5);

// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/svelte';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css';
import "swiper/css/effect-fade"
import 'swiper/scss/navigation';

import SwiperCore, {
  EffectFade, Autoplay
} from 'swiper';

// install Swiper modules
SwiperCore.use([EffectFade, Autoplay]);

const getCurrentSlideIndex = (e) => {
      const [slide] = e.detail;
      const activeIndex = slide[0].activeIndex;
      activeSlideIndex = activeIndex;
    }

</script>

<div class="hero-content-wrap">
    <Swiper
    loop="{false}"
    slidesPerView="{1}"
    effect="{'fade'}"
    speed="{300}"
    noSwiping="{'true'}"
    allowTouchMove="{'false'}"
    keyboard="{'false'}"
    autoplay='{{
        "delay": 8000,
        disableOnInteraction: false
      }}'
    navigation='{{
        nextEl: ".timer-button"
     }}'
      on:snapIndexChange={getCurrentSlideIndex}>
    {#each cases as singleCase, index}
        {#if index <= 4}
        <SwiperSlide data-swiper-slide-index={index} class="swiper-no-swiping">
                <HeroVideo bind:activeSlideIndex={activeSlideIndex} videoIndex={index} previewVideoSource={singleCase.preview_video.guid}/>
            <div class="video-info-wrap container container--fluid">
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
    left: 0;
    display: flex;
    align-items: flex-end;
    height: 100vh;
    padding-bottom: 1.5rem;
}
</style>
