import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { gsap, SplitText } from '../lib/gsap';

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Eyebrow
      tl.from('.hero-eyebrow', { opacity: 0, y: 14, duration: 0.45 });

      // "Armando" — SplitText char-by-char
      const split = new SplitText('.hero-h1-first', { type: 'chars' });
      gsap.set(split.chars, { transformPerspective: 400 });
      tl.from(
        split.chars,
        {
          opacity: 0,
          y: 44,
          rotationX: -40,
          stagger: 0.028,
          duration: 0.55,
          transformOrigin: '0% 50% -30px',
        },
        '-=0.2',
      );

      // "Gomez" — whole word slides up after Armando
      tl.from('.hero-h1-last', { opacity: 0, y: 36, duration: 0.45 }, '-=0.25');

      // Lede
      tl.from('.hero-lede', { opacity: 0, y: 16, duration: 0.4 }, '-=0.3');

      // Terminal
      tl.from('.hero-terminal', { opacity: 0, y: 8, duration: 0.3 }, '-=0.2');
      tl.from('.term-line', { opacity: 0, x: -8, stagger: 0.13, duration: 0.25 }, '-=0.15');

      // CTAs
      tl.from('.hero-btn', { opacity: 0, y: 8, stagger: 0.07, duration: 0.28 }, '-=0.1');

      return () => split.revert();
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <header className="hero" ref={heroRef}>
      {/* Ambient glow orbs */}
      <div className="hero-orb hero-orb-1" aria-hidden="true" />
      <div className="hero-orb hero-orb-2" aria-hidden="true" />

      <div className="wrap">
        <div className="eyebrow hero-eyebrow">AI Systems · Cloud · Automation Engineer</div>

        <h1>
          <span className="hero-h1-first">Armando </span>
          <span className="hero-h1-last">Gomez</span>
        </h1>

        <p className="lede hero-lede">
          I build systems at the intersection of <b>AI, cloud infrastructure, and automation</b> —
          from production public-safety dashboards and edge-device telemetry pipelines to
          AI agents, AWS architectures, and full-stack applications that turn raw data into
          operational intelligence.
        </p>

        <div className="terminal hero-terminal" aria-hidden="true">
          <div className="term-line">
            <span className="pr">armando@gomeztech</span>
            <span style={{ color: 'var(--cyan)' }}>:~</span>
            <span className="cmd">$ whoami --summary</span>
          </div>
          <div className="term-line" style={{ marginTop: 6, color: 'var(--ink-dim)' }}>
            › B.S. Computer Science · M.S. Artificial Intelligence
          </div>
          <div className="term-line" style={{ color: 'var(--ink-dim)' }}>
            › Google IT Support Cert · FAA Part 107 · AWS (in progress)
          </div>
          <div className="term-line" style={{ color: 'var(--ink-dim)' }}>
            › Python · FastAPI · React · AWS · AI Agents · LLM APIs
            <span className="cursor" />
          </div>
        </div>

        <div className="cta-row">
          <motion.a
            className="btn primary hero-btn"
            href="#projects"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.12 }}
          >
            View Projects
          </motion.a>
          <motion.a
            className="btn hero-btn"
            href="mailto:armandogom83@yahoo.com"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.12 }}
          >
            Get in Touch
          </motion.a>
          <motion.a
            className="btn hero-btn"
            href="https://github.com/ArmandoSNHU"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.12 }}
          >
            GitHub ↗
          </motion.a>
          <motion.a
            className="btn hero-btn"
            href="https://www.linkedin.com/in/armandogom83"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.12 }}
          >
            LinkedIn ↗
          </motion.a>
        </div>
      </div>
    </header>
  );
}
