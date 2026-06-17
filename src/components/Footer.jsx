import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { gsap } from '../lib/gsap';

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(footerRef.current, {
        scrollTrigger: { trigger: footerRef.current, start: 'top 92%' },
        opacity: 0,
        y: 16,
        duration: 0.5,
        ease: 'power2.out',
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef}>
      <div className="wrap">
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
