import { site } from "@/content/site";

export default function Treatments() {
  return (
    <section id="tratamentos" className="section">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">{site.treatments.eyebrow}</span>
          <h2>{site.treatments.title}</h2>
          <p>{site.treatments.intro}</p>
        </div>

        <ul className="rule-list reveal">
          {site.treatments.items.map((item) => (
            <li key={item}>
              <span className="rule-mark" aria-hidden="true" />
              <span className="rule-text">{item}</span>
            </li>
          ))}
        </ul>

        <div className="list-note reveal">
          <p>{site.treatments.note}</p>
        </div>
      </div>
    </section>
  );
}
