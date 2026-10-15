import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

// Icon mapper for target audience categories
const CategoryIcon = ({ id }) => {
  switch (id) {
    case 'civil-engineers':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
        </svg>
      );
    case 'unemployed-coop':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      );
    case 'ngos':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      );
    case 'pvt-ltd':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
      );
    case 'fpc':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a10 10 0 0 1 10 10c0 5.52-4.48 10-10 10S2 17.52 2 12A10 10 0 0 1 12 2z"></path>
          <path d="M12 6v12"></path>
          <path d="M8 10l4-4 4 4"></path>
        </svg>
      );
    case 'proprietorship':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      );
    case 'partnership':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      );
    case 'company-secretary':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      );
    case 'women-entrepreneurs':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      );
    case 'bachat-gat':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
          <line x1="9" y1="9" x2="9.01" y2="9"></line>
          <line x1="15" y1="9" x2="15.01" y2="9"></line>
        </svg>
      );
    case 'service-providers':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="3" width="15" height="13"></rect>
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
          <circle cx="5.5" cy="18.5" r="2.5"></circle>
          <circle cx="18.5" cy="18.5" r="2.5"></circle>
        </svg>
      );
    case 'cyber-csc':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      );
    case 'online-center':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      );
    case 'tenth-pass':
    default:
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
          <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
        </svg>
      );
  }
};

export const WhoIsThisFor = ({ onEnroll }) => {
  const { language } = useLanguage();
  const t = translations[language]?.whoIsThisFor;

  const [activeFilter, setActiveFilter] = useState('all');

  if (!t) return null;

  const filterLabels = {
    en: {
      all: 'All Categories (14)',
      individual: 'Engineers & Individuals',
      companies: 'Firms & Cooperatives',
      centers: 'Centers, Groups & Services'
    },
    mr: {
      all: 'सर्व घटक (१४)',
      individual: 'अभियंता व वैयक्तिक',
      companies: 'कंपन्या व सोसायट्या',
      centers: 'केंद्रे, बचत गट व सेवा'
    }
  };

  const currentFilters = filterLabels[language] || filterLabels.en;

  // Categorize for quick filtering
  const filteredCategories = t.categories.filter((cat) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'individual') {
      return ['civil-engineers', 'proprietorship', 'company-secretary', 'women-entrepreneurs', 'tenth-pass'].includes(cat.id);
    }
    if (activeFilter === 'companies') {
      return ['unemployed-coop', 'ngos', 'pvt-ltd', 'fpc', 'partnership'].includes(cat.id);
    }
    if (activeFilter === 'centers') {
      return ['bachat-gat', 'service-providers', 'cyber-csc', 'online-center'].includes(cat.id);
    }
    return true;
  });

  const verifiedLabel = language === 'mr' ? 'वेबिनारसाठी पात्र' : 'Eligible Participant';

  return (
    <section className="who-section" id="target-audience" aria-labelledby="target-audience-heading">
      <div className="section-container">

        {/* 1. Standard Eyebrow */}
        <div className="courses-eyebrow-wrap">
          <span className="courses-eyebrow">{t.eyebrow}</span>
        </div>

        {/* 2. Standard Editorial Split Header */}
        <div className="courses-header-row who-header-row">
          <h2 className="courses-heading" id="target-audience-heading">
            <span className="courses-heading-serif">{t.titleSerif}</span>
            <span className="courses-heading-impact">
              {(t.titleImpact || '').replace('?', '')}
              <span className="courses-heading-dot">?</span>
            </span>
          </h2>

          <div className="courses-header-details">
            <div className="courses-support-divider" aria-hidden="true"></div>
            <p className="courses-support-text">{t.support}</p>
          </div>
        </div>

        {/* 3. Luxury Segmented Filter Tabs */}
        <div className="who-filter-wrapper">
          <div className="who-filter-tabs" role="tablist" aria-label="Filter target audience">
            <button
              type="button"
              className={`who-tab-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
              role="tab"
              aria-selected={activeFilter === 'all'}
            >
              <span className="who-tab-dot" aria-hidden="true"></span>
              <span>{currentFilters.all}</span>
            </button>

            <button
              type="button"
              className={`who-tab-btn ${activeFilter === 'individual' ? 'active' : ''}`}
              onClick={() => setActiveFilter('individual')}
              role="tab"
              aria-selected={activeFilter === 'individual'}
            >
              <span className="who-tab-dot" aria-hidden="true"></span>
              <span>{currentFilters.individual}</span>
            </button>

            <button
              type="button"
              className={`who-tab-btn ${activeFilter === 'companies' ? 'active' : ''}`}
              onClick={() => setActiveFilter('companies')}
              role="tab"
              aria-selected={activeFilter === 'companies'}
            >
              <span className="who-tab-dot" aria-hidden="true"></span>
              <span>{currentFilters.companies}</span>
            </button>

            <button
              type="button"
              className={`who-tab-btn ${activeFilter === 'centers' ? 'active' : ''}`}
              onClick={() => setActiveFilter('centers')}
              role="tab"
              aria-selected={activeFilter === 'centers'}
            >
              <span className="who-tab-dot" aria-hidden="true"></span>
              <span>{currentFilters.centers}</span>
            </button>
          </div>
        </div>

        {/* 4. Luxury Audience Cards Grid */}
        <div className="who-cards-grid">
          {filteredCategories.map((item, idx) => (
            <article key={item.id || idx} className="who-card">
              {/* Top Row: Index & Category Pill */}
              <div className="who-card-top">
                <span className="who-card-num">{item.num}</span>
                <span className="who-card-badge">{item.tag}</span>
              </div>

              {/* Icon & Heading Header */}
              <div className="who-card-header">
                <div className="who-card-icon" aria-hidden="true">
                  <CategoryIcon id={item.id} />
                </div>
                <h3 className="who-card-title">{item.title}</h3>
              </div>

              {/* Description Body */}
              <p className="who-card-desc">{item.desc}</p>

              {/* Bottom Verification Indicator */}
              <div className="who-card-footer">
                <span className="who-verified-badge">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>{verifiedLabel}</span>
                </span>
                <span className="who-card-accent-line" aria-hidden="true"></span>
              </div>
            </article>
          ))}
        </div>

        {/* 5. High-Impact Tactile Bottom Conversion Banner */}
        <div className="who-bottom-banner">
          <div className="who-banner-content">
            {/* <div className="who-pulse-wrapper">
              <span className="who-pulse-ping" aria-hidden="true"></span>
              <span className="who-pulse-core" aria-hidden="true"></span>
            </div> */}
            <div className="who-banner-text">
              <span className="who-banner-tag">
                {language === 'mr' ? 'थेट प्रवेश' : 'OPEN INVITATION'}
              </span>
              <strong className="who-banner-title">
                {language === 'mr'
                  ? 'तुम्ही यापैकी एका घटकात मोडता? आजच ₹९ मध्ये नोंदणी करा!'
                  : 'Belong to any of these categories? Reserve your spot for just ₹9!'}
              </strong>
            </div>
          </div>

          <button
            type="button"
            onClick={onEnroll}
            className="who-banner-btn"
            aria-label={t.ctaText}
          >
            <span>{t.ctaText}</span>
            <span className="btn-arrow-icon" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
          </button>
        </div>

      </div>
    </section>
  );
};
