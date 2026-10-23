import React, { useState } from 'react';
import { X, Download, CheckCircle, FileText, Sparkles, Building, Mail, User } from 'lucide-react';

export default function BrochureModal({ isOpen, onClose }) {
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    org: '',
    type: 'college'
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setDownloadSuccess(true);
    // Simulate instant download trigger
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = '/logo.png';
      link.download = 'SV_Learnlogic_Institutional_Curriculum_2025.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 800);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="brochure-modal-card" onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div className="brochure-modal-header">
          <div className="brochure-tag">
            <Sparkles size={14} /> Official Academic & Corporate Catalog
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="brochure-modal-body">
          {!downloadSuccess ? (
            <>
              <div className="brochure-title-group">
                <div className="brochure-icon-box">
                  <FileText size={28} color="#0062f5" />
                </div>
                <div>
                  <h3 className="brochure-title">Download 2025–2026 Institutional Deck</h3>
                  <p className="brochure-subtitle">Includes syllabus breakdown, credit matrix, lab requirements, and fee structure.</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="brochure-form">
                <div className="form-field">
                  <label>Full Name</label>
                  <div className="input-with-icon">
                    <User size={16} className="field-icon" />
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Dr. Rajesh Kumar" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label>Work / Official Email</label>
                  <div className="input-with-icon">
                    <Mail size={16} className="field-icon" />
                    <input 
                      type="email" 
                      required 
                      placeholder="e.g. placement@university.edu" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label>College / Organization Name</label>
                  <div className="input-with-icon">
                    <Building size={16} className="field-icon" />
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. National Institute of Engineering" 
                      value={formData.org}
                      onChange={(e) => setFormData({...formData, org: e.target.value})}
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label>Institution Type</label>
                  <select 
                    value={formData.type} 
                    onChange={(e) => setFormData({...formData, type: e.target.value})}
                  >
                    <option value="college">Engineering College / University</option>
                    <option value="corporate">Corporate / IT Enterprise</option>
                    <option value="student">Student / Working Professional</option>
                  </select>
                </div>

                <button type="submit" className="btn-primary w-full download-submit-btn">
                  <Download size={18} />
                  <span>Download Curriculum Deck (PDF)</span>
                </button>
              </form>
            </>
          ) : (
            <div className="download-success-box">
              <div className="success-icon-wrap">
                <CheckCircle size={48} color="#10b981" />
              </div>
              <h3>Thank You, {formData.name || 'Partner'}!</h3>
              <p>Your institutional curriculum guide has started downloading. A copy has also been dispatched to <strong>{formData.email}</strong>.</p>
              
              <div className="success-next-step">
                <span>Would you like to schedule an exploratory discussion with our Academic Director?</span>
                <a href="#contact" onClick={onClose} className="btn-primary">
                  <span>Schedule Consultation</span>
                </a>
              </div>
            </div>
          )}
        </div>

      </div>

      <style>{`
        .brochure-modal-card {
          background: #ffffff;
          width: 100%;
          max-width: 520px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          border: 1px solid #cbd5e1;
        }

        .brochure-modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 24px;
          border-bottom: 1px solid #e2e8f0;
          background: #f8fafc;
        }
        .brochure-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #0062f5;
          font-weight: 700;
          font-size: 0.8rem;
          text-transform: uppercase;
        }

        .brochure-modal-body {
          padding: 28px;
        }

        .brochure-title-group {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 24px;
        }
        .brochure-icon-box {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .brochure-title {
          font-size: 1.25rem;
          font-weight: 800;
          color: #081730;
          margin-bottom: 4px;
        }
        .brochure-subtitle {
          font-size: 0.85rem;
          color: #64748b;
          line-height: 1.4;
          margin: 0;
        }

        .brochure-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .form-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .form-field label {
          font-size: 0.825rem;
          font-weight: 700;
          color: #334155;
        }
        .input-with-icon {
          position: relative;
          display: flex;
          align-items: center;
        }
        .field-icon {
          position: absolute;
          left: 12px;
          color: #94a3b8;
          pointer-events: none;
        }
        .input-with-icon input, .form-field select {
          width: 100%;
          padding: 10px 12px 10px 38px;
          border: 1px solid #cbd5e1;
          border-radius: 10px;
          font-size: 0.9rem;
          color: #0f172a;
          outline: none;
          background: #f8fafc;
        }
        .form-field select {
          padding-left: 12px;
        }
        .input-with-icon input:focus, .form-field select:focus {
          border-color: #0062f5;
          box-shadow: 0 0 0 3px rgba(0, 98, 245, 0.12);
        }

        .download-submit-btn {
          margin-top: 10px;
          padding: 13px;
        }

        .download-success-box {
          text-align: center;
          padding: 20px 0;
        }
        .success-icon-wrap {
          margin-bottom: 16px;
        }
        .download-success-box h3 {
          font-size: 1.4rem;
          color: #081730;
          margin-bottom: 8px;
        }
        .download-success-box p {
          font-size: 0.95rem;
          color: #475569;
          margin-bottom: 24px;
        }
        .success-next-step {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          align-items: center;
        }
        .success-next-step span {
          font-size: 0.875rem;
          color: #334155;
          font-weight: 600;
        }
      `}</style>
    </div>
  );
}
