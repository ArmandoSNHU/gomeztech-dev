export const GH_USER = 'ArmandoSNHU';

export const CURATED = {
  'SERK_WEB':                  { p: 1, desc: 'A 20-lane, zero-dependency agent pipeline that audits websites for exposed secrets, WCAG AA contrast, broken links, performance, and SEO — 106 tests, CI-gated, secrets redacted in every report.', tag: 'AI AGENTS / SECURITY' },
  'ai-code-review':            { p: 2, desc: 'Multi-agent AI code review: four specialist reviewers (security, bugs, performance, quality) run in parallel on local LLMs, then an aggregator synthesizes a severity-graded report. No API keys.', tag: 'APPLIED AI' },
  'FDE_Dashboard':             { p: 3, desc: 'Forward-deployed engineering in public: a role-scoped MCP server with prompt-injection defenses, 173 tests, and an eval harness that lifts safe decisions from 45.9% to 94.6%.', tag: 'FDE / MCP' },
  'ai-ticket-to-code':         { p: 4, desc: 'A 5-stage agentic pipeline (parse → design → code → test → PR) that turns a plain-English ticket into runnable code, unit tests, and a PR description using local LLMs.', tag: 'AGENT PIPELINE' },
  'Secure-City-Analytics':     { p: 5, desc: 'Role-based public-safety analytics platform — React 18 + TypeScript (strict), 3-role access control, 19 tests, an accessible Recharts UI, and CI/CD to a live demo on GitHub Pages.', tag: 'REACT / TYPESCRIPT' },
  'aws-terraform-lab-2026':    { p: 6, desc: 'Production-style AWS environment provisioned entirely with Terraform — validated inputs that refuse 0.0.0.0/0 SSH, IMDSv2 required, encrypted storage, least-privilege IAM, tfsec in CI.', tag: 'CLOUD / IaC' },
  'ai-helpdesk-triage-engine': { p: 7, desc: 'Explainable IT ticket triage: category, P1–P4 priority, SLA, routing, and confidence with the signals behind each decision — a stable JSON contract ready for an LLM classifier.', tag: 'APPLIED AI / ITSM' },
  'TechOpsagent':              { p: 8, desc: 'Local-first incident-investigation workspace (FastAPI + SQLite) that turns controlled failures and imported logs into evidence-ranked hypotheses and downloadable RCA reports.', tag: 'OPS TOOLING' },
};

export const FALLBACK = [
  { name: 'SERK_WEB', language: 'TypeScript' },
  { name: 'ai-code-review', language: 'Python' },
  { name: 'FDE_Dashboard', language: 'Python' },
  { name: 'ai-ticket-to-code', language: 'Python' },
  { name: 'Secure-City-Analytics', language: 'TypeScript' },
  { name: 'aws-terraform-lab-2026', language: 'HCL' },
  { name: 'ai-helpdesk-triage-engine', language: 'Python' },
  { name: 'TechOpsagent', language: 'Python' },
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
