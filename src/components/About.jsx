import { useEffect, useRef } from 'react';
import { gsap } from '../lib/gsap';

const FOCUS = [
  'M.S. Artificial Intelligence — Colorado State University Global (in progress)',
  'Building AI agents and agentic pipelines with OpenAI & Anthropic APIs',
  'AWS cloud architecture and infrastructure-as-code with Terraform',
  'Targeting roles in AI engineering, cloud architecture, and intelligent systems',
];

const TAGS = [
  'Python', 'React', 'FastAPI', 'AWS', 'Terraform',
  'AI Agents', 'LLM APIs', 'Docker', 'SQL', 'Edge Systems',
];

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.sec-head-about', {
        scrollTrigger: { trigger: '.sec-head-about', start: 'top 88%' },
        opacity: 0, x: -20, duration: 0.5, ease: 'power2.out',
      });
      gsap.from('.about-grid', {
        scrollTrigger: { trigger: '.about-grid', start: 'top 83%' },
        opacity: 0, y: 20, duration: 0.55, ease: 'power2.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef}>
      <div className="wrap">
        <div className="sec-head sec-head-about">
          <span className="sec-num">00</span>
          <h2 className="sec-title">About</h2>
          <span className="sec-rule" />
          <span className="sec-tag">// who I am</span>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p className="about-intro">
              I'm a systems engineer and AI practitioner based in <b>Laredo, TX</b>, building
              at the intersection of intelligent automation, cloud infrastructure, and
              real-world operational systems. My background spans broadcast production
              pipelines, district-wide IT infrastructure, and production-grade public-safety
              platforms — giving me a systems thinker's instinct for reliability and a
              builder's hands for shipping.
            </p>
            <p className="about-intro">
              Currently completing my <b>M.S. in Artificial Intelligence</b> and laying the
              groundwork for a doctorate — not for the credential, but because I want to work
              on the hard problems at the frontier of AI systems design and intelligent
              infrastructure.
            </p>

            <h4 className="about-sub">Currently focused on</h4>
            <ul className="about-list">
              {FOCUS.map((f) => <li key={f}>{f}</li>)}
            </ul>
          </div>

          <div className="about-stack">
            <h4 className="about-sub">Tech I work with</h4>
            <div className="tag-cloud">
              {TAGS.map((t) => <span className="tech-tag" key={t}>{t}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
