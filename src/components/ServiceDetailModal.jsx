import React from 'react';
import { 
  X, CheckCircle, Clock, Users, ArrowRight, 
  Sparkles, Download, PhoneCall, ShieldCheck, Target
} from 'lucide-react';

export default function ServiceDetailModal({ service, onClose, onSelectServiceForQuote, onOpenBrochure }) {
  if (!service) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-header-tag">
            <Sparkles size={14} />
            <span>{service.category}</span>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={22} />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="modal-body">
          <div className="modal-title-row">
            <h2 className="modal-title">{service.title}</h2>
            <span className="modal-badge">{service.badge}</span>
          </div>

          <p className="modal-tagline">{service.tagline}</p>
          <p className="modal-desc">{service.shortDesc}</p>

          {/* Quick Metrics Bar */}
          <div className="modal-metrics-bar">
            <div className="modal-metric">
              <Clock size={18} className="metric-icon" />
              <div>
                <span className="metric-label">Program Duration</span>
                <span className="metric-value">{service.duration}</span>
              </div>
            </div>
            <div className="modal-metric">
              <Target size={18} className="metric-icon" />
              <div>
                <span className="metric-label">Benchmark Impact</span>
                <span className="metric-value">{service.stats}</span>
              </div>
            </div>
          </div>

          {/* Core Deliverables / Syllabus Modules */}
          <div className="modal-section">
            <h3 className="modal-section-title">Key Modules & Core Deliverables</h3>
            <div className="modal-deliverables-list">
              {service.deliverables.map((item, idx) => (
                <div key={idx} className="deliverable-item">
                  <CheckCircle size={18} className="deliv-icon" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Target Audience & Measurable Impact */}
          <div className="modal-two-col">
            <div className="modal-box audience-box">
              <div className="box-header">
                <Users size={18} color="#0062f5" />
                <h4>Target Stakeholders</h4>
              </div>
              <p>{service.audience}</p>
            </div>

            <div className="modal-box impact-box">
              <div className="box-header">
                <ShieldCheck size={18} color="#10b981" />
                <h4>Expected Institutional Impact</h4>
              </div>
              <p>{service.impact}</p>
            </div>
          </div>

          {/* Program Highlights Pill Tags */}
          <div className="modal-section">
            <h4 className="highlights-title">Program Accreditations & Assurances</h4>
            <div className="highlights-wrap">
              {service.highlights.map((h, i) => (
                <span key={i} className="highlight-pill">✓ {h}</span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer CTA */}
        <div className="modal-footer">
          <button 
            onClick={() => {
              onClose();
              onOpenBrochure();
            }}
            className="btn-secondary modal-footer-btn"
          >
            <Download size={16} />
            <span>Download Curriculum PDF</span>
          </button>

          <button 
            onClick={() => {
              onClose();
              onSelectServiceForQuote(service);
            }}
            className="btn-primary modal-footer-btn"
          >
            <PhoneCall size={16} />
            <span>Request Proposal & Pricing</span>
            <ArrowRight size={16} />
          </button>
        </div>

      </div>

      <style>{`
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(4, 12, 26, 0.7);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: fadeIn 0.2s ease;
        }

        .modal-container {
          background: #ffffff;
          width: 100%;
          max-width: 760px;
          max-height: 90vh;
          border-radius: 20px;
          box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.3);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          border: 1px solid #cbd5e1;
        }

        .modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 28px 16px 28px;
          border-bottom: 1px solid #e2e8f0;
          background: #f8fafc;
        }
        .modal-header-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #0062f5;
          font-weight: 700;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .modal-close-btn {
          color: #64748b;
          padding: 6px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .modal-close-btn:hover {
          background: #e2e8f0;
          color: #0f172a;
        }

        .modal-body {
          padding: 28px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 22px;
        }

        .modal-title-row {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }
        .modal-title {
          font-size: 1.65rem;
          font-weight: 800;
          color: #081730;
          line-height: 1.25;
        }
        .modal-badge {
          background: #eff6ff;
          color: #0062f5;
          font-size: 0.775rem;
          font-weight: 700;
          padding: 5px 12px;
          border-radius: 9999px;
          border: 1px solid #bfdbfe;
          white-space: nowrap;
        }

        .modal-tagline {
          font-size: 1.05rem;
          font-weight: 600;
          color: #0062f5;
        }
        .modal-desc {
          color: #475569;
          font-size: 0.975rem;
          line-height: 1.65;
        }

        .modal-metrics-bar {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 14px 20px;
        }
        .modal-metric {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .metric-icon {
          color: #0062f5;
          flex-shrink: 0;
        }
        .metric-label {
          display: block;
          font-size: 0.75rem;
          color: #64748b;
          font-weight: 600;
          text-transform: uppercase;
        }
        .metric-value {
          display: block;
          font-size: 0.95rem;
          font-weight: 700;
          color: #0f172a;
        }

        .modal-section-title {
          font-size: 1.125rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 12px;
        }
        .modal-deliverables-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .deliverable-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.925rem;
          color: #334155;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          padding: 10px 14px;
          border-radius: 8px;
        }
        .deliv-icon {
          color: #0062f5;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .modal-two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .modal-box {
          padding: 16px;
          border-radius: 12px;
          font-size: 0.875rem;
        }
        .audience-box {
          background: #f0f7ff;
          border: 1px solid #bfdbfe;
        }
        .impact-box {
          background: #ecfdf5;
          border: 1px solid #a7f3d0;
        }
        .box-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
        }
        .box-header h4 {
          font-size: 0.9rem;
          font-weight: 700;
          color: #0f172a;
        }

        .highlights-title {
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          color: #64748b;
          letter-spacing: 0.05em;
          margin-bottom: 10px;
        }
        .highlights-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .highlight-pill {
          background: #f1f5f9;
          color: #1e293b;
          font-size: 0.8rem;
          font-weight: 600;
          padding: 5px 12px;
          border-radius: 9999px;
          border: 1px solid #cbd5e1;
        }

        .modal-footer {
          padding: 16px 28px;
          border-top: 1px solid #e2e8f0;
          background: #f8fafc;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 12px;
          flex-wrap: wrap;
        }
        .modal-footer-btn {
          font-size: 0.9rem;
          padding: 11px 20px;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }

        @media (max-width: 640px) {
          .modal-two-col {
            grid-template-columns: 1fr;
          }
          .modal-metrics-bar {
            grid-template-columns: 1fr;
          }
          .modal-footer {
            flex-direction: column;
          }
          .modal-footer-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}
