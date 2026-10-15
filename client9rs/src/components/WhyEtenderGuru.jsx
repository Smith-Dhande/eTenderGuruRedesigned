import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const WhyEtenderGuru = ({ onNextSection }) => {
  const { language } = useLanguage();
  const t = translations[language].whyEtenderGuru;

  return (
    <section
      id="why-etender-guru"
      className="py-12 sm:py-16 bg-[#f5f3ee] border-t border-[#e6e2db]"
      aria-labelledby="why-etender-guru-heading"
    >
      <div className="site-container">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10 text-left">
          <div>
            <span className="font-body text-[11px] sm:text-xs font-bold tracking-[0.14em] uppercase text-[#f15a24] block mb-2">
              {t.eyebrow}
            </span>
            <h2 id="why-etender-guru-heading" className="leading-tight">
              <span className="font-serif text-[#0f172a] text-2xl sm:text-3xl lg:text-[34px] block font-normal tracking-tight leading-tight">
                {t.titleSerif}
              </span>
              <span className="font-impact text-[#0f172a] text-3xl sm:text-4xl lg:text-[44px] block tracking-wide uppercase leading-none mt-1">
                {t.titleImpact}
                <span className="text-[#f15a24]">.</span>
              </span>
            </h2>
          </div>

          <div className="md:max-w-[320px] lg:max-w-[380px]">
            <p className="font-body text-xs sm:text-[13px] text-[#64748b] leading-relaxed">
              {t.support}
            </p>
          </div>
        </div>

        {/* 4 Concise Trust Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 text-left">
          {t.points.map((point, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-[#e2e8f0] p-5 sm:p-6 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Number Badge */}
                <span className="font-impact text-2xl sm:text-3xl text-[#f15a24] block mb-3 leading-none">
                  {point.num}
                </span>

                <h3 className="font-body font-bold text-sm sm:text-[15px] text-[#0f172a] mb-2 leading-snug">
                  {point.title}
                </h3>

                <p className="font-body text-xs text-[#64748b] leading-relaxed">
                  {point.desc}
                </p>
              </div>

              {/* Bottom Subtle Accent */}
              <div className="pt-4 mt-4 border-t border-[#f1f5f9] flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
                  Ground Pillar {idx + 1}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#f15a24]" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
