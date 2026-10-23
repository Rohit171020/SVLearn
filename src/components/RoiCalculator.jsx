import React, { useState } from 'react';
import { Calculator, TrendingUp, Award, Users, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

export default function RoiCalculator({ onConsultWithRoi }) {
  const [stakeholder, setStakeholder] = useState('college');
  const [cohortSize, setCohortSize] = useState(300);
  const [track, setTrack] = useState('fullstack');
  const [currentRate, setCurrentRate] = useState(65);

  // Calculations
  const isCollege = stakeholder === 'college';
  
  // Placement / Billability impact factor
  const projectedRate = Math.min(98, Math.round(currentRate + (isCollege ? 26 : 22)));
  const totalBeneficiaries = cohortSize;
  const projectedPlacedOrBillable = Math.round((totalBeneficiaries * projectedRate) / 100);
  const netGainedOffers = Math.round(projectedPlacedOrBillable - (totalBeneficiaries * currentRate) / 100);
  const avgCtcBoost = isCollege ? "4.5 to 12 LPA" : "35% Faster Delivery";

  const handleApplyRoi = () => {
    if (onConsultWithRoi) {
      onConsultWithRoi({
        stakeholder: isCollege ? "University / College" : "Corporate Enterprise",
        cohortSize,
        track,
        projectedRate: `${projectedRate}%`,
        estimatedImpact: `${netGainedOffers} Additional Outcome Ready candidates`
      });
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="calculator" className="roi-section section-padding">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Calculator size={14} /> Interactive Impact Estimator
          </div>
          <h2 className="section-title">
            Estimate Your <span className="highlight">Placement & Skilling ROI</span>
          </h2>
          <p className="section-desc">
            Simulate the institutional transformation SV Learnlogic delivers to your campus or corporate cohort based on historical outcome data from 250+ campuses.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="roi-card">
          <div className="roi-grid">
            
            {/* Left Controls Column */}
            <div className="roi-controls">
              <h3 className="controls-heading">Configure Your Institution Parameters</h3>

              {/* Stakeholder Switch */}
              <div className="control-group">
                <label className="control-label">Institution Type</label>
                <div className="stakeholder-toggle">
                  <button 
                    className={`toggle-option ${isCollege ? 'active' : ''}`}
                    onClick={() => setStakeholder('college')}
                  >
                    College / University
                  </button>
                  <button 
                    className={`toggle-option ${!isCollege ? 'active' : ''}`}
                    onClick={() => setStakeholder('corporate')}
                  >
                    Corporate / Enterprise
                  </button>
                </div>
              </div>

              {/* Cohort Size Slider */}
              <div className="control-group">
                <div className="label-with-val">
                  <label className="control-label">
                    {isCollege ? 'Eligible Student Cohort Size' : 'Fresh Engineering Cohort'}
                  </label>
                  <span className="slider-val-badge">{cohortSize} Learners</span>
                </div>
                <input 
                  type="range" 
                  min="50" 
                  max="1500" 
                  step="50"
                  value={cohortSize} 
                  onChange={(e) => setCohortSize(Number(e.target.value))}
                  className="roi-slider"
                />
                <div className="slider-bounds">
                  <span>50</span>
                  <span>500</span>
                  <span>1,000</span>
                  <span>1,500+</span>
                </div>
              </div>

              {/* Current Baseline Rate */}
              <div className="control-group">
                <div className="label-with-val">
                  <label className="control-label">
                    {isCollege ? 'Current Campus Placement Benchmark' : 'Current Fresh Hire Billability Benchmark'}
                  </label>
                  <span className="slider-val-badge">{currentRate}%</span>
                </div>
                <input 
                  type="range" 
                  min="40" 
                  max="85" 
                  step="5"
                  value={currentRate} 
                  onChange={(e) => setCurrentRate(Number(e.target.value))}
                  className="roi-slider"
                />
                <div className="slider-bounds">
                  <span>40%</span>
                  <span>60%</span>
                  <span>85%</span>
                </div>
              </div>

              {/* Primary Tech Track Selection */}
              <div className="control-group">
                <label className="control-label">Target Training Specialization</label>
                <select 
                  value={track} 
                  onChange={(e) => setTrack(e.target.value)}
                  className="roi-select"
                >
                  <option value="fullstack">Full Stack & Cloud Architecture (MERN / Java Spring)</option>
                  <option value="ai-data">Generative AI, Data Engineering & Analytics</option>
                  <option value="placement-aptitude">Complete 360° Placement Readiness & Mock Interviews</option>
                  <option value="cloud-devops">Cloud DevOps (AWS / Docker / Kubernetes)</option>
                </select>
              </div>

            </div>

            {/* Right Projection Output Column */}
            <div className="roi-results">
              <div className="results-header">
                <Sparkles size={20} color="#00d2ff" />
                <h4>Projected Outcome Model</h4>
              </div>

              {/* Big KPI Cards */}
              <div className="kpi-banner">
                <div className="kpi-label">Projected Placement / Billability Rate</div>
                <div className="kpi-highlight-row">
                  <span className="kpi-current">{currentRate}%</span>
                  <span className="kpi-arrow">➔</span>
                  <span className="kpi-projected">{projectedRate}%</span>
                </div>
                <div className="kpi-growth">+{projectedRate - currentRate}% Net Institutional Uplift</div>
              </div>

              {/* Breakdown Grid */}
              <div className="projection-breakdown">
                <div className="breakdown-item">
                  <span className="b-label">Additional Successful Placements</span>
                  <span className="b-val">+{netGainedOffers} Students</span>
                </div>
                <div className="breakdown-item">
                  <span className="b-label">Expected Package Range</span>
                  <span className="b-val">{avgCtcBoost}</span>
                </div>
                <div className="breakdown-item">
                  <span className="b-label">Dedicated Industry Mentors</span>
                  <span className="b-val">{Math.ceil(cohortSize / 60)} Tech Leads</span>
                </div>
                <div className="breakdown-item">
                  <span className="b-label">Recruiter Campus Drives</span>
                  <span className="b-val">15 - 35 IT Recruiters</span>
                </div>
              </div>

              {/* Action Button */}
              <button 
                onClick={handleApplyRoi}
                className="btn-primary w-full roi-cta-btn"
              >
                <span>Lock in This Simulation & Get Custom Proposal</span>
                <ArrowRight size={18} />
              </button>

              <p className="roi-disclaimer">
                *Projections derived from empirical benchmarks across 150,000+ candidates trained across 250+ engineering campuses.
              </p>
            </div>

          </div>
        </div>

      </div>

      <style>{`
        .roi-section {
          background-color: #f1f5f9;
        }

        .roi-card {
          background: #ffffff;
          border-radius: 24px;
          border: 1px solid #cbd5e1;
          box-shadow: 0 16px 40px -12px rgba(8, 23, 48, 0.08);
          overflow: hidden;
        }

        .roi-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
        }

        .roi-controls {
          padding: 44px;
          border-right: 1px solid #e2e8f0;
        }

        .controls-heading {
          font-size: 1.25rem;
          font-weight: 800;
          color: #081730;
          margin-bottom: 24px;
        }

        .control-group {
          margin-bottom: 24px;
        }

        .control-label {
          display: block;
          font-size: 0.875rem;
          font-weight: 700;
          color: #334155;
          margin-bottom: 8px;
        }

        .label-with-val {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 8px;
        }
        .slider-val-badge {
          background: #eff6ff;
          color: #0062f5;
          font-weight: 700;
          font-size: 0.85rem;
          padding: 3px 10px;
          border-radius: 9999px;
          border: 1px solid #bfdbfe;
        }

        .stakeholder-toggle {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          background: #f1f5f9;
          padding: 5px;
          border-radius: 10px;
        }
        .toggle-option {
          padding: 10px;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          color: #64748b;
          text-align: center;
          background: transparent;
          transition: all 0.2s;
        }
        .toggle-option.active {
          background: #ffffff;
          color: #0062f5;
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
          font-weight: 700;
        }

        .roi-slider {
          width: 100%;
          accent-color: #0062f5;
          cursor: pointer;
        }
        .slider-bounds {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          color: #94a3b8;
          margin-top: 4px;
        }

        .roi-select {
          width: 100%;
          padding: 12px 14px;
          border-radius: 10px;
          border: 1px solid #cbd5e1;
          font-size: 0.9rem;
          color: #1e293b;
          background: #f8fafc;
          outline: none;
        }
        .roi-select:focus {
          border-color: #0062f5;
        }

        /* Results Right Column */
        .roi-results {
          background: linear-gradient(145deg, #07152f 0%, #0c2b5e 100%);
          color: #ffffff;
          padding: 44px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .results-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
        }
        .results-header h4 {
          font-size: 1.15rem;
          color: #ffffff;
        }

        .kpi-banner {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 16px;
          padding: 24px;
          text-align: center;
          margin-bottom: 24px;
        }
        .kpi-label {
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          color: #94a3b8;
          letter-spacing: 0.05em;
          margin-bottom: 8px;
        }
        .kpi-highlight-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-bottom: 6px;
        }
        .kpi-current {
          font-size: 1.6rem;
          font-weight: 700;
          color: #94a3b8;
          text-decoration: line-through;
        }
        .kpi-arrow {
          color: #00d2ff;
          font-size: 1.4rem;
        }
        .kpi-projected {
          font-size: 2.5rem;
          font-weight: 900;
          color: #38bdf8;
          line-height: 1;
        }
        .kpi-growth {
          display: inline-block;
          font-size: 0.85rem;
          font-weight: 700;
          color: #10b981;
          background: rgba(16, 185, 129, 0.2);
          padding: 4px 12px;
          border-radius: 9999px;
        }

        .projection-breakdown {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-bottom: 28px;
        }
        .breakdown-item {
          background: rgba(255, 255, 255, 0.05);
          padding: 12px 14px;
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .b-label {
          display: block;
          font-size: 0.725rem;
          color: #94a3b8;
          margin-bottom: 4px;
        }
        .b-val {
          display: block;
          font-size: 0.95rem;
          font-weight: 700;
          color: #ffffff;
        }

        .roi-cta-btn {
          padding: 14px;
          font-size: 0.95rem;
        }

        .roi-disclaimer {
          font-size: 0.725rem;
          color: #64748b;
          text-align: center;
          margin-top: 14px;
          margin-bottom: 0;
        }

        @media (max-width: 992px) {
          .roi-grid {
            grid-template-columns: 1fr;
          }
          .roi-controls {
            border-right: none;
            border-bottom: 1px solid #e2e8f0;
            padding: 32px 24px;
          }
          .roi-results {
            padding: 32px 24px;
          }
        }
      `}</style>
    </section>
  );
}
