import { ArrowRight } from "lucide-react";
import { AGENDAR_TEXTO, site, whatsappUrl } from "@/content/site";

export default function Areas() {
  return (
    <>
      <section id="areas" className="section section-wash">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">{site.areas.eyebrow}</span>
            <h2>{site.areas.title}</h2>
            <p>{site.areas.intro}</p>
          </div>

          <ul className="rule-list reveal">
            {site.areas.items.map((item) => (
              <li key={item}>
                <span className="rule-mark" aria-hidden="true" />
                <span className="rule-text">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="band">
        <div className="container band-inner">
          <div>
            <h2>{site.highlight.title}</h2>
            <p>{site.highlight.text}</p>
          </div>
          <a className="button button-light" href={whatsappUrl(AGENDAR_TEXTO)} target="_blank" rel="noreferrer">
            {site.actions.schedule}
            <ArrowRight />
          </a>
        </div>
      </section>
    </>
  );
}
