import React, { useRef, useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const FounderVideoSection = () => {
  const { language } = useLanguage();
  const t = translations[language].founderIntro;
  
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const hasTriggeredOnceRef = useRef(false);

  const [isPlaying, setIsPlaying] = useState(false);
  const [pointerVisible, setPointerVisible] = useState(false);
  const [pointerState, setPointerState] = useState('idle'); // 'idle' | 'entering' | 'moving' | 'tapping' | 'fading' | 'done'
  const [isSimulatedClick, setIsSimulatedClick] = useState(false);

  // Reliable playback executor (handles browser audio-autoplay policies gracefully)
  const executePlay = (isManual = false) => {
    if (!videoRef.current) return;
    
    if (isManual) {
      videoRef.current.muted = false;
    }

    const playPromise = videoRef.current.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.warn('Autoplay unmuted blocked by browser policy. Retrying with mute:', err);
          // If browser restricts unmuted programmatic autoplay, start muted so video ACTUALLY plays
          if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current
              .play()
              .then(() => setIsPlaying(true))
              .catch((e) => console.error('Video playback failed:', e));
          }
        });
    }
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      executePlay(true);
    }
  };

  const handlePlay = () => setIsPlaying(true);
  const handlePause = () => setIsPlaying(false);
  const handleEnded = () => setIsPlaying(false);

  // IntersectionObserver: Handles 1-Time Auto-Play Trigger + Continuous Scroll-Away Auto-Pause
  useEffect(() => {
    const sectionElem = sectionRef.current;
    if (!sectionElem) return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const ratio = entry.intersectionRatio;

          // 1. AUTO-PLAY TRIGGER: When section reaches ~80%+ visibility for the first time
          const autoTriggerThreshold = window.innerHeight < 750 ? 0.7 : 0.85;
          if (
            ratio >= autoTriggerThreshold &&
            !hasTriggeredOnceRef.current &&
            !mediaQuery.matches
          ) {
            hasTriggeredOnceRef.current = true;

            // 500ms delay after section is fully in view
            setTimeout(() => {
              if (videoRef.current && !videoRef.current.paused) return;

              // Step 1: Refined hand appears at bottom-right
              setPointerVisible(true);
              setPointerState('entering');

              // Step 2: Smooth movement toward play button center (850ms)
              setTimeout(() => {
                setPointerState('moving');
              }, 40);

              // Step 3: Align fingertip onto center + 120ms pause -> Realistic tap
              setTimeout(() => {
                setPointerState('tapping');
                setIsSimulatedClick(true);

                // Step 4: Video ACTUALLY starts playing
                setTimeout(() => {
                  executePlay(false);

                  setIsSimulatedClick(false);
                  setPointerState('fading');

                  // Step 5: Cleanly unmount pointer after fade
                  setTimeout(() => {
                    setPointerVisible(false);
                    setPointerState('done');
                  }, 280);
                }, 180);
              }, 950);
            }, 500);
          }

          // 2. SCROLL-AWAY AUTO-PAUSE: If playing and user scrolls away (visibility < 35%), pause video
          if (ratio < 0.35) {
            if (videoRef.current && !videoRef.current.paused) {
              videoRef.current.pause();
              setIsPlaying(false);
            }
          }
        });
      },
      { threshold: [0, 0.2, 0.35, 0.5, 0.7, 0.85, 0.95] }
    );

    observer.observe(sectionElem);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="founder-video-section" 
      id="founder-video" 
      aria-labelledby="founder-video-heading"
    >
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

                  {/* Center Play Control (When Paused) */}
                  {!isPlaying && (
                    <div className="hphone-cinematic-overlay" onClick={togglePlay}>
                      <button
                        type="button"
                        className={`phone-cinematic-play-btn ${isSimulatedClick ? 'is-simulated-click' : ''}`}
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

                  {/* Exact Hand Pointer Cursor Matching User Reference */}
                  {pointerVisible && (
                    <div 
                      className={`cinematic-hand-stage pointer-${pointerState}`}
                      aria-hidden="true"
                    >
                      <div className="cinematic-hand-wrapper">
                        <svg
                          viewBox="0 0 100 100"
                          fill="none"
                          className="cinematic-hand-svg"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <defs>
                            <filter id="hand-pointer-shadow" x="-30%" y="-30%" width="160%" height="160%">
                              <feDropShadow dx="0" dy="5" stdDeviation="5" floodColor="#000000" floodOpacity="0.38" />
                            </filter>
                          </defs>
                          <g filter="url(#hand-pointer-shadow)">
                            {/* Smooth, Refined Hand Outline Matching Reference */}
                            <path
                              d="M 37 56 L 37 12 A 7 7 0 0 1 51 12 L 51 46 A 2 2 0 0 0 55 46 L 55 27 A 6 6 0 0 1 67 27 L 67 46 A 2 2 0 0 0 71 46 L 71 32 A 5 5 0 0 1 81 32 L 81 46 A 2 2 0 0 0 85 46 L 85 38 A 4 4 0 0 1 93 38 L 93 68 C 93 84 80 95 62 95 C 46 95 33 86 26 75 C 20 68 14 60 11 54 A 6 6 0 0 1 18 45 C 24 51 31 55 37 56 Z"
                              fill="#ffffff"
                              stroke="#0f172a"
                              strokeWidth="4.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                        </svg>
                      </div>
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
