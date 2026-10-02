import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { coursesData } from '../data/coursesData';

export const ContactSection = ({ selectedCourseId, onClearSelectedCourse }) => {
  const { language } = useLanguage();
  const t = translations[language].contact;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Update selected course if changed from parent
  useEffect(() => {
    if (selectedCourseId) {
      setFormData((prev) => ({ ...prev, course: selectedCourseId }));
    }
  }, [selectedCourseId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSelectChip = (courseId) => {
    setFormData((prev) => ({ ...prev, course: courseId }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMessage(t.form.errorTitle);
      return;
    }

    setSubmitting(true);

    // Simulate reliable enquiry submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      if (onClearSelectedCourse) onClearSelectedCourse();
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      course: '',
      message: ''
    });
    setSubmitted(false);
    setErrorMessage('');
  };

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-main-heading">
      <div className="section-container">

        {/* 1. Eyebrow */}
        <div className="contact-eyebrow-wrap">
          <span className="contact-eyebrow">{t.eyebrow}</span>
        </div>

        {/* 2. Top Header Row (Matches Courses & Founder Editorial Hierarchy) */}
        <div className="contact-header-row">
          <h2 className="contact-main-heading" id="contact-main-heading">
            <span className="contact-heading-serif">{t.titleSerif}</span>
            <span className="contact-heading-impact">
              {t.titleImpact.replace('.', '')}
              <span className="contact-heading-dot">.</span>
            </span>
          </h2>

          <div className="contact-header-details">
            <div className="contact-support-divider" aria-hidden="true"></div>
            <p className="contact-support-text">
              {t.support}
            </p>
          </div>
        </div>

        {/* 3. Unified Panoramic Studio Architecture */}
        <div className="contact-studio-board">
          <div className="studio-split-layout">

            {/* Left Column: Minimalist Course Application Form */}
            <div className="studio-form-pane">

              <div className="studio-form-header">
                <div className="studio-header-tag">DIRECT INSTRUCTOR DESK</div>
                <h3 className="studio-form-title">{t.form.title}</h3>
                <p className="studio-form-subtitle">
                  {language === 'mr'
                    ? 'आपली माहिती भरा, आमची तज्ज्ञ टीम अभ्यासक्रम व नोंदणी मार्गदर्शनासाठी संपर्क करेल.'
                    : 'Submit your query below. Our training team will review and share customized enrollment guidance.'}
                </p>
              </div>

              {submitted ? (
                <div className="studio-success-pane">
                  <div className="studio-success-circle" aria-hidden="true">✓</div>
                  <h4 className="studio-success-title">{t.form.successTitle}</h4>
                  <p className="studio-success-desc">{t.form.successMessage}</p>
                  <button
                    type="button"
                    className="studio-reset-btn"
                    onClick={handleReset}
                  >
                    {t.form.sendAnother}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="studio-form-element" noValidate>

                  {errorMessage && (
                    <div className="studio-error-banner" role="alert">{errorMessage}</div>
                  )}

                  {/* Name and Phone Row */}
                  <div className="studio-input-grid">
                    <div className="studio-field-block">
                      <label htmlFor="name" className="studio-field-label">
                        <span className="field-num">01</span>
                        <span>{t.form.fullName}</span>
                        <span className="field-req">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={t.form.fullNamePlaceholder}
                        className="studio-input"
                        required
                      />
                    </div>

                    <div className="studio-field-block">
                      <label htmlFor="phone" className="studio-field-label">
                        <span className="field-num">02</span>
                        <span>{t.form.phone}</span>
                        <span className="field-req">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder={t.form.phonePlaceholder}
                        className="studio-input"
                        required
                      />
                    </div>
                  </div>

                  {/* Email and Course Select Row */}
                  <div className="studio-input-grid">
                    <div className="studio-field-block">
                      <label htmlFor="email" className="studio-field-label">
                        <span className="field-num">03</span>
                        <span>{t.form.email}</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t.form.emailPlaceholder}
                        className="studio-input"
                      />
                    </div>

                    <div className="studio-field-block">
                      <label htmlFor="course" className="studio-field-label">
                        <span className="field-num">04</span>
                        <span>{t.form.courseSelect}</span>
                      </label>
                      <select
                        id="course"
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        className="studio-select"
                      >
                        <option value="">{t.form.selectDefault}</option>
                        {coursesData.map((c) => (
                          <option key={c.id} value={c.id}>
                            {c.title[language] || c.title.en}
                          </option>
                        ))}
                        <option value="custom">General Tender Consultation</option>
                      </select>
                    </div>
                  </div>

                  {/* Message Field (Spanning 2 columns / full width) */}
                  <div className="studio-field-block">
                    <label htmlFor="message" className="studio-field-label">
                      <span className="field-num">05</span>
                      <span>{t.form.message}</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="3"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t.form.messagePlaceholder}
                      className="studio-textarea"
                    ></textarea>
                  </div>

                  {/* Submit CTA Button (Spanning 2 columns / full width) */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="studio-submit-btn"
                  >
                    {submitting ? (
                      <span>{t.form.submitting}</span>
                    ) : (
                      <>
                        <span>{t.form.submitButton}</span>
                        <span className="studio-btn-arrow" aria-hidden="true">→</span>
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>

            {/* Right Column: Warm Editorial Direct Consultation Studio */}
            <div className="studio-dispatch-pane">

              <div className="dispatch-header">
                <div className="dispatch-eyebrow">
                  <span className="dispatch-live-dot" aria-hidden="true"></span>
                  <span>{language === 'mr' ? 'थेट संपर्क केंद्र' : 'DIRECT CONSULTATION HUB'}</span>
                </div>
                <h3 className="dispatch-title">{t.directChannels.title}</h3>
                <p className="dispatch-desc">{t.directChannels.desc}</p>
              </div>

              <div className="dispatch-cards-stack">

                {/* 1. WhatsApp Card */}
                <a
                  href={`https://wa.me/919975917001?text=${encodeURIComponent(t.directChannels.whatsappMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dispatch-action-tile wa-tile"
                >
                  <div className="dispatch-icon-box wa-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                  </div>
                  <div className="dispatch-tile-content">
                    <div className="dispatch-tile-top">
                      <span className="dispatch-tile-title">{t.directChannels.whatsappBtn}</span>
                      <span className="dispatch-status-badge wa-active">Instant Reply</span>
                    </div>
                    <span className="dispatch-tile-sub">+91 99759 17001</span>
                  </div>
                  <span className="dispatch-tile-arrow" aria-hidden="true">↗</span>
                </a>

                {/* 2. Direct Phone Card */}
                <a
                  href="tel:+919975917001"
                  className="dispatch-action-tile phone-tile"
                >
                  <div className="dispatch-icon-box phone-box">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div className="dispatch-tile-content">
                    <div className="dispatch-tile-top">
                      <span className="dispatch-tile-title">{t.directChannels.callBtn}</span>
                      <span className="dispatch-status-badge phone-active">Mon-Sat 9AM-7PM</span>
                    </div>
                    <span className="dispatch-tile-sub">+91 99759 17001</span>
                  </div>
                  <span className="dispatch-tile-arrow" aria-hidden="true">↗</span>
                </a>

                {/* 3. Official Email Card */}
                <a
                  href="mailto:etenderguru@gmail.com"
                  className="dispatch-action-tile email-tile"
                >
                  <div className="dispatch-icon-box email-box">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div className="dispatch-tile-content">
                    <div className="dispatch-tile-top">
                      <span className="dispatch-tile-title">{t.directChannels.emailBtn}</span>
                      <span className="dispatch-status-badge email-active">Official Desk</span>
                    </div>
                    <span className="dispatch-tile-sub">etenderguru@gmail.com</span>
                  </div>
                  <span className="dispatch-tile-arrow" aria-hidden="true">↗</span>
                </a>

              </div>

              {/* Trust Footnote & Coverage Info */}
              <div className="dispatch-trust-box">
                <div className="trust-coverage-row">
                  <div className="trust-dot-pulse" aria-hidden="true"></div>
                  <div className="trust-text-group">
                    <span className="trust-label">{t.directChannels.locationLabel}</span>
                    <span className="trust-val">{t.directChannels.locationValue}</span>
                  </div>
                </div>
                <div className="trust-bullet-row">
                  <span>✓ ISO CERTIFIED INSTITUTE : 9001-2015</span>
                  <span>✓ Direct Instructor Guidance</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
