export const GH_USER = 'ArmandoSNHU';

export const CURATED = {
  'aws-terraform-lab-2026':        { p: 1, desc: 'Hands-on AWS labs provisioned with Terraform — immutable, highly-available infrastructure-as-code.', tag: 'CLOUD / IaC' },
  'IT-helpdesk-lab-2026':          { p: 2, desc: 'Virtualized enterprise network on Hyper-V: Active Directory, GPOs, WSUS, and a private ServiceNow instance.', tag: 'SYSADMIN' },
  'rtcc-mock-dashboard':           { p: 3, desc: 'React analytics dashboard modeling Real-Time Crime Center operations — KPIs, role-based views, reporting.', tag: 'REACT' },
  'Secure_City_PD_RTCC_Dashboard': { p: 4, desc: 'Front-end reporting interface for public-safety telemetry with CSV/PDF export and data validation.', tag: 'DASHBOARD' },
  'VideoCoder_App':                { p: 5, desc: 'Automated coding-tutorial screencast generator using pyautogui and OBS integration.', tag: 'AUTOMATION' },
};

export const FALLBACK = [
  { name: 'aws-terraform-lab-2026', language: 'HCL' },
  { name: 'IT-helpdesk-lab-2026', language: 'PowerShell' },
  { name: 'rtcc-mock-dashboard', language: 'TypeScript' },
  { name: 'Secure_City_PD_RTCC_Dashboard', language: 'JavaScript' },
  { name: 'VideoCoder_App', language: 'Python' },
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
