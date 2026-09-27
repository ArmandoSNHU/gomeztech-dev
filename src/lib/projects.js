export const GH_USER = 'ArmandoSNHU';

export const CURATED = {
  'aiops-incident-copilot':    { p: 1, desc: 'Operational AI: correlates logs, metrics, and alerts into ranked, evidence-cited root causes with next steps. FastAPI + Prometheus + JSON logs, Docker Compose, and Kubernetes manifests.', tag: 'OPERATIONAL AI / SRE' },
  'security-rag-assistant':    { p: 2, desc: 'Local-first RAG over security & compliance docs (MITRE ATT&CK, NIST, GDPR, PCI) — cited answers that run offline or on a local Ollama backend. CLI + FastAPI, tested, CI.', tag: 'RAG / SECURITY' },
  'AI_COUNCIL_GIT':            { p: 3, desc: 'Agentic security & compliance auditor — a multi-agent chain on local LLMs parses scans for CVEs, reasons about GDPR/PCI risk, and writes remediation. M.S. AI capstone.', tag: 'AGENTIC / SECURITY' },
  'SERK_WEB':                  { p: 4, desc: 'A 20-lane, zero-dependency agent pipeline that audits websites for exposed secrets, WCAG AA contrast, broken links, performance, and SEO — 106 tests, CI-gated, secrets redacted.', tag: 'AI AGENTS / SECURITY' },
  'FDE_Dashboard':             { p: 5, desc: 'Forward-deployed engineering in public: a role-scoped MCP server with prompt-injection defenses, 173 tests, and an eval harness that lifts safe decisions from 45.9% to 94.6%.', tag: 'FDE / MCP' },
  'Secure-City-Analytics':     { p: 6, desc: 'Role-based public-safety analytics platform — React 18 + TypeScript (strict), 3-role access control, 19 tests, an accessible Recharts UI, and CI/CD to a live demo on GitHub Pages.', tag: 'REACT / TYPESCRIPT' },
  'aws-terraform-lab-2026':    { p: 7, desc: 'Production-style AWS environment provisioned entirely with Terraform — validated inputs that refuse 0.0.0.0/0 SSH, IMDSv2 required, encrypted storage, least-privilege IAM, tfsec in CI.', tag: 'CLOUD / IaC' },
  'ai-code-review':            { p: 8, desc: 'Multi-agent AI code review: four specialist reviewers run in parallel on local LLMs, then an aggregator synthesizes a severity-graded report. No API keys.', tag: 'APPLIED AI' },
};

export const FALLBACK = [
  { name: 'aiops-incident-copilot', language: 'Python' },
  { name: 'security-rag-assistant', language: 'Python' },
  { name: 'AI_COUNCIL_GIT', language: 'Python' },
  { name: 'SERK_WEB', language: 'TypeScript' },
  { name: 'FDE_Dashboard', language: 'Python' },
  { name: 'Secure-City-Analytics', language: 'TypeScript' },
  { name: 'aws-terraform-lab-2026', language: 'HCL' },
  { name: 'ai-code-review', language: 'Python' },
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
