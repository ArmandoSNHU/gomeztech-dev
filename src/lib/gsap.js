import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

export const reducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Complete all tweens near-instantly for users who prefer reduced motion
if (reducedMotion) gsap.globalTimeline.timeScale(1000);

export { gsap, ScrollTrigger, SplitText };
