import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { coursesData } from '../data/coursesData';
import { CourseModal } from './CourseModal';

// Single-row marquee ticker for overflowing titleImpact text
const MarqueeImpactTitle = ({ text }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const checkOverflow = () => {
      if (containerRef.current && textRef.current) {
        setIsOverflowing(textRef.current.scrollWidth > containerRef.current.clientWidth + 2);
      }
    };
    checkOverflow();
    const timer = setTimeout(checkOverflow, 120);
    window.addEventListener('resize', checkOverflow);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkOverflow);
    };
  }, [text]);

  return (
    <div className="card-title-impact-marquee-wrap" ref={containerRef}>
      <div className={`card-title-impact-track ${isOverflowing ? 'is-marquee-active' : ''}`}>
        <span className="card-title-impact" ref={textRef}>
          {text}
        </span>
        {isOverflowing && (
          <span className="card-title-impact marquee-dup" aria-hidden="true">
            {text}
          </span>
        )}
      </div>
    </div>
  );
};

export const CoursesSection = ({ onSelectCourseForEnquiry }) => {
  const { language } = useLanguage();
  const t = translations[language].courses;
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const trackRef = useRef(null);

  const handleOpenModal = (course) => {
    setSelectedCourse(course);
  };

  const handleCloseModal = () => {
    setSelectedCourse(null);
  };

  const scrollToCard = (index) => {
    if (!trackRef.current) return;
    const clamped = Math.max(0, Math.min(index, coursesData.length - 1));
    setActiveCardIndex(clamped);
    const cardElement = trackRef.current.children[clamped];
    if (cardElement) {
      cardElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  };

  const handlePrev = () => {
    scrollToCard(activeCardIndex - 1);
  };

  const handleNext = () => {
    scrollToCard(activeCardIndex + 1);
  };

  return (
    <section className="courses-section" id="courses" aria-labelledby="courses-main-heading">
      <div className="section-container courses-container">

        {/* 1. Eyebrow */}
        <div className="courses-eyebrow-wrap">
          <span className="courses-eyebrow">{t.eyebrow}</span>
        </div>

        {/* 2. Top Header Row: Main Heading + Supporting Text & Benefit Indicators */}
        <div className="courses-header-row">

          {/* Main Editorial Heading */}
          <h2 className="courses-heading" id="courses-main-heading">
            <span className="courses-heading-serif">{t.titleSerif}</span>
            <span className="courses-heading-impact">
              {t.titleImpact.replace('.', '')}
              <span className="courses-heading-dot">.</span>
            </span>
          </h2>

          {/* Header Supporting Copy */}
          <div className="courses-header-details">
            <div className="courses-support-divider" aria-hidden="true"></div>
            <p className="courses-support-text">
              {t.support}
            </p>


          </div>

        </div>

        {/* 3. Course Cards Track (Exact Reference Proportion & Hierarchy) */}
        <div className="courses-grid" ref={trackRef}>
          {coursesData.map((course, idx) => {
            const titleSerif = course.titleSerif[language] || course.titleSerif.en;
            const titleImpact = course.titleImpact[language] || course.titleImpact.en;
            const shortDesc = course.shortDesc[language] || course.shortDesc.en;
            const categoryTag = course.categoryTag[language] || course.categoryTag.en;
            const isFeatured = idx === 0;

            return (
              <article
                key={course.id}
                className={`course-editorial-card ${isFeatured ? 'featured-card' : ''}`}
                onClick={() => handleOpenModal(course)}
                tabIndex={0}
                role="button"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleOpenModal(course);
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

                {/* Card Title (DM Serif Display + Anton single-row with right-to-left marquee on overflow) */}
                <h3 className="card-title-block">
                  <span className="card-title-serif">{titleSerif}</span>
                  <MarqueeImpactTitle text={titleImpact} />
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
                </div>

                {/* Minimal Metadata Row & Circular Arrow Button */}
                {/* Card Footer: Explore text on bottom-left, Action Arrow on bottom-right */}
                <div className="card-footer-bar">
                  <span className="card-explore-action">
                    <span className="card-explore-text">{t.explore || 'Explore'}</span>
                  </span>

                  {/* Clean Circular Action Arrow Button */}
                  <button
                    type="button"
                    className={`card-arrow-circle-btn ${isFeatured ? 'btn-active-orange' : 'btn-default-white'}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpenModal(course);
                    }}
                    aria-label={`${t.explore || 'Explore'} ${titleSerif} ${titleImpact}`}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </div>

              </article>
            );
          })}
        </div>

        {/* 4. Minimal Carousel Navigation Controls at Bottom */}
        <div className="courses-carousel-nav" aria-label="Course carousel pagination">

          <button
            type="button"
            className="carousel-nav-arrow-btn"
            onClick={handlePrev}
            disabled={activeCardIndex === 0}
            aria-label="Previous course"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </button>

          <div className="carousel-progress-track">
            {coursesData.map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                className={`carousel-track-pill ${dotIdx === activeCardIndex ? 'pill-active' : ''}`}
                onClick={() => scrollToCard(dotIdx)}
                aria-label={`Go to slide ${dotIdx + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            className="carousel-nav-arrow-btn"
            onClick={handleNext}
            disabled={activeCardIndex === coursesData.length - 1}
            aria-label="Next course"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>

        </div>

      </div>

      {/* Course Detailed Syllabus Modal */}
      <CourseModal
        course={selectedCourse}
        isOpen={Boolean(selectedCourse)}
        onClose={handleCloseModal}
        onSelectForEnquiry={onSelectCourseForEnquiry}
      />
    </section>
  );
};
