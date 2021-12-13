import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function animation() {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to('.chosen-cases .swiper-slide', {
    x: 0,
    scrollTrigger: {
      trigger: '.chosen-cases',
      markers: false,
      start: 'top 100%',
      end: 'bottom top',
      scrub: true,
    },
  });

  // gsap.to('.text-block-wrap', {
  //   y: 0,
  //   opacity: 1,
  //   duration: 0.5,
  //   scrollTrigger: {
  //     trigger: '#text-block',
  //     start: 'top 70%',
  //   },
  // });
}

export function logoAnimation() {
  gsap.registerPlugin(ScrollTrigger);
  let letter = document.querySelectorAll('.letter');
  let container = document.querySelector('.hero-content-wrap');

  const tl = gsap.timeline();

  tl.to(letter, {
    opacity: 0,
    ease: 'power1.in',
    stagger: {
      each: 0.05,
      from: 'end',
    },
  }).to('.line', { scaleY: 0, duration: 0.2, ease: 'power1.out' });

  ScrollTrigger.create({
    animation: tl,
    trigger: container,
    start: '1% top',
    // end: 'bottom center',
    // scrub: true,
  });
}

export function staggerAnimation(element) {
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.batch(element, {
    interval: 0.1,
    batchMax: 0,
    onEnter: (batch) => gsap.to(batch, { autoAlpha: 1, stagger: 0.15, overwrite: true }),
    onLeave: (batch) => gsap.set(batch, { autoAlpha: 0, overwrite: true }),
    onEnterBack: (batch) => gsap.to(batch, { autoAlpha: 1, stagger: 0.15, overwrite: true }),
    onLeaveBack: (batch) => gsap.set(batch, { autoAlpha: 0, overwrite: true }),
  });
}
