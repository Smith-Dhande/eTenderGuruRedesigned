import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { CourseCard } from './CourseCard';

export const CourseGrid = ({ courses, onOpenSyllabus, onEnroll }) => {
  const { language } = useLanguage();
  const t = translations[language].coursesSection;

  // Reusable filtering logic: Only display courses with price === 9
  const filteredCourses = courses.filter((course) => course.price === 9);

  return (
    <section className="courses-section" id="courses" aria-labelledby="courses-main-heading">
      <div className="section-container courses-container">

        {/* Eyebrow */}
        <div className="courses-eyebrow-wrap">
          <span className="courses-eyebrow">{t.eyebrow}</span>
        </div>

        {/* Top Header Row */}
        <div className="courses-header-row">
          <h2 className="courses-heading" id="courses-main-heading">
            <span className="courses-heading-serif">{t.titleSerif}</span>
            <span className="courses-heading-impact">
              {(t.titleImpact || '').replace(/\./g, '')}
              <span className="courses-heading-dot">.</span>
            </span>
          </h2>

          <div className="courses-header-details hidden md:flex">
            <div className="courses-support-divider" aria-hidden="true"></div>
            <p className="courses-support-text">
              {t.support}
            </p>
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="courses-grid">
          {filteredCourses.map((course, idx) => (
            <CourseCard
              key={course.id}
              course={course}
              isFeatured={idx === 0}
              onOpenSyllabus={onOpenSyllabus}
              onEnroll={onEnroll}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
