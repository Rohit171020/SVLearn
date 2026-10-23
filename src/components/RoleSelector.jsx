import React, { useState } from 'react';
import { 
  GraduationCap, Building2, UserCheck, ArrowRight, 
  CheckCircle2, Sparkles, TrendingUp, Award, BarChart3, ShieldCheck 
} from 'lucide-react';

export default function RoleSelector({ onOpenBrochure }) {
  const [activeTab, setActiveTab] = useState('colleges');

  const stakeholderData = {
    colleges: {
      tag: "For Universities & Colleges",
      title: "Elevate Campus Placements & NAAC Scores",
      desc: "Turn your campus into a high-conversion hiring destination with semester-aligned technical tracks and direct recruitment drives.",
      image: "/success.jpg",
      points: [
        "Curriculum aligned with tier-1 IT recruiter expectations and NAAC benchmarks",
        "Semester-long DSA, full-stack, and soft-skills bootcamps with mock interviews",
        "Direct campus access to our network of 180+ global hiring partners"
      ],
      metrics: [
        { label: "Campuses", value: "250+" },
        { label: "Placement Rate", value: "94.5%" },
        { label: "Highest CTC", value: "28 LPA" }
      ],
      ctaText: "College Partnership Deck",
      ctaHref: "#contact"
    },
    corporates: {
      tag: "For Enterprises & L&D",
      title: "Fast-Track Engineer Productivity",
      desc: "Custom corporate bootcamps and lateral upskilling in GenAI, Cloud Architecture, and modern microservices.",
      image: "/corporate.jpg",
      points: [
        "Shrink fresh engineer time-to-billability from 90 days down to 25 days",
        "Cloud sandbox labs replicating your production software environments",
        "Employee competency heatmaps and weekly milestone progress tracking"
      ],
      metrics: [
        { label: "Enterprises", value: "180+" },
        { label: "Bench Reduction", value: "55%" },
        { label: "CSAT Score", value: "4.92 / 5" }
      ],
      ctaText: "Corporate Consultation",
      ctaHref: "#contact"
    },
    students: {
      tag: "For Students & Graduates",
      title: "Launch Your High-Growth Tech Career",
      desc: "Master in-demand development stacks, build production portfolio projects, and crack top-tier technical interviews.",
      image: "/hero.jpg",
      points: [
        "Live mentorship from practicing senior engineers at top tech companies",
        "Algorithmic problem-solving drills (DSA) and ATS-ready portfolio building",
        "Exclusive placement drive opportunities with partner tech companies"
      ],
      metrics: [
        { label: "Trained", value: "150K+" },
        { label: "Avg Salary Hike", value: "120%" },
        { label: "Mock Interviews", value: "15K+" }
      ],
      ctaText: "Explore Student Tracks",
      ctaHref: "#contact"
    }
  };

  const current = stakeholderData[activeTab];

  return (
    <section id="solutions" className="role-section section-padding">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} /> Stakeholder Solutions
          </div>
          <h2 className="section-title">
            Engineered For Every <span className="highlight">Stage of Growth</span>
          </h2>
          <p className="section-desc">
            Whether you represent a premier university, a Fortune 500 enterprise, or an ambitious engineering student, our solutions are purpose-built to deliver guaranteed outcomes.
          </p>
        </div>

        {/* Stakeholder Selector Nav */}
        <div className="role-tabs-container">
          <button 
            className={`role-tab-btn ${activeTab === 'colleges' ? 'active' : ''}`}
            onClick={() => setActiveTab('colleges')}
          >
            <GraduationCap size={20} />
            <span>Colleges & Universities</span>
          </button>

          <button 
            className={`role-tab-btn ${activeTab === 'corporates' ? 'active' : ''}`}
            onClick={() => setActiveTab('corporates')}
          >
            <Building2 size={20} />
            <span>Corporates & Enterprises</span>
          </button>

          <button 
            className={`role-tab-btn ${activeTab === 'students' ? 'active' : ''}`}
            onClick={() => setActiveTab('students')}
          >
            <UserCheck size={20} />
            <span>Students & Graduates</span>
          </button>
        </div>

        {/* Active Solution Card Details */}
        <div className="role-content-card">
          <div className="role-grid">
            
            {/* Left Content */}
            <div className="role-details">
              <span className="role-tag-badge">{current.tag}</span>
              <h3 className="role-heading">{current.title}</h3>
              <p className="role-description">{current.desc}</p>

              {/* Points list */}
              <div className="role-points-list">
                {current.points.map((pt, i) => (
                  <div key={i} className="role-point-item">
                    <CheckCircle2 size={18} className="role-check-icon" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              {/* Metrics Row */}
              <div className="role-metrics-row">
                {current.metrics.map((m, i) => (
                  <div key={i} className="role-metric-item">
                    <span className="metric-big-num">{m.value}</span>
                    <span className="metric-sub-label">{m.label}</span>
                  </div>
                ))}
              </div>

              {/* CTA Action */}
              <div className="role-action-row">
                <a href={current.ctaHref} className="btn-primary">
                  <span>{current.ctaText}</span>
                  <ArrowRight size={18} />
                </a>
                <button onClick={onOpenBrochure} className="btn-secondary">
                  <span>Download Detailed Deck</span>
                </button>
              </div>

            </div>

            {/* Right Image Showcase */}
            <div className="role-visual">
              <div className="role-img-wrap">
                <img 
                  src={current.image} 
                  alt={current.title} 
                  className="role-img"
                />
                <div className="role-img-glass-footer">
                  <ShieldCheck size={22} color="#0062f5" />
                  <div>
                    <strong>SV Learnlogic Guaranteed Standard</strong>
                    <span>100% Industry Aligned & Rigorously Mentored</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      <style>{`
        .role-section {
          background-color: #ffffff;
        }

        .role-tabs-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }
        .role-tab-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          border-radius: 9999px;
          font-size: 0.95rem;
          font-weight: 700;
          color: #475569;
          background: #f8fafc;
          border: 1px solid #cbd5e1;
          transition: all 0.25s ease;
        }
        .role-tab-btn:hover {
          background: #f1f5f9;
          color: #0b1e42;
          transform: translateY(-2px);
        }
        .role-tab-btn.active {
          background: #0b1e42;
          color: #ffffff;
          border-color: #0b1e42;
          box-shadow: 0 8px 20px -4px rgba(11, 30, 66, 0.25);
        }

        .role-content-card {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 24px;
          padding: 48px;
          box-shadow: 0 12px 36px -8px rgba(8, 23, 48, 0.06);
        }

        .role-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.95fr;
          gap: 48px;
          align-items: center;
        }

        .role-tag-badge {
          display: inline-block;
          font-size: 0.775rem;
          font-weight: 800;
          text-transform: uppercase;
          color: #0062f5;
          letter-spacing: 0.08em;
          margin-bottom: 12px;
          background: rgba(0, 98, 245, 0.08);
          padding: 4px 12px;
          border-radius: 6px;
        }

        .role-heading {
          font-size: clamp(1.6rem, 2.8vw, 2.2rem);
          font-weight: 800;
          color: #081730;
          line-height: 1.25;
          margin-bottom: 16px;
        }

        .role-description {
          font-size: 1.05rem;
          color: #475569;
          line-height: 1.65;
          margin-bottom: 28px;
        }

        .role-points-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 32px;
        }
        .role-point-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.95rem;
          color: #1e293b;
          font-weight: 500;
        }
        .role-check-icon {
          color: #0062f5;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .role-metrics-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 16px 20px;
          margin-bottom: 32px;
        }
        .role-metric-item {
          display: flex;
          flex-direction: column;
        }
        .metric-big-num {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 800;
          color: #0062f5;
        }
        .metric-sub-label {
          font-size: 0.75rem;
          color: #64748b;
          font-weight: 600;
          text-transform: uppercase;
        }

        .role-action-row {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .role-visual {
          position: relative;
        }
        .role-img-wrap {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.15);
          border: 1px solid #cbd5e1;
          background: #081730;
        }
        .role-img {
          width: 100%;
          height: 400px;
          object-fit: cover;
          display: block;
        }
        .role-img-glass-footer {
          position: absolute;
          bottom: 16px;
          left: 16px;
          right: 16px;
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          padding: 12px 18px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 12px;
          border: 1px solid rgba(255, 255, 255, 0.8);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
        }
        .role-img-glass-footer strong {
          display: block;
          font-size: 0.875rem;
          color: #0f172a;
          line-height: 1.2;
        }
        .role-img-glass-footer span {
          display: block;
          font-size: 0.75rem;
          color: #64748b;
        }

        @media (max-width: 992px) {
          .role-grid {
            grid-template-columns: 1fr;
          }
          .role-content-card {
            padding: 32px 24px;
          }
          .role-img {
            height: 300px;
          }
        }
      `}</style>
    </section>
  );
}
