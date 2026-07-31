import { Star } from "lucide-react";
import { AGENDAR_TEXTO, site, whatsappUrl } from "@/content/site";
import logoSimbolo from "@/assets/images/logo-simbolo.png";

export default function Testimonials() {
  return (
    <>
      <section id="depoimentos" className="section section-wash">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">{site.testimonials.eyebrow}</span>
            <h2>{site.testimonials.title}</h2>
            <p>{site.testimonials.intro}</p>
          </div>

          <div className="testimonials reveal">
            {site.testimonials.items.map((item) => (
              <article key={item.name}>
                <div className="stars" aria-hidden="true">
                  {[0, 1, 2, 3, 4].map((star) => (
                    <Star key={star} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <blockquote>{item.text}</blockquote>
                <footer>
                  <strong>{item.name}</strong>
                  <span>{item.detail}</span>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container reveal">
          <img src={logoSimbolo} alt="" loading="lazy" width={54} height={54} />
          <h2>{site.finalCta.title}</h2>
          <p>{site.finalCta.text}</p>
          <a className="button button-light" href={whatsappUrl(AGENDAR_TEXTO)} target="_blank" rel="noreferrer">
            {site.finalCta.cta}
          </a>
        </div>
      </section>
    </>
  );
}
