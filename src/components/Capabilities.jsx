import { useEffect, useRef } from 'react';
import { gsap } from '../lib/gsap';

const CAPS = [
  {
    ico: 'NET//',
    title: 'Networking',
    items: [
      'TCP/IP · DNS · DHCP · VLANs',
      'LAN/WAN · subnetting · OSI',
      'Packet loss & latency analysis',
      'Wireshark · ping/traceroute',
      'Tailscale VPN · monitoring',
    ],
  },
  {
    ico: 'SYS//',
    title: 'Systems & Servers',
    items: [
      'Windows Server 2022',
      'Active Directory · GPO',
      'Hyper-V virtualization',
      'WSUS · Microsoft Entra ID',
      'Linux (Ubuntu / Mint)',
    ],
  },
  {
    ico: 'CLD//',
    title: 'Cloud & IaC',
    items: [
      'AWS provisioning',
      'Terraform / infrastructure-as-code',
      'Immutable infra patterns',
      'Cloudflare (Pages / Tunnel / D1)',
      'Infra documentation',
    ],
  },
  {
    ico: 'DATA//',
    title: 'Data & Intelligence',
    items: [
      'Telemetry & edge data pipelines',
      'Analytics dashboards · Chart.js',
      'Incident data automation',
      'ServiceNow ITSM · ticketing',
      'Root-cause analysis · SLA ops',
    ],
  },
  {
    ico: 'DEV//',
    title: 'Automation & Dev',
    items: [
      'Python · Bash · SQL',
      'JavaScript · React',
      'FastAPI · REST APIs',
      'Google Apps Script',
      'CI/CD · Git · Docker',
    ],
  },
  {
    ico: 'AI//',
    title: 'AI Systems & Agents',
    items: [
      'LLM APIs (OpenAI · Anthropic)',
      'AI agents · agentic pipelines',
      'Local LLMs · Ollama · RAG',
      'Computer vision · edge AI',
      'Drone ops · FAA Part 107',
    ],
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
          <h2 className="sec-title">What I can do</h2>
          <span className="sec-rule" />
          <span className="sec-tag">// AI · cloud · systems · automation</span>
        </div>

        <div className="cap-grid">
          {CAPS.map((c) => (
            <div className="cap" key={c.ico}>
              <div className="cap-ico">{c.ico}</div>
              <h3>{c.title}</h3>
              <ul>
                {c.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
