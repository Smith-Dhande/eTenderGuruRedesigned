import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { LanguageToggle } from './LanguageToggle';

export const Navbar = () => {
  const { language } = useLanguage();
  const t = translations[language].nav;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#faf8f5]/95 backdrop-blur-md border-b border-[#e6e2db] transition-colors">
      <div className="site-container flex items-center justify-between h-20">
        {/* Brand Logo & Initiative Badge */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f15a24] rounded-lg p-1"
            aria-label="eTender Guru Home"
          >
            <img
              src="/logoTenderGuru.png"
              alt="eTender Guru Logo"
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-102"
            />
          </a>
          <span className="hidden sm:inline-flex items-center text-[11px] font-semibold tracking-wider text-[#f15a24] bg-[#fff5f0] border border-[#f15a24]/20 px-2.5 py-1 rounded-full uppercase">
            {language === 'mr' ? '₹९ ठेकेदारी पोर्टल' : '₹9 Thekedari Portal'}
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#475569]">
          <button
            type="button"
            onClick={() => scrollTo('courses')}
            className="hover:text-[#f15a24] transition-colors cursor-pointer py-1"
          >
            {t.courses}
          </button>
          <button
            type="button"
            onClick={() => scrollTo('why-nine-rupee')}
            className="hover:text-[#f15a24] transition-colors cursor-pointer py-1"
          >
            {t.whyNineRupee}
          </button>
          <button
            type="button"
            onClick={() => scrollTo('how-it-works')}
            className="hover:text-[#f15a24] transition-colors cursor-pointer py-1"
          >
            {t.howItWorks}
          </button>
          <button
            type="button"
            onClick={() => scrollTo('about')}
            className="hover:text-[#f15a24] transition-colors cursor-pointer py-1"
          >
            {t.founder}
          </button>
          <button
            type="button"
            onClick={() => scrollTo('faq')}
            className="hover:text-[#f15a24] transition-colors cursor-pointer py-1"
          >
            {t.faq}
          </button>
        </nav>

        {/* Right Action: Language Switcher & Direct CTA */}
        <div className="flex items-center gap-3">
          <LanguageToggle />

          <button
            type="button"
            onClick={() => scrollTo('courses')}
            className="hidden sm:inline-flex items-center justify-center bg-[#f15a24] hover:bg-[#e04b16] text-white text-xs md:text-sm font-bold tracking-wide px-4 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
          >
            {t.startLearning}
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#0f172a] hover:bg-black/5 focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#faf8f5] border-b border-[#e6e2db] px-6 py-5 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-4 text-base font-medium text-[#0f172a]">
            <button
              type="button"
              onClick={() => scrollTo('courses')}
              className="text-left py-2 border-b border-black/5 hover:text-[#f15a24]"
            >
              {t.courses}
            </button>
            <button
              type="button"
              onClick={() => scrollTo('why-nine-rupee')}
              className="text-left py-2 border-b border-black/5 hover:text-[#f15a24]"
            >
              {t.whyNineRupee}
            </button>
            <button
              type="button"
              onClick={() => scrollTo('how-it-works')}
              className="text-left py-2 border-b border-black/5 hover:text-[#f15a24]"
            >
              {t.howItWorks}
            </button>
            <button
              type="button"
              onClick={() => scrollTo('about')}
              className="text-left py-2 border-b border-black/5 hover:text-[#f15a24]"
            >
              {t.founder}
            </button>
            <button
              type="button"
              onClick={() => scrollTo('faq')}
              className="text-left py-2 border-b border-black/5 hover:text-[#f15a24]"
            >
              {t.faq}
            </button>
            <button
              type="button"
              onClick={() => scrollTo('courses')}
              className="mt-2 w-full py-3 bg-[#f15a24] hover:bg-[#e04b16] text-white font-bold rounded-xl text-center shadow-xs"
            >
              {t.startLearning} ({language === 'mr' ? '₹९' : '₹9'})
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
