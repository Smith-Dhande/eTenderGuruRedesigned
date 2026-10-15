import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const WhyNineRupee = ({ onExploreClick }) => {
  const { language } = useLanguage();
  const t = translations[language].whyNineRupee;

  // Tripled for perfectly smooth, continuous infinite marquee looping
  const marqueeItems = [...t.reasons, ...t.reasons, ...t.reasons];

  const pillarPrefix = language === 'mr' ? 'स्तंभ' : 'PILLAR';
  const badgeText = language === 'mr' ? '₹९ प्रॅक्टिकल स्टँडर्ड' : '₹9 Practical Standard';
  const ctaText = language === 'mr' ? '₹९ कोर्सेस आताच पहा' : 'EXPLORE ₹9 COURSES';

  return (
    <section
      id="why-nine-rupee"
      className="philosophy-banner-wrapper"
      aria-labelledby="philosophy-main-heading"
    >
      <div className="philosophy-orange-banner">
        {/* Subtle Ambient Architectural Blur Spheres */}
        <div className="philosophy-ambient-glow top-right" aria-hidden="true" />
        <div className="philosophy-ambient-glow bottom-left" aria-hidden="true" />

        {/* Authentic PWD Road Tender Blueprint Site Inspection Backdrop */}
        <div className="philosophy-bg-backdrop" aria-hidden="true">
          <img
            src="/why-nine-road-bg.jpg"
            alt=""
            className="philosophy-bg-img"
            loading="lazy"
          />
          <div className="philosophy-bg-overlay" />
        </div>

        <div className="philosophy-split-layout">

          {/* Left Column: Moving Marquee of Porcelain Cards */}
          <div className="philosophy-left-marquee-col">
            <div className="philosophy-marquee-container" aria-label="Our Philosophy Pillars">
              <div className="philosophy-marquee-track">
                {marqueeItems.map((item, idx) => (
                  <article key={idx} className="philosophy-step-card">
                    {/* Giant Subtle Watermark Numeral in Anton Font */}
                    <span className="philosophy-watermark-num" aria-hidden="true">
                      {item.num}
                    </span>

                    {/* Step Eyebrow with Brand Dash */}
                    <div className="philosophy-step-header">
                      <span className="philosophy-step-dash" aria-hidden="true"></span>
                      <span className="philosophy-step-tag">
                        {pillarPrefix} {item.num}
                      </span>
                    </div>

                    {/* Headline & Description */}
                    <div>
                      <h3 className="philosophy-step-title">{item.title}</h3>
                      <p className="philosophy-step-desc">{item.desc}</p>
                    </div>

                    {/* Micro Quality Standard Tag */}
                    <div className="philosophy-step-badge">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c]" aria-hidden="true"></span>
                      <span>{badgeText}</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Eyebrow, Heading, Narrative, Founder Quote & Action */}
          <div className="philosophy-right-text-col">
            <div className="philosophy-eyebrow-wrap">
              <span className="philosophy-eyebrow">{t.eyebrow}</span>
            </div>

            <h2 className="philosophy-heading" id="philosophy-main-heading">
              <span className="philosophy-heading-serif">{t.titleSerif}</span>
              <span className="philosophy-heading-impact">
                {t.titleImpact.replace('?', '')}
                <span className="philosophy-heading-dot">?</span>
              </span>
            </h2>

            <div className="philosophy-support-block">
              <div className="philosophy-support-divider" aria-hidden="true"></div>
              <p className="philosophy-support-text">
                {t.support}
              </p>
            </div>

            {/* High-Contrast Tactile Button */}
            <button
              type="button"
              onClick={onExploreClick}
              className="philosophy-cta-btn"
              aria-label={ctaText}
            >
              <span>{ctaText}</span>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
