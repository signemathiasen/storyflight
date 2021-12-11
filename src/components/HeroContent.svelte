<script>
import HeroVideoInfo from './HeroVideoInfo.svelte';
import ArrowDown from "../assets/icons/ArrowDown.svelte";
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
    <div class="scroll-indicator-wrap">
        <a href="#text-block" class="scroll-indicator">
            <span class="a scroll-text">Scroll</span>
            <span class="scroll-arrow">
                    <ArrowDown />
            </span>
        </a>
    </div>
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
            <div class="video-overlay"></div>
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

.hero-content-wrap{
    position: relative;
    .scroll-indicator-wrap{
        position: absolute;
        z-index:2;
        bottom: 1.5rem;
        right:1.5rem;
        display:flex;
        .scroll-indicator{
            color: var(--clr-white);
            writing-mode: vertical-rl;
            display: flex;
        
            .scroll-text{
            margin-left:4px;
            margin-bottom: 0.5rem;
        }
        .scroll-arrow {
                // animation: bounce 0.5s linear 5s infinite alternate;
            }
            @keyframes bounce {
                from {
                    transform: translateY(0px);
                }
                to {
                    transform: translateY(-5px);
                }
            }
        }
    }

    .video-overlay{
        height: 100vh;
        width: 100vw;
        position: absolute;
        top: 0;
        background: rgba(0, 0, 0, 0.2);
        }
}
</style>
