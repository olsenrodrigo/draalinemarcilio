import { MapPin, Phone } from "lucide-react";
import { site } from "@/content/site";

export default function Locations() {
  const mapped = site.locations.items.filter((item) => item.map);

  return (
    <section id="consultorio" className="section">
      <div className="container">
        <div className="locations-grid reveal">
          <div>
            <div className="section-head">
              <span className="eyebrow">{site.locations.eyebrow}</span>
              <h2>{site.locations.title}</h2>
              <p>{site.locations.intro}</p>
            </div>

            <div className="location-notes">
              {site.locations.notes.map((note) => (
                <p key={note}>{note}</p>
              ))}
            </div>
          </div>

          <ul className="location-list">
            {site.locations.items.map((unit) => (
              <li key={unit.name}>
                <h3>
                  <MapPin strokeWidth={1.5} aria-hidden="true" />
                  {unit.name}
                </h3>
                {unit.address && <address>{unit.address}</address>}
                {/* Nem todo local tem telefone proprio (a RMS, por exemplo).
                    Sem esta guarda o `unit.href.startsWith` quebra a pagina. */}
                {unit.href && unit.contact && (
                  <a
                    className="location-contact"
                    href={unit.href}
                    target={unit.href.startsWith("http") ? "_blank" : undefined}
                    rel={unit.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    <Phone strokeWidth={1.5} aria-hidden="true" />
                    {unit.contactLabel}: {unit.contact}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="maps reveal">
          {mapped.map((unit) => (
            <figure key={unit.name}>
              <iframe
                src={unit.map ?? undefined}
                title={unit.mapTitle ?? unit.name}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <figcaption>{unit.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
