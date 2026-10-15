import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const HowItWorks = ({ onStartClick }) => {
  const { language } = useLanguage();
  const t = translations[language].howItWorks;

  return (
    <section
      id="how-it-works"
      className="py-12 sm:py-16 lg:py-20 bg-[#faf8f5] border-t border-[#e6e2db]"
      aria-labelledby="how-it-works-heading"
    >
      <div className="site-container">

        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14 text-left">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="font-body text-[11px] sm:text-xs font-bold tracking-[0.14em] uppercase text-[#f15a24]">
              {t.eyebrow}
            </span>
          </div>

          {/* Heading */}
          <h2
            id="how-it-works-heading"
            className="leading-tight mb-4"
          >
            <span className="font-serif text-[#0f172a] text-2xl sm:text-3xl lg:text-[34px] mr-2">
              {t.titleSerif}
            </span>
            <span className="font-impact text-[#f15a24] text-3xl sm:text-4xl lg:text-[44px] uppercase tracking-wide">
              {t.titleImpact}
            </span>
          </h2>

          <p className="font-body text-[#475569] text-xs sm:text-sm leading-relaxed">
            {t.support}
          </p>
        </div>

        {/* 3 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 relative">

          {t.steps.map((step, idx) => (
            <div
              key={idx}
              className="relative p-6 sm:p-7 rounded-2xl bg-white border border-[#e2e8f0] shadow-xs hover:shadow-md transition-all flex flex-col justify-between text-left"
            >
              <div>
                {/* Step Indicator Header */}
                <div className="flex items-center justify-between mb-5">
                  <span className="font-impact text-3xl sm:text-4xl text-[#f15a24] leading-none">
                    {step.step}
                  </span>
                  <span className="font-body text-[10px] font-bold uppercase tracking-wider text-[#64748b] bg-[#f5f3ee] px-2.5 py-1 rounded-md">
                    {language === 'mr' ? `पायरी ${idx + 1}` : `Step ${idx + 1}`}
                  </span>
                </div>

                <h3 className="font-body text-sm sm:text-base font-bold text-[#0f172a] mb-2 leading-snug">
                  {step.title}
                </h3>

                <p className="font-body text-[#475569] text-xs leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Step Mini Footer with Neutral Labels */}
              <div className="pt-4 mt-5 border-t border-[#f1f5f9] flex items-center justify-between">
                <span className="font-body text-xs font-semibold text-[#f15a24]">
                  {idx === 0
                    ? (language === 'mr' ? 'कोर्स निवडा' : 'Select Course')
                    : idx === 1
                    ? (language === 'mr' ? 'नोंदणी करा' : 'Register for ₹9')
                    : (language === 'mr' ? 'शिकायला सुरुवात' : 'Start Learning')}
                </span>
                <span className="w-2 h-2 rounded-full bg-[#f15a24]"></span>
              </div>
            </div>
          ))}

        </div>

        {/* Callout Prompt */}
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={onStartClick}
            className="tactile-btn-primary"
            aria-label={t.actionBtn || (language === 'mr' ? 'फक्त ₹९ मध्ये सुरू करा' : 'START FOR ₹9')}
          >
            <span>{t.actionBtn || (language === 'mr' ? 'फक्त ₹९ मध्ये सुरू करा' : 'START FOR ₹9')}</span>
            <span className="btn-arrow-icon" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
          </button>
        </div>

      </div>
    </section>
  );
};
