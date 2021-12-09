<script>
    export let singleVideoData;
    
    function playVideo(e) {
        e.target.play();
    }
    function pauseVideo(e){
        e.target.pause();
    }
</script>

<div class="case-wrap">
    <a href={`/cases/${singleVideoData.slug}`} class="video-wrap">
        <video class="preview-video" on:mouseenter={playVideo} on:mouseout={pauseVideo} poster={singleVideoData.case_image.guid} muted={'true'}>
            <source src={singleVideoData.case_video.guid} type="video/mp4">
          </video>
    </a>
    <h3>{singleVideoData.case_title}</h3>
</div>


<style lang="scss">
    h3 {
    color: var(--clr-white);
    margin-top: 0.8rem;
    z-index: -1;
    }

    .case-wrap{
        width: 700px !important;
    }
    .video-wrap {
    display: block;
    position:relative;
    clip-path: polygon(18% 0%, 100% 0%, 82% 100%, 0% 100%);
    height: 50vh;
    width: 700px !important;
        .preview-image{
            position: absolute;
            height: 50vh;
            object-fit: cover;
            width: 110%;
            display: block;
            z-index: 1;
            // pointer-events: none;
        }
        .preview-video{
            position: absolute;
            height: 50vh;
            object-fit: cover;
            width: 110%;
            display: block;
        }
    }
</style>