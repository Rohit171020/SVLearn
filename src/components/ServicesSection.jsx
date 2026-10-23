import React, { useState } from 'react';
import { 
  GraduationCap, Briefcase, Code2, TrendingUp, Users, 
  Award, Layers, CheckCircle2, BookOpen, Cpu, 
  ArrowRight, Sparkles, Search, Check, FileText
} from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import ServiceDetailModal from './ServiceDetailModal';

const iconMap = {
  GraduationCap: GraduationCap,
  Briefcase: Briefcase,
  Code2: Code2,
  TrendingUp: TrendingUp,
  Users: Users,
  Award: Award,
  Layers: Layers,
  CheckCircle2: CheckCircle2,
  BookOpenCheck: BookOpen,
  Cpu: Cpu
};

export default function ServicesSection({ onSelectServiceForQuote, onOpenBrochure }) {
  const [selectedCategory, setSelectedCategory] = useState("All Services");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalService, setActiveModalService] = useState(null);

  const categories = [
    "All Services",
    "Academic & Campus",
    "Enterprise & L&D",
    "Technical Stacks",
    "Career & Placement",
    "Hiring & Talent"
  ];

  const filteredServices = SERVICES_DATA.filter((svc) => {
    const matchesCategory = selectedCategory === "All Services" || svc.category === selectedCategory;
    const matchesSearch = 
      svc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      svc.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      svc.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="services" className="services-section section-padding">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} /> Comprehensive Service Portfolio
          </div>
          <h2 className="section-title">
            Tailored Training, Skilling & <span className="highlight">Talent Solutions</span>
          </h2>
          <p className="section-desc">
            Explore our 10 specialized institutional and corporate offerings engineered to bridge skills gaps, modernize curricula, and deliver measurable placement & hiring benchmarks.
          </p>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="services-controls">
          <div className="category-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`category-tab-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="services-search-wrapper">
            <Search size={18} className="search-icon" />
            <input 
              type="text"
              placeholder="Search services (e.g. FDP, Placement, Cloud, Internship)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="services-search-input"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")} 
                className="search-clear-btn"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="services-grid">
          {filteredServices.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Code2;

            return (
              <div key={service.id} className="service-card">
                
                {/* Card Top Icon & Category */}
                <div className="service-card-top">
                  <div className="service-icon-box">
                    <IconComponent size={22} color="#0062f5" />
                  </div>
                  <span className="service-category-badge">{service.category}</span>
                </div>

                {/* Service Title */}
                <h3 className="service-card-title">{service.title}</h3>

                {/* Crisp Single-sentence Description */}
                <p className="service-card-desc">{service.shortDesc}</p>

                {/* Card Bottom: Metric & Trigger */}
                <div className="service-card-bottom">
                  <span className="service-pill-stat">{service.stats}</span>

                  <button 
                    onClick={() => setActiveModalService(service)}
                    className="service-link-btn"
                  >
                    <span>Syllabus & Details</span>
                    <ArrowRight size={15} />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Empty state if search has no results */}
        {filteredServices.length === 0 && (
          <div className="services-empty-state">
            <p>No services matched your query "<strong>{searchQuery}</strong>".</p>
            <button 
              onClick={() => { setSearchQuery(""); setSelectedCategory("All Services"); }} 
              className="btn-secondary"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bottom Institutional Consultation Banner */}
        <div className="services-bottom-banner">
          <div className="banner-text">
            <h3>Need a Custom Tailored Training Framework?</h3>
            <p>We work directly with Deans, Principals, and Corporate L&D heads to construct bespoke training tracks matching your semester milestones or enterprise deployment deadlines.</p>
          </div>
          <div className="banner-actions">
            <button onClick={onOpenBrochure} className="btn-secondary">
              <FileText size={16} /> Download 2025 Catalog
            </button>
            <a href="#contact" className="btn-primary">
              <span>Schedule Institutional Consultation</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

      </div>

      {/* Interactive Detail Modal */}
      {activeModalService && (
        <ServiceDetailModal 
          service={activeModalService}
          onClose={() => setActiveModalService(null)}
          onSelectServiceForQuote={onSelectServiceForQuote}
          onOpenBrochure={onOpenBrochure}
        />
      )}

      <style>{`
        .services-section {
          background-color: #f8fafc;
          position: relative;
        }

        .services-controls {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }

        .category-tabs {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }
        .category-tab-btn {
          padding: 8px 18px;
          border-radius: 9999px;
          font-size: 0.875rem;
          font-weight: 600;
          color: #475569;
          background: #ffffff;
          border: 1px solid #cbd5e1;
          transition: all 0.2s ease;
        }
        .category-tab-btn:hover {
          background: #f1f5f9;
          color: #0f172a;
        }
        .category-tab-btn.active {
          background: #0062f5;
          color: #ffffff;
          border-color: #0062f5;
          box-shadow: 0 4px 12px rgba(0, 98, 245, 0.25);
        }

        .services-search-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          min-width: 300px;
        }
        .search-icon {
          position: absolute;
          left: 14px;
          color: #94a3b8;
          pointer-events: none;
        }
        .services-search-input {
          width: 100%;
          padding: 10px 14px 10px 40px;
          border-radius: 10px;
          border: 1px solid #cbd5e1;
          background: #ffffff;
          font-size: 0.9rem;
          color: #0f172a;
          outline: none;
          transition: border-color 0.2s;
        }
        .services-search-input:focus {
          border-color: #0062f5;
          box-shadow: 0 0 0 3px rgba(0, 98, 245, 0.12);
        }
        .search-clear-btn {
          position: absolute;
          right: 12px;
          font-size: 0.775rem;
          color: #64748b;
          font-weight: 600;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
          gap: 28px;
        }

        .service-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 12px rgba(11, 27, 61, 0.03);
          transition: all 0.25s ease;
          position: relative;
        }
        .service-card:hover {
          transform: translateY(-4px);
          border-color: #0062f5;
          box-shadow: 0 14px 28px -6px rgba(0, 98, 245, 0.12);
        }

        .service-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }
        .service-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: #eff6ff;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #dbeafe;
        }
        .service-category-badge {
          font-size: 0.725rem;
          font-weight: 700;
          color: #0062f5;
          background: #f0f7ff;
          border: 1px solid #bfdbfe;
          padding: 3px 10px;
          border-radius: 9999px;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .service-card-title {
          font-size: 1.15rem;
          font-weight: 800;
          color: #081730;
          margin-bottom: 10px;
          line-height: 1.3;
        }
        .service-card-desc {
          font-size: 0.885rem;
          color: #64748b;
          line-height: 1.55;
          margin-bottom: 20px;
          flex-grow: 1;
        }

        .service-card-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid #f1f5f9;
          padding-top: 16px;
          gap: 12px;
        }
        .service-pill-stat {
          font-size: 0.775rem;
          font-weight: 700;
          color: #047857;
          background: #ecfdf5;
          padding: 3px 8px;
          border-radius: 6px;
        }
        .service-link-btn {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 0.825rem;
          font-weight: 700;
          color: #0062f5;
          padding: 6px 0;
          transition: gap 0.2s ease;
        }
        .service-link-btn:hover {
          color: #004ecc;
          gap: 8px;
        }

        .service-card-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .service-btn-syllabus {
          flex: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 10px 14px;
          background: #f1f5f9;
          color: #0b1e42;
          font-size: 0.85rem;
          font-weight: 600;
          border-radius: 8px;
          border: 1px solid #cbd5e1;
        }
        .service-btn-syllabus:hover {
          background: #e2e8f0;
          color: #0062f5;
        }
        .service-btn-quote {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 10px 16px;
          background: #0062f5;
          color: #ffffff;
          font-size: 0.85rem;
          font-weight: 600;
          border-radius: 8px;
        }
        .service-btn-quote:hover {
          background: #004ecc;
        }

        .services-empty-state {
          text-align: center;
          padding: 60px 20px;
          background: #ffffff;
          border-radius: 16px;
          border: 1px dashed #cbd5e1;
        }
        .services-empty-state p {
          margin-bottom: 16px;
        }

        .services-bottom-banner {
          margin-top: 60px;
          background: linear-gradient(135deg, #081730 0%, #0d2858 100%);
          border-radius: 20px;
          padding: 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          color: #ffffff;
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 20px 40px -10px rgba(8, 23, 48, 0.2);
        }
        .banner-text h3 {
          color: #ffffff;
          font-size: 1.5rem;
          margin-bottom: 8px;
        }
        .banner-text p {
          color: #94a3b8;
          max-width: 640px;
          margin: 0;
          font-size: 0.95rem;
        }
        .banner-actions {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-shrink: 0;
          flex-wrap: wrap;
        }

        @media (max-width: 992px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
          .services-bottom-banner {
            flex-direction: column;
            text-align: center;
          }
          .banner-actions {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
