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

      // H1 — SplitText char-by-char reveal
      const split = new SplitText('.hero-h1', { type: 'chars' });
      gsap.set(split.chars, { transformPerspective: 400 });
      tl.from(
        split.chars,
        {
          opacity: 0,
          y: 44,
          rotationX: -40,
          stagger: 0.022,
          duration: 0.55,
          transformOrigin: '0% 50% -30px',
        },
        '-=0.2',
      );

      // Lede
      tl.from('.hero-lede', { opacity: 0, y: 16, duration: 0.4 }, '-=0.3');

      // Terminal block
      tl.from('.hero-terminal', { opacity: 0, y: 8, duration: 0.3 }, '-=0.2');
      tl.from(
        '.term-line',
        { opacity: 0, x: -8, stagger: 0.13, duration: 0.25 },
        '-=0.15',
      );

      // CTA buttons
      tl.from(
        '.hero-btn',
        { opacity: 0, y: 8, stagger: 0.07, duration: 0.28 },
        '-=0.1',
      );

      return () => split.revert();
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <header className="hero" ref={heroRef}>
      <div className="wrap">
        <div className="eyebrow hero-eyebrow">Network &amp; Systems Technician</div>

        <h1 className="hero-h1">
          Armando <span className="accent">Gomez</span>
        </h1>

        <p className="lede hero-lede">
          I keep <b>mission-critical infrastructure online</b> — from 24/7 public-safety
          networks to the homelab and cloud environments I build to sharpen the craft.
          Networking, Windows Server, AWS/Terraform, and automation that solves real
          operational problems.
        </p>

        <div className="terminal hero-terminal" aria-hidden="true">
          <div className="term-line">
            <span className="pr">armando@rtcc</span>
            <span style={{ color: 'var(--cyan)' }}>:~</span>
            <span className="cmd">$ whoami --summary</span>
          </div>
          <div className="term-line" style={{ marginTop: 6, color: 'var(--ink-dim)' }}>
            › B.S. Computer Science · M.S. Artificial Intelligence
          </div>
          <div className="term-line" style={{ color: 'var(--ink-dim)' }}>
            › Google IT Support Cert · FAA Part 107
          </div>
          <div className="term-line" style={{ color: 'var(--ink-dim)' }}>
            › LAN/WAN · AD/GPO · Hyper-V · AWS · Python
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
            href="#resume"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.12 }}
          >
            Resume
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
