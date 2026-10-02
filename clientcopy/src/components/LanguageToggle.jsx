import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div
      className="lang-toggle-wrapper"
      role="region"
      aria-label="Language selector"
    >
      <div className="lang-toggle-box">
        <button
          type="button"
          className={`lang-option-btn ${language === 'en' ? 'active' : ''}`}
          onClick={() => toggleLanguage('en')}
          aria-pressed={language === 'en'}
          aria-label="Switch to English"
        >
          EN
        </button>
        <span className="lang-option-sep" aria-hidden="true">/</span>
        <button
          type="button"
          className={`lang-option-btn ${language === 'mr' ? 'active' : ''}`}
          onClick={() => toggleLanguage('mr')}
          aria-pressed={language === 'mr'}
          aria-label="मराठी भाषेत बदला"
        >
          मराठी
        </button>
      </div>
    </div>
  );
};
