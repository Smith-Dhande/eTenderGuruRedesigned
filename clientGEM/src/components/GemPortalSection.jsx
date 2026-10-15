import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";


export default function GemPortalSection() {
  const { language } = useLanguage();
  const t = translations[language];

  const section = t.gemPortal;

  return (
    <section className="gem-section" id="gem-portal">
      <div className="gem-container">

        {/* ================================
            HEADER
        ================================= */}
        <div className="gem-header">

          <div className="gem-heading-wrap">
            <span className="gem-eyebrow">
              {section.eyebrow}
            </span>

            <h2>
              {section.headingLine1}
              <br />
              <span>{section.headingLine2}</span>
            </h2>

            <p>{section.description}</p>
          </div>


          {/* ================================
              VISUAL AREA
          ================================= */}
          <div className="gem-visual-area">

            {/* Main GeM Logo */}
            <div className="gem-logo-box">
              <img
                src="/gem3.png"
                alt="Government eMarketplace"
                className="gem-logo1"
              />

              <span>{section.logoLabel}</span>
            </div>


            

          </div>
        </div>


        {/* ================================
            INFORMATION GRID
        ================================= */}
        <div className="gem-info-grid">

          {section.info.map((item, index) => (
            <div
              className="gem-info-item"
              key={index}
            >

              <span className="gem-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>

            </div>
          ))}

        </div>


        


        

      </div>
    </section>
  );
}