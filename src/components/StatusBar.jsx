export default function StatusBar() {
  return (
    <div className="statusbar">
      <div className="wrap">
        <span className="sb-brand">
          gomeztech.dev<span style={{ color: 'var(--ink-dim)' }}>:~$</span>
        </span>
        <div className="sb-meta">
          <span>
            <span className="dot" />
            STATUS: <b>AVAILABLE</b>
          </span>
          <span>
            LOC: <b>LAREDO, TX</b>
          </span>
          <span>
            ROLE: <b>NETWORK &amp; SYSTEMS TECH</b>
          </span>
        </div>
      </div>
    </div>
  );
}
