import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const FounderSection = () => {
  const { language } = useLanguage();
  const t = translations[language].founder;
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  return (
    <section className="founder-section" id="about">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="section-header-wrap">
          <div className="section-badge-pill">{t.badge}</div>
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle">{t.subtitle}</p>
        </div>

        <div className="founder-main-grid">
          
          {/* Left Column: Authentic Founder Visual Gallery */}
          <div className="founder-media-col">
            <div className="founder-portrait-card">
              <div className="founder-image-stage">
                <img
                  src="/owner&founder/image.png"
                  alt="eTender Guru Lead Trainer"
                  className="founder-main-photo"
                  loading="lazy"
                />
                <div className="founder-photo-caption">
                  <span className="founder-caption-role">eTender Guru</span>
                  <span className="founder-caption-tag">Government Tender Specialist</span>
                </div>
              </div>

              <div className="founder-secondary-photo-wrap">
                <img
                  src="/owner&founder/image copy 2.png"
                  alt="eTender Guru Workshop & Practical Training"
                  className="founder-secondary-photo"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Bio, Philosophy & 4 Core Pillars */}
          <div className="founder-text-col">
            <div className="founder-bio-box">
              <h3 className="founder-bio-heading">{t.aboutHeading}</h3>
              <p className="founder-bio-para">{t.bio1}</p>
              <p className="founder-bio-para">{t.bio2}</p>

              {/* Editorial Quote */}
              <blockquote className="founder-quote-block">
                <div className="quote-mark-icon" aria-hidden="true">“</div>
                <p className="quote-text">{t.quote}</p>
              </blockquote>
            </div>

            {/* 4 Pillars Grid */}
            <div className="pillars-grid">
              {t.pillars.map((pillar, idx) => (
                <div key={idx} className="pillar-item">
                  <div className="pillar-num">0{idx + 1}</div>
                  <div className="pillar-body">
                    <h4 className="pillar-title">{pillar.title}</h4>
                    <p className="pillar-desc">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
