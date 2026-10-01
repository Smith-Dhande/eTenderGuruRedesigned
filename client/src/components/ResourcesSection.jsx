import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const ResourcesSection = () => {
  const { language } = useLanguage();
  const t = translations[language].resources;
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  return (
    <section className="resources-section" id="resources">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="section-header-wrap">
          <div className="section-badge-pill">{t.badge}</div>
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle">{t.subtitle}</p>
        </div>

        {/* 6-Stage Step-by-Step E-Tendering Roadmap */}
        <div className="roadmap-block">
          <h3 className="subsection-title">{t.roadmapTitle}</h3>
          
          <div className="roadmap-grid">
            {t.roadmap.map((item, idx) => (
              <div key={idx} className="roadmap-step-card">
                <div className="step-badge">{item.step}</div>
                <div className="step-content">
                  <h4 className="step-title">{item.title}</h4>
                  <p className="step-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Two-Column: Document Checklist + Practical FAQs */}
        <div className="resources-bottom-grid">
          
          {/* Document Checklist */}
          <div className="checklist-box">
            <h3 className="subsection-title">{t.checklistTitle}</h3>
            <p className="checklist-intro">{t.checklistDesc}</p>

            <div className="checklist-items-list">
              {t.checklistItems.map((item, idx) => (
                <div key={idx} className="checklist-row">
                  <div className="checklist-status-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div className="checklist-item-info">
                    <span className="checklist-name">{item.name}</span>
                    <div className="checklist-tags">
                      <span className="checklist-category">{item.category}</span>
                      {item.mandatory && (
                        <span className="mandatory-tag">Mandatory</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Practical FAQs Accordion */}
          <div className="faqs-box">
            <h3 className="subsection-title">{t.faqTitle}</h3>
            
            <div className="faq-accordion-list">
              {t.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className={`faq-accordion-item ${isOpen ? 'open' : ''}`}>
                    <button
                      type="button"
                      className="faq-question-btn"
                      onClick={() => toggleFaq(idx)}
                      aria-expanded={isOpen}
                    >
                      <span className="faq-q-text">{faq.q}</span>
                      <span className="faq-icon" aria-hidden="true">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          {isOpen ? (
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                          ) : (
                            <>
                              <line x1="12" y1="5" x2="12" y2="19"></line>
                              <line x1="5" y1="12" x2="19" y2="12"></line>
                            </>
                          )}
                        </svg>
                      </span>
                    </button>
                    {isOpen && (
                      <div className="faq-answer-pane">
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
