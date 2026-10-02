import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language].footer;

  const scrollToSection = (id) => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="footer-viewport-wrapper">
      <footer className="footer-banner" id="footer">
        <div className="footer-inner-container">
          
          {/* Footer Top Grid */}
          <div className="footer-top-grid">
            
            {/* Brand Column */}
            <div className="footer-brand-col">
              <div className="footer-brand-identity">
                <div className="footer-logo-wrap">
                  <img
                    src="/logoTenderGuru.png"
                    alt="eTender Guru Logo"
                    className="footer-brand-logo"
                  />
                </div>

                {/* Editorial Signature Typography: Serif + Anton Impact (Stacked 2-line) */}
                <div className="footer-brand-heading">
                  <span className="footer-brand-serif">{language === 'mr' ? 'ई-टेंडर' : 'eTender'}</span>
                  <span className="footer-brand-impact">
                    {language === 'mr' ? 'गुरू' : 'GURU'}
                    <span className="footer-brand-dot">.</span>
                  </span>
                </div>
              </div>

              <div className="footer-social-links">
                <a
                  href="https://www.youtube.com/@eTENDERGURU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-icon yt-icon"
                  aria-label="eTender Guru YouTube"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a
                  href="https://wa.me/919822000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-icon wa-icon"
                  aria-label="eTender Guru WhatsApp"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Navigation Column */}
            <div className="footer-links-col">
              <h4 className="footer-col-title">{t.navTitle}</h4>
              <ul className="footer-nav-list">
                <li>
                  <button type="button" onClick={() => scrollToSection('courses')}>
                    {t.navCourses}
                  </button>
                </li>
                <li>
                  <button type="button" onClick={() => scrollToSection('youtube')}>
                    {t.navYoutube}
                  </button>
                </li>
                <li>
                  <button type="button" onClick={() => scrollToSection('about')}>
                    {t.navFounder}
                  </button>
                </li>
                <li>
                  <button type="button" onClick={() => scrollToSection('resources')}>
                    {t.navResources}
                  </button>
                </li>
                <li>
                  <button type="button" onClick={() => scrollToSection('contact')}>
                    {t.navContact}
                  </button>
                </li>
              </ul>
            </div>

            {/* Clean Disclaimer Column (No Glassmorphism) */}
            <div className="footer-legal-col">
              <h4 className="footer-col-title">{t.legalTitle}</h4>
              <p className="footer-disclaimer-text">{t.disclaimer}</p>
            </div>

          </div>

          {/* Footer Bottom Bar */}
          <div className="footer-bottom-bar">
            <div className="footer-bottom-content">
              <span className="copyright-text">{t.copyright}</span>
              <span className="footer-bar-separator" aria-hidden="true">|</span>
              <a
                href="https://clickinnovate.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-creator-inline-link"
                aria-label="Made with love by Clickinnovate Pvt. Ltd."
              >
                <span>
                  Made with{' '}
                  <span className="footer-white-heart" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#ffffff" stroke="#ffffff" strokeWidth="1">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  </span>{' '}
                  by Clickinnovate Pvt. Ltd.
                </span>
              </a>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
};
