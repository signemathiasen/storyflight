<script>
  export let Videos;
  export let pageData;

  let BGvideo = Videos.find((element) => element.case_video.post_title === "Wildrun");
</script>

<div class="bg-vid">
  <video class="vid" muted={"true"} autoplay loop>
    <source src={BGvideo.preview_video.guid} type="video/mp4" />
  </video>
  <div class="overlay">
    <h2 class="caption">Klar til et samarbejde?</h2>
    <a href="/kontakt" class="link">
      <button class="button-hover-white">Kontakt os</button>
    </a>
  </div>
</div>

<style lang="scss">
  .bg-vid {
    height: 100%;
    width: 100%;
    position: relative;
    overflow: hidden;
    .vid {
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      @media (min-width: 900px) {
        height: auto;
        width: 100%;
      }
    }
    .overlay {
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      right: 0;
      background: #000217de;
      //   mix-blend-mode: multiply;
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      button {
        background: transparent;
        color: white;
        border: 1px solid white;
        width: 250px;
        margin-top: var(--gutter);
        cursor: none;
      }
      @media (min-width: 992px) {
        .caption {
          margin-bottom: 1.5rem;
        }
      }
    }
  }

  .link {
    text-align: center;
  }
</style>
