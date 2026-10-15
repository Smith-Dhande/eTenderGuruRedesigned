import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const FinalCTA = ({ onExploreClick }) => {
  const { language } = useLanguage();
  const t = translations[language].finalCta;

  return (
    <section className="py-12 sm:py-16 bg-[#faf8f5] relative overflow-hidden">
      <div className="site-container">
        <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#f15a24] via-[#ea580c] to-[#c2410c] text-white p-7 sm:p-10 lg:p-12 overflow-hidden shadow-lg text-left">

          {/* Architectural Background Circles */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white/10 blur-xl pointer-events-none" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-black/10 blur-xl pointer-events-none" aria-hidden="true" />

          {/* Authentic Modern Highway & Infrastructure Milestone Image Backdrop */}
          <div
            className="absolute inset-y-0 right-0 w-full sm:w-4/5 md:w-3/4 lg:w-[65%] pointer-events-none overflow-hidden select-none cta-construction-image-wrap"
          >
            <img
              src="/final-cta-highway-bg.jpg"
              alt="Completed Highway Infrastructure"
              className="w-full h-full object-cover object-[75%_center] sm:object-right opacity-80 sm:opacity-90"
            />
            {/* Smooth directional amber-terracotta gradient blend from left text */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#A83F0F] via-[#A83F0F]/65 to-transparent sm:via-[#A83F0F]/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#6d2606]/80 via-transparent to-[#A83F0F]/20" />
          </div>

          <div className="relative z-10 max-w-xl lg:max-w-2xl">
            {/* Eyebrow */}
            <span className="inline-block bg-white/20 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-3">
              {t.eyebrow}
            </span>

            {/* Heading */}
            <h2 className="leading-tight mb-3">
              <span className="block font-serif text-2xl sm:text-3xl lg:text-[34px] text-white">
                {t.titleSerif}
              </span>
              <span className="block font-impact text-3xl sm:text-4xl lg:text-[44px] text-amber-200 uppercase tracking-wide mt-1">
                {t.titleImpact}
              </span>
            </h2>

            {/* Subtitle (Hidden on mobile per user instruction) */}
            <p className="hidden sm:block font-body text-white/90 text-xs sm:text-sm leading-relaxed mb-6">
              {t.subtitle}
            </p>

            {/* Button */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                type="button"
                onClick={onExploreClick}
                className="final-tactile-btn"
                aria-label={t.ctaBtn}
              >
                <span>{t.ctaBtn}</span>
                <span className="btn-arrow-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </button>

              <span className="text-xs text-white/80 font-medium">
                {t.priceNotice}
              </span>
            </div>

            {/* Mini Trust Note */}
            <div className="mt-6 pt-5 border-t border-white/20 text-xs text-white/80 flex items-center gap-2">
              <span>{t.instantAccess}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
