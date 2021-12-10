<script>
import CircleWithArrow from '../assets/icons/CircleWithArrow.svelte';
export let singleCase;
export let videoTypes;

const videoTypeId = singleCase.videotypes.filter(id => id !== 11);
const videoType = videoTypes.find(type => type.id === videoTypeId[0])["name"];
</script>

<div class="video-information">
    <div class="info">
    <p class="subtitle">{videoType}</p>
    <h3>{singleCase.case_title}</h3>
        <div class="link">
            <a href="#" class="a">Gå til projektet</a>
            <a href="#" class="arrow_icon"><CircleWithArrow /></a>
        </div>
    </div>
        <button class="timer-button">
            <svg class="border" height="128" width="128">
                <circle cx="64" cy="64" r="63" stroke="white" stroke-width="1" fill="none" />
              </svg>
            <svg class="timer-border" height="128" width="128">
                <circle cx="64" cy="64" r="63" stroke="white" stroke-width="1" fill="none" />
              </svg>
            <span class="a button-text">Næste <br> video</span>
        </button>
    </div>


<style lang="scss">
    h3, p, a {
        color: var(--clr-white);
    }
    .timer-button {
        position:relative;
        border-radius: 50%;
        background: none;
        height: 128px;
        padding: 8px;
        width: 128px;
        cursor: pointer;

        .button-text {
            display: flex;
            justify-content: center;
            align-items: center;
            color: var(--clr-white);
            height: 100%;
            width: 100%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            
        }
        .timer-border{
        opacity: 1;
        z-index: 1;
        position: absolute;
        top: 0;
        left: 0;
        transform: rotate(-90deg);
        stroke-dasharray: 400;
        stroke-dashoffset: 400;
        // animation: timer-animation 8s linear infinite;
        }
        // @keyframes timer-animation {
        //     to {
        //         stroke-dashoffset: 0;
        //     }
        // }
        .border{
        opacity: 0.2;
        position: absolute;
        top: 0;
        left: 0;
        }
    }

    .video-information{
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        .info{
            margin-left: 2.5rem;
        }
    }

    .arrow_icon {
        color: var(--clr-primary);
    }

    :global(.hero-content-wrap){
        .swiper-slide-active{
            .video-info-wrap{
                .video-information{
                    .timer-button{
                        .timer-border{
                            animation: timer-animation 8s linear forwards;
                        }
                    }
                }
            }
        }
    }

    @keyframes timer-animation {
            to {
                stroke-dashoffset: 0;
            }
        }
</style>
