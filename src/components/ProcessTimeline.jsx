import React from 'react';
import { 
  FileSearch, Cpu, Code2, Trophy, 
  ArrowRight, Sparkles, CheckCircle2 
} from 'lucide-react';

export default function ProcessTimeline() {
  const steps = [
    {
      num: "01",
      icon: FileSearch,
      title: "Diagnostic Gap Audit",
      desc: "Pre-training benchmark evaluations to tailor curriculum roadmaps according to your academic calendar and recruiter demand."
    },
    {
      num: "02",
      icon: Cpu,
      title: "Cloud Sandboxes & Tooling",
      desc: "Zero-friction browser IDEs, cloud containers, and production repositories mirroring enterprise IT environments."
    },
    {
      num: "03",
      icon: Code2,
      title: "Hands-on Sprints & Mentorship",
      desc: "Daily coding masterclasses, LeetCode algorithmic drills, and 1-on-1 PR reviews led by practicing tech leads."
    },
    {
      num: "04",
      icon: Trophy,
      title: "Placement Drives & Credentials",
      desc: "Exclusive hiring drives with 180+ corporate partners, proctored scorecards, and verifiable completion certificates."
    }
  ];

  return (
    <section className="timeline-section section-padding">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} /> The Proven Execution Model
          </div>
          <h2 className="section-title">
            Our 4-Stage <span className="highlight">Outcome Architecture</span>
          </h2>
          <p className="section-desc">
            A battle-tested training-to-placement pipeline that consistently delivers superior conversion rates for universities and enterprises.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="timeline-grid">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div key={step.num} className="timeline-card">
                <div className="step-number">{step.num}</div>
                <div className="step-icon-wrap">
                  <Icon size={22} color="#0062f5" />
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        .timeline-section {
          background-color: #ffffff;
          position: relative;
        }

        .timeline-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .timeline-card {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          padding: 32px 24px;
          display: flex;
          flex-direction: column;
          position: relative;
          transition: all 0.3s ease;
        }
        .timeline-card:hover {
          transform: translateY(-6px);
          border-color: #93c5fd;
          box-shadow: 0 16px 30px -10px rgba(0, 98, 245, 0.12);
          background: #ffffff;
        }

        .step-number {
          font-family: var(--font-heading);
          font-size: 2.8rem;
          font-weight: 900;
          color: rgba(0, 98, 245, 0.12);
          line-height: 1;
          margin-bottom: -10px;
        }

        .step-icon-wrap {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .step-title {
          font-size: 1.15rem;
          font-weight: 800;
          color: #081730;
          margin-bottom: 12px;
          line-height: 1.3;
        }

        .step-desc {
          font-size: 0.875rem;
          color: #475569;
          line-height: 1.6;
          margin-bottom: 20px;
          flex-grow: 1;
        }

        .step-points {
          display: flex;
          flex-direction: column;
          gap: 8px;
          border-top: 1px solid #e2e8f0;
          padding-top: 16px;
        }
        .step-pt {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
          color: #1e293b;
          font-weight: 600;
        }
        .pt-icon {
          color: #10b981;
          flex-shrink: 0;
        }

        @media (max-width: 1024px) {
          .timeline-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .timeline-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
