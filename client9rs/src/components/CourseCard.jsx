import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const CourseCard = ({ course, isFeatured, onOpenSyllabus, onEnroll }) => {
  const { language } = useLanguage();

  const titleSerif = course.titleSerif[language] || course.titleSerif.en;
  const titleImpact = course.titleImpact[language] || course.titleImpact.en;
  const shortDesc = course.shortDesc[language] || course.shortDesc.en;
  const categoryTag = course.categoryTag[language] || course.categoryTag.en;

  return (
    <article
      className={`course-editorial-card ${isFeatured ? 'featured-card' : ''}`}
      onClick={() => onOpenSyllabus(course)}
      tabIndex={0}
      role="button"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onOpenSyllabus(course);
        }
      }}
      aria-label={`View syllabus for ${titleSerif} ${titleImpact}`}
    >
      {/* Card Top: Number with thin orange line & Category Tag */}
      <div className="card-top-header">
        <div className="card-number-wrap">
          <span className="card-num-text">{course.num}</span>
          <span className="card-num-dash" aria-hidden="true"></span>
        </div>
        <span className="card-category-label">{categoryTag}</span>
      </div>

      {/* Card Title (DM Serif Display + Anton single-row) */}
      <h3 className="card-title-block">
        <span className="card-title-serif">{titleSerif}</span>
        <span className="card-title-impact">{titleImpact}</span>
      </h3>

      {/* Short 1-2 line description */}
      <p className="card-short-description">
        {shortDesc}
      </p>

      {/* Substantial Lower Visual Image with Subtle Orange Tint & Background Curve */}
      <div className="card-visual-wrapper">
        <div className="card-visual-backdrop" aria-hidden="true"></div>
        <img
          src={course.image}
          alt={`${titleSerif} ${titleImpact}`}
          className="card-visual-image"
          loading="lazy"
        />
        <div className="card-visual-overlay" aria-hidden="true"></div>

        {/* Integrated Price Tag */}
        <div className="absolute top-2.5 right-2.5 bg-[#f15a24] text-white font-editorial-impact text-xs tracking-wider px-2 py-0.5 rounded-md shadow-md z-10">
          ₹{course.price}
        </div>
      </div>

      {/* Card Footer: Explore text on bottom-left, Action Arrow on bottom-right */}
      <div className="card-footer-bar">
        <span className="card-explore-action">
          <span className="card-explore-text">
            {course.cta ? (course.cta[language] || course.cta.en) : (language === 'mr' ? `फक्त ₹${course.price === 9 ? '९' : course.price} मध्ये सुरू करा` : `Start for ₹${course.price}`)}
          </span>
        </span>

        {/* Clean Circular Action Arrow Button */}
        <button
          type="button"
          className={`card-arrow-circle-btn ${isFeatured ? 'btn-active-orange' : 'btn-default-white'}`}
          onClick={(e) => {
            e.stopPropagation();
            onEnroll(course);
          }}
          aria-label={`Enroll in ${course.title ? (course.title[language] || course.title.en) : `${titleSerif} ${titleImpact}`}`}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </div>
    </article>
  );
};
