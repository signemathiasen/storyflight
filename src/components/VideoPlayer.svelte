<script>
  import Logo from '../assets/Logo.svelte';
  import CircleWithArrow from '../assets/icons/CircleWithArrow.svelte';

  export let title;
  export let description;
  export let videoType;
  export let videoSrc;

  // Binds to video
  let paused = true;
  let time = 0;
  let duration;
  let muted = false;
  let video;

  let showOverlay = true;
  let showOverlayTimeout;
  let videoEnded = false;

  function handlePlayPause(event) {
    event.preventDefault();

    if (duration === false) return;
    if (showOverlay && videoEnded) videoEnded = false;

    clearTimeout(showOverlayTimeout);

    if (paused) {
      paused = false;
      showOverlay = false;
    } else {
      paused = true;
      showOverlay = true;
    }
  }
  
  function handleVideoEnd() {
    clearTimeout(showOverlayTimeout);
    time = 0;
    videoEnded = true;
    showOverlay = true;
    paused = true;
  }

  function handleMove() {
    if (paused || videoEnded || duration === false) return;

    clearTimeout(showOverlayTimeout);
    showOverlayTimeout = setTimeout(() => showOverlay = false, 1000);
    showOverlay = true;
  }

  function handleKeyDown(event) {
    // if spacebar pressed...
    if (event.keyCode === 32) {
      handlePlayPause(event); 
      return;
    }

    // if f is pressed
    if (event.keyCode === 70) {
      handleToggleFullscreen();
      return;
    }
  }

</script>

<svelte:window on:keydown={handleKeyDown}/>

<div 
  class="video-player"     
  on:mousemove={handleMove}
  on:touchmove|preventDefault={handleMove}
>
  
    <!-- svelte-ignore a11y-media-has-caption -->
    <video
      class="video-player__video" 
      playsinline 
      src={videoSrc}
      bind:this={video}
      bind:muted
      bind:paused
      bind:duration
      bind:currentTime={time}
      on:ended={handleVideoEnd}
      preload="auto"
      >
    </video>
    <div 
      class="video-player__overlay"
      class:is-hidden={showOverlay === false}
    >
      <div class="video-player__header">
        <a class="video-player__logo" href="/">
          <Logo />
        </a>
        <a href="/cases" class="button">
          <span class="button__content">Tilbage</span>
          <CircleWithArrow />
        </a>
      </div>
      <div class="video-player__content">
        <p>{videoType}</p>
        <h1 class="h2">{title}</h1>
        {#if description}
          <p>{description}</p>
        {/if}
        <!-- <p>{`${time} : ${duration}`}</p> -->
      </div>
      <button
        class="video-player__play-button" 
        on:click={handlePlayPause}
        type="button"
      >
        <span class="video-player__play-button-inner">
        {#if paused && videoEnded === false }
          Afspil
        {:else if paused === false && videoEnded === false}
          Pause
        {:else}
          Afspil igen
        {/if}
        </span>
      </button>
    </div>
</div>


<style lang="scss">

.video-player {
  position: relative;
  width: 100vw;
  height: 100vh;
  cursor: none;

  &__video {
    height: 100%;
    width: 100%;
    display: block;
    object-fit: cover;
    position: fixed;
  }

  &__header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 36px;
    display: flex;
    justify-content: space-between;
  }

  &__logo {
    color: var(--clr-white);
  }

  &__overlay {
    height: 100%;
    width: 100%;
    padding: 36px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    transition: opacity .2s ease-in;
    cursor: default;

    &.is-hidden {
      opacity: 0;
      pointer-events: none;
      cursor: none;
    }

    &::before {
      content: '';
      background: linear-gradient(0deg, rgba(0,2,23,1) 0%, rgba(0,2,23,0.38) 44%, rgba(0,2,23,0) 100%);
      height: 100%;
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }

  &__content {
    color: var(--clr-white);
    position: relative;
  }

  &__play-button {
    border-radius: 50%;
    background: none;
    height: 128px;
    padding: 8px;
    width: 128px;
    color: #fff;
    cursor: pointer;
    // Center button
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    border: 2px solid var(--clr-white);
  }

  &__play-button-inner {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    border-radius: 50%;
  }
}

.button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1em;
  color: var(--clr-primary);
  padding: 0;
  background: none;

  &__content {
    color: var(--clr-white);
    margin-top: 2px;
  }
}

</style>