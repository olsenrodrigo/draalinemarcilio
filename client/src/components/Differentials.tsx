import { GraduationCap, HeartHandshake, Network, ShieldCheck } from "lucide-react";
import { site } from "@/content/site";

const icons = [GraduationCap, ShieldCheck, HeartHandshake, Network];

export default function Differentials() {
  return (
    <section id="diferenciais" className="section section-wash">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">{site.differentials.eyebrow}</span>
          <h2>{site.differentials.title}</h2>
          <p>{site.differentials.intro}</p>
        </div>

        <div className="differentials reveal">
          {site.differentials.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <article key={item.title}>
                <Icon strokeWidth={1.25} aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
