<script>
  import SliderSingleVideo from "./SliderSingleVideo.svelte";

  // import Swiper core and required modules
  import { Swiper, SwiperSlide } from 'swiper/svelte';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';

  // import Swiper core and required modules
    import SwiperCore, {
    Navigation
    } from 'swiper';

  // install Swiper modules
  SwiperCore.use([Navigation]);

export let chosenCasesData;
</script>

<div class="swiper-wrap">
<Swiper
slidesPerView="{'auto'}" 
centeredSlides="{true}"
loop="{false}"
navigation="{true}"
spaceBetween="{-90}"
speed="{1000}"
initialSlide={1}>
    {#each chosenCasesData as item}
    <SwiperSlide>
        <SliderSingleVideo client:load singleVideoData={item}/>
    </SwiperSlide>
    {/each}
</Swiper>
<div class="swiper-overlay"></div>
</div>
<style lang="scss">
    .swiper-wrap{
        position: relative;
        .swiper-overlay{
            position:absolute;
            bottom: 0;
            left: 0;
            width: 100vw;
            height: 50px;
            background: rgb(0,2,23);
            background: linear-gradient(90deg, rgba(0,2,23,1) 0%, rgba(0,2,23,0) 4%, rgba(0,2,23,0) 50%, rgba(0,2,23,0) 96%, rgba(0,2,23,1) 100%);
            z-index: 10;
            pointer-events: none;
        }
    }

    :global(.swiper-slide) {
    flex-shrink: 0;
    width: 700px !important;
    height: 100%;
    position: relative;
    transition-property: transform;
    }
    
    :global(.swiper-button-next) {
    background-image: url(../assets/icons/ArrowRight.svg);
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: center;
    height: 20px !important;
    width: 20px !important;
    top: 97.2% !important;
    z-index: 2;
    right: 1.5rem !important;
    }

    :global(.swiper-button-next::after) {
     display: none;
    }

    :global(.swiper-button-prev) {
    background-image: url(../assets/icons/ArrowLeft.svg);
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: center;
    height: 20px !important;
    width: 20px !important;
    top: 97.2% !important;
    z-index: 2;
    left: 1.5rem !important;
    }

    :global(.swiper-button-prev::after) {
        display: none;
    }


</style>