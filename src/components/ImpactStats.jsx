import React from 'react';
import { 
  Users, Building, Award, Trophy, 
  CheckCircle, Briefcase, GraduationCap, Sparkles 
} from 'lucide-react';
import { STATS_DATA } from '../data/servicesData';

export default function ImpactStats() {
  const hiringPartners = [
    "Amazon", "Microsoft", "Infosys", "TCS", "Wipro", 
    "Cognizant", "Accenture", "LTIMindtree", "Capgemini", "Tech Mahindra", 
    "HCLTech", "Oracle", "Cisco", "Deloitte", "Zoho"
  ];

  return (
    <section id="impact" className="impact-section section-padding">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} /> Proven Institutional Track Record
          </div>
          <h2 className="section-title">
            Numbers That Define Our <span className="highlight">Educational Impact</span>
          </h2>
          <p className="section-desc">
            Over the past decade, SV Learnlogic has set the industry standard for employability, training excellence, and strategic university partnerships.
          </p>
        </div>

        {/* 4 Big Stat Cards */}
        <div className="stats-grid">
          {STATS_DATA.map((st, i) => (
            <div key={i} className="stat-card">
              <div className="stat-number">{st.value}</div>
              <div className="stat-label">{st.label}</div>
              <div className="stat-accent-bar"></div>
            </div>
          ))}
        </div>

        {/* Corporate Hiring Partners Logo Ticker */}
        <div className="partners-banner">
          <div className="partners-header">
            <h4>Alumni Recruited By Leading Technology Giants & Fortune 500s</h4>
            <span className="partners-badge">180+ Active Placement Partners</span>
          </div>

          <div className="partners-ticker-wrap">
            <div className="partners-ticker">
              {hiringPartners.concat(hiringPartners).map((partner, index) => (
                <div key={index} className="partner-logo-box">
                  <span className="partner-logo-text">{partner}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .impact-section {
          background-color: #f8fafc;
          position: relative;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-bottom: 56px;
        }

        .stat-card {
          background: #ffffff;
          border: 1px solid #cbd5e1;
          border-radius: 20px;
          padding: 32px 24px;
          text-align: center;
          box-shadow: 0 4px 16px rgba(11, 27, 61, 0.04);
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease;
        }
        .stat-card:hover {
          transform: translateY(-4px);
          border-color: #0062f5;
        }

        .stat-number {
          font-family: var(--font-heading);
          font-size: 2.75rem;
          font-weight: 900;
          color: #0062f5;
          line-height: 1.1;
          margin-bottom: 8px;
        }

        .stat-label {
          font-size: 0.925rem;
          font-weight: 600;
          color: #475569;
          line-height: 1.4;
        }

        .stat-accent-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #0062f5 0%, #00d2ff 100%);
          opacity: 0.8;
        }

        .partners-banner {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          padding: 36px 30px;
          box-shadow: 0 8px 24px rgba(8, 23, 48, 0.04);
        }

        .partners-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;
          flex-wrap: wrap;
          gap: 12px;
        }
        .partners-header h4 {
          font-size: 1.05rem;
          font-weight: 700;
          color: #081730;
        }
        .partners-badge {
          background: #eff6ff;
          color: #0062f5;
          font-size: 0.775rem;
          font-weight: 700;
          padding: 4px 12px;
          border-radius: 9999px;
          border: 1px solid #bfdbfe;
        }

        .partners-ticker-wrap {
          overflow: hidden;
          position: relative;
          width: 100%;
        }
        .partners-ticker {
          display: flex;
          gap: 20px;
          animation: tickerScroll 30s linear infinite;
          width: max-content;
        }
        .partners-ticker:hover {
          animation-play-state: paused;
        }

        @keyframes tickerScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .partner-logo-box {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          padding: 12px 24px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          white-space: nowrap;
          transition: all 0.2s;
        }
        .partner-logo-box:hover {
          background: #eff6ff;
          border-color: #bfdbfe;
        }
        .partner-logo-text {
          font-family: var(--font-heading);
          font-size: 0.95rem;
          font-weight: 700;
          color: #334155;
          letter-spacing: -0.01em;
        }

        @media (max-width: 992px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }
          .partners-header {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </section>
  );
}
