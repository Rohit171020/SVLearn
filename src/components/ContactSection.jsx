import React, { useState, useEffect } from 'react';
import { 
  Send, Phone, Mail, MapPin, CheckCircle2, 
  Sparkles, Calendar, Clock, ShieldCheck, ArrowRight 
} from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';

export default function ContactSection({ selectedService, appliedRoi }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    role: 'TPO / Placement Officer',
    service: selectedService ? selectedService.title : SERVICES_DATA[0].title,
    cohortSize: '100 - 300 Students / Employees',
    preferredDate: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({
        ...prev,
        service: selectedService.title
      }));
    }
  }, [selectedService]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="contact-section section-padding">
      <div className="container">
        
        <div className="contact-grid">
          
          {/* Left Column: Direct Info & Accreditations */}
          <div className="contact-info-col">
            <div className="section-tag contact-tag">
              <Sparkles size={14} /> Direct Institutional Hotline
            </div>

            <h2 className="contact-title">
              Let's Accelerate Your <span className="highlight-white">Talent Outcomes</span>
            </h2>

            <p className="contact-lead">
              Schedule a dedicated exploratory session with our Academic & Corporate Partnership Directors. We provide customized syllabus mappings, sandbox demos, and formal MoUs.
            </p>

            {/* Quick Contact Cards */}
            <div className="contact-methods">
              <div className="contact-method-card">
                <div className="method-icon-box">
                  <Phone size={20} color="#38bdf8" />
                </div>
                <div>
                  <span className="method-label">Institutional & Corporate Desk</span>
                  <a href="tel:+919876543210" className="method-val">+91 98765 43210 / +91 80 4123 4567</a>
                </div>
              </div>

              <div className="contact-method-card">
                <div className="method-icon-box">
                  <Mail size={20} color="#38bdf8" />
                </div>
                <div>
                  <span className="method-label">Academic Partnerships & MoUs</span>
                  <a href="mailto:partnerships@svlearnlogic.com" className="method-val">partnerships@svlearnlogic.com</a>
                </div>
              </div>

              <div className="contact-method-card">
                <div className="method-icon-box">
                  <MapPin size={20} color="#38bdf8" />
                </div>
                <div>
                  <span className="method-label">Headquarters & Innovation Hub</span>
                  <p className="method-val-text">Tech Innovation Park, Outer Ring Road, Bengaluru, Karnataka 560103</p>
                </div>
              </div>
            </div>

            {/* Institutional Commitments */}
            <div className="institutional-guarantee">
              <div className="guarantee-item">
                <ShieldCheck size={18} color="#10b981" />
                <span>NDA & Data Privacy Compliant</span>
              </div>
              <div className="guarantee-item">
                <Clock size={18} color="#10b981" />
                <span>Same-Day Proposal & Syllabus Dispatch</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Proposal Form */}
          <div className="contact-form-col">
            <div className="form-wrapper-card">
              
              {appliedRoi && (
                <div className="attached-roi-banner">
                  <Sparkles size={16} color="#0062f5" />
                  <div>
                    <strong>Attached Simulation:</strong> {appliedRoi.cohortSize} Learners • {appliedRoi.projectedRate} Projected Placement ({appliedRoi.estimatedImpact})
                  </div>
                </div>
              )}

              {!submitted ? (
                <>
                  <div className="form-header">
                    <h3 className="form-title">Request Customized Proposal</h3>
                    <p className="form-subtitle">Fill out this quick form and our academic director will prepare a tailored proposal within 24 hours.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="actual-form">
                    
                    <div className="form-row-2">
                      <div className="input-group">
                        <label>Your Full Name *</label>
                        <input 
                          type="text" 
                          required 
                          placeholder="e.g. Dr. Rajesh Sharma"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                      <div className="input-group">
                        <label>Official Email Address *</label>
                        <input 
                          type="email" 
                          required 
                          placeholder="e.g. tpo@college.edu.in"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="form-row-2">
                      <div className="input-group">
                        <label>Phone / WhatsApp Number *</label>
                        <input 
                          type="tel" 
                          required 
                          placeholder="+91 98765 00000"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>
                      <div className="input-group">
                        <label>College / Company Name *</label>
                        <input 
                          type="text" 
                          required 
                          placeholder="e.g. Bangalore Institute of Tech"
                          value={formData.organization}
                          onChange={(e) => setFormData({...formData, organization: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="form-row-2">
                      <div className="input-group">
                        <label>Your Designation / Role</label>
                        <select 
                          value={formData.role}
                          onChange={(e) => setFormData({...formData, role: e.target.value})}
                        >
                          <option>TPO / Placement Director</option>
                          <option>Principal / Dean / Management</option>
                          <option>Head of Department (CSE/IT/ECE)</option>
                          <option>Corporate VP / L&D Head</option>
                          <option>Talent Acquisition Lead</option>
                          <option>Student / Job Seeker</option>
                        </select>
                      </div>

                      <div className="input-group">
                        <label>Target Cohort Size</label>
                        <select 
                          value={formData.cohortSize}
                          onChange={(e) => setFormData({...formData, cohortSize: e.target.value})}
                        >
                          <option>50 - 150 Students / Employees</option>
                          <option>150 - 300 Students / Employees</option>
                          <option>300 - 600 Students / Employees</option>
                          <option>600 - 1,200+ Students / Employees</option>
                        </select>
                      </div>
                    </div>

                    {/* Core Services Dropdown showcasing all 10 Services */}
                    <div className="input-group">
                      <label>Primary Service Required *</label>
                      <select 
                        value={formData.service}
                        onChange={(e) => setFormData({...formData, service: e.target.value})}
                      >
                        {SERVICES_DATA.map((svc) => (
                          <option key={svc.id} value={svc.title}>
                            {svc.title} ({svc.category})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="input-group">
                      <label>Specific Training Goals or Timeline (Optional)</label>
                      <textarea 
                        rows="3"
                        placeholder="Mention upcoming campus drives, target tech stacks (Java/Python/MERN/AI), or preferred start month..."
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                      ></textarea>
                    </div>

                    <button type="submit" className="btn-primary w-full submit-cta-btn">
                      <span>Submit Proposal Request</span>
                      <Send size={18} />
                    </button>

                  </form>
                </>
              ) : (
                <div className="proposal-success-box">
                  <div className="success-check-bubble">
                    <CheckCircle2 size={56} color="#10b981" />
                  </div>
                  <h3>Proposal Request Confirmed!</h3>
                  <p className="success-desc">
                    Thank you, <strong>{formData.name}</strong>. Our Institutional Partnerships Lead for <strong>{formData.organization || 'your organization'}</strong> will contact you at <strong>{formData.email}</strong> and <strong>{formData.phone}</strong> within 4 business hours with custom syllabus decks and MoU frameworks.
                  </p>

                  <div className="success-summary-card">
                    <div className="sum-item">
                      <span>Selected Service:</span>
                      <strong>{formData.service}</strong>
                    </div>
                    <div className="sum-item">
                      <span>Learner Strength:</span>
                      <strong>{formData.cohortSize}</strong>
                    </div>
                  </div>

                  <button 
                    onClick={() => setSubmitted(false)}
                    className="btn-secondary"
                  >
                    Submit Another Query
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>

      <style>{`
        .contact-section {
          background: linear-gradient(145deg, #07152f 0%, #050e1f 100%);
          color: #ffffff;
          position: relative;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 56px;
          align-items: center;
        }

        .contact-tag {
          background: rgba(0, 210, 255, 0.12);
          border-color: rgba(0, 210, 255, 0.3);
          color: #38bdf8;
        }

        .contact-title {
          font-size: clamp(2rem, 3.5vw, 2.8rem);
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 20px;
          line-height: 1.2;
        }
        .highlight-white {
          background: linear-gradient(135deg, #38bdf8 0%, #0062f5 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .contact-lead {
          font-size: 1.05rem;
          color: #94a3b8;
          line-height: 1.65;
          margin-bottom: 36px;
        }

        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: 18px;
          margin-bottom: 36px;
        }
        .contact-method-card {
          display: flex;
          align-items: center;
          gap: 16px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 16px 20px;
          border-radius: 14px;
        }
        .method-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: rgba(0, 210, 255, 0.1);
          border: 1px solid rgba(0, 210, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .method-label {
          display: block;
          font-size: 0.75rem;
          color: #94a3b8;
          text-transform: uppercase;
          font-weight: 600;
          margin-bottom: 2px;
        }
        .method-val {
          color: #ffffff;
          font-size: 0.95rem;
          font-weight: 700;
        }
        .method-val:hover {
          color: #38bdf8;
        }
        .method-val-text {
          color: #e2e8f0;
          font-size: 0.9rem;
          margin: 0;
        }

        .institutional-guarantee {
          display: flex;
          flex-direction: column;
          gap: 10px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 20px;
        }
        .guarantee-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.85rem;
          color: #cbd5e1;
          font-weight: 500;
        }

        /* Form Card */
        .form-wrapper-card {
          background: #ffffff;
          border-radius: 24px;
          padding: 40px;
          color: #081730;
          box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.35);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .attached-roi-banner {
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          border-radius: 10px;
          padding: 10px 14px;
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.825rem;
          color: #1e3a8a;
          margin-bottom: 20px;
        }

        .form-header {
          margin-bottom: 24px;
        }
        .form-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: #081730;
          margin-bottom: 6px;
        }
        .form-subtitle {
          font-size: 0.875rem;
          color: #64748b;
          margin: 0;
        }

        .actual-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .form-row-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .input-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .input-group label {
          font-size: 0.8rem;
          font-weight: 700;
          color: #334155;
        }
        .input-group input, .input-group select, .input-group textarea {
          width: 100%;
          padding: 11px 14px;
          border-radius: 10px;
          border: 1px solid #cbd5e1;
          font-size: 0.9rem;
          background: #f8fafc;
          color: #0f172a;
          outline: none;
          font-family: inherit;
        }
        .input-group input:focus, .input-group select:focus, .input-group textarea:focus {
          border-color: #0062f5;
          box-shadow: 0 0 0 3px rgba(0, 98, 245, 0.12);
          background: #ffffff;
        }

        .submit-cta-btn {
          margin-top: 8px;
          padding: 14px;
          font-size: 1rem;
        }

        /* Success Box */
        .proposal-success-box {
          text-align: center;
          padding: 24px 0;
        }
        .success-check-bubble {
          margin-bottom: 18px;
        }
        .proposal-success-box h3 {
          font-size: 1.6rem;
          font-weight: 800;
          color: #081730;
          margin-bottom: 10px;
        }
        .success-desc {
          color: #475569;
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 24px;
        }
        .success-summary-card {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 16px;
          margin-bottom: 24px;
          text-align: left;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .sum-item {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
        }
        .sum-item span {
          color: #64748b;
        }
        .sum-item strong {
          color: #0f172a;
        }

        @media (max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
          .form-wrapper-card {
            padding: 32px 24px;
          }
        }
        @media (max-width: 640px) {
          .form-row-2 {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
