import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const EnrollModal = ({ course, isOpen, onClose }) => {
  const { language } = useLanguage();
  const t = translations[language].enroll;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
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
  }, [isOpen]);

  const handleClose = () => {
    setIsSuccess(false);
    setIsSubmitting(false);
    setFormData({ name: '', phone: '', email: '' });
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setIsSubmitting(true);
    // Simulate instant secure processing for course registration
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 700);
  };

  if (!isOpen || !course) return null;

  const titleSerif = course.titleSerif[language] || course.titleSerif.en;
  const titleImpact = course.titleImpact[language] || course.titleImpact.en;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="enroll-modal-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl z-10 border border-[#e6e2db] text-left animate-in fade-in zoom-in-95 duration-200">

        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-black/5 text-[#64748b] hover:text-[#0f172a] transition-colors cursor-pointer"
          aria-label="Close"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {!isSuccess ? (
          <div>
            {/* Header */}
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#f15a24] bg-[#fff5f0] border border-[#f15a24]/20 px-2.5 py-1 rounded-full inline-block mb-2">
                {language === 'mr' ? `अधिकृत ₹${course?.price === 9 ? '९' : course?.price || '९'} नोंदणी` : `Official ₹${course?.price || 9} Registration`}
              </span>
              <h3 id="enroll-modal-title" className="text-2xl font-bold text-[#0f172a]">
                {t.modalTitle}
              </h3>
            </div>

            {/* Selected Course Card Pill */}
            <div className="p-4 rounded-2xl bg-[#faf8f5] border border-[#e6e2db] mb-6 flex items-center justify-between gap-3">
              <div>
                <span className="text-xs text-[#64748b] block font-medium">{t.selectedCourse}</span>
                <strong className="text-sm sm:text-base text-[#0f172a] font-bold block">
                  {course?.title ? (course.title[language] || course.title.en) : `${titleSerif} ${titleImpact}`}
                </strong>
              </div>
              <div className="text-right">
                <span className="text-xs text-[#64748b] block font-medium">{t.priceLabel}</span>
                <span className="font-editorial-impact text-2xl text-[#f15a24]">₹{course?.price || 9}</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#0f172a] uppercase tracking-wider mb-1.5">
                  {t.fullName} *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={t.fullNamePlaceholder}
                  className="w-full px-4 py-3 rounded-xl border border-[#d5cfc5] focus:border-[#f15a24] focus:ring-2 focus:ring-[#f15a24]/20 text-sm text-[#0f172a] outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0f172a] uppercase tracking-wider mb-1.5">
                  {t.phone} *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder={t.phonePlaceholder}
                  className="w-full px-4 py-3 rounded-xl border border-[#d5cfc5] focus:border-[#f15a24] focus:ring-2 focus:ring-[#f15a24]/20 text-sm text-[#0f172a] outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0f172a] uppercase tracking-wider mb-1.5">
                  {t.email}
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder={t.emailPlaceholder}
                  className="w-full px-4 py-3 rounded-xl border border-[#d5cfc5] focus:border-[#f15a24] focus:ring-2 focus:ring-[#f15a24]/20 text-sm text-[#0f172a] outline-none transition-colors"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-[#f15a24] hover:bg-[#e04b16] text-white font-black text-sm sm:text-base tracking-wide shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer disabled:opacity-50 mt-2 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>{t.processing}</span>
                ) : (
                  <>
                    <span>{t.payBtn}</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </>
                )}
              </button>

              <p className="text-center text-[11px] text-[#64748b] mt-3">
                {t.secureNote}
              </p>
            </form>
          </div>
        ) : (
          /* Success Screen */
          <div className="py-4 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>

            <h3 className="text-2xl font-bold text-[#0f172a] mb-2">
              {t.successTitle}
            </h3>

            <p className="text-sm text-[#475569] leading-relaxed mb-6 max-w-sm mx-auto">
              {t.successMessage}
            </p>

            <div className="p-4 rounded-2xl bg-[#faf8f5] border border-[#e6e2db] mb-6 text-left">
              <div className="flex items-center justify-between text-xs text-[#64748b] mb-1">
                <span>Course Activated:</span>
                <span className="font-bold text-[#f15a24]">₹{course?.price || 9} Paid</span>
              </div>
              <p className="font-bold text-sm text-[#0f172a]">
                {course?.title ? (course.title[language] || course.title.en) : `${titleSerif} ${titleImpact}`}
              </p>
              <p className="text-xs text-[#475569] mt-1">
                Learner: {formData.name} • {formData.phone}
              </p>
            </div>

            <button
              type="button"
              onClick={handleClose}
              className="w-full py-3.5 rounded-xl bg-[#0f172a] hover:bg-[#1e293b] text-white font-bold text-sm tracking-wide shadow-md transition-colors cursor-pointer"
            >
              {t.closeSuccess}
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
