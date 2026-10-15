
import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

const AUTOPLAY_MS = 6000;

const initials = (name = "") =>
    name
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map((w) => w[0]?.toUpperCase())
        .join("");

export default function CustomersSpeak({
    autoPlay = true,
}) {
    const { language } = useLanguage();

    const customerData =
        translations?.[language]?.customersSpeak ||
        translations?.en?.customersSpeak;

    const title = customerData?.title || "Customers Speak";
    const dotsLabel =
        customerData?.dotsLabel || "Choose a testimonial";
    const dotLabel =
        customerData?.dotLabel || "Testimonial";

    const items = customerData?.items || [];

    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    /* Reset testimonial when language changes */
    useEffect(() => {
        setIndex(0);
    }, [language]);

    /* Auto rotate */
    useEffect(() => {
        if (!autoPlay || paused || items.length < 2) return;

        const timer = setInterval(() => {
            setIndex((current) => (current + 1) % items.length);
        }, AUTOPLAY_MS);

        return () => clearInterval(timer);
    }, [autoPlay, paused, items.length]);

    if (!items.length) return null;

    const activeIndex = index % items.length;
    const current = items[activeIndex];

    return (
        <section
            className="cs-wrap"
            aria-label={title}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
        >
            <div className="cs-card">

                {/* Title */}
                <h2 className="cs-title">
                    {title}
                </h2>

                {/* Testimonial */}
                <figure
                    className="cs-slide"
                    key={`${language}-${current.id}`}
                    aria-live="polite"
                >
                    <blockquote className="cs-quote">
                        &ldquo;{current.quote}&rdquo;
                    </blockquote>

                    {/* Customer Image / Initials */}
                    <div className="cs-avatar">
                        {current.image ? (
                            <img
                                src={current.image}
                                alt={current.name}
                                loading="lazy"
                            />
                        ) : (
                            <span aria-hidden="true">
                                {initials(current.name)}
                            </span>
                        )}
                    </div>

                    {/* Customer Information */}
                    <figcaption>
                        <strong className="cs-name">
                            {current.name}
                        </strong>

                        <span className="cs-role">
                            {current.role}
                        </span>
                    </figcaption>
                </figure>

                {/* Dots */}
                {items.length > 1 && (
                    <div
                        className="cs-dots"
                        role="tablist"
                        aria-label={dotsLabel}
                    >
                        {items.map((item, i) => (
                            <button
                                key={item.id}
                                type="button"
                                role="tab"
                                aria-selected={i === activeIndex}
                                aria-label={`${dotLabel} ${i + 1}`}
                                className={
                                    "cs-dot" +
                                    (i === activeIndex ? " on" : "")
                                }
                                onClick={() => setIndex(i)}
                            />
                        ))}
                    </div>
                )}
            </div>

            <style>{`
                .cs-wrap {
                    position: relative;
                    padding: 0 20px;
                    font-family: Roboto, system-ui, -apple-system,
                        "Segoe UI", sans-serif;
                }

                .cs-wrap::before {
                    content: "";
                    position: absolute;
                    left: 0;
                    right: 0;
                    top: 0;
                    height: 64px;
                    background: linear-gradient(
                        90deg,
                        #ff5a3c,
                        #f7a94e
                    );
                    z-index: 0;
                }

                .cs-card {
                    position: relative;
                    z-index: 1;
                    max-width: 1100px;
                    margin: 16px auto 0;
                    padding: 40px 32px 28px;
                    background: #fff;
                    border-radius: 4px;
                    box-shadow: 0 2px 12px rgba(30, 60, 110, 0.14);
                    text-align: center;
                }

                .cs-title {
                    margin: 0 0 30px;
                    font-size: 26px;
                    font-weight: 400;
                    color: #3c3c3c;
                }

                .cs-slide {
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    animation: csFade 0.5s ease;
                }

                .cs-quote {
                    max-width: 860px;
                    margin: 0 0 22px;
                    font-size: 16px;
                    line-height: 1.6;
                    color: #444;
                }

                .cs-avatar {
                    width: 88px;
                    height: 88px;
                    border-radius: 50%;
                    overflow: hidden;
                    display: grid;
                    place-items: center;
                    background: linear-gradient(
                        135deg,
                        #3b1fa8,
                        #7d2ae8
                    );
                    color: #fff;
                    font-size: 28px;
                    font-weight: 700;
                }

                .cs-avatar img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .cs-name {
                    display: block;
                    margin-top: 10px;
                    font-size: 13px;
                    font-weight: 700;
                    color: #444;
                }

                .cs-role {
                    display: block;
                    margin-top: 8px;
                    font-size: 12px;
                    color: #555;
                }

                .cs-dots {
                    display: flex;
                    justify-content: center;
                    gap: 8px;
                    margin-top: 22px;
                }

                .cs-dot {
                    width: 10px;
                    height: 10px;
                    padding: 0;
                    border-radius: 50%;
                    border: 1px solid #b9bcc4;
                    background: #fff;
                    cursor: pointer;
                    transition:
                        background 0.2s,
                        border-color 0.2s,
                        transform 0.2s;
                }

                .cs-dot:hover {
                    border-color: #7d2ae8;
                    transform: scale(1.1);
                }

                .cs-dot.on {
                    background: #7d2ae8;
                    border-color: #7d2ae8;
                }

                @keyframes csFade {
                    from {
                        opacity: 0;
                        transform: translateY(6px);
                    }

                    to {
                        opacity: 1;
                        transform: none;
                    }
                }

                @media (max-width: 600px) {
                    .cs-card {
                        padding: 28px 16px 22px;
                    }

                    .cs-title {
                        font-size: 22px;
                    }

                    .cs-quote {
                        font-size: 14px;
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .cs-slide {
                        animation: none;
                    }
                }
            `}</style>
        </section>
    );
}


