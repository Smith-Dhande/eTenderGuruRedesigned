import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { LanguageToggle } from './components/LanguageToggle';
import { HeroSection } from './components/HeroSection';
import { FounderVideoSection } from './components/FounderVideoSection';
import { CoursesSection } from './components/CoursesSection';
import { YouTubeSection } from './components/YouTubeSection';
import { FounderSection } from './components/FounderSection';
import { ResourcesSection } from './components/ResourcesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import WebinarAudience from './components/WebinarAudience';
import './App.css';
import GemPortalSection from './components/GemPortalSection';
import GemProductsSection from './components/GemProductsSection';
import GemBannerSection from './components/Banner';
import GemServicesSection from './components/GemServicesSection';
import CustomersSpeak from './components/customerspeckes';
// import WebinarAudience from './components/WebinarAudience';
import WebinarLearn from './components/InfoWebinar';
function MainApp() {
  const [selectedCourseForEnquiry, setSelectedCourseForEnquiry] = useState('');

  const handleExploreCourses = () => {
    const elem = document.getElementById('courses');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCourseForEnquiry = (courseId) => {
    setSelectedCourseForEnquiry(courseId);
    const elem = document.getElementById('contact');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClearSelectedCourse = () => {
    setSelectedCourseForEnquiry('');
  };

  return (
    <div className="etender-app-root">
      {/* Persistent Floating Language Toggle */}
      <LanguageToggle />

      {/* 1. Hero Section (Strictly following herosection-design.md) */}
      <HeroSection onExploreCourses={handleExploreCourses} />

      
      {/* 1.5. Webinar Audience Section */}
      <WebinarAudience />
     {/* 1.6. Webinar Learn Section */}
      <WebinarLearn/>


      {/* 2. Founder Video Device Section (Realistic Physical Tablet Left / Editorial Text Right) */}
      <FounderVideoSection />

      <GemProductsSection/>

      
      

      {/* 4. Founder & Practical Expertise Section */}
      <FounderSection />

      {/* 3. YouTube Educational Video Lessons */}
      <YouTubeSection />

       <CustomersSpeak />

      <GemBannerSection/>

      
       
      {/* 5. Educational Resources (Roadmap, Checklist, FAQs) */}
      <ResourcesSection />

      

      <GemPortalSection/>

      <GemServicesSection/>

      {/* 3. Structured Courses Section */}
      <CoursesSection onSelectCourseForEnquiry={handleSelectCourseForEnquiry} />


      {/* 6. Contact & Direct Enquiry Form */}
      <ContactSection
        selectedCourseId={selectedCourseForEnquiry}
        onClearSelectedCourse={handleClearSelectedCourse}
      />

       

      {/* 7. Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  );
}
