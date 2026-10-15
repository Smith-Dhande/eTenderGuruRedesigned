import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const FounderSection = ({ onExploreClick }) => {
  const { language } = useLanguage();
  const t = translations[language].founder;

  if (!t) return null;

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
              {(t.titleImpact || '').replace('.', '')}
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

        {/* 3. Creative Masterclass Canvas */}
        <div className="founder-stage-canvas">

          {/* Left Stage: Portrait Frame with Overlaid Typographic Tags */}
          <div className="founder-portrait-column">
            <div className="founder-portrait-frame">
              <img
                src="/owner&founder/founder_speaking.jpg"
                alt={t.roleTitle}
                className="founder-portrait-img"
                loading="lazy"
              />

              {/* Bottom Overlaid Details Bar */}
              <div className="founder-portrait-bottom-bar">
                <span className="founder-portrait-role">{t.roleTitle}</span>
                <span className="founder-portrait-badge">{t.experienceTag}</span>
              </div>
            </div>
          </div>

          {/* Right Stage: Narrative, Editorial Quote, 4 Pillars & Actions */}
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

            {/* 4 Pillars Grid (Compact 2x2 Grid on Desktop, Touch-Swipeable Carousel on Mobile) */}
            <div className="founder-pillars-matrix">
              {t.pillars && t.pillars.map((pillar, idx) => (
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

            {/* Action Buttons */}
            <div className="founder-dossier-actions">
              <a
                href="https://wa.me/918459461239?text=Hello%20eTender%20Guru%2C%20I%20want%20to%20connect%20with%20the%20instructor"
                target="_blank"
                rel="noopener noreferrer"
                className="founder-action-primary"
              >
                {t.enquireCta || 'CONNECT WITH INSTRUCTOR'}
              </a>

              <button
                type="button"
                className="founder-action-secondary"
                onClick={onExploreClick}
              >
                {t.coursesCta || 'EXPLORE ₹9 COURSES'}
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
