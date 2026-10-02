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
        {/* Decorative Outlined Editorial Wordmark (Bottom-Right Background) */}
        <div className="footer-editorial-wordmark" aria-hidden="true">
          <span>eTender Guru</span>
        </div>

        <div className="footer-inner-container">
          
          {/* Footer Top Grid */}
          <div className="footer-top-grid">
            
            {/* Brand Column (Logo Only) */}
            <div className="footer-brand-col">
              <div className="footer-brand-identity">
                <div className="footer-logo-wrap">
                  <img
                    src="/logoTenderGuru.png"
                    alt="eTender Guru Logo"
                    className="footer-brand-logo"
                  />
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
                  href="https://www.facebook.com/etenderguru001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-icon fb-icon"
                  aria-label="eTender Guru Facebook"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/e_tender_guru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-icon insta-icon"
                  aria-label="eTender Guru Instagram"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://wa.me/919975917001"
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
