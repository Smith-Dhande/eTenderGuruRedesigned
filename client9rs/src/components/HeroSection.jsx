import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const HeroSection = ({ onExploreCourses, onMeetFounder, onEnroll }) => {
  const { language } = useLanguage();
  const t = translations[language].hero;

  const handlePrimaryCta = () => {
    if (onEnroll) {
      onEnroll();
    } else if (onMeetFounder) {
      onMeetFounder();
    } else {
      const el = document.getElementById('courses');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSecondaryCta = () => {
    if (onMeetFounder) {
      onMeetFounder();
    } else {
      const el = document.getElementById('founder-video');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hero-viewport-wrapper">
      <header className="hero-banner" id="hero">
        {/* Authentic Highway & Road Tender Construction Site Backdrop */}
        <div className="hero-bg-backdrop" aria-hidden="true">
          <img
            src="/hero-road-bg.jpg"
            alt=""
            className="hero-bg-img"
            loading="eager"
            fetchPriority="high"
          />
          <div className="hero-bg-overlay"></div>
        </div>

        {/* Decorative Outlined Editorial Wordmark Layer */}
        <div className="hero-editorial-wordmark" aria-hidden="true">
          <span>eTender Guru</span>
        </div>

        <div className="hero-inner-container">
          {/* Left Column: Eyebrow, Editorial Display Headline, Pitch, Deliverables, CTA */}
          {/* Left Column: Top Power Hook (बना शासकीय ठेकेदार), Eyebrow, Display Headline, CTA */}
          <div className="hero-content-col">
            {/* 1. TOP POWER HOOK: बना शासकीय ठेकेदार */}
            <div className="hero-top-hook-wrap">
              <div className="hero-top-hook-pill">
                <strong className="hero-top-hook-title">{t.tagline || 'बना शासकीय ठेकेदार'}</strong>
              </div>
            </div>



            {/* 3. Editorial Display Headline */}
            <h1 className="hero-editorial-heading">
              <span className="hero-headline-serif">{t.headlineBold}</span>
              <span className="hero-headline-impact">{t.headlineImpact}</span>
              <span className="hero-headline-highlight">{t.headlineHighlight}</span>
            </h1>

            {/* Action Row: Primary Enroll & Secondary Founder Talk */}
            <div className="hero-cta-wrap">
              <button
                type="button"
                onClick={handlePrimaryCta}
                className="hero-tactile-btn"
                aria-label={t.cta}
              >
                <span>{t.cta}</span>
                <span className="hero-btn-arrow-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </button>

              {t.secondaryCta && (
                <button
                  type="button"
                  onClick={handleSecondaryCta}
                  className="hero-secondary-btn"
                  aria-label={t.secondaryCta}
                >
                  <span>{t.secondaryCta}</span>
                </button>
              )}
            </div>

            {/* Trust Footnote */}
            {t.trustNote && (
              <div className="hero-trust-note">
                <span>{t.trustNote}</span>
              </div>
            )}
          </div>

          {/* Right Column: Founder Cutout + Experience Badge */}
          <div className="hero-founder-col">
            <div className="hero-founder-frame">
              <img
                src="/foundernobg.png"
                alt={t.altFounder || 'eTender Guru Founder'}
                className="hero-founder-img"
                loading="eager"
                fetchPriority="high"
              />
              <div className="hero-founder-floating-badge" aria-hidden="true">
                <div className="founder-badge-text">
                  <strong>10+ Years Experience</strong>
                  <span>Govt. Road Tender Consultant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
