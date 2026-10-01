import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { videosData } from '../data/videosData';
import { VideoModal } from './VideoModal';

export const YouTubeSection = () => {
  const { language } = useLanguage();
  const t = translations[language].youtube;
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState(null);

  const categories = [
    { key: 'all', label: t.categories.all },
    { key: 'tutorials', label: t.categories.tutorials },
    { key: 'mistakes', label: t.categories.mistakes },
    { key: 'gem', label: t.categories.gem },
    { key: 'basics', label: t.categories.basics }
  ];

  const filteredVideos = activeCategory === 'all'
    ? videosData
    : videosData.filter((v) => v.category === activeCategory);

  return (
    <section className="youtube-section" id="youtube">
      <div className="section-container">
        
        {/* Header */}
        <div className="section-header-wrap">
          <div className="section-badge-pill">{t.badge}</div>
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle">{t.subtitle}</p>
        </div>

        {/* Category Filters */}
        <div className="filter-pills-bar" role="tablist" aria-label="Video category filter">
          {categories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat.key}
              className={`filter-pill-btn ${activeCategory === cat.key ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Videos Grid */}
        <div className="videos-grid">
          {filteredVideos.map((video) => {
            const title = video.title[language] || video.title.en;
            const desc = video.desc[language] || video.desc.en;

            return (
              <article
                key={video.id}
                className="video-card"
                onClick={() => setSelectedVideo(video)}
              >
                <div className="video-thumbnail-container">
                  <img
                    src={video.thumbnail}
                    alt={title}
                    className="video-thumbnail-img"
                    loading="lazy"
                  />
                  <div className="video-duration-badge">{video.duration}</div>
                  <div className="video-play-overlay">
                    <span className="video-play-btn" aria-hidden="true">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="video-info-content">
                  <h3 className="video-title">{title}</h3>
                  <p className="video-desc">{desc}</p>
                </div>

                <div className="video-card-action">
                  <span className="watch-link">
                    <span>{t.watchVideo}</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        {/* Channel Banner Callout */}
        <div className="yt-channel-banner">
          <div className="yt-channel-left">
            <div className="yt-icon-box" aria-hidden="true">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </div>
            <div>
              <h4 className="yt-banner-title">eTender Guru Official Channel</h4>
              <p className="yt-banner-sub">{t.subscribersText}</p>
            </div>
          </div>

          <a
            href="https://www.youtube.com/@etenderguru"
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
