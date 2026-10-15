import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';



const COPY = {
  mr: {
    aria: 'GeM पोर्टलबद्दल माहिती',
    left: {
      tag: 'जाणून घ्या',
      title: 'GeM म्हणजे काय?',
      body:
        'Government e-Marketplace हे केंद्र सरकारचे ऑनलाइन पोर्टल आहे. सरकारी विभाग त्यावरून वस्तू आणि सेवा खरेदी करतात.',
      stepsTitle: 'विक्रेत्यांसाठी फायदे',
      steps: [
        'कागदी निविदांशिवाय थेट विक्रीची संधी',
        'MSE, स्टार्टअप व महिला उद्योजकांसाठी तरतुदी',
        'वस्तू आणि सेवा दोन्ही विकता येतात',
      ],
      foot: '२०१६ मध्ये सुरू • वाणिज्य व उद्योग मंत्रालय',
    },
    right: {
      seal: 'प्रश्न • उत्तरे • प्रश्न • उत्तरे • ',
      heading: 'लोक नेहमी विचारतात',
      qas: [
        {
          q: 'GeM वर नोंदणी कोण करू शकतो?',
          a: 'वस्तू किंवा सेवा पुरवणारे उत्पादक, व्यापारी आणि सेवा पुरवठादार विक्रेता म्हणून नोंदणी करू शकतात.',
        },
        {
          q: 'नवीन व्यवसायही GeM वर विकू शकतो का?',
          a: 'होय. स्टार्टअप आणि MSE साठी विशेष तरतुदी आहेत. अटी पोर्टलवर एकदा तपासून घ्या.',
        },
        {
          q: 'GeM आणि महाटेंडरमध्ये काय फरक?',
          a: 'GeM हे केंद्र सरकारचे खरेदी पोर्टल आहे. महाटेंडर हे महाराष्ट्र शासनाच्या निविदांसाठी आहे.',
        },
        {
          q: 'खूप संगणकीय ज्ञान लागते का?',
          a: 'मूलभूत इंटरनेट आणि संगणकीय ज्ञान पुरेसे असते. नोंदणीसाठी आवश्यक कागदपत्रे तयार ठेवा.',
        },
      ],
      foot: 'सामान्य माहिती. अधिकृत तपशील GeM पोर्टलवर तपासा.',
    },
  },
  en: {
    aria: 'Information about the GeM portal',
    left: {
      tag: 'Good to know',
      title: 'About GeM?',
      body:
        'The Government e-Marketplace is the Central Government\'s online portal. Government departments buy goods and services through it.',
      stepsTitle: 'Why sellers use it',
      steps: [
        'Sell directly, without paper tenders',
        'Provisions for MSEs, startups and women entrepreneurs',
        'Both goods and services can be sold',
      ],
      foot: 'Launched 2016 • Ministry of Commerce & Industry',
    },
    right: {
      seal: 'questions • answers • questions • answers • ',
      heading: 'People often ask',
      qas: [
        {
          q: 'Who can register on GeM?',
          a: 'Manufacturers, traders and service providers who supply goods or services can register as sellers.',
        },
        {
          q: 'Can a new business sell on GeM?',
          a: 'Yes. There are special provisions for startups and MSEs. Check the current conditions on the portal.',
        },
        {
          q: 'GeM vs Mahatender: what is the difference?',
          a: 'GeM is the Central Government\'s purchase portal. Mahatender is for Maharashtra Government tenders.',
        },
        {
          q: 'Do I need advanced computer skills?',
          a: 'Basic internet and computer knowledge is enough. Keep your required documents ready for registration.',
        },
      ],
      foot: 'General information. Check official details on the GeM portal.',
    },
  },
};

const getCopy = (language) => (language === 'mr' ? COPY.mr : COPY.en);

/* Adds .is-in once the rail scrolls into view, which triggers the slide-in. */
const useReveal = () => {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    if (!('IntersectionObserver' in window)) {
      setSeen(true);
      return undefined;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return [ref, seen];
};


export const GemAdLeft = () => {
  const { language } = useLanguage();
  const copy = getCopy(language);
  const c = copy.left;
  const [ref, seen] = useReveal();

  return (
    <aside ref={ref} className={`gem-rail gem-rail--left ${seen ? 'is-in' : ''}`} aria-label={copy.aria}>
      <div className="gem-rail-sticky">
        <div className="gem-card gem-card--navy">
          <span className="gem-tag">
            <span className="gem-tag-i" aria-hidden="true">i</span>
            {c.tag}
          </span>

          <h3 className="gem-card-title">{c.title}</h3>
          <p className="gem-card-body">{c.body}</p>

          <p className="gem-list-title">{c.stepsTitle}</p>
          <ul className="gem-steps">
            {c.steps.map((s, i) => (
              <li key={s} className="gem-step" style={{ '--i': i }}>
                <span className="gem-step-tick" aria-hidden="true">
                  <svg viewBox="0 0 20 20" width="14" height="14">
                    <path d="M4 10.5l4 4 8-9" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="gem-step-text">{s}</span>
              </li>
            ))}
          </ul>

          <span className="gem-card-foot">{c.foot}</span>
        </div>
      </div>
    </aside>
  );
};


export const GemAdRight = () => {
  const { language } = useLanguage();
  const copy = getCopy(language);
  const c = copy.right;
  const [ref, seen] = useReveal();
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || !seen) return undefined;
    const id = setInterval(() => setIdx((i) => (i + 1) % c.qas.length), 6500);
    return () => clearInterval(id);
  }, [paused, seen, c.qas.length]);

  const qa = c.qas[idx % c.qas.length];

  return (
    <aside ref={ref} className={`gem-rail gem-rail--right ${seen ? 'is-in' : ''}`} aria-label={copy.aria}>
      <div className="gem-rail-sticky">
        <div
          className="gem-card gem-card--orange"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="gem-seal" aria-hidden="true">
            <svg className="gem-seal-ring" viewBox="0 0 200 200">
              <defs>
                <path id="gemSealPath" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
              </defs>
              <text className="gem-seal-text">
                <textPath href="#gemSealPath" textLength="480">{c.seal}</textPath>
              </text>
            </svg>
            <span className="gem-seal-core">?</span>
          </div>

          <h3 className="gem-card-title">{c.heading}</h3>

          <div className="gem-qa" aria-live="polite">
            <div className="gem-qa-inner" key={idx}>
              <p className="gem-qa-q">{qa.q}</p>
              <p className="gem-qa-a">{qa.a}</p>
            </div>
          </div>

          <div className="gem-dots">
            {c.qas.map((item, i) => (
              <button
                key={item.q}
                type="button"
                className={`gem-dot ${i === idx ? 'is-active' : ''}`}
                onClick={() => setIdx(i)}
                aria-label={item.q}
                aria-current={i === idx}
              />
            ))}
          </div>

          <span className="gem-card-foot">{c.foot}</span>
        </div>
      </div>
    </aside>
  );
};