import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function animation() {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to('.chosen-cases .swiper-slide', {
    transform: 'translateX(0)',
    scrollTrigger: {
      trigger: '.chosen-cases',
      markers: false,
      start: 'top 100%',
      end: 'bottom top',
      scrub: true,
    },
  });

  gsap.to('.text-block-wrap', {
    transform: 'translateY(0)',
    scrollTrigger: {
      trigger: '#text-block',
      markers: false,
      start: 'top bottom',
      end: 'bottom 20%',
      scrub: true,
    },
  });
}

export function servicesAnimation() {
  gsap.registerPlugin(ScrollTrigger);
  console.log('hej mortren');
  // const test = document.querySelectorAll('.services-item');
  // let listones = gsap.utils.toArray('.services-item');

  // //listones.forEach((listone) => {

  // let tl = gsap
  //   .timeline({
  //     scrollTrigger: {
  //       trigger: '.wrapper',
  //       start: 'top 50%',
  //       end: 'bottom top',
  //       toggleActions: 'restart restart restart restart',
  //     },
  //   })
  //   .from(listones, { opacity: 0, stagger: 1, duration: 5 }, 0);

  // gsap.to('.services-item', {
  //   transform: 'translateY(0)',
  //   scrollTrigger: {
  //     trigger: 'main',
  //     markers: true,
  //     start: 'top bottom',
  //     end: 'bottom 20%',
  //     scrub: true,
  //   },
  // });
}
