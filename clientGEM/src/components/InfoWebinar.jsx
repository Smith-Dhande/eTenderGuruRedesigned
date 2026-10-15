import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";


export default function WebinarLearn({ onRegister }) {
    const { language } = useLanguage();

    const data =
        translations?.[language]?.webinarLearn ||
        translations?.en?.webinarLearn;

    const items = data?.items || [];
    if (!items.length) return null;

    const title = data?.title || "What will you learn from this webinar?";
    const partLabel = data?.partLabel || "Part";
    const pad = (n) => String(n).padStart(2, "0");

    /* Spotlight follows the cursor inside the banner */
    const moveSpot = (e) => {
        const r = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
        e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
    };

    return (
        <section className="wl" aria-label={title}>
            <div className="wl-inner">
                <h2 className="wl-title">{title}</h2>

                <div className="wl-grid">
                    {items.map((item) => (
                        <article className="wl-card" key={`${language}-${item.id}`}>
                            <span className="wl-no" aria-hidden="true">
                                {pad(item.id)}
                            </span>

                            <div className="wl-body">
                                <h3 className="wl-part">
                                    {partLabel} #{pad(item.id)}
                                </h3>
                                <ul className="wl-list">
                                    {item.points.map((p) => (
                                        <li key={p}>{p}</li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="wl-stage" onMouseMove={moveSpot}>
                    <button type="button" className="wl-cta" onClick={onRegister}>
                        {data?.registerText}
                    </button>
                    <p className="wl-tax">{data?.taxText}</p>
                </div>
            </div>
        </section>
    );
}