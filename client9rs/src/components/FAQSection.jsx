import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const FAQSection = () => {
  const { language } = useLanguage();
  const t = translations[language].faq;
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  const handleSupportClick = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.open('https://wa.me/919975917001?text=Hello%2C%20I%20have%20a%20question%20about%20eTender%20Guru%20course', '_blank');
    }
  };

  return (
    <section className="faq-section" id="faq" aria-labelledby="faq-main-heading">
      <div className="section-container faq-section-container">
        
        <div className="faq-header-center">
          <div className="faq-eyebrow-wrap">
            <span className="faq-eyebrow">{t.eyebrow}</span>
          </div>

          <h2 className="faq-main-heading" id="faq-main-heading">
            <span className="faq-heading-serif">{t.titleSerif}</span>
            <span className="faq-heading-impact">
              {(t.titleImpact || '').replace('.', '')}
              <span className="faq-heading-dot">.</span>
            </span>
          </h2>
          
          <p className="faq-subtitle-desc">{t.support}</p>
        </div>

        {/* 1-Column FAQ Accordion List */}
        <div className="faq-single-column-list">
          {t.items.map((faq, idx) => {
            const isOpen = openFaq === idx;
            const buttonId = `faq-btn-${idx}`;
            const panelId = `faq-panel-${idx}`;

            return (
              <div key={idx} className={`faq-accordion-item ${isOpen ? 'is-open' : ''}`}>
                <button
                  id={buttonId}
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <span className="faq-item-num">0{idx + 1}</span>
                  <span className="faq-question-text">{faq.q}</span>
                  <span className="faq-toggle-pill" aria-hidden="true">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                
                {isOpen && (
                  <div id={panelId} role="region" aria-labelledby={buttonId} className="faq-answer-pane">
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
            <span className="faq-support-prompt">{t.faqHelpPrompt || "Have a specific question about your road tender qualification?"}</span>
          </div>
          <button
            type="button"
            className="faq-support-btn"
            onClick={handleSupportClick}
            aria-label={t.faqHelpCta || "Ask Our Experts"}
          >
            {t.faqHelpCta || (language === 'mr' ? 'आमच्याशी संपर्क साधा' : 'Ask Our Experts')}
          </button>
        </div>

      </div>
    </section>
  );
};
