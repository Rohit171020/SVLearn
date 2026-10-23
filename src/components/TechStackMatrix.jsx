import React, { useState } from 'react';
import { 
  Code, Terminal, Cloud, Database, Cpu, 
  Shield, Sparkles, CheckCircle, ArrowRight 
} from 'lucide-react';
import { TECH_DOMAINS } from '../data/servicesData';

export default function TechStackMatrix({ onSelectServiceForQuote }) {
  const [activeDomainIndex, setActiveDomainIndex] = useState(0);

  const domainIcons = [Code, Cloud, Database, Shield, Cpu];

  const currentDomain = TECH_DOMAINS[activeDomainIndex];
  const CurrentIcon = domainIcons[activeDomainIndex] || Code;

  return (
    <section id="tech-tracks" className="tech-section section-padding">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header text-white">
          <div className="section-tag tech-tag">
            <Sparkles size={14} /> Technology Curriculum Matrix
          </div>
          <h2 className="section-title text-white">
            Industry-Aligned <span className="highlight-cyan">Technical Stacks</span>
          </h2>
          <p className="section-desc text-slate-300">
            Our curriculum is updated every quarter with direct inputs from engineering directors at FAANG and tier-1 IT firms to guarantee 100% production readiness.
          </p>
        </div>

        {/* Tech Domain Selector Tabs */}
        <div className="tech-domain-nav">
          {TECH_DOMAINS.map((domain, idx) => {
            const Icon = domainIcons[idx] || Code;
            const isActive = idx === activeDomainIndex;

            return (
              <button
                key={domain.name}
                className={`tech-nav-btn ${isActive ? 'active' : ''}`}
                onClick={() => setActiveDomainIndex(idx)}
              >
                <Icon size={18} />
                <span>{domain.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Domain Spotlight Display */}
        <div className="tech-spotlight-card">
          <div className="spotlight-header">
            <div className="spotlight-title-group">
              <div className="spotlight-icon-box">
                <CurrentIcon size={28} color="#00d2ff" />
              </div>
              <div>
                <h3 className="spotlight-title">{currentDomain.name}</h3>
                <p className="spotlight-desc">{currentDomain.description}</p>
              </div>
            </div>
          </div>

          {/* Tools & Frameworks Badges */}
          <div className="spotlight-tools-section">
            <h4 className="tools-heading">Core Technologies & Production Tooling</h4>
            <div className="tools-grid">
              {currentDomain.tools.map((tool, i) => (
                <div key={i} className="tool-chip">
                  <Terminal size={14} className="tool-chip-icon" />
                  <span>{tool}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Live Project Capstones Covered */}
          <div className="spotlight-projects-row">
            <div className="project-item">
              <span className="proj-tag">Hands-on Capstone</span>
              <h5 className="proj-title">Distributed Production Microservices</h5>
              <p className="proj-desc">High-throughput APIs, message queues, and automated CI/CD pipeline deployments.</p>
            </div>
            <div className="project-item">
              <span className="proj-tag">Cloud Standard</span>
              <h5 className="proj-title">Containerized Cloud Architecture</h5>
              <p className="proj-desc">Dockerized services, Kubernetes orchestration, telemetry, and automated security scans.</p>
            </div>
          </div>

          {/* Action Row */}
          <div className="spotlight-action">
            <a href="#contact" className="btn-primary">
              <span>Request Detailed Syllabus for {currentDomain.name}</span>
              <ArrowRight size={16} />
            </a>
          </div>

        </div>

      </div>

      <style>{`
        .tech-section {
          background: linear-gradient(180deg, #07152d 0%, #040c1a 100%);
          color: #ffffff;
          position: relative;
        }

        .text-white {
          color: #ffffff !important;
        }
        .text-slate-300 {
          color: #94a3b8 !important;
        }
        .highlight-cyan {
          background: linear-gradient(135deg, #00d2ff 0%, #38bdf8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .tech-tag {
          background: rgba(0, 210, 255, 0.12);
          border-color: rgba(0, 210, 255, 0.3);
          color: #38bdf8;
        }

        .tech-domain-nav {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 36px;
          flex-wrap: wrap;
        }
        .tech-nav-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          border-radius: 12px;
          font-size: 0.9rem;
          font-weight: 600;
          color: #94a3b8;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.2s ease;
        }
        .tech-nav-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
        }
        .tech-nav-btn.active {
          background: #0062f5;
          color: #ffffff;
          border-color: #38bdf8;
          box-shadow: 0 0 20px rgba(0, 98, 245, 0.4);
        }

        .tech-spotlight-card {
          background: rgba(14, 34, 70, 0.6);
          border: 1px solid rgba(56, 189, 248, 0.25);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-radius: 24px;
          padding: 40px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
        }

        .spotlight-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding-bottom: 28px;
          margin-bottom: 28px;
        }
        .spotlight-title-group {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .spotlight-icon-box {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          background: rgba(0, 210, 255, 0.1);
          border: 1px solid rgba(0, 210, 255, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .spotlight-title {
          font-size: 1.85rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.2;
          margin-bottom: 6px;
        }
        .spotlight-desc {
          color: #cbd5e1;
          font-size: 1rem;
          margin: 0;
        }

        .tools-heading {
          font-size: 0.825rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #38bdf8;
          margin-bottom: 14px;
        }
        .tools-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 32px;
        }
        .tool-chip {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 8px 16px;
          border-radius: 10px;
          font-size: 0.875rem;
          font-weight: 600;
          color: #f1f5f9;
        }
        .tool-chip-icon {
          color: #00d2ff;
        }

        .spotlight-projects-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 32px;
        }
        .project-item {
          background: rgba(7, 21, 45, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 20px;
          border-radius: 14px;
        }
        .proj-tag {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 700;
          color: #10b981;
          background: rgba(16, 185, 129, 0.15);
          padding: 3px 8px;
          border-radius: 6px;
          margin-bottom: 8px;
          text-transform: uppercase;
        }
        .proj-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 6px;
        }
        .proj-desc {
          font-size: 0.85rem;
          color: #94a3b8;
          line-height: 1.5;
          margin: 0;
        }

        .spotlight-action {
          display: flex;
          justify-content: flex-end;
        }

        @media (max-width: 768px) {
          .spotlight-title-group {
            flex-direction: column;
            align-items: flex-start;
          }
          .spotlight-projects-row {
            grid-template-columns: 1fr;
          }
          .spotlight-action {
            justify-content: stretch;
          }
          .spotlight-action .btn-primary {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
