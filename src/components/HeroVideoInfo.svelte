<script>
import CircleWithArrow from '../assets/icons/CircleWithArrow.svelte';
export let singleCase;
export let videoTypes;

const videoTypeId = singleCase.videotypes.filter(id => id !== 11);
const videoType = videoTypes.find(type => type.id === videoTypeId[0])["name"];
</script>

<div class="video-information">
    <p class="subtitle">{videoType}</p>
    <h3>{singleCase.case_title}</h3>
        <div class="link container container--fluid">
            <a href="#" class="a">Gå til projektet</a>
            <a href="#" class="arrow_icon"><CircleWithArrow /></a>
        </div>
        <button>
            button
        </button>
    </div>