import { useEffect, useRef } from 'react';
import { gsap } from '../lib/gsap';

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;

    const onMove = (e) => {
      gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0.08, ease: 'none' });
      gsap.to(ring, { x: e.clientX, y: e.clientY, duration: 0.35, ease: 'power2.out' });
    };

    const grow = () => {
      gsap.to(ring, { scale: 2.2, opacity: 0.5, duration: 0.2 });
      gsap.to(dot, { scale: 0, duration: 0.15 });
    };

    const shrink = () => {
      gsap.to(ring, { scale: 1, opacity: 0.7, duration: 0.2 });
      gsap.to(dot, { scale: 1, duration: 0.15 });
    };

    window.addEventListener('mousemove', onMove);

    const targets = document.querySelectorAll('a, button, .btn, .card, .cap');
    targets.forEach((el) => {
      el.addEventListener('mouseenter', grow);
      el.addEventListener('mouseleave', shrink);
    });

    return () => {
      window.removeEventListener('mousemove', onMove);
      targets.forEach((el) => {
        el.removeEventListener('mouseenter', grow);
        el.removeEventListener('mouseleave', shrink);
      });
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
