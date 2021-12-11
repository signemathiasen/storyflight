import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export function logoAnimation() {
  gsap.registerPlugin(ScrollTrigger);
  let letter = document.querySelectorAll('.letter');
  let container = document.querySelector('.hero-content-wrap');

  const tl = gsap.timeline();

  tl.to(letter, {
    opacity: 0,
    ease: 'power1.in',
    stagger: {
      each: 0.1,
      from: 'end',
    },
  }).to('.line', { scaleY: 0, duration: 0.5, ease: 'power1.out' });

  ScrollTrigger.create({
    animation: tl,
    trigger: container,
    start: 'bottom center',
    // scrub: true,
  });
}
