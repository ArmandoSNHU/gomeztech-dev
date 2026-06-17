import { useEffect, useRef } from 'react';
import { gsap } from '../lib/gsap';

const JOBS = [
  {
    role: 'Network & Systems Technician',
    org: 'Laredo Police Department — Real-Time Crime Center',
    meta: 'Jan 2025 — Present · Laredo, TX',
    bullets: [
      'Troubleshoot LAN/WAN anomalies — packet loss, latency, DNS failures — on 24/7 public-safety infrastructure supporting active 911 operations.',
      'Engineered and deployed the RTCC Analytics Dashboard as a full-stack production web app with role-based access for 14+ analysts.',
      'Monitor live traffic, perform root-cause analysis, and coordinate multi-vendor resolutions inside a restricted enterprise environment.',
      'Pilot drone systems for aerial reconnaissance, delivering real-time situational intelligence to dispatch and field officers.',
    ],
  },
  {
    role: 'ITV Technician III / Technical Systems Support',
    org: 'Laredo Independent School District',
    meta: '2018 — Jan 2025 · Laredo, TX',
    bullets: [
      'Maintained AV, broadcast, and network-connected systems across district-wide facilities for live administrative and instructional workflows.',
      'Supported hardware health monitoring and coordinated escalations across 100+ endpoints at multiple campuses.',
    ],
  },
  {
    role: 'Chief Photographer / Technical Workflow Lead',
    org: 'KGNS-TV (Gray Television)',
    meta: 'Mar 2015 — Jan 2018 · Laredo, TX',
    bullets: [
      'Directed technical production workflows: camera networks, satellite uplink rigs, NLE systems, and media ingest pipelines.',
      'Diagnosed field equipment and connectivity faults under breaking-news deadlines, resolving 3–5 technical failures weekly.',
    ],
  },
];

export default function Experience() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.sec-head-xp', {
        scrollTrigger: { trigger: '.sec-head-xp', start: 'top 88%' },
        opacity: 0,
        x: -20,
        duration: 0.5,
        ease: 'power2.out',
      });

      gsap.from('.xp-item', {
        scrollTrigger: {
          trigger: '.xp',
          start: 'top 82%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        x: -16,
        stagger: 0.18,
        duration: 0.5,
        ease: 'power2.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={sectionRef}>
      <div className="wrap">
        <div className="sec-head sec-head-xp">
          <span className="sec-num">03</span>
          <h2 className="sec-title">Experience</h2>
          <span className="sec-rule" />
          <span className="sec-tag">// 10+ yrs technical ops</span>
        </div>

        <div className="xp">
          {JOBS.map((job) => (
            <div className="xp-item" key={job.org}>
              <p className="xp-role">{job.role}</p>
              <p className="xp-org">{job.org}</p>
              <p className="xp-meta">{job.meta}</p>
              <ul>
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
