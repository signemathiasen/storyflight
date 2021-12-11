import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function animation() {
  gsap.registerPlugin(ScrollTrigger);
  document.querySelector('.chosen-cases .swiper-wrapper').style.transform = 'translateX(500px)';
  document.querySelector('.chosen-cases .swiper-wrapper').style.opacity = '0';

  gsap.to('.chosen-cases .swiper-wrapper', {
    scrollTrigger: '.chosen-cases',
    // start: 'top top',
    x: 0,
    delay: 0.2,
    duration: 2.5,
    opacity: 1,
  });
}
