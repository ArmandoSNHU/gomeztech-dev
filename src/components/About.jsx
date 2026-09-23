import { useEffect, useRef } from 'react';
import { gsap } from '../lib/gsap';

const FOCUS = [
  'Doctoral study in Artificial Intelligence — Capitol Technology University (Aug 2026–expected Jan 2030)',
  'Building AI agents and agentic pipelines with OpenAI & Anthropic APIs',
  'AWS cloud architecture and infrastructure-as-code with Terraform',
  'Open to remote technical support, application support, IT operations, and AI automation roles',
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
              I'm a network and systems technician and AI practitioner based in <b>Laredo, TX</b>, building
              at the intersection of intelligent automation, cloud infrastructure, and
              real-world operational systems. My background spans broadcast production
              pipelines, district-wide IT infrastructure, and production-grade public-safety
              platforms — giving me a systems thinker's instinct for reliability and a
              builder's hands for shipping.
            </p>
            <p className="about-intro">
              I completed my <b>M.S. in Artificial Intelligence</b> at Colorado State University
              Global in August 2026 and began doctoral study in Artificial Intelligence at
              Capitol Technology University that same month, with completion expected in
              January 2030. I apply that learning to practical support, automation, and AI projects.
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
