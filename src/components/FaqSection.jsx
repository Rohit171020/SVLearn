import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { FAQS } from '../data/servicesData';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="faq-section section-padding">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <HelpCircle size={14} /> Frequently Asked Questions
          </div>
          <h2 className="section-title">
            Answers for <span className="highlight">Institutions & Corporates</span>
          </h2>
          <p className="section-desc">
            Everything you need to know about partnering with SV Learnlogic for campus employability, FDPs, and workforce upskilling.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="faq-accordion-wrap">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div 
                key={idx} 
                className={`faq-item ${isOpen ? 'open' : ''}`}
              >
                <button 
                  className="faq-question-btn"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-q-text">{faq.q}</span>
                  <div className={`faq-chevron ${isOpen ? 'rotated' : ''}`}>
                    <ChevronDown size={20} />
                  </div>
                </button>

                {isOpen && (
                  <div className="faq-answer-pane">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        .faq-section {
          background-color: #f8fafc;
        }

        .faq-accordion-wrap {
          max-width: 820px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .faq-item {
          background: #ffffff;
          border: 1px solid #cbd5e1;
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.25s ease;
        }
        .faq-item.open {
          border-color: #0062f5;
          box-shadow: 0 8px 24px -4px rgba(0, 98, 245, 0.1);
        }

        .faq-question-btn {
          width: 100%;
          padding: 22px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          text-align: left;
          gap: 16px;
        }

        .faq-q-text {
          font-family: var(--font-heading);
          font-size: 1.075rem;
          font-weight: 700;
          color: #081730;
          line-height: 1.35;
        }

        .faq-chevron {
          color: #0062f5;
          transition: transform 0.25s ease;
          flex-shrink: 0;
        }
        .faq-chevron.rotated {
          transform: rotate(180deg);
        }

        .faq-answer-pane {
          padding: 0 24px 24px 24px;
          border-top: 1px solid #f1f5f9;
        }
        .faq-answer-pane p {
          font-size: 0.95rem;
          color: #475569;
          line-height: 1.65;
          margin: 16px 0 0 0;
        }
      `}</style>
    </section>
  );
}
