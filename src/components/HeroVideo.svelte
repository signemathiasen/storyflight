<script>
    export let videoSource;
    export let videoIndex;
    export let activeSlideIndex;

    let time = 0;
    let paused = true;
    let muted = true;

    // play video if video index is same as active index else pause and reload
	$: isSlideActive(activeSlideIndex);

    function isSlideActive(value) {
		if (activeSlideIndex === videoIndex){
            paused = false;
        } else {
            paused = true;
            // set time to 0 
        }
	}

// funtion skal checks if is on last slide 
// if activeslide is 5 swipeto(0)

</script>

<video
src={videoSource}
bind:currentTime={time}
bind:paused={paused}
bind:muted={muted}
autoplay>
<track kind="captions">
</video>

<style lang="scss">
    video {
        height: 100vh;
        width: 100vw;
        object-fit: cover;
    }
</style>