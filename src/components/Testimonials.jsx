import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '../data/servicesData';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const next = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[activeIndex];

  return (
    <section className="testimonials-section section-padding">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} /> Partner Testimonials & Success Stories
          </div>
          <h2 className="section-title">
            Trusted by Leaders in <span className="highlight">Academia & Industry</span>
          </h2>
          <p className="section-desc">
            Hear directly from University Placement Directors, Enterprise L&D Executives, and successfully placed engineers.
          </p>
        </div>

        {/* Testimonials Carousel Container */}
        <div className="testimonials-card-wrapper">
          <div className="testimonial-card">
            
            <div className="quote-icon-box">
              <Quote size={32} color="#0062f5" />
            </div>

            <div className="stars-rating">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="star-fill" />
              ))}
            </div>

            <p className="testimonial-quote">
              "{current.quote}"
            </p>

            <div className="testimonial-footer">
              <div className="author-info">
                <h4 className="author-name">{current.name}</h4>
                <p className="author-role">{current.role} • <strong>{current.org}</strong></p>
              </div>

              <div className="metric-badge-box">
                <span className="metric-badge-label">Verified Result</span>
                <span className="metric-badge-num">{current.metric}</span>
              </div>
            </div>

          </div>

          {/* Carousel Navigation Buttons */}
          <div className="carousel-nav-row">
            <div className="carousel-dots">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  className={`dot-btn ${idx === activeIndex ? 'active' : ''}`}
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="carousel-arrows">
              <button onClick={prev} className="arrow-btn" aria-label="Previous testimonial">
                <ChevronLeft size={20} />
              </button>
              <button onClick={next} className="arrow-btn" aria-label="Next testimonial">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        .testimonials-section {
          background-color: #ffffff;
        }

        .testimonials-card-wrapper {
          max-width: 900px;
          margin: 0 auto;
        }

        .testimonial-card {
          background: linear-gradient(180deg, #f8fafc 0%, #edf4fc 100%);
          border: 1px solid #cbd5e1;
          border-radius: 24px;
          padding: 48px;
          box-shadow: 0 16px 40px -10px rgba(8, 23, 48, 0.08);
          position: relative;
        }

        .quote-icon-box {
          margin-bottom: 20px;
          opacity: 0.8;
        }

        .stars-rating {
          display: flex;
          align-items: center;
          gap: 4px;
          margin-bottom: 20px;
        }
        .star-fill {
          fill: #f59e0b;
          color: #f59e0b;
        }

        .testimonial-quote {
          font-family: var(--font-heading);
          font-size: 1.35rem;
          line-height: 1.6;
          color: #081730;
          font-weight: 600;
          margin-bottom: 36px;
        }

        .testimonial-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid #cbd5e1;
          padding-top: 24px;
          flex-wrap: wrap;
          gap: 16px;
        }

        .author-name {
          font-size: 1.15rem;
          font-weight: 800;
          color: #081730;
          margin-bottom: 4px;
        }
        .author-role {
          font-size: 0.9rem;
          color: #64748b;
          margin: 0;
        }

        .metric-badge-box {
          background: #ffffff;
          border: 1px solid #bfdbfe;
          padding: 8px 16px;
          border-radius: 12px;
          text-align: right;
        }
        .metric-badge-label {
          display: block;
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          color: #0062f5;
        }
        .metric-badge-num {
          display: block;
          font-size: 1.15rem;
          font-weight: 800;
          color: #081730;
        }

        .carousel-nav-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 24px;
          padding: 0 12px;
        }

        .carousel-dots {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .dot-btn {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #cbd5e1;
          transition: all 0.2s;
        }
        .dot-btn.active {
          width: 28px;
          border-radius: 9999px;
          background: #0062f5;
        }

        .carousel-arrows {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .arrow-btn {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: #ffffff;
          border: 1px solid #cbd5e1;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #081730;
          transition: all 0.2s;
        }
        .arrow-btn:hover {
          background: #0062f5;
          color: #ffffff;
          border-color: #0062f5;
        }

        @media (max-width: 640px) {
          .testimonial-card {
            padding: 32px 20px;
          }
          .testimonial-quote {
            font-size: 1.1rem;
          }
          .testimonial-footer {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </section>
  );
}
