import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { LanguageToggle } from './LanguageToggle';

export const HeroSection = ({ onExploreCourses }) => {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <div className="hero-viewport-wrapper">
      {/* Language Toggle in Top-Right Corner */}
      <div className="hero-top-controls">
        <LanguageToggle />
      </div>

      <header className="hero-banner" id="hero">
        {/* Decorative Outlined Editorial Wordmark Layer */}
        <div className="hero-editorial-wordmark" aria-hidden="true">
          <span>eTender Guru</span>
        </div>

        <div className="hero-inner-container">
          
          {/* Left Column: Eyebrow, Editorial Display Headline, Supporting Copy, Tactile CTA */}
          <div className="hero-content-col">
            <div className="hero-eyebrow-wrap">
              <span className="hero-eyebrow hero-eyebrow-desktop">{t.label}</span>
              <span className="hero-eyebrow hero-eyebrow-mobile">
                {language === 'mr' ? 'ई-टेंडर गुरू' : 'eTender Guru'}
              </span>
            </div>

            <h1 className="hero-editorial-heading">
              <span className="hero-headline-serif">{t.headlineBold}</span>
              <span className="hero-headline-impact">{t.headlineLight}</span>
            </h1>

            <p className="hero-editorial-subtext">
              {t.supportingText}
            </p>

            <div className="hero-cta-wrap">
              <button
                type="button"
                onClick={onExploreCourses}
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
            </div>
          </div>

          {/* Right Column: Founder Cutout */}
          <div className="hero-founder-col">
            <div className="hero-founder-frame">
              <img
                src="/foundernobg.png"
                alt={t.altFounder}
                className="hero-founder-img"
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </div>

        </div>
      </header>
    </div>
  );
};
