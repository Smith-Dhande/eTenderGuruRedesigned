import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const FounderSection = () => {
  const { language } = useLanguage();
  const t = translations[language].founder;

  const scrollToSection = (id) => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="founder-section" id="about" aria-labelledby="about-main-heading">
      <div className="section-container">

        {/* 1. Eyebrow */}
        <div className="courses-eyebrow-wrap">
          <span className="courses-eyebrow">{t.eyebrow}</span>
        </div>

        {/* 2. Top Header Row */}
        <div className="courses-header-row founder-header-compact">
          <h2 className="courses-heading" id="about-main-heading">
            <span className="courses-heading-serif">{t.titleSerif}</span>
            <span className="courses-heading-impact">
              {t.titleImpact.replace('.', '')}
              <span className="courses-heading-dot">.</span>
            </span>
          </h2>

          <div className="courses-header-details">
            <div className="courses-support-divider" aria-hidden="true"></div>
            <p className="courses-support-text">
              {t.support}
            </p>
          </div>
        </div>

        {/* 3. Creative Masterclass Canvas (Fit for full-screen view, 0 icons) */}
        <div className="founder-stage-canvas">

          {/* Left Stage: Portrait Frame with Overlaid Typographic Tags */}
          <div className="founder-portrait-column">
            <div className="founder-portrait-frame">
              <img
                src="/owner&founder/image.png"
                alt={t.roleTitle}
                className="founder-portrait-img"
                loading="lazy"
              />

              {/* Top Typographic Pill (No Icons) */}


              {/* Bottom Overlaid Details Bar */}
              <div className="founder-portrait-bottom-bar">
                <span className="founder-portrait-role">{t.roleTitle}</span>
                <span className="founder-portrait-badge">{t.experienceTag}</span>
              </div>
            </div>
          </div>

          {/* Right Stage: Narrative, Editorial Quote, 4 Pillars & Actions (No Icons) */}
          <div className="founder-dossier-column">

            {/* Bio Narrative & Editorial Quote */}
            <div className="founder-dossier-intro">
              <p className="founder-intro-lead">{t.bio1}</p>

              {/* Refined Quote Block */}
              <blockquote className="founder-quote-banner">
                <div className="founder-quote-accent" aria-hidden="true"></div>
                <div className="founder-quote-body">
                  <span className="founder-quote-mark" aria-hidden="true">“</span>
                  <p className="founder-quote-text">{t.quote}</p>
                </div>
              </blockquote>
            </div>

            {/* 4 Pillars Grid (Compact, High-Impact 2x2 Grid) */}
            <div className="founder-pillars-matrix">
              {t.pillars.map((pillar, idx) => (
                <div key={idx} className="founder-matrix-card">
                  <div className="founder-matrix-top">
                    <span className="founder-matrix-num">0{idx + 1}</span>
                    <span className="founder-matrix-line" aria-hidden="true"></span>
                  </div>
                  <h4 className="founder-matrix-title">{pillar.title}</h4>
                  <p className="founder-matrix-desc">{pillar.desc}</p>
                </div>
              ))}
            </div>

            {/* Pure Typography Action Buttons (No Icons) */}
            <div className="founder-dossier-actions">
              <button
                type="button"
                className="founder-action-primary"
                onClick={() => scrollToSection('contact')}
              >
                {t.enquireCta}
              </button>

              <button
                type="button"
                className="founder-action-secondary"
                onClick={() => scrollToSection('courses')}
              >
                {t.coursesCta}
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
