import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { coursesData } from './data/coursesData';
import { LanguageToggle } from './components/LanguageToggle';
import { HeroSection } from './components/HeroSection';
import { FounderVideoSection } from './components/FounderVideoSection';
import { CourseGrid } from './components/CourseGrid';
import { WhyNineRupee } from './components/WhyNineRupee';
import { FounderSection } from './components/FounderSection';
import { WhoIsThisFor } from './components/WhoIsThisFor';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { CourseModal } from './components/CourseModal';
import { EnrollModal } from './components/EnrollModal';
import { PolicyModal } from './components/PolicyModal';
import { RoadWorkTransition } from './components/RoadWorkTransition';

function LandingPage() {
  const [selectedCourseForSyllabus, setSelectedCourseForSyllabus] = useState(null);
  const [selectedCourseForEnroll, setSelectedCourseForEnroll] = useState(null);
  const [activePolicy, setActivePolicy] = useState(null); // 'privacy' | 'refund' | null

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenSyllabus = (course) => {
    setSelectedCourseForSyllabus(course);
  };

  const handleCloseSyllabus = () => {
    setSelectedCourseForSyllabus(null);
  };

  const handleOpenEnroll = (course) => {
    const courseToEnroll = course || coursesData.find((c) => c.price === 9) || coursesData[0];
    setSelectedCourseForEnroll(courseToEnroll);
  };

  const handleCloseEnroll = () => {
    setSelectedCourseForEnroll(null);
  };

  return (
    <div className="etender-app-root">
      {/* Persistent Floating Language Toggle */}
      <LanguageToggle />

      <main>
        {/* 1. ₹9 THEKEDARI — ROAD TENDER INFORMATION (Hero) */}
        <HeroSection
          onMeetFounder={() => scrollTo('founder-video')}
          onExploreCourses={() => scrollTo('courses')}
          onEnroll={() => handleOpenEnroll()}
        />

        {/* 2. 02 — THE PERSON (Founder Video / Owner Talk) */}
        <FounderVideoSection />

        {/* 3. 03 — LEAD INSTRUCTOR & EXPERT (Founder Section) */}
        <FounderSection onExploreClick={() => scrollTo('courses')} />

        {/* 3.5. WEBINAR FOR WHOM? (Target Audience Section) */}
        <WhoIsThisFor onEnroll={() => handleOpenEnroll()} />

        {/* 4. 02 — OUR APPROACH (Why Learn for ₹9?) */}
        <WhyNineRupee onExploreClick={() => scrollTo('courses')} />

        {/* 5. 01 — LEARN (Course Collection) */}
        <CourseGrid
          courses={coursesData}
          onOpenSyllabus={handleOpenSyllabus}
          onEnroll={handleOpenEnroll}
        />

        {/* Minimal Scroll-Animated Road Roller + JCB Construction Doodle Transition */}
        <RoadWorkTransition />

        {/* 6. 05 — COMMON QUESTIONS (FAQ Accordion) */}
        <FAQSection />

        {/* 7. START TODAY (Final CTA) */}
        <FinalCTA onExploreClick={() => handleOpenEnroll()} />
      </main>

      {/* Footer */}
      <Footer onOpenPolicy={setActivePolicy} />

      {/* Course Detailed Syllabus Modal */}
      <CourseModal
        course={selectedCourseForSyllabus}
        isOpen={Boolean(selectedCourseForSyllabus)}
        onClose={handleCloseSyllabus}
        onEnroll={handleOpenEnroll}
      />

      {/* ₹9 Instant Enrollment & Confirmation Modal */}
      <EnrollModal
        course={selectedCourseForEnroll}
        isOpen={Boolean(selectedCourseForEnroll)}
        onClose={handleCloseEnroll}
      />

      {/* Legal Policy Popups (Privacy Policy & Refund Policy) */}
      <PolicyModal
        isOpen={Boolean(activePolicy)}
        policyType={activePolicy}
        onClose={() => setActivePolicy(null)}
        onSwitchPolicy={(type) => setActivePolicy(type)}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <LandingPage />
    </LanguageProvider>
  );
}
