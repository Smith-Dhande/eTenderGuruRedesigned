import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";




export default function WebinarAudience() {
  const { language } = useLanguage();

  const t = translations[language];
  const section = t.webinarAudience;

  return (
    <section className="webinar-audience">
      <div className="webinar-audience-container">

        {/* Header */}
        <div className="webinar-audience-header">
          
       

          <div>
            <span className="webinar-audience-eyebrow">
              {section.eyebrow}
            </span>
            

            <h2 className="webinar-audience-title">
              <span>{section.titleSerif}</span>
              <strong>{section.titleImpact}</strong>
            </h2>
          </div>

            <div className="webinar-audience-intro-wrap">
              <p className="webinar-audience-intro">
                <img
                  src="/gem_logo-removebg-preview.png"
                  alt="Government e-Marketplace"
                  className="gem-logo"
                />
                {section.subtitle}
              </p>
            </div>

          </div>

          <div className="webinar-audience-image-wrap">
            <img
              src="/Threeenginner.png"
              alt="Civil, electrical, and technical professionals"
              className="webinar-audience-image"
            />
          </div>

          {/* Compact Table */}
          <div className="webinar-audience-table">

          {section.audiences.map((audience, index) => (
            <article
              className="webinar-audience-row"
              key={audience.id}
            >

              <div className="webinar-audience-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="webinar-audience-icon">
                
              </div>

              <div className="webinar-audience-content">
                <h3>{audience.title}</h3>
                <p>{audience.description}</p>
              </div>

              <div className="webinar-audience-arrow">
                
              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}