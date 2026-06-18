import { useEffect, useRef } from 'react';
import { gsap } from '../lib/gsap';

const JOBS = [
  {
    role: 'AI Systems & Technical Operations Engineer',
    org: 'Laredo Police Department — Public Safety Technology Division',
    meta: 'Jan 2025 — Present · Laredo, TX',
    bullets: [
      'Architect and maintain edge-computing and surveillance infrastructure — Flock Safety cameras, Axon body-worn devices, and UAV systems — streaming real-time telemetry into operational intelligence dashboards.',
      'Engineered a full-stack analytics platform (React/Node, role-based access) that aggregates incident data, KPI metrics, and automated reports for 14+ analysts on 24/7 public-safety operations.',
      'Automate incident data workflows with Python and Google Apps Script, reducing manual reporting overhead and enabling near-real-time situational awareness for dispatch and command staff.',
      'Diagnose LAN/WAN anomalies — packet loss, latency spikes, DNS failures — across a restricted enterprise network supporting active 911, CAD, and multi-agency data feeds.',
      'Operate UAV systems for aerial reconnaissance, delivering live video intelligence streams to field officers and dispatch during critical incidents.',
    ],
  },
  {
    role: 'Technical Systems Engineer',
    org: 'Laredo Independent School District',
    meta: '2018 — Jan 2025 · Laredo, TX',
    bullets: [
      'Managed AV, broadcast, and network-connected endpoints across district-wide facilities — 100+ devices across multiple campuses — with hardware health monitoring and SLA-driven escalation workflows.',
      'Built and maintained network infrastructure, device provisioning pipelines, and AV automation systems supporting live administrative and instructional workflows.',
    ],
  },
  {
    role: 'Technical Workflow Lead',
    org: 'KGNS-TV (Gray Television)',
    meta: 'Mar 2015 — Jan 2018 · Laredo, TX',
    bullets: [
      'Directed end-to-end technical production workflows: live camera networks, satellite uplink rigs, NLE editing systems, and media ingest pipelines under real-time broadcast deadlines.',
      'Diagnosed field equipment and connectivity faults under breaking-news conditions, averaging 3–5 resolved technical incidents per week with zero missed live windows.',
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
          <span className="sec-tag">// 10+ yrs systems & AI ops</span>
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
