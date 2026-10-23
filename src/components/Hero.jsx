import React from 'react';
import { 
  ArrowRight, CheckCircle2, Star, ShieldCheck, 
  Download, Users, Building, Laptop, Sparkles
} from 'lucide-react';

export default function Hero({ onOpenBrochure }) {
  return (
    <section className="hero-section">
      {/* Background Ambient Glows */}
      <div className="hero-glow hero-glow-1"></div>
      <div className="hero-glow hero-glow-2"></div>

      <div className="container hero-container">
        <div className="hero-grid">
          
          {/* Left Column: Headline & Call To Actions */}
          <div className="hero-content">
            
            {/* Slogan Pill */}
            <div className="hero-pill">
              <span className="hero-pill-badge">SV LEARNLOGIC</span>
              <span className="hero-pill-motto">LEARN • LOGIC • LEAD</span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-title">
              Empowering Next-Gen Talent with <span className="highlight-text">Industry-First</span> Skills.
            </h1>

            {/* Subtitle */}
            <p className="hero-description">
              Outcome-driven technical training, institutional employability programs, and enterprise talent pipelines for engineering colleges and top IT recruiters.
            </p>

            {/* CTA Action Buttons */}
            <div className="hero-cta-group">
              <a href="#services" className="btn-primary hero-btn-main">
                <span>Explore Services</span>
                <ArrowRight size={18} />
              </a>

              <button 
                onClick={onOpenBrochure}
                className="btn-secondary hero-btn-sub"
              >
                <Download size={18} />
                <span>Institutional Deck</span>
              </button>
            </div>

            {/* Trust Line */}
            <div className="hero-trust-bar">
              <div className="trust-avatars">
                <div className="stars-row">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} className="star-filled" />
                  ))}
                </div>
                <p>Trusted across <strong>250+ Engineering Colleges</strong> & <strong>180+ Enterprise Recruiters</strong></p>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Visual & Stats Glass Card */}
          <div className="hero-visual-wrapper">
            <div className="hero-image-card">
              <img 
                src="/hero.jpg" 
                alt="SV Learnlogic Students Collaborating" 
                className="hero-main-img"
              />
              <div className="hero-img-overlay"></div>

              {/* Single Clean Floating Glassmorphic Badge */}
              <div className="floating-badge badge-top-right animate-float">
                <div className="badge-icon-box bg-blue">
                  <ShieldCheck size={20} color="#ffffff" />
                </div>
                <div>
                  <div className="badge-title">98.4% Placement Rate</div>
                  <div className="badge-subtitle">Verified Outcome Benchmark</div>
                </div>
              </div>

            </div>

            {/* Sub-hero quick metrics grid */}
            <div className="hero-metrics-grid">
              <div className="hero-metric-box">
                <div className="metric-number">150K+</div>
                <div className="metric-label">Students Trained</div>
              </div>
              <div className="hero-metric-box">
                <div className="metric-number">250+</div>
                <div className="metric-label">Campuses</div>
              </div>
              <div className="hero-metric-box">
                <div className="metric-number">180+</div>
                <div className="metric-label">Hiring Partners</div>
              </div>
            </div>

          </div>

        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          background: linear-gradient(180deg, #f8fafc 0%, #edf4fc 100%);
          padding: 60px 0 80px 0;
          overflow: hidden;
          border-bottom: 1px solid #e2e8f0;
        }

        .hero-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          pointer-events: none;
          z-index: 0;
        }
        .hero-glow-1 {
          width: 500px;
          height: 500px;
          top: -100px;
          right: 5%;
          background: rgba(0, 102, 255, 0.12);
        }
        .hero-glow-2 {
          width: 400px;
          height: 400px;
          bottom: -50px;
          left: 0;
          background: rgba(0, 210, 255, 0.1);
        }

        .hero-container {
          position: relative;
          z-index: 1;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 48px;
          align-items: center;
        }

        .hero-pill {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: #ffffff;
          padding: 6px 14px 6px 8px;
          border-radius: 9999px;
          border: 1px solid #cbd5e1;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
          margin-bottom: 24px;
        }
        .hero-pill-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #0b1e42;
          color: #ffffff;
          font-size: 0.775rem;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 9999px;
          letter-spacing: 0.02em;
        }
        .hero-pill-motto {
          font-family: var(--font-heading);
          font-size: 0.775rem;
          font-weight: 800;
          letter-spacing: 0.18em;
          color: #0062f5;
        }

        .hero-title {
          font-size: clamp(2.3rem, 4.2vw, 3.5rem);
          font-weight: 900;
          color: #081730;
          line-height: 1.15;
          margin-bottom: 20px;
          letter-spacing: -0.03em;
        }
        .highlight-text {
          background: linear-gradient(135deg, #0062f5 0%, #00b4d8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-description {
          font-size: 1.125rem;
          line-height: 1.7;
          color: #475569;
          margin-bottom: 28px;
          max-width: 620px;
        }

        .hero-checklist {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 34px;
        }
        .check-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 600;
          font-size: 0.95rem;
          color: #1e293b;
        }
        .check-icon {
          color: #0062f5;
          flex-shrink: 0;
        }

        .hero-cta-group {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }
        .hero-btn-main {
          padding: 15px 30px;
          font-size: 1.05rem;
        }
        .hero-btn-sub {
          padding: 14px 26px;
          font-size: 1.05rem;
        }

        .hero-trust-bar {
          border-top: 1px solid #e2e8f0;
          padding-top: 24px;
        }
        .trust-avatars {
          display: flex;
          align-items: center;
          gap: 18px;
        }
        .avatar-stack {
          display: flex;
          align-items: center;
        }
        .avatar-circle {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          color: #ffffff;
          font-size: 0.72rem;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid #ffffff;
          margin-left: -10px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.12);
        }
        .avatar-circle:first-child {
          margin-left: 0;
        }
        .av-1 { background: #0f172a; }
        .av-2 { background: #0369a1; }
        .av-3 { background: #2563eb; }
        .av-4 { background: #0284c7; }

        .trust-text p {
          font-size: 0.875rem;
          color: #475569;
          margin: 0;
        }
        .stars-row {
          display: flex;
          align-items: center;
          gap: 3px;
          margin-bottom: 4px;
        }
        .star-filled {
          fill: #f59e0b;
          color: #f59e0b;
        }

        /* Right Column Visual */
        .hero-visual-wrapper {
          position: relative;
        }
        .hero-image-card {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 24px 50px -12px rgba(11, 30, 66, 0.22);
          border: 1px solid rgba(255, 255, 255, 0.8);
          background: #081730;
        }
        .hero-main-img {
          width: 100%;
          height: 440px;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
        }
        .hero-image-card:hover .hero-main-img {
          transform: scale(1.02);
        }
        .hero-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(8, 23, 48, 0.1) 0%, rgba(8, 23, 48, 0.6) 100%);
          pointer-events: none;
        }

        .floating-badge {
          position: absolute;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          padding: 12px 18px;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.9);
          box-shadow: 0 16px 30px rgba(0, 0, 0, 0.12);
          display: flex;
          align-items: center;
          gap: 12px;
          z-index: 2;
        }
        .badge-top-right {
          top: 24px;
          right: 24px;
        }
        .badge-bottom-left {
          bottom: 24px;
          left: 24px;
        }
        .badge-icon-box {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .bg-blue {
          background: linear-gradient(135deg, #0062f5 0%, #0284c7 100%);
        }
        .bg-emerald {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
        }
        .badge-title {
          font-family: var(--font-heading);
          font-size: 0.925rem;
          font-weight: 700;
          color: #0f172a;
          line-height: 1.2;
        }
        .badge-subtitle {
          font-size: 0.775rem;
          color: #64748b;
          font-weight: 500;
        }

        .hero-live-pill {
          position: absolute;
          top: 24px;
          left: 24px;
          background: rgba(8, 23, 48, 0.85);
          backdrop-filter: blur(8px);
          color: #ffffff;
          padding: 6px 14px;
          border-radius: 9999px;
          font-size: 0.775rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          z-index: 2;
        }
        .live-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 10px #10b981;
          animation: pulseGlow 1.5s infinite;
        }

        .hero-metrics-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-top: 20px;
        }
        .hero-metric-box {
          background: #ffffff;
          padding: 16px 20px;
          border-radius: 14px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 12px rgba(0,0,0,0.03);
          text-align: center;
        }
        .metric-number {
          font-family: var(--font-heading);
          font-size: 1.6rem;
          font-weight: 800;
          color: #0062f5;
          line-height: 1.1;
        }
        .metric-label {
          font-size: 0.775rem;
          font-weight: 600;
          color: #64748b;
          margin-top: 4px;
        }

        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .hero-content {
            text-align: center;
          }
          .hero-pill {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-description {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-checklist {
            align-items: center;
          }
          .hero-cta-group {
            justify-content: center;
          }
          .hero-trust-bar {
            display: flex;
            justify-content: center;
          }
          .hero-main-img {
            height: 340px;
          }
        }

        @media (max-width: 640px) {
          .hero-metrics-grid {
            grid-template-columns: 1fr;
          }
          .floating-badge {
            padding: 8px 12px;
          }
          .badge-top-right {
            top: 12px;
            right: 12px;
          }
          .badge-bottom-left {
            bottom: 12px;
            left: 12px;
          }
        }
      `}</style>
    </section>
  );
}
