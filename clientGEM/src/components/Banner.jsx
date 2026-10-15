import React from "react";

export default function GemAdBanner() {
  return (
    <section
      style={{
        width: "100%",
        padding: "25px 0",
        background: "#f8f6f1",
      }}
    >
      <div
        style={{
          width: "92%",
          maxWidth: "1200px",
          margin: "0 auto",
          overflow: "hidden",
          borderRadius: "6px",
          boxShadow: "0 8px 25px rgba(17, 28, 45, 0.10)",
          border: "1px solid rgba(17, 28, 45, 0.10)",
        }}
      >
        <img
          src="/banner.png"
          alt="GeM Government eMarketplace"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            objectFit: "contain",
          }}
        />
      </div>
    </section>
  );
}