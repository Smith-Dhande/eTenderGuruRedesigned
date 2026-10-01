import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Check localStorage for saved preference or default to English ('en')
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('etender_lang') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('etender_lang', language);
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = (lang) => {
    if (lang === 'en' || lang === 'mr') {
      setLanguage(lang);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
