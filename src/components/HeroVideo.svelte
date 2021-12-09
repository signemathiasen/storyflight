<script>
    export let videoSource;
    export let videoIndex;
    export let activeSlideIndex;

    let time = 0;
    let paused = true;
    let muted = true;

    // import { onMount } from 'svelte';
	// onMount(() => {
	// 	console.log('the component has mounted');
    //     // isSlideActive(activeSlideIndex);
	// });

    // play video if video index is same as active index else pause and reload
	$: isSlideActive(activeSlideIndex);

    // isSlideActive();
    function isSlideActive(value) {
		if (activeSlideIndex === videoIndex){
            paused = false;
        } else {
            paused = true;
            time = 0;
        }
	}

// funtion skal checks if is on last slide 
// if activeslide is 5 swipeto(0)

</script>

<video
src={videoSource}
bind:currentTime={time}
bind:paused={paused}
bind:muted={muted}>
<track kind="captions">
</video>

<style lang="scss">
    video {
        height: 100vh;
        width: 100vw;
        object-fit: cover;
    }
</style>