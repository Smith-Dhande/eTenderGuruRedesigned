import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const CourseModal = ({ course, isOpen, onClose, onEnroll }) => {
  const { language } = useLanguage();
  const t = translations[language].courseModal;

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
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

  const titleSerif = course.titleSerif[language] || course.titleSerif.en;
  const titleImpact = course.titleImpact[language] || course.titleImpact.en;
  const description = course.description ? (course.description[language] || course.description.en) : (course.shortDesc[language] || course.shortDesc.en);
  const duration = course.duration[language] || course.duration.en;
  const level = course.level[language] || course.level.en;
  const targetAudience = course.targetAudience ? (course.targetAudience[language] || course.targetAudience.en) : '';
  const prerequisites = course.prerequisites ? (course.prerequisites[language] || course.prerequisites.en) : '';
  const modules = course.modules ? (course.modules[language] || course.modules.en) : [];
  const keyTakeaways = course.keyTakeaways ? (course.keyTakeaways[language] || course.keyTakeaways.en) : [];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-course-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Content */}
      <div className="relative bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl z-10 border border-[#e6e2db] flex flex-col text-left">

        {/* Modal Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 sm:px-8 py-5 border-b border-[#e6e2db] flex items-center justify-between z-20">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-[#f15a24] text-white flex items-center justify-center font-bold text-sm">
              {course.num}
            </span>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#f15a24]">
                {course.categoryTag[language] || course.categoryTag.en}
              </span>
              <h3 id="modal-course-title" className="text-lg sm:text-xl font-bold text-[#0f172a] leading-tight">
                {course.title ? (course.title[language] || course.title.en) : `${titleSerif} ${titleImpact}`}
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full hover:bg-black/5 text-[#64748b] hover:text-[#0f172a] transition-colors cursor-pointer"
            aria-label={t.closeBtn}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">

          {/* Quick Summary Banner */}
          <div className="p-5 rounded-2xl bg-[#fff5f0] border border-[#f15a24]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold text-[#f15a24] uppercase tracking-wider mb-1">
                {language === 'mr' ? `विशेष ₹${course.price === 9 ? '९' : course.price} लर्निंग प्रोग्राम` : `Special ₹${course.price} Learning Program`}
              </p>
              <p className="text-sm text-[#475569] leading-relaxed">
                {description}
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-3 bg-white px-4 py-2 rounded-xl shadow-xs border border-[#e6e2db]">
              <span className="text-xs text-[#64748b] font-medium">Price:</span>
              <span className="font-editorial-impact text-2xl text-[#f15a24]">₹{course.price}</span>
            </div>
          </div>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 text-xs">
            <div className="p-3.5 rounded-xl bg-[#faf8f5] border border-[#e6e2db]">
              <span className="text-[#64748b] block mb-1 font-medium">{t.durationLabel}</span>
              <strong className="text-[#0f172a] text-sm font-semibold">{duration}</strong>
            </div>
            <div className="p-3.5 rounded-xl bg-[#faf8f5] border border-[#e6e2db]">
              <span className="text-[#64748b] block mb-1 font-medium">{t.levelLabel}</span>
              <strong className="text-[#0f172a] text-sm font-semibold">{level}</strong>
            </div>
            <div className="p-3.5 rounded-xl bg-[#faf8f5] border border-[#e6e2db] col-span-2 sm:col-span-1">
              <span className="text-[#64748b] block mb-1 font-medium">{t.formatLabel}</span>
              <strong className="text-[#0f172a] text-sm font-semibold">Video + Practical Docs</strong>
            </div>
          </div>

          {/* Target Audience & Prerequisites */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            {targetAudience && (
              <div className="p-4 rounded-xl bg-[#faf8f5] border border-[#e6e2db]">
                <h4 className="font-bold text-[#0f172a] mb-1.5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f15a24]"></span>
                  {t.audienceLabel}
                </h4>
                <p className="text-[#475569] leading-relaxed">{targetAudience}</p>
              </div>
            )}
            {prerequisites && (
              <div className="p-4 rounded-xl bg-[#faf8f5] border border-[#e6e2db]">
                <h4 className="font-bold text-[#0f172a] mb-1.5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f15a24]"></span>
                  {t.prerequisitesLabel}
                </h4>
                <p className="text-[#475569] leading-relaxed">{prerequisites}</p>
              </div>
            )}
          </div>

          {/* Syllabus Modules */}
          {modules.length > 0 && (
            <div>
              <h4 className="text-base font-bold text-[#0f172a] mb-3 flex items-center gap-2">
                <span className="font-editorial-impact text-[#f15a24]">MOD</span>
                {t.syllabusLabel}
              </h4>
              <div className="space-y-3">
                {modules.map((mod, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-[#e6e2db] bg-white hover:border-[#f15a24]/40 transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-[#fff5f0] text-[#f15a24]">
                        {mod.number}
                      </span>
                      <h5 className="font-bold text-sm text-[#0f172a]">
                        {mod.title}
                      </h5>
                    </div>
                    {mod.points && (
                      <ul className="pl-6 list-disc text-xs sm:text-sm text-[#475569] space-y-1">
                        {mod.points.map((pt, pIdx) => (
                          <li key={pIdx}>{pt}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Takeaways */}
          {keyTakeaways.length > 0 && (
            <div>
              <h4 className="text-base font-bold text-[#0f172a] mb-3">
                {t.keyTakeawaysLabel}
              </h4>
              <div className="grid grid-cols-1 gap-2.5">
                {keyTakeaways.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-[#faf8f5] border border-[#e6e2db]">
                    <svg className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-xs sm:text-sm text-[#0f172a] font-medium leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer with Direct Enrollment CTA */}
        <div className="sticky bottom-0 bg-[#faf8f5] px-6 sm:px-8 py-4 border-t border-[#e6e2db] flex flex-col sm:flex-row items-center justify-between gap-3 z-20">
          <p className="text-xs text-[#64748b]">
            {t.guarantee}
          </p>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl border border-[#d5cfc5] text-xs font-semibold text-[#475569] hover:bg-white transition-colors cursor-pointer"
            >
              {t.closeBtn}
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onEnroll(course);
              }}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-[#f15a24] hover:bg-[#e04b16] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <span>{t.enrollNow}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
