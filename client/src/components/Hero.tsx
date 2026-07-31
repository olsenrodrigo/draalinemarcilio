import { ArrowRight } from "lucide-react";
import { AGENDAR_TEXTO, site, whatsappUrl } from "@/content/site";
import heroImage from "@/assets/images/aline-hero.jpg";

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">{site.hero.eyebrow}</span>
          <h1>{site.hero.title}</h1>

          <p className="hero-name">{site.doctor}</p>
          <p className="hero-role">{site.hero.subtitle}</p>

          {site.hero.paragraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}

          <div className="hero-actions">
            <a className="button" href={whatsappUrl(AGENDAR_TEXTO)} target="_blank" rel="noreferrer">
              {site.actions.schedule}
              <ArrowRight />
            </a>
            <a className="button button-ghost" href="#sobre">
              {site.actions.about}
            </a>
          </div>

          <div className="hero-stats">
            {site.hero.indicators.map(([value, label]) => (
              <div key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <figure className="hero-figure">
          <img src={heroImage} alt={site.hero.imageAlt} fetchPriority="high" width={1200} height={1599} />
        </figure>
      </div>
    </section>
  );
}
