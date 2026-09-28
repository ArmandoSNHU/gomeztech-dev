export const GH_USER = 'ArmandoSNHU';

export const CURATED = {
  'aiops-incident-copilot':    { p: 1, desc: 'Operational AI: correlates logs, metrics, and alerts into ranked, evidence-cited root causes with next steps. FastAPI + Prometheus + JSON logs, Docker Compose, and Kubernetes manifests.', tag: 'OPERATIONAL AI / SRE' },
  'dns-dhcp-lab':              { p: 2, desc: 'Runnable DNS/DHCP (DDI) lab — authoritative + recursive DNS (CoreDNS) and a DHCP scope (dnsmasq) in Docker Compose, a validated zone, a Python validator, and dig/nslookup troubleshooting walkthroughs.', tag: 'NETWORKING / DNS' },
  'net-diag-toolkit':          { p: 3, desc: 'First-response network diagnostics CLI — DNS (A/AAAA) resolution, TCP port checks, latency/packet-loss summary, and traceroute parsing, with a JSON report mode. Pure-stdlib, 27 tests.', tag: 'NETWORKING / CLI' },
  'security-rag-assistant':    { p: 4, desc: 'Local-first RAG over security & compliance docs (MITRE ATT&CK, NIST, GDPR, PCI) — cited answers that run offline or on a local Ollama backend. CLI + FastAPI, tested, CI.', tag: 'RAG / SECURITY' },
  'AI_COUNCIL_GIT':            { p: 5, desc: 'Agentic security & compliance auditor — a multi-agent chain on local LLMs parses scans for CVEs, reasons about GDPR/PCI risk, and writes remediation. M.S. AI capstone.', tag: 'AGENTIC / SECURITY' },
  'uptime-sentinel':           { p: 6, desc: 'Self-hosted synthetic monitoring — HTTP/TCP/DNS checks with uptime tracking, Prometheus metrics, and a status page. FastAPI + Docker, 22 tests.', tag: 'OBSERVABILITY' },
  'Secure-City-Analytics':     { p: 7, desc: 'Role-based public-safety analytics platform — React 18 + TypeScript (strict), 3-role access control, 19 tests, an accessible Recharts UI, and CI/CD to a live demo on GitHub Pages.', tag: 'REACT / TYPESCRIPT' },
  'aws-terraform-lab-2026':    { p: 8, desc: 'Production-style AWS environment provisioned entirely with Terraform — validation that refuses 0.0.0.0/0 SSH, IMDSv2 required, encrypted storage, least-privilege IAM, tfsec in CI.', tag: 'CLOUD / IaC' },
};

export const FALLBACK = [
  { name: 'aiops-incident-copilot', language: 'Python' },
  { name: 'dns-dhcp-lab', language: 'Shell' },
  { name: 'net-diag-toolkit', language: 'Python' },
  { name: 'security-rag-assistant', language: 'Python' },
  { name: 'AI_COUNCIL_GIT', language: 'Python' },
  { name: 'uptime-sentinel', language: 'Python' },
  { name: 'Secure-City-Analytics', language: 'TypeScript' },
  { name: 'aws-terraform-lab-2026', language: 'HCL' },
];

export const LANG_COLORS = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Python: '#3572A5',
  HCL: '#844FBA',
  PowerShell: '#012456',
  Shell: '#89e051',
  HTML: '#e34c26',
  CSS: '#563d7c',
  'Jupyter Notebook': '#DA5B0B',
};

export function fmtDate(s) {
  if (!s) return '';
  return new Date(s).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

export function rankRepos(repos) {
  return repos
    .filter((r) => !r.fork)
    .sort((a, b) => {
      const pa = (CURATED[a.name] || {}).p ?? 99;
      const pb = (CURATED[b.name] || {}).p ?? 99;
      if (pa !== pb) return pa - pb;
      return new Date(b.pushed_at || 0) - new Date(a.pushed_at || 0);
    })
    .slice(0, 8);
}
