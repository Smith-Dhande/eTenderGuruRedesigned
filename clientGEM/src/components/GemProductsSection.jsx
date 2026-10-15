import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

export default function GemProductsSection() {
  const { language } = useLanguage();
  const t = translations[language];
  const section = t.gemProducts;

  return (
    <section className="gem-products-section" id="gem-products">
      <div className="gem-products-container">

        {/* SMALL INTRO */}
        <div className="gem-products-topline">
          <span>{section.eyebrow}</span>
          <div className="gem-topline-line"></div>
          <span>{section.badge}</span>
        </div>


        {/* AD / PROMO PANEL */}
       


        {/* PRODUCT TABLE */}
        <div className="gem-products-table-box">

          <div className="gem-table-heading">
            <div>
              <span>{section.tableEyebrow}</span>
              <h3>{section.tableTitle}</h3>
            </div>

            <span className="gem-table-count">
              {section.count}
            </span>
          </div>


          <table className="gem-products-table">

            <thead>
              <tr>
                <th>#</th>
                <th>{section.category}</th>
                <th>{section.products}</th>
              </tr>
            </thead>

            <tbody>
              {section.items.map((item, index) => (
                <tr key={index}>

                  <td>
                    {String(index + 1).padStart(2, "0")}
                  </td>

                  <td className="gem-category">
                    {item.category}
                  </td>

                  <td>
                    {item.products}
                  </td>

                </tr>
              ))}
            </tbody>

          </table>


          {/* BOTTOM IMAGE */}
          <div className="gem-products-bottom-image">

            <img
              src="/image5.png"
              alt="Products available on GeM"
            />

            <div className="gem-image-caption">
              {section.imageCaption}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}