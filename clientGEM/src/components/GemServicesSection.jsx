import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

export default function GemServicesSection() {
  const { language } = useLanguage();
  const section = translations[language].gemServices;

  return (
    <section
      style={{
        background: "linear-gradient(180deg, #ff7043 0%, #f5410b 100%)",
        padding: "55px 0 0",
      }}
    >
      {/* TITLE */}
      <h2
        style={{
          margin: "0 0 30px",
          textAlign: "center",
          color: "#fff",
          fontSize: "28px",
          fontWeight: 500,
        }}
      >
        Gem {section.title}
      </h2>

      {/* WHITE PANEL */}
      <div
        style={{
          width: "90%",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "45px 35px 40px",
          background: "#fff",
          borderRadius: "4px",
          boxShadow: "0 5px 20px rgba(0,0,0,0.15)",
        }}
      >
        {/* SERVICES */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "25px",
            alignItems: "center",
          }}
        >
          {section.items.map((item, index) => (
            <div
              key={index}
              style={{
                textAlign: "center",
                color: "#172b4d",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  margin: "0 auto 10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ff7043",
                  fontSize: "32px",
                  border: "1.5px solid #ff7043",
                  borderRadius: "50%",
                }}
              >
                {item.icon}
              </div>

              <h3
                style={{
                  margin: 0,
                  fontSize: "12px",
                  fontWeight: 700,
                }}
              >
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        {/* BUTTON */}
        
      </div>
    </section>
  );
}