import React, { useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const FounderVideoSection = () => {
  const { language } = useLanguage();
  const t = translations[language].founderIntro;
  
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePlay = () => setIsPlaying(true);
  const handlePause = () => setIsPlaying(false);
  const handleEnded = () => setIsPlaying(false);

  return (
    <section className="founder-video-section" id="founder-video" aria-labelledby="founder-video-heading">
      <div className="section-container">
        
        {/* Top: Editorial Header from Left to Right */}
        <div className="founder-video-header-wrap">
          <div className="device-eyebrow-wrap">
            <span className="device-eyebrow">{t.eyebrow}</span>
          </div>

          <div className="founder-video-title-row">
            <h2 className="device-editorial-heading" id="founder-video-heading">
              <span className="device-heading-serif">{t.headlineSerif}</span>
              <span className="device-heading-impact">{t.headlineImpact}</span>
            </h2>
            
            <div className="founder-video-side-action">
              <p className="device-editorial-subtext">
                {t.supportingText}
              </p>
              <div className="device-cta-wrap">
                <button
                  type="button"
                  onClick={togglePlay}
                  className="device-watch-btn"
                  aria-label={isPlaying ? t.pauseLabel : t.watchCta}
                >
                  <span>{isPlaying ? t.pauseLabel : t.watchCta}</span>
                  <span className="device-btn-arrow" aria-hidden="true">
                    {isPlaying ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <rect x="6" y="4" width="4" height="16"></rect>
                        <rect x="14" y="4" width="4" height="16"></rect>
                      </svg>
                    ) : (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    )}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Center: Horizontal Smartphone (Rotated 90° to the Left) */}
        <div className="founder-horizontal-phone-center">
          <div className="horizontal-phone-stage">
            
            {/* Horizontal Phone Chassis */}
            <div className="horizontal-phone-chassis">
              
              {/* Hardware Buttons (Top & Bottom edges) */}
              <div className="hphone-button-volume-up" aria-hidden="true"></div>
              <div className="hphone-button-volume-down" aria-hidden="true"></div>
              <div className="hphone-button-power" aria-hidden="true"></div>

              {/* Outer Titanium Rim */}
              <div className="hphone-titanium-rim" aria-hidden="true"></div>

              {/* Precision Screen Bezel */}
              <div className="hphone-screen-bezel">
                
                {/* Camera / Sensor Bar on Left Edge (90° rotated left) */}
                <div className="hphone-left-sensor-bar" aria-hidden="true">
                  <div className="hphone-speaker-slit"></div>
                  <div className="hphone-camera-lens"></div>
                </div>

                {/* Display Glass */}
                <div className="hphone-display-glass">
                  
                  {/* Founder Video */}
                  <video
                    ref={videoRef}
                    src="/owner&founder/ownertalk.mp4"
                    className="hphone-video-element"
                    playsInline
                    preload="metadata"
                    onPlay={handlePlay}
                    onPause={handlePause}
                    onEnded={handleEnded}
                    controls={isPlaying}
                    aria-label="Founder Introduction Video"
                  />

                  {/* Faint Glass Reflection */}
                  <div className="hphone-glass-glare" aria-hidden="true"></div>

                  {/* Refined Center Play Control (When Paused) */}
                  {!isPlaying && (
                    <div className="hphone-cinematic-overlay" onClick={togglePlay}>
                      <button
                        type="button"
                        className="phone-cinematic-play-btn"
                        aria-label="Play founder video"
                        onClick={(e) => {
                          e.stopPropagation();
                          togglePlay();
                        }}
                      >
                        <span className="phone-play-disc" aria-hidden="true">
                          <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                            <polygon points="6 3 20 12 6 21 6 3"></polygon>
                          </svg>
                        </span>
                      </button>
                    </div>
                  )}

                </div>
              </div>

            </div>

            {/* Realistic Multi-Layer Horizontal Contact & Floor Shadows */}
            <div className="hphone-contact-shadow" aria-hidden="true"></div>
            <div className="hphone-ambient-shadow" aria-hidden="true"></div>
          </div>
        </div>

      </div>
    </section>
  );
};
