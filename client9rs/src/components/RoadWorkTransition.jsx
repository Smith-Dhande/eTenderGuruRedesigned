import React, { useRef, useState, useEffect } from 'react';

/**
 * RoadWorkTransition Component
 * Scroll-animated road-construction doodle transition matching the reference image:
 * - JCB Excavator leads in front (on the right) with animated boom, stick & digging bucket.
 * - Road Roller follows behind (on the left) with rotating drum and notched tire.
 * - Hand-drawn doodle outline style with dark navy/charcoal strokes and eTender Guru orange accents.
 * - Transparent background, compact whitespace, and bi-directional scroll synchronization.
 */
export const RoadWorkTransition = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [trackWidth, setTrackWidth] = useState(1100);
  const [reducedMotion, setReducedMotion] = useState(false);

  // 1. Detect prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handler = (e) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // 2. Measure track width dynamically on resize
  useEffect(() => {
    if (!trackRef.current) return;
    const updateWidth = () => {
      if (trackRef.current) {
        setTrackWidth(trackRef.current.clientWidth);
      }
    };
    updateWidth();
    const ro = new ResizeObserver(updateWidth);
    ro.observe(trackRef.current);
    return () => ro.disconnect();
  }, []);

  // 3. High-performance scroll-progress tracking (tied strictly to scroll)
  useEffect(() => {
    if (reducedMotion) {
      setProgress(0.55); // Static, balanced arrangement
      return;
    }

    let ticking = false;

    const updateScrollProgress = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Starts when section top enters 88% of viewport height
      // Completes when section bottom reaches 12% of viewport height
      const startY = windowHeight * 0.88;
      const endY = windowHeight * 0.12;
      const totalRange = startY - endY + rect.height;
      const currentDist = startY - rect.top;

      let p = currentDist / totalRange;
      p = Math.max(0, Math.min(1, p));
      setProgress(p);

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollProgress);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    updateScrollProgress();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [reducedMotion]);

  // Responsive dimensions matching the reference proportions
  // Roller aspect ratio: 115:68 (~1.69:1)
  // JCB aspect ratio: 135:68 (~1.98:1)
  const isMicro = trackWidth < 380;
  const isMobile = trackWidth >= 380 && trackWidth < 600;
  const isTablet = trackWidth >= 600 && trackWidth < 960;

  const vehicleHeight = isMicro ? 34 : isMobile ? 38 : isTablet ? 48 : 58;
  const rollerWidth = Math.round(vehicleHeight * 1.69);
  const jcbWidth = Math.round(vehicleHeight * 1.98);

  const gap = isMicro ? 14 : isMobile ? 22 : isTablet ? 34 : 46;
  const convoyWidth = rollerWidth + gap + jcbWidth;

  const safeMargin = isMicro ? 8 : isMobile ? 12 : 24;
  const availableTravel = Math.max(0, trackWidth - convoyWidth - safeMargin * 2);

  // Convoy positioning:
  // JCB leads in front (on the right)!
  // Road roller follows behind (on the left)!
  const currentProgress = reducedMotion ? 0.55 : progress;
  const convoyLeft = safeMargin + currentProgress * availableTravel;

  const rollerLeft = convoyLeft;
  const jcbLeft = convoyLeft + rollerWidth + gap;

  // Mechanical Animations:
  // A) Wheel and drum rotation
  const wheelRotation = reducedMotion ? 0 : currentProgress * 360 * 3.4;

  // B) JCB Articulated Arm Kinematics (Bold, clearly visible mechanical digging cycle)
  // Repeating digging & scooping cycle synchronized with scroll traversal
  const digCycle = reducedMotion ? 0 : currentProgress * Math.PI * 8; // ~4 full digging cycles
  const boomAngle = reducedMotion ? 0 : Math.sin(digCycle) * 16 - 5; // -21° to +11° lift/lower
  const armAngle = reducedMotion ? 0 : Math.cos(digCycle) * 24; // -24° to +24° stick extension/curl
  const bucketAngle = reducedMotion ? 0 : Math.sin(digCycle + 0.6) * 36; // -36° to +36° full scoop/dump rotation

  // Road building synchronization:
  // As the JCB moves forward, the road gets built up to the excavator bucket/front edge!
  const jcbFrontX = jcbLeft + jcbWidth * 0.84;
  const roadCompletedX = Math.min(trackWidth, jcbFrontX);

  return (
    <div
      ref={sectionRef}
      className="road-work-transition-section"
      aria-hidden="true"
    >
      <div className="section-container road-work-container">
        <div ref={trackRef} className="road-work-track">

          {/* Road Building Ground Line: Road gets built as the JCB advances */}
          <svg className="road-ground-svg" preserveAspectRatio="none">
            {/* Unpaved road ahead of the JCB (waiting to be built) */}
            <line
              x1={roadCompletedX}
              y1="3"
              x2="100%"
              y2="3"
              stroke="#e2e8f0"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            {/* Solid finished road surface built behind the JCB */}
            <line
              x1="0"
              y1="3"
              x2={roadCompletedX}
              y2="3"
              stroke="#0f172a"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* Built lower dashed lane line extending as the road is paved */}
            <line
              x1="0"
              y1="8"
              x2={roadCompletedX}
              y2="8"
              stroke="#cbd5e1"
              strokeWidth="1.5"
              strokeDasharray="6 6"
            />
          </svg>

          {/* =========================================================================
              1. ROAD ROLLER (Following Behind on the Left)
              Reference: Heavy roller with orange hood, white cabin, notched rear tire,
              front drum with horizontal orange bracket & 3 black bolt pins
              ========================================================================= */}
          <div
            className="road-vehicle-wrap roller-wrap"
            style={{
              left: `${rollerLeft}px`,
              width: `${rollerWidth}px`,
              height: `${vehicleHeight}px`,
            }}
          >
            <svg
              viewBox="0 0 115 68"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="road-vehicle-svg"
            >
              {/* Reference Motion lines behind vehicle */}
              <line x1="2" y1="36" x2="10" y2="36" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="4" y1="41" x2="11" y2="41" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />

              {/* REAR WHEEL (Center at 28px, 44px, Ground contact at y = 58) */}
              <g
                style={{
                  transform: `rotate(${wheelRotation}deg)`,
                  transformOrigin: '28px 44px',
                }}
              >
                {/* Heavy black tire */}
                <circle cx="28" cy="44" r="14" fill="#1e293b" stroke="#0f172a" strokeWidth="2.2" />
                {/* White rim */}
                <circle cx="28" cy="44" r="8" fill="#f8fafc" stroke="#0f172a" strokeWidth="1.8" />
                {/* Reference perimeter tread dashes */}
                <line x1="28" y1="30" x2="28" y2="33" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                <line x1="28" y1="55" x2="28" y2="58" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                <line x1="14" y1="44" x2="17" y2="44" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                <line x1="39" y1="44" x2="42" y2="44" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                <line x1="18" y1="34" x2="20.5" y2="36.5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                <line x1="35.5" y1="51.5" x2="38" y2="54" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                <line x1="18" y1="54" x2="20.5" y2="51.5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                <line x1="35.5" y1="36.5" x2="38" y2="34" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                {/* Center hub */}
                <circle cx="28" cy="44" r="3.2" fill="#0f172a" />
              </g>

              {/* Rear Engine Hood (Curved Orange Body matching reference) */}
              <path
                d="M14 42 C14 33, 18 26, 28 26 L48 26 L48 42 L26 42 Z"
                fill="#f15a24"
                stroke="#0f172a"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              {/* Black ventilation slats on hood */}
              <line x1="34" y1="29.5" x2="44" y2="29.5" stroke="#0f172a" strokeWidth="1.8" strokeLinecap="round" />
              <line x1="34" y1="33.5" x2="44" y2="33.5" stroke="#0f172a" strokeWidth="1.8" strokeLinecap="round" />
              <line x1="34" y1="37.5" x2="44" y2="37.5" stroke="#0f172a" strokeWidth="1.8" strokeLinecap="round" />

              {/* Vertical exhaust pipe behind cab */}
              <line x1="42" y1="26" x2="42" y2="12" stroke="#0f172a" strokeWidth="2.2" strokeLinecap="round" />
              <line x1="40" y1="12" x2="44" y2="12" stroke="#0f172a" strokeWidth="1.8" strokeLinecap="round" />

              {/* Operator Cabin (White Frame, Tinted Window, Driver Seat) */}
              <path
                d="M48 10 L68 10 C70 10 71 11 71 13 L69 36 L48 36 Z"
                fill="#ffffff"
                stroke="#0f172a"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              {/* Slanted window glass */}
              <path
                d="M51 13 L66 13 L64 33 L51 33 Z"
                fill="#f0f9ff"
                stroke="#0f172a"
                strokeWidth="1.4"
              />
              <line x1="53" y1="16" x2="62" y2="29" stroke="#bae6fd" strokeWidth="1.4" strokeLinecap="round" />
              {/* Driver seat */}
              <path d="M53 24 L56 24 L56 30" stroke="#64748b" strokeWidth="1.8" strokeLinecap="round" />
              {/* Steering column */}
              <line x1="60" y1="26" x2="58" y2="21" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round" />

              {/* Operator Platform Step */}
              <rect x="48" y="36" width="18" height="5" fill="#e2e8f0" stroke="#0f172a" strokeWidth="1.8" />
              <line x1="48" y1="44" x2="62" y2="44" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />

              {/* FRONT STEEL ROLLER DRUM (Center at 88px, 44px, Radius 14) */}
              <g
                style={{
                  transform: `rotate(${wheelRotation}deg)`,
                  transformOrigin: '88px 44px',
                }}
              >
                {/* Heavy steel cylinder */}
                <circle cx="88" cy="44" r="14" fill="#ffffff" stroke="#0f172a" strokeWidth="2.2" />
                <circle cx="88" cy="44" r="11" stroke="#e2e8f0" strokeWidth="1.4" strokeDasharray="3 3" />
                {/* Rotating drum ribs */}
                <line x1="77" y1="44" x2="99" y2="44" stroke="#cbd5e1" strokeWidth="1.6" />
                <line x1="88" y1="33" x2="88" y2="55" stroke="#cbd5e1" strokeWidth="1.6" />
                <line x1="80" y1="36" x2="96" y2="52" stroke="#cbd5e1" strokeWidth="1.4" />
                <line x1="80" y1="52" x2="96" y2="36" stroke="#cbd5e1" strokeWidth="1.4" />
              </g>

              {/* Orange Yoke Mounting Bracket Across Drum (Matching reference exactly!) */}
              <g className="roller-bracket">
                <rect
                  x="72"
                  y="40"
                  width="32"
                  height="8"
                  rx="3"
                  fill="#f15a24"
                  stroke="#0f172a"
                  strokeWidth="2"
                />
                {/* Three black bolt pins on the orange bracket */}
                <circle cx="77" cy="44" r="2" fill="#0f172a" />
                <circle cx="88" cy="44" r="2.4" fill="#0f172a" />
                <circle cx="99" cy="44" r="2" fill="#0f172a" />
                {/* Articulation frame link */}
                <path d="M64 42 L73 42" stroke="#0f172a" strokeWidth="2.8" strokeLinecap="round" />
              </g>
            </svg>
          </div>

          {/* =========================================================================
              2. JCB EXCAVATOR (Leading Vehicle on the Right)
              Reference: Tracked crawler excavator with animated boom, stick & bucket,
              orange body, white cabin, continuous tracks, and dirt pile
              ========================================================================= */}
          <div
            className="road-vehicle-wrap jcb-wrap"
            style={{
              left: `${jcbLeft}px`,
              width: `${jcbWidth}px`,
              height: `${vehicleHeight}px`,
            }}
          >
            <svg
              viewBox="0 0 135 68"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="road-vehicle-svg"
            >
              {/* Reference Motion lines behind excavator */}
              <line x1="2" y1="33" x2="9" y2="33" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="4" y1="38" x2="10" y2="38" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />

              {/* Crawler Track Undercarriage (Ground contact at y = 58) */}
              <g className="jcb-tracks">
                {/* Continuous rubber crawler track loop */}
                <path
                  d="M20 44 L62 44 A 7 7 0 0 1 62 58 L20 58 A 7 7 0 0 1 20 44 Z"
                  fill="#1e293b"
                  stroke="#0f172a"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />

                {/* Track guide wheels */}
                <g style={{ transform: `rotate(${wheelRotation * 1.2}deg)`, transformOrigin: '20px 51px' }}>
                  <circle cx="20" cy="51" r="5" fill="#f8fafc" stroke="#0f172a" strokeWidth="1.4" />
                  <circle cx="20" cy="51" r="2" fill="#0f172a" />
                  <line x1="16" y1="51" x2="24" y2="51" stroke="#0f172a" strokeWidth="1" />
                </g>
                <circle cx="34" cy="51" r="4.2" fill="#f8fafc" stroke="#0f172a" strokeWidth="1.2" />
                <circle cx="34" cy="51" r="1.8" fill="#0f172a" />
                <circle cx="48" cy="51" r="4.2" fill="#f8fafc" stroke="#0f172a" strokeWidth="1.2" />
                <circle cx="48" cy="51" r="1.8" fill="#0f172a" />
                <g style={{ transform: `rotate(${wheelRotation * 1.2}deg)`, transformOrigin: '62px 51px' }}>
                  <circle cx="62" cy="51" r="5" fill="#f8fafc" stroke="#0f172a" strokeWidth="1.4" />
                  <circle cx="62" cy="51" r="2" fill="#0f172a" />
                  <line x1="58" y1="51" x2="66" y2="51" stroke="#0f172a" strokeWidth="1" />
                </g>

                {/* Track bottom tread notches */}
                <line x1="26" y1="57" x2="26" y2="59" stroke="#0f172a" strokeWidth="1.5" />
                <line x1="40" y1="57" x2="40" y2="59" stroke="#0f172a" strokeWidth="1.5" />
                <line x1="54" y1="57" x2="54" y2="59" stroke="#0f172a" strokeWidth="1.5" />
              </g>

              {/* Upper Slew Deck Platform */}
              <rect
                x="14"
                y="40"
                width="54"
                height="4"
                rx="1"
                fill="#334155"
                stroke="#0f172a"
                strokeWidth="1.5"
              />

              {/* Engine Housing (Rear/Left in Signature Orange, matching reference) */}
              <path
                d="M12 28 C12 26 14 24 17 24 L38 24 L38 40 L12 40 Z"
                fill="#f15a24"
                stroke="#0f172a"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              {/* Engine ventilation louvers */}
              <line x1="18" y1="29" x2="30" y2="29" stroke="#0f172a" strokeWidth="1.8" strokeLinecap="round" />
              <line x1="18" y1="33" x2="30" y2="33" stroke="#0f172a" strokeWidth="1.8" strokeLinecap="round" />
              <line x1="18" y1="37" x2="30" y2="37" stroke="#0f172a" strokeWidth="1.8" strokeLinecap="round" />
              {/* Exhaust pipe stub */}
              <line x1="22" y1="24" x2="22" y2="19" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />

              {/* Operator Cabin (White frame with large glass window) */}
              <path
                d="M38 14 L55 14 C56 14 57 15 57 17 L57 40 L38 40 Z"
                fill="#ffffff"
                stroke="#0f172a"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              {/* Window pane with reflection */}
              <rect x="41" y="17" width="13" height="18" rx="1.5" fill="#f0f9ff" stroke="#0f172a" strokeWidth="1.4" />
              <line x1="43" y1="20" x2="50" y2="31" stroke="#bae6fd" strokeWidth="1.4" strokeLinecap="round" />
              {/* Operator seat inside */}
              <path d="M44 26 L47 26 L47 32" stroke="#64748b" strokeWidth="1.8" strokeLinecap="round" />

              {/* Reference Gravel/Dirt Mound under digging bucket */}
              <path
                d="M98 58 C102 54, 110 54, 115 58 Z"
                fill="#cbd5e1"
                stroke="#94a3b8"
                strokeWidth="1.2"
              />
              <circle cx="103" cy="56" r="1.3" fill="#64748b" />
              <circle cx="108" cy="55" r="1.5" fill="#64748b" />
              <circle cx="112" cy="56.5" r="1.2" fill="#64748b" />

              {/* =====================================================================
                  NESTED MECHANICAL ARM KINEMATICS:
                  1. BOOM: Pivots at base joint (58px, 38px)
                  2. STICK / DIPPER: Pivots at boom elbow (82px, 14px)
                  3. DIGGING BUCKET: Pivots at arm wrist (105px, 38px)
                  ===================================================================== */}
              <g
                className="jcb-boom-group"
                style={{
                  transform: `rotate(${boomAngle}deg)`,
                  transformOrigin: '58px 38px',
                  transition: 'transform 0.08s ease-out',
                }}
              >
                {/* Main Boom Arm (Arched orange beam) */}
                <path
                  d="M58 38 C60 26, 70 14, 82 14 L85 17 C75 22, 65 32, 62 41 Z"
                  fill="#f15a24"
                  stroke="#0f172a"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                {/* Boom hydraulic lift cylinder */}
                <line x1="53" y1="41" x2="69" y2="24" stroke="#0f172a" strokeWidth="2.4" strokeLinecap="round" />
                <line x1="53" y1="41" x2="62" y2="31" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" />
                {/* Base pivot pin */}
                <circle cx="58" cy="38" r="2.4" fill="#ffffff" stroke="#0f172a" strokeWidth="1.4" />

                {/* 2. STICK / DIPPER ARM (Pivots at elbow 82px, 14px) */}
                <g
                  className="jcb-stick-group"
                  style={{
                    transform: `rotate(${armAngle}deg)`,
                    transformOrigin: '82px 14px',
                    transition: 'transform 0.08s ease-out',
                  }}
                >
                  {/* Dipper stick beam */}
                  <path
                    d="M82 14 L105 38 L101 41 L79 17 Z"
                    fill="#f15a24"
                    stroke="#0f172a"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  {/* Dipper hydraulic cylinder rod */}
                  <line x1="77" y1="20" x2="94" y2="28" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />
                  {/* Elbow pivot pin */}
                  <circle cx="82" cy="14" r="2.2" fill="#ffffff" stroke="#0f172a" strokeWidth="1.4" />

                  {/* 3. DIGGING BUCKET (Pivots at wrist 105px, 38px) */}
                  <g
                    className="jcb-bucket-group"
                    style={{
                      transform: `rotate(${bucketAngle}deg)`,
                      transformOrigin: '105px 38px',
                      transition: 'transform 0.08s ease-out',
                    }}
                  >
                    {/* Charcoal scoop bucket with sharp digging teeth */}
                    <path
                      d="M105 38 C115 42, 116 52, 109 55 L102 53 L99 43 Z"
                      fill="#334155"
                      stroke="#0f172a"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                    {/* Bucket teeth & cutting edge */}
                    <line x1="102" y1="53" x2="100" y2="55.5" stroke="#0f172a" strokeWidth="1.8" strokeLinecap="round" />
                    <line x1="105" y1="54" x2="104" y2="56.5" stroke="#0f172a" strokeWidth="1.8" strokeLinecap="round" />
                    <line x1="109" y1="55" x2="108" y2="57.5" stroke="#0f172a" strokeWidth="1.8" strokeLinecap="round" />
                    {/* Bucket hinge bracket pin */}
                    <circle cx="105" cy="38" r="2.2" fill="#ffffff" stroke="#0f172a" strokeWidth="1.4" />
                    <line x1="101" y1="41" x2="104" y2="45" stroke="#0f172a" strokeWidth="1.6" />
                  </g>
                </g>
              </g>
            </svg>
          </div>

        </div>
      </div>
    </div>
  );
};
