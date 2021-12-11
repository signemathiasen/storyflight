<script>
  import SliderSingleVideo from "./SliderSingleVideo.svelte";
  import animation from "../helpers/animation";
  import { onMount } from "svelte";

  // import Swiper core and required modules
  import { Swiper, SwiperSlide } from "swiper/svelte";

  // Import Swiper styles
  import "swiper/css";
  import "swiper/css/navigation";

  // import Swiper core and required modules
  import SwiperCore, { Navigation } from "swiper";

  // install Swiper modules
  SwiperCore.use([Navigation]);

  export let chosenCasesData;

  onMount(() => {
    animation();
  });
</script>

<div class="swiper-wrap">
  <Swiper slidesPerView={"auto"} centeredSlides={true} loop={false} navigation={true} spaceBetween={-90} speed={1000} initialSlide={1}>
    {#each chosenCasesData as item}
      <SwiperSlide>
        <SliderSingleVideo client:load singleVideoData={item} />
      </SwiperSlide>
    {/each}
</Swiper>
<div class="swiper-overlay">
    <div class="arrow-wrap container container--fluid">
        <span class="prev-element-unique"></span>
        <span class="next-element-unique"></span>
    </div>
</div>
  <div class="swiper-overlay" />
</div>

<style lang="scss">
    .swiper-wrap{
        position: relative;
        .swiper-overlay{
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100vw;
            height: 50px;
            background: rgb(0,2,23);
            background: linear-gradient(90deg, rgba(0,2,23,1) 3%, rgba(0,2,23,0) 13%, rgba(0,2,23,0) 50%, rgba(0,2,23,0) 87%, rgba(0,2,23,1) 97%);
            z-index: 1;
            pointer-events: none;

            .arrow-wrap{
                width: 100vw;
                height: 50px;
                position: relative;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .next-element-unique{
                background-image: url(../assets/icons/ArrowRight.svg);
                background-repeat: no-repeat;
                background-size: 100% auto;
                background-position: center;
                height: 20px !important;
                width: 20px !important;
                z-index: 2;
            }
            .prev-element-unique{
                background-image: url(../assets/icons/ArrowLeft.svg);
                background-repeat: no-repeat;
                background-size: 100% auto;
                background-position: center;
                height: 20px !important;
                width: 20px !important;
                z-index: 2;
            }

        }
    }

</style>

