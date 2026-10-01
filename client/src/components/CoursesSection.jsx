import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { coursesData } from '../data/coursesData';
import { CourseModal } from './CourseModal';

export const CoursesSection = ({ onSelectCourseForEnquiry }) => {
  const { language } = useLanguage();
  const t = translations[language].courses;
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedCourse, setSelectedCourse] = useState(null);

  const filteredCourses = activeFilter === 'all'
    ? coursesData
    : coursesData.filter((c) => c.category === activeFilter);

  const handleOpenModal = (course) => {
    setSelectedCourse(course);
  };

  const handleCloseModal = () => {
    setSelectedCourse(null);
  };

  return (
    <section className="courses-section" id="courses">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="section-header-wrap">
          <div className="section-badge-pill">{t.badge}</div>
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle">{t.subtitle}</p>
        </div>

        {/* Courses Grid */}
        <div className="courses-grid">
          {filteredCourses.map((course) => {
            const title = course.title[language] || course.title.en;
            const shortDesc = course.shortDesc[language] || course.shortDesc.en;
            const duration = course.duration[language] || course.duration.en;
            const level = course.level[language] || course.level.en;
            const targetAudience = course.targetAudience[language] || course.targetAudience.en;

            return (
              <article key={course.id} className="course-card">
                <div className="course-card-top">
                  <span className="course-card-badge">{course.badge}</span>
                  <span className="course-duration-tag">{duration}</span>
                </div>

                <div className="course-card-content">
                  <h3 className="course-card-title">{title}</h3>
                  <p className="course-card-desc">{shortDesc}</p>
                  
                  <div className="course-audience-box">
                    <span className="audience-icon" aria-hidden="true">🎯</span>
                    <span className="audience-text">{targetAudience}</span>
                  </div>
                </div>

                <div className="course-card-footer">
                  <button
                    type="button"
                    className="course-view-btn"
                    onClick={() => handleOpenModal(course)}
                    aria-label={`${t.viewDetails} - ${title}`}
                  >
                    <span>{t.viewDetails}</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>

                  <button
                    type="button"
                    className="course-enquire-btn"
                    onClick={() => onSelectCourseForEnquiry(course.id)}
                    aria-label={`${t.enquireNow} - ${title}`}
                  >
                    <span>{t.enquireNow}</span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>

      </div>

      {/* Syllabus Modal */}
      <CourseModal
        course={selectedCourse}
        isOpen={Boolean(selectedCourse)}
        onClose={handleCloseModal}
        onSelectForEnquiry={onSelectCourseForEnquiry}
      />
    </section>
  );
};
