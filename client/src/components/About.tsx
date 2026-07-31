import { Check } from "lucide-react";
import { AGENDAR_TEXTO, site, whatsappUrl } from "@/content/site";
import retrato from "@/assets/images/aline-retrato.jpg";

export default function About() {
  return (
    <section id="sobre" className="section">
      <div className="container">
        <div className="about-grid reveal">
          <figure className="about-figure">
            <img src={retrato} alt={site.about.imageAlt} loading="lazy" width={960} height={1200} />
          </figure>

          <div className="about-copy">
            <span className="eyebrow">{site.about.eyebrow}</span>
            <h2>{site.about.title}</h2>

            {site.about.paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}

            <ul className="credentials">
              {site.about.credentials.map((item) => (
                <li key={item}>
                  <Check strokeWidth={2} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="about-stats reveal">
          {site.about.indicators.map(([value, label]) => (
            <div key={value}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>

        <div className="quote reveal">
          <blockquote>{site.about.quote}</blockquote>
          <a className="button" href={whatsappUrl(AGENDAR_TEXTO)} target="_blank" rel="noreferrer">
            {site.about.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
