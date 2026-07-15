import { useEffect, useRef } from 'react';
import { gsap } from '../lib/gsap';

const CAPS = [
  {
    ico: 'AI//',
    title: 'AI Systems & Agents',
    lead:
      'AI agents and LLM-powered tools that do real work — an explainable helpdesk triage engine with priority scoring, RAG pipelines over local models, and edge computer vision.',
    tags: ['LLM APIs', 'Agents', 'RAG', 'Ollama', 'Computer Vision'],
  },
  {
    ico: 'DATA//',
    title: 'Operational Intelligence',
    lead:
      'Production public-safety dashboards that turn live telemetry into decisions — multi-role data views, edge-device pipelines, and one-click CSV/PDF reporting.',
    tags: ['Telemetry', 'Dashboards', 'Chart.js', 'ServiceNow', 'SLA Ops'],
  },
  {
    ico: 'CLD//',
    title: 'Cloud & IaC',
    lead:
      'AWS environments provisioned entirely with Terraform — immutable, modular, documented infrastructure-as-code, plus Cloudflare edge deployment.',
    tags: ['AWS', 'Terraform', 'IaC', 'Cloudflare Pages', 'D1 / Tunnel'],
  },
  {
    ico: 'SYS//',
    title: 'Enterprise Systems',
    lead:
      'Virtualized enterprise networks on Hyper-V — Active Directory, GPOs, WSUS patching, and a private ITSM instance with automated ticketing workflows.',
    tags: ['Windows Server 2022', 'AD / GPO', 'Hyper-V', 'Entra ID', 'Linux'],
  },
  {
    ico: 'NET//',
    title: 'Network Operations',
    lead:
      'Networks that stay up and prove it — packet-level troubleshooting, latency and loss analysis, VPN overlays, and 24/7 monitoring across 100+ endpoints.',
    tags: ['TCP/IP', 'VLANs', 'Wireshark', 'Tailscale', 'Monitoring'],
  },
  {
    ico: 'DEV//',
    title: 'Automation & Tooling',
    lead:
      'Automation that removes toil — runbook validation and execution kits, incident data pipelines, REST APIs, and CI/CD from commit to deploy.',
    tags: ['Python', 'FastAPI', 'React', 'Bash / SQL', 'CI/CD · Docker'],
  },
];

export default function Capabilities() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.sec-head-caps', {
        scrollTrigger: { trigger: '.sec-head-caps', start: 'top 88%' },
        opacity: 0,
        x: -20,
        duration: 0.5,
        ease: 'power2.out',
      });

      gsap.from('.cap', {
        scrollTrigger: {
          trigger: '.cap-grid',
          start: 'top 82%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 28,
        stagger: { amount: 0.45, from: 'start' },
        duration: 0.5,
        ease: 'power2.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="capabilities" ref={sectionRef}>
      <div className="wrap">
        <div className="sec-head sec-head-caps">
          <span className="sec-num">01</span>
          <h2 className="sec-title">What I Build</h2>
          <span className="sec-rule" />
          <span className="sec-tag">// AI · cloud · systems · automation</span>
        </div>

        <div className="cap-grid">
          {CAPS.map((c) => (
            <div className="cap" key={c.ico}>
              <div className="cap-ico">{c.ico}</div>
              <h3>{c.title}</h3>
              <p className="cap-lead">{c.lead}</p>
              <div className="cap-tags">
                {c.tags.map((tag) => (
                  <span className="cap-tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
