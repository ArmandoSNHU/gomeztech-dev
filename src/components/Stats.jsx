import { useEffect, useRef } from 'react';
import { gsap } from '../lib/gsap';

const STATS = [
  { value: 10, suffix: '+', label: 'Years Technical Ops' },
  { value: 24,  suffix: '/7', label: 'Uptime Maintained' },
  { value: 100, suffix: '+', label: 'Endpoints Managed' },
  { value: 3,   suffix: '',  label: 'Active Degrees' },
];

export default function Stats() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Strip fade-in
      gsap.from('.stats-strip', {
        scrollTrigger: { trigger: '.stats-strip', start: 'top 88%' },
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: 'power2.out',
      });

      // Count-up each stat
      document.querySelectorAll('.stat-num').forEach((el) => {
        const target = parseInt(el.dataset.target, 10);
        const suffix = el.dataset.suffix || '';
        const obj = { val: 0 };

        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: 'power2.out',
          onUpdate: () => {
            el.textContent = Math.round(obj.val) + suffix;
          },
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="stats-wrap">
      <div className="wrap">
        <div className="stats-strip">
          {STATS.map((s) => (
            <div className="stat-item" key={s.label}>
              <div
                className="stat-num"
                data-target={s.value}
                data-suffix={s.suffix}
              >
                0{s.suffix}
              </div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
