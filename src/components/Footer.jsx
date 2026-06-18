import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { gsap } from '../lib/gsap';

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.foot-cta', {
        scrollTrigger: { trigger: '.foot-cta', start: 'top 90%' },
        opacity: 0, y: 20, duration: 0.5, ease: 'power2.out',
      });
      gsap.from(footerRef.current, {
        scrollTrigger: { trigger: footerRef.current, start: 'top 92%' },
        opacity: 0, y: 16, duration: 0.5, ease: 'power2.out',
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef}>
      <div className="wrap">
        <div className="foot-cta">
          <p className="foot-cta-label">What's next?</p>
          <h2 className="foot-cta-h2">Get In Touch</h2>
          <p className="foot-cta-body">
            Open to AI engineering, cloud architecture, and intelligent systems roles.
            Whether you have an opportunity, a project, or just want to connect — my inbox
            is always open.
          </p>
          <motion.a
            className="btn primary"
            href="mailto:armandogom83@yahoo.com"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.12 }}
          >
            Say Hello ↗
          </motion.a>
        </div>

        <div className="foot-divider" />

        <div className="foot-grid">
          <div className="foot-links">
            <motion.a
              className="btn"
              href="mailto:armandogom83@yahoo.com"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.12 }}
            >
              ✉ Email
            </motion.a>
            <motion.a
              className="btn"
              href="https://www.linkedin.com/in/armandogom83"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.12 }}
            >
              LinkedIn ↗
            </motion.a>
            <motion.a
              className="btn"
              href="https://github.com/ArmandoSNHU"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.12 }}
            >
              GitHub ↗
            </motion.a>
          </div>

          <div className="foot-cred">
            <div>
              <span className="amb">gomeztech.dev</span> · Laredo, TX
            </div>
            <div>Built &amp; deployed on Cloudflare Pages</div>
            <div>© {new Date().getFullYear()} Armando Gomez · all systems operational</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
