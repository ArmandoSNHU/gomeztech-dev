import { useEffect, useRef } from 'react';
import { gsap } from '../lib/gsap';

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!finePointer.matches) return undefined;

    const dot = dotRef.current;
    const ring = ringRef.current;
    const interactiveSelector = 'a, button, .btn, .card, .cap';

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

    const closestInteractive = (target) => {
      if (!(target instanceof Element)) return null;
      return target.closest(interactiveSelector);
    };

    const containsRelatedTarget = (target, relatedTarget) => (
      relatedTarget instanceof Node && target.contains(relatedTarget)
    );

    const onOver = (e) => {
      const target = closestInteractive(e.target);
      if (!target || containsRelatedTarget(target, e.relatedTarget)) return;
      grow();
    };

    const onOut = (e) => {
      const target = closestInteractive(e.target);
      if (!target || containsRelatedTarget(target, e.relatedTarget)) return;
      shrink();
    };

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
      gsap.killTweensOf([dot, ring]);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
