import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const HeroSection = () => {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <div className="hero-viewport-wrapper">

      <header className="hero-banner" id="hero">

        {/* Decorative Outlined Editorial Wordmark Layer */}
        <div className="hero-editorial-wordmark" aria-hidden="true">
          <span>eTender Guru</span>
        </div>

        <img
          src="/Overlay.png"
          alt=""
          aria-hidden="true"
          className="hero-image-overlay"
        />

        <div className="hero-gem-logo-wrap hero-gem-logo-right" aria-label="Government e-Marketplace logo">
          <img
            src="/gem_logo-removebg-preview.png"
            alt="Government e-Marketplace"
            className="hero-gem-logo hero-gem-logo-base"
          />
          <img
            src="/gem_logo-removebg-preview.png"
            alt=""
            aria-hidden="true"
            className="hero-gem-logo hero-gem-logo-emblem"
          />
        </div>

        <div className="hero-inner-container">

          {/* Left Column */}
          <div className={`hero-content-col${language === 'mr' ? ' hero-content-col-marathi' : ''}`}>
            {language === 'mr' ? (
              <div className="hero-marathi-content">
                <h1 className="hero-editorial-heading hero-editorial-heading-marathi">
                  {t.headlineLines.map((line) => (
                    <span className="hero-marathi-headline-line" key={line}>{line}</span>
                  ))}
                </h1>
                <div
                  className="hero-price-banner hero-price-banner-marathi"
                  aria-label={`${t.priceText} ${t.priceValue}${t.priceSymbol}`}
                >
                  <span className="hero-price-label">{t.priceText}</span>
                  <span className="hero-price-value">
                    <span className="hero-price-currency" aria-hidden="true">{t.priceSymbol}</span>
                    <span className="hero-price-digits">{t.priceValue}</span>
                  </span>
                </div>
                <p className="hero-marathi-caption">
                  {t.supportingText}
                </p>
              </div>
            ) : (
              <>
                <div className="hero-eyebrow-wrap">
                  {/* kept for mobile only (the big wordmark is hidden on small screens) */}
                  <span className="hero-eyebrow hero-eyebrow-mobile">eTender Guru</span>
                </div>

                <h1 className="hero-editorial-heading">
                  <span className="hero-headline-serif">{t.headlineBold}</span>
                  <span className="hero-headline-impact">{t.headlineLight}</span>
                </h1>

                {t.priceText && (
                  <div className="hero-price-banner" aria-label={`${t.priceText} ${t.priceSymbol || '₹'}${t.priceValue || ''}`}>
                    <span className="hero-price-label">{t.priceText}</span>
                    <span className="hero-price-value">
                      <span className="hero-price-currency" aria-hidden="true">{t.priceSymbol || '₹'}</span>
                      <span className="hero-price-digits">{t.priceValue}</span>
                    </span>
                  </div>
                )}

                <p className="hero-editorial-subtext">{t.supportingText}</p>
              </>
            )}

            {/* "Explore Courses" button removed */}

          </div>

          {/* Right Column: Founder Cutout */}
          <div className="hero-founder-col">
            <div className="hero-founder-frame">
              <img
                src="/foundernobg.png"
                alt={t.altFounder}
                className="hero-founder-img"
                loading="eager"
                fetchPriority="high"
              />
            </div>

          </div>

        </div>
      </header>

    </div>
  );
};