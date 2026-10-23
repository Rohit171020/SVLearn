import React, { useState, useEffect } from 'react';
import { 
  Menu, X, PhoneCall, ChevronRight, Download, Award, Sparkles 
} from 'lucide-react';

export default function Navbar({ onOpenBrochure, onSelectService }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Solutions", href: "#solutions" },
    { name: "Tech Tracks", href: "#tech-tracks" },
    { name: "Placement Impact", href: "#impact" },
    { name: "ROI Estimator", href: "#calculator" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Sleek Announcement Strip */}
      <div className="top-announcement-bar">
        <div className="container announcement-content">
          <span className="announcement-badge">2025–26 Cohorts</span>
          <span className="announcement-text">
            Campus Placement & Corporate Upskilling drives are now booking.
          </span>
          <button onClick={onOpenBrochure} className="announcement-action">
            Institutional Deck <ChevronRight size={13} />
          </button>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-inner">
          {/* Logo & Brand Identity */}
          <a href="#" className="nav-logo-group">
            <img 
              src="/logo.png" 
              alt="SV Learnlogic Logo" 
              className="nav-logo-img"
            />
            <div className="nav-brand-text">
              <span className="nav-brand-name">SV LEARNLOGIC</span>
              <span className="nav-brand-motto">LEARN • LOGIC • LEAD</span>
            </div>
          </a>

          {/* Desktop Nav Navigation */}
          <nav className="desktop-nav">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="nav-item-link"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Header Action CTAs */}
          <div className="nav-actions">
            <button 
              onClick={onOpenBrochure} 
              className="btn-brochure-nav"
              title="Download Brochure"
            >
              <Download size={16} />
              <span>Brochure</span>
            </button>
            <a href="#contact" className="btn-primary-nav">
              <PhoneCall size={16} />
              <span>Get Proposal</span>
            </a>
            
            {/* Mobile Menu Button */}
            <button 
              className="mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-drawer">
            <div className="mobile-drawer-inner">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="mobile-nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                  <ChevronRight size={16} />
                </a>
              ))}
              <div className="mobile-drawer-cta">
                <button 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBrochure();
                  }}
                  className="btn-secondary w-full"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <Download size={16} /> Download Institutional Deck
                </button>
                <a 
                  href="#contact" 
                  className="btn-primary w-full"
                  style={{ width: '100%', justifyContent: 'center' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <PhoneCall size={16} /> Schedule Consultation
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      <style>{`
        .top-announcement-bar {
          background: linear-gradient(90deg, #07152f 0%, #0c2b5e 50%, #07152f 100%);
          color: #e2e8f0;
          font-size: 0.8125rem;
          padding: 8px 0;
          border-bottom: 1px solid rgba(0, 128, 255, 0.2);
        }
        .announcement-content {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        .announcement-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(0, 128, 255, 0.25);
          color: #38bdf8;
          padding: 2px 10px;
          border-radius: 9999px;
          font-weight: 700;
          font-size: 0.75rem;
          letter-spacing: 0.04em;
          border: 1px solid rgba(56, 189, 248, 0.4);
        }
        .announcement-text {
          font-weight: 500;
        }
        .announcement-action {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          color: #38bdf8;
          font-weight: 600;
          cursor: pointer;
        }
        .announcement-action:hover {
          color: #7dd3fc;
          text-decoration: underline;
        }

        .navbar-header {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(255, 255, 255, 0.88);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(226, 232, 240, 0.8);
          transition: all 0.3s ease;
        }
        .navbar-header.scrolled {
          background: rgba(255, 255, 255, 0.98);
          box-shadow: 0 10px 30px -10px rgba(8, 23, 48, 0.08);
          border-bottom: 1px solid rgba(203, 213, 225, 0.8);
        }

        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 14px;
          padding-bottom: 14px;
        }

        .nav-logo-group {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .nav-logo-img {
          height: 48px;
          width: auto;
          object-fit: contain;
          border-radius: 6px;
        }
        .nav-brand-text {
          display: flex;
          flex-direction: column;
        }
        .nav-brand-name {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.25rem;
          letter-spacing: -0.01em;
          color: #0b1e42;
          line-height: 1.1;
        }
        .nav-brand-motto {
          font-family: var(--font-body);
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.22em;
          color: #0066f5;
          text-transform: uppercase;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 28px;
        }
        .nav-item-link {
          font-size: 0.925rem;
          font-weight: 600;
          color: #334155;
          position: relative;
          padding: 6px 0;
        }
        .nav-item-link:hover {
          color: #0062f5;
        }
        .nav-item-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: #0062f5;
          transition: width 0.2s ease;
          border-radius: 2px;
        }
        .nav-item-link:hover::after {
          width: 100%;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .btn-brochure-nav {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 9px 16px;
          font-size: 0.875rem;
          font-weight: 600;
          border-radius: 8px;
          color: #0b1e42;
          background: #f1f5f9;
          border: 1px solid #cbd5e1;
        }
        .btn-brochure-nav:hover {
          background: #e2e8f0;
          color: #0062f5;
        }

        .btn-primary-nav {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 10px 18px;
          font-size: 0.875rem;
          font-weight: 600;
          border-radius: 8px;
          color: #ffffff;
          background: linear-gradient(135deg, #0062f5 0%, #004ecc 100%);
          box-shadow: 0 4px 12px rgba(0, 98, 245, 0.25);
        }
        .btn-primary-nav:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 16px rgba(0, 98, 245, 0.35);
        }

        .mobile-toggle-btn {
          display: none;
          color: #0b1e42;
          padding: 6px;
        }

        .mobile-drawer {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: #ffffff;
          border-bottom: 2px solid #e2e8f0;
          box-shadow: 0 20px 30px rgba(0,0,0,0.1);
          padding: 20px 24px 28px 24px;
        }
        .mobile-drawer-inner {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .mobile-nav-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 14px;
          font-size: 1rem;
          font-weight: 600;
          color: #1e293b;
          border-radius: 8px;
          background: #f8fafc;
        }
        .mobile-drawer-cta {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 14px;
        }

        @media (max-width: 992px) {
          .desktop-nav {
            display: none;
          }
          .btn-brochure-nav {
            display: none;
          }
          .mobile-toggle-btn {
            display: flex;
          }
        }
      `}</style>
    </>
  );
}
