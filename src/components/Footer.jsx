import React from 'react';
import { 
  Phone, Mail, MapPin, ExternalLink, ShieldCheck, 
  Award, Heart, ArrowUp 
} from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';

export default function Footer({ onOpenBrochure, onSelectService }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-root">
      
      {/* Top Pre-Footer Callout */}
      <div className="pre-footer-banner">
        <div className="container pre-footer-content">
          <div>
            <h3>Partner with India's #1 Technical Skilling Network</h3>
            <p>Elevate your institution's placement conversions and corporate workforce readiness today.</p>
          </div>
          <div className="pre-footer-actions">
            <button onClick={onOpenBrochure} className="btn-secondary">
              Download Syllabus Catalog
            </button>
            <a href="#contact" className="btn-primary">
              Book Institutional Audit
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="container footer-main">
        <div className="footer-grid">
          
          {/* Brand Info */}
          <div className="footer-brand-col">
            <div className="footer-logo-row">
              <img src="/logo.png" alt="SV Learnlogic Logo" className="footer-logo-img" />
              <div>
                <span className="footer-brand-title">SV LEARNLOGIC</span>
                <span className="footer-brand-motto">LEARN • LOGIC • LEAD</span>
              </div>
            </div>

            <p className="footer-about-text">
              SV Learnlogic is a premier educational engineering enterprise bridging academia and industry through outcome-focused technical bootcamps, university placement programs, and corporate workforce development.
            </p>

            <div className="footer-certifications">
              <div className="cert-pill">
                <ShieldCheck size={14} color="#00d2ff" />
                <span>ISO 9001:2015 Certified</span>
              </div>
              <div className="cert-pill">
                <Award size={14} color="#00d2ff" />
                <span>AICTE / UGC Benchmark</span>
              </div>
            </div>
          </div>

          {/* Services Column 1 */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Campus & College Programs</h4>
            <ul className="footer-links-list">
              {SERVICES_DATA.slice(0, 5).map((svc) => (
                <li key={svc.id}>
                  <a 
                    href="#services" 
                    onClick={() => onSelectService && onSelectService(svc)}
                  >
                    {svc.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column 2 */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Enterprise & Advisory</h4>
            <ul className="footer-links-list">
              {SERVICES_DATA.slice(5, 10).map((svc) => (
                <li key={svc.id}>
                  <a 
                    href="#services" 
                    onClick={() => onSelectService && onSelectService(svc)}
                  >
                    {svc.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Contact & Hub</h4>
            <div className="footer-contact-items">
              <div className="f-contact-item">
                <MapPin size={16} className="f-icon" />
                <span>Tech Innovation Park, Outer Ring Road, Bengaluru, Karnataka 560103</span>
              </div>
              <div className="f-contact-item">
                <Phone size={16} className="f-icon" />
                <span>+91 98765 43210</span>
              </div>
              <div className="f-contact-item">
                <Mail size={16} className="f-icon" />
                <span>partnerships@svlearnlogic.com</span>
              </div>
            </div>

            <div className="footer-scroll-top-wrap">
              <button onClick={scrollToTop} className="btn-scroll-top">
                <ArrowUp size={16} />
                <span>Back to Top</span>
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Sub-Footer Bar */}
      <div className="footer-sub-bar">
        <div className="container sub-bar-inner">
          <p>© {new Date().getFullYear()} SV Learnlogic. All Rights Reserved. LEARN • LOGIC • LEAD is a registered trademark.</p>
          <div className="sub-bar-links">
            <a href="#">Privacy Policy</a>
            <span>•</span>
            <a href="#">Terms of Service</a>
            <span>•</span>
            <a href="#">Academic Code of Conduct</a>
            <span>•</span>
            <a href="#">Placement Verification</a>
          </div>
        </div>
      </div>

      <style>{`
        .footer-root {
          background: #040c1a;
          color: #94a3b8;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .pre-footer-banner {
          background: linear-gradient(90deg, #07193b 0%, #0c2b5e 100%);
          border-bottom: 1px solid rgba(0, 128, 255, 0.2);
          padding: 32px 0;
        }
        .pre-footer-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
        }
        .pre-footer-content h3 {
          font-size: 1.35rem;
          color: #ffffff;
          margin-bottom: 4px;
        }
        .pre-footer-content p {
          color: #cbd5e1;
          margin: 0;
          font-size: 0.95rem;
        }
        .pre-footer-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .footer-main {
          padding: 64px 24px 48px 24px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.4fr 1.1fr 1.1fr 1.2fr;
          gap: 40px;
        }

        .footer-logo-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 16px;
        }
        .footer-logo-img {
          height: 48px;
          width: auto;
          background: #ffffff;
          padding: 4px 6px;
          border-radius: 8px;
        }
        .footer-brand-title {
          display: block;
          font-family: var(--font-heading);
          font-size: 1.2rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.1;
        }
        .footer-brand-motto {
          display: block;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          color: #38bdf8;
          text-transform: uppercase;
        }

        .footer-about-text {
          font-size: 0.875rem;
          line-height: 1.6;
          color: #94a3b8;
          margin-bottom: 20px;
        }

        .footer-certifications {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        .cert-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 0.75rem;
          color: #e2e8f0;
          font-weight: 600;
        }

        .footer-col-title {
          font-family: var(--font-heading);
          font-size: 1rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 20px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .footer-links-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .footer-links-list li a {
          color: #94a3b8;
          font-size: 0.875rem;
          transition: color 0.2s;
        }
        .footer-links-list li a:hover {
          color: #38bdf8;
          padding-left: 4px;
        }

        .footer-contact-items {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-bottom: 24px;
        }
        .f-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.85rem;
          color: #94a3b8;
          line-height: 1.4;
        }
        .f-icon {
          color: #38bdf8;
          flex-shrink: 0;
          margin-top: 3px;
        }

        .btn-scroll-top {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.08);
          color: #e2e8f0;
          padding: 8px 16px;
          border-radius: 8px;
          font-size: 0.8rem;
          font-weight: 600;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }
        .btn-scroll-top:hover {
          background: #0062f5;
          color: #ffffff;
        }

        .footer-sub-bar {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding: 20px 0;
          font-size: 0.8rem;
        }
        .sub-bar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
        }
        .sub-bar-links {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #64748b;
        }
        .sub-bar-links a {
          color: #94a3b8;
        }
        .sub-bar-links a:hover {
          color: #38bdf8;
        }

        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
          .sub-bar-inner {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
