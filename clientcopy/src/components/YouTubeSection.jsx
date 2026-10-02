import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { videosData } from '../data/videosData';
import { VideoModal } from './VideoModal';

export const YouTubeSection = () => {
  const { language } = useLanguage();
  const t = translations[language].youtube;
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Strip 1: Standard order
  const strip1Videos = [...videosData];
  // Strip 2: Offset order for visual variety
  const strip2Videos = [
    videosData[4],
    videosData[5],
    videosData[6],
    videosData[0],
    videosData[1],
    videosData[2],
    videosData[3],
  ];

  const renderVideoCard = (video, indexKey) => {
    const title = video.title[language] || video.title.en;
    const desc = video.desc[language] || video.desc.en;
    const tag = (language === 'mr' && video.tagMr) ? video.tagMr : (video.tag || 'Knowledge');

    return (
      <article
        key={indexKey}
        className="marquee-video-card"
        onClick={() => setSelectedVideo(video)}
        tabIndex={0}
        role="button"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setSelectedVideo(video);
          }
        }}
        aria-label={`${t.watchVideo}: ${title}`}
      >
        <div className="marquee-thumb-container">
          <img
            src={video.thumbnail}
            alt={title}
            className="marquee-thumb-img"
            loading="lazy"
          />
          <div className="marquee-thumb-gradient" />
          
          <div className="marquee-tag-badge">{tag}</div>
          <div className="marquee-duration-badge">{video.duration}</div>

          <div className="marquee-play-overlay">
            <span className="marquee-play-btn" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </span>
          </div>
        </div>

        <div className="marquee-card-body">
          <h3 className="marquee-video-title" title={title}>
            {title}
          </h3>
          <p className="marquee-video-desc">{desc}</p>
        </div>

        <div className="marquee-card-footer">
          <span className="marquee-watch-btn">
            <span>{t.watchVideo}</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </span>
          <span className="marquee-yt-pill">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <span>YouTube</span>
          </span>
        </div>
      </article>
    );
  };

  return (
    <section className="youtube-section" id="youtube" aria-labelledby="youtube-main-heading">
      <div className="section-container">
        
        {/* 1. Eyebrow */}
        <div className="courses-eyebrow-wrap">
          <span className="courses-eyebrow">{t.eyebrow}</span>
        </div>

        {/* 2. Top Header Row: Main Editorial Heading + Supporting Copy */}
        <div className="courses-header-row">
          
          {/* Main Editorial Heading (DM Serif Display + Anton Impact) */}
          <h2 className="courses-heading" id="youtube-main-heading">
            <span className="courses-heading-serif">{t.titleSerif}</span>
            <span className="courses-heading-impact">
              {t.titleImpact ? t.titleImpact.replace('.', '') : 'VIDEO HUB'}
              <span className="courses-heading-dot">.</span>
            </span>
          </h2>

          {/* Header Supporting Text with Left Divider */}
          <div className="courses-header-details">
            <div className="courses-support-divider" aria-hidden="true"></div>
            <p className="courses-support-text">
              {t.support || t.subtitle}
            </p>
          </div>

        </div>

      </div>

      {/* 2 Alternate Moving Strips Container */}
      <div className="knowledge-strips-wrapper">
        
        {/* Strip 1: Moving Left */}
        <div className="marquee-strip-row" aria-label="Knowledge videos row 1">
          <div className="marquee-track marquee-scroll-left">
            {/* First sequence */}
            {strip1Videos.map((video, idx) => renderVideoCard(video, `s1-a-${video.id}-${idx}`))}
            {/* Duplicated sequence for seamless infinite loop */}
            {strip1Videos.map((video, idx) => renderVideoCard(video, `s1-b-${video.id}-${idx}`))}
          </div>
        </div>

        {/* Strip 2: Moving Right (Alternate Direction) */}
        <div className="marquee-strip-row" aria-label="Knowledge videos row 2">
          <div className="marquee-track marquee-scroll-right">
            {/* First sequence */}
            {strip2Videos.map((video, idx) => renderVideoCard(video, `s2-a-${video.id}-${idx}`))}
            {/* Duplicated sequence for seamless infinite loop */}
            {strip2Videos.map((video, idx) => renderVideoCard(video, `s2-b-${video.id}-${idx}`))}
          </div>
        </div>

      </div>

      {/* Channel Banner Callout */}
      <div className="section-container mt-10">
        <div className="yt-channel-banner">
          <div className="yt-channel-left">
            <div className="yt-icon-box" aria-hidden="true">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </div>
            <div>
              <h4 className="yt-banner-title">eTender Guru Official YouTube Channel</h4>
              <p className="yt-banner-sub">{t.subscribersText}</p>
            </div>
          </div>

          <a
            href="https://www.youtube.com/@eTENDERGURU"
            target="_blank"
            rel="noopener noreferrer"
            className="yt-subscribe-btn"
          >
            <span>{t.channelCta}</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
        </div>
      </div>

      <VideoModal
        video={selectedVideo}
        isOpen={Boolean(selectedVideo)}
        onClose={() => setSelectedVideo(null)}
      />
    </section>
  );
};
