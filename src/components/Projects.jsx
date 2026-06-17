import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { gsap } from '../lib/gsap';
import { GH_USER, CURATED, FALLBACK, LANG_COLORS, fmtDate, rankRepos } from '../lib/projects';

function ProjectCard({ repo }) {
  const meta = CURATED[repo.name] || {};
  const desc = meta.desc || repo.description || 'Technical project — see repository for details.';
  const lang = repo.language;
  const color = LANG_COLORS[lang] || '#FFB23E';
  const updated = fmtDate(repo.pushed_at || repo.updated_at);
  const url = repo.html_url || `https://github.com/${GH_USER}/${repo.name}`;
  const tag = meta.tag || (repo.fork ? 'FORK' : 'REPO');

  return (
    <motion.article
      className="card"
      whileHover={{ y: -3, borderColor: 'var(--line-bright)' }}
      transition={{ duration: 0.15, ease: 'easeOut' }}
    >
      <div className="card-top">
        <h3>
          <span className="slash">{GH_USER}/</span>
          {repo.name}
        </h3>
        <span className="repo-mark">{tag}</span>
      </div>
      <p>{desc}</p>
      <div className="card-foot">
        {lang && (
          <span>
            <span className="lang-dot" style={{ background: color }} />
            {lang}
          </span>
        )}
        {updated && <span>↻ {updated}</span>}
        <a className="card-link" href={url} target="_blank" rel="noopener noreferrer">
          open ↗
        </a>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const sectionRef = useRef(null);
  const [repos, setRepos] = useState([]);
  const [status, setStatus] = useState({ live: false, count: 0, fallback: false });

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${GH_USER}/repos?per_page=100&sort=pushed`,
          { headers: { Accept: 'application/vnd.github+json' } },
        );
        if (!res.ok) throw new Error('rate/limit');
        const data = await res.json();
        if (!Array.isArray(data) || !data.length) throw new Error('empty');
        setRepos(rankRepos(data));
        setStatus({ live: true, count: data.length, fallback: false });
      } catch {
        setRepos(FALLBACK);
        setStatus({ live: false, count: 0, fallback: true });
      }
    }
    load();
  }, []);

  useEffect(() => {
    if (!repos.length) return;

    const ctx = gsap.context(() => {
      gsap.from('.sec-head-projects', {
        scrollTrigger: { trigger: '.sec-head-projects', start: 'top 88%' },
        opacity: 0,
        x: -20,
        duration: 0.5,
        ease: 'power2.out',
      });

      gsap.from('.proj-grid .card', {
        scrollTrigger: {
          trigger: '.proj-grid',
          start: 'top 82%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 28,
        stagger: { amount: 0.5 },
        duration: 0.5,
        ease: 'power2.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [repos]);

  return (
    <section id="projects" ref={sectionRef}>
      <div className="wrap">
        <div className="sec-head sec-head-projects">
          <span className="sec-num">02</span>
          <h2 className="sec-title">Projects</h2>
          <span className="sec-rule" />
          <span className="sec-tag">// live from github</span>
        </div>

        <div id="repo-status">
          {status.live ? (
            <>
              <span className="dot" />
              Live · {status.count} public repositories on github.com/{GH_USER}
            </>
          ) : status.fallback ? (
            <>
              <span className="dot" style={{ background: 'var(--amber)' }} />
              Featured projects · view all on{' '}
              <a
                className="card-link"
                href={`https://github.com/${GH_USER}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/{GH_USER} ↗
              </a>
            </>
          ) : (
            <>
              <span className="dot" />
              Fetching repositories from github.com/{GH_USER}…
            </>
          )}
        </div>

        <div className="proj-grid">
          {repos.map((repo) => (
            <ProjectCard key={repo.name} repo={repo} />
          ))}
        </div>
      </div>
    </section>
  );
}
