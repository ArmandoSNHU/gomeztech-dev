import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { gsap } from '../lib/gsap';

export default function Resume() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.sec-head-resume', {
        scrollTrigger: { trigger: '.sec-head-resume', start: 'top 88%' },
        opacity: 0,
        x: -20,
        duration: 0.5,
        ease: 'power2.out',
      });

      gsap.from('.panel', {
        scrollTrigger: { trigger: '.grid2', start: 'top 82%' },
        opacity: 0,
        y: 24,
        stagger: 0.15,
        duration: 0.5,
        ease: 'power2.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="resume" ref={sectionRef}>
      <div className="wrap">
        <div className="sec-head sec-head-resume">
          <span className="sec-num">04</span>
          <h2 className="sec-title">Resume</h2>
          <span className="sec-rule" />
          <span className="sec-tag">// education · certs</span>
        </div>

        <div className="grid2">
          <div className="panel">
            <h3>Education</h3>

            <div className="edu-item">
              <div className="edu-deg">Doctorate in Artificial Intelligence</div>
              <div className="edu-school">Capitol Technology University — South Laurel, MD</div>
              <div className="edu-date">Starting Aug 2026 — Jan 2030</div>
            </div>

            <div className="edu-item">
              <div className="edu-deg">M.S. Artificial Intelligence</div>
              <div className="edu-school">Colorado State University Global — Aurora, CO</div>
              <div className="edu-date">Nov 2024 — Aug 2026</div>
            </div>

            <div className="edu-item">
              <div className="edu-deg">B.S. Computer Science</div>
              <div className="edu-school">Southern New Hampshire University — Manchester, NH</div>
              <div className="edu-date">Jan 2022 — Nov 2024</div>
            </div>
          </div>

          <div className="panel">
            <h3>Certifications</h3>
            <ul className="cert-list">
              <li>Google IT Support Professional Certificate</li>
              <li>FAA Part 107 Remote Pilot Certificate</li>
            </ul>

            <h3 style={{ marginTop: 24 }}>References</h3>
            <ul className="ref-list">
              <li>
                <span className="ref-name">Romy Mutuc</span>
                <span className="ref-title">Lieutenant · Laredo Police Department</span>
                <a className="ref-email" href="mailto:rmutuc@ci.laredo.tx.us">
                  rmutuc@ci.laredo.tx.us
                </a>
              </li>
              <li>
                <span className="ref-name">Veronica Castillon</span>
                <span className="ref-title">Communications Director · Laredo ISD</span>
                <a className="ref-email" href="mailto:vcastillon@laredoisd.org">
                  vcastillon@laredoisd.org
                </a>
              </li>
              <li>
                <span className="ref-name">Yocelin Gallardo</span>
                <span className="ref-title">News Director · KGNS-TV (Gray Television)</span>
                <a className="ref-email" href="mailto:yocelin.gallardo@kgns.tv">
                  yocelin.gallardo@kgns.tv
                </a>
              </li>
            </ul>

            <div style={{ marginTop: 20 }}>
              <motion.a
                className="btn primary"
                href="/Armando_Gomez_2026.pdf"
                download
                style={{ width: '100%', justifyContent: 'center' }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.12 }}
              >
                ↓ Download Full Resume (PDF)
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
