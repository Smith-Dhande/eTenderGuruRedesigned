import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const CourseModal = ({ course, isOpen, onClose, onSelectForEnquiry }) => {
  const { language } = useLanguage();
  const t = translations[language].courses;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !course) return null;

  const modules = course.modules[language] || course.modules.en;
  const keyTakeaways = course.keyTakeaways[language] || course.keyTakeaways.en;
  const title = course.title[language] || course.title.en;
  const shortDesc = course.shortDesc[language] || course.shortDesc.en;
  const duration = course.duration[language] || course.duration.en;
  const level = course.level[language] || course.level.en;
  const targetAudience = course.targetAudience[language] || course.targetAudience.en;
  const prerequisites = course.prerequisites[language] || course.prerequisites.en;

  const handleEnquire = () => {
    onClose();
    onSelectForEnquiry(course.id);
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-header-info">
            <span className="course-badge-pill">{course.badge}</span>
            <h2 className="modal-title">{title}</h2>
            <p className="modal-short-desc">{shortDesc}</p>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label={t.modalClose}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Modal Quick Meta Bar */}
        <div className="modal-meta-grid">
          <div className="modal-meta-card">
            <span className="meta-label">{t.durationLabel}</span>
            <span className="meta-val">{duration}</span>
          </div>
          <div className="modal-meta-card">
            <span className="meta-label">{t.levelLabel}</span>
            <span className="meta-val">{level}</span>
          </div>
          <div className="modal-meta-card">
            <span className="meta-label">{t.targetAudienceLabel}</span>
            <span className="meta-val">{targetAudience}</span>
          </div>
          <div className="modal-meta-card">
            <span className="meta-label">{t.prerequisitesLabel}</span>
            <span className="meta-val">{prerequisites}</span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="modal-body-scroll">
          
          {/* Syllabus Modules */}
          <div className="modal-section">
            <h3 className="modal-section-title">{t.modulesLabel}</h3>
            <div className="modules-list">
              {modules.map((m, idx) => (
                <div key={idx} className="module-item">
                  <div className="module-num">{m.number}</div>
                  <div className="module-content">
                    <h4 className="module-title">{m.title}</h4>
                    <ul className="module-points">
                      {m.points.map((pt, pIdx) => (
                        <li key={pIdx}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Takeaways */}
          <div className="modal-section takeaways-section">
            <h3 className="modal-section-title">{t.keyTakeawaysLabel}</h3>
            <div className="takeaways-grid">
              {keyTakeaways.map((item, idx) => (
                <div key={idx} className="takeaway-item">
                  <span className="takeaway-icon" aria-hidden="true">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <button type="button" className="btn-secondary" onClick={onClose}>
            {t.modalClose}
          </button>
          <button type="button" className="btn-primary" onClick={handleEnquire}>
            <span>{t.enquireNow}</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>

      </div>
    </div>
  );
};
