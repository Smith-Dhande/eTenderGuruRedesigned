import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const ResourcesSection = () => {
  const { language } = useLanguage();
  const t = translations[language].resources;
  
  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  // Marquee loop for 6 roadmap steps
  const marqueeSteps = [...t.roadmap, ...t.roadmap];

  return (
    <section className="resources-section" id="resources" aria-labelledby="blueprint-main-heading">
      
      {/* 1. Main 6-Stage Tender Blueprint Orange Banner (Full-Bleed, Left Marquee + Right Text) */}
      <div className="blueprint-banner-wrapper">
        <div className="blueprint-orange-banner">
          <div className="blueprint-split-layout">
            
            {/* Left Column: Moving 6-Step Roadmap Marquee */}
            <div className="blueprint-left-marquee-col">
              <div className="blueprint-marquee-container">
                <div className="blueprint-marquee-track">
                  {marqueeSteps.map((item, idx) => (
                    <div key={idx} className="blueprint-step-card">
                      {/* Giant Background Watermark Number */}
                      <span className="blueprint-watermark-num" aria-hidden="true">
                        {item.step}
                      </span>

                      {/* Step Eyebrow */}
                      <div className="blueprint-step-header">
                        <span className="blueprint-step-dash" aria-hidden="true"></span>
                        <span className="blueprint-step-tag">
                          {t.stepPrefix} {item.step}
                        </span>
                      </div>

                      {/* Headline & Description */}
                      <h3 className="blueprint-step-title">{item.title}</h3>
                      <p className="blueprint-step-desc">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Eyebrow, Heading & Supporting Narrative */}
            <div className="blueprint-right-text-col">
              <div className="blueprint-eyebrow-wrap">
                <span className="blueprint-eyebrow">{t.eyebrow}</span>
              </div>

              <h2 className="blueprint-heading" id="blueprint-main-heading">
                <span className="blueprint-heading-serif">{t.titleSerif}</span>
                <span className="blueprint-heading-impact">
                  {t.titleImpact.replace('.', '')}
                  <span className="blueprint-heading-dot">.</span>
                </span>
              </h2>

              <div className="blueprint-support-block">
                <div className="blueprint-support-divider" aria-hidden="true"></div>
                <p className="blueprint-support-text">
                  {t.support}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 2. Frequently Asked Questions (FAQ) Section - Single Column Editorial Layout */}
      <div className="section-container faq-section-container">
        
        <div className="faq-header-center">
          <div className="faq-eyebrow-wrap">
            <span className="faq-eyebrow">{t.faqEyebrow}</span>
          </div>

          <h2 className="faq-main-heading">
            <span className="faq-heading-serif">{t.faqTitleSerif}</span>
            <span className="faq-heading-impact">
              {t.faqTitleImpact.replace('.', '')}
              <span className="faq-heading-dot">.</span>
            </span>
          </h2>
          
          <p className="faq-subtitle-desc">{t.subtitle}</p>
        </div>

        {/* 1-Column FAQ Accordion List */}
        <div className="faq-single-column-list">
          {t.faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div key={idx} className={`faq-accordion-item ${isOpen ? 'is-open' : ''}`}>
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-item-num">0{idx + 1}</span>
                  <span className="faq-question-text">{faq.q}</span>
                  <span className="faq-toggle-pill" aria-hidden="true">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                
                {isOpen && (
                  <div className="faq-answer-pane">
                    <div className="faq-accent-line" aria-hidden="true"></div>
                    <p className="faq-answer-text">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Support Prompt Banner */}
        <div className="faq-support-footer">
          <div className="faq-support-left">
            <span className="faq-support-prompt">{t.faqHelpPrompt}</span>
          </div>
          <button
            type="button"
            className="faq-support-btn"
            onClick={() => {
              const elem = document.getElementById('contact');
              if (elem) elem.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {t.faqHelpCta}
          </button>
        </div>

      </div>

    </section>
  );
};
