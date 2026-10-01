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
    <section className="contact-section" id="contact">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="section-header-wrap">
          <div className="section-badge-pill">{t.badge}</div>
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle">{t.subtitle}</p>
        </div>

        <div className="contact-layout-grid">
          
          {/* Enquiry Form */}
          <div className="contact-form-card">
            <h3 className="form-card-title">{t.form.title}</h3>

            {submitted ? (
              <div className="form-success-state">
                <div className="success-icon-badge">✓</div>
                <h4 className="success-heading">{t.form.successTitle}</h4>
                <p className="success-text">{t.form.successMessage}</p>
                <button
                  type="button"
                  className="btn-secondary mt-4"
                  onClick={handleReset}
                >
                  {t.form.sendAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="enquiry-form" noValidate>
                {errorMessage && (
                  <div className="form-error-alert">{errorMessage}</div>
                )}

                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    {t.form.fullName} <span className="req">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t.form.fullNamePlaceholder}
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-row-2col">
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      {t.form.phone} <span className="req">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t.form.phonePlaceholder}
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      {t.form.email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t.form.emailPlaceholder}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="course" className="form-label">
                    {t.form.courseSelect}
                  </label>
                  <select
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="form-select"
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

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    {t.form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t.form.messagePlaceholder}
                    className="form-textarea"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="form-submit-btn"
                >
                  {submitting ? (
                    <span>{t.form.submitting}</span>
                  ) : (
                    <>
                      <span>{t.form.submitButton}</span>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Direct Communication Channels */}
          <div className="contact-channels-card">
            <h3 className="channels-title">{t.directChannels.title}</h3>
            <p className="channels-desc">{t.directChannels.desc}</p>

            <div className="channels-action-stack">
              
              {/* WhatsApp Button */}
              <a
                href={`https://wa.me/919822000000?text=${encodeURIComponent(t.directChannels.whatsappMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="channel-btn whatsapp-action-btn"
              >
                <div className="channel-icon-pill wa-pill">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                </div>
                <div className="channel-text">
                  <span className="channel-action-name">{t.directChannels.whatsappBtn}</span>
                  <span className="channel-action-sub">+91 98220 00000</span>
                </div>
              </a>

              {/* Direct Phone */}
              <a
                href="tel:+919822000000"
                className="channel-btn phone-action-btn"
              >
                <div className="channel-icon-pill phone-pill">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className="channel-text">
                  <span className="channel-action-name">{t.directChannels.callBtn}</span>
                  <span className="channel-action-sub">Direct Consultation Line</span>
                </div>
              </a>

              {/* Direct Email */}
              <a
                href="mailto:contact@etenderguru.com"
                className="channel-btn email-action-btn"
              >
                <div className="channel-icon-pill email-pill">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className="channel-text">
                  <span className="channel-action-name">{t.directChannels.emailBtn}</span>
                  <span className="channel-action-sub">contact@etenderguru.com</span>
                </div>
              </a>

            </div>

            {/* Coverage note */}
            <div className="coverage-badge-note">
              <span className="coverage-dot"></span>
              <div>
                <strong>{t.directChannels.locationLabel}:</strong> {t.directChannels.locationValue}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
