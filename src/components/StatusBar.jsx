export default function StatusBar() {
  return (
    <div className="statusbar">
      <div className="wrap">
        <span className="sb-brand">
          gomeztech.dev<span style={{ color: 'var(--ink-dim)' }}>:~$</span>
        </span>
        <nav className="sb-nav" aria-label="Page sections">
          <a href="#about">About</a>
          <a href="#capabilities">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#resume">Resume</a>
        </nav>
        <div className="sb-meta">
          <span>
            <span className="dot" />
            STATUS: <b>AVAILABLE</b>
          </span>
          <span>
            LOC: <b>LAREDO, TX</b>
          </span>
        </div>
      </div>
    </div>
  );
}
