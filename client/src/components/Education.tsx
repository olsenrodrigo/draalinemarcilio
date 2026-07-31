import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { site } from "@/content/site";

export default function Education() {
  return (
    <section id="saiba-mais" className="section">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">{site.education.eyebrow}</span>
          <h2>{site.education.title}</h2>
          <p>{site.education.intro}</p>
        </div>

        <Accordion.Root type="single" collapsible className="faq reveal">
          {site.education.items.map(([question, answer], index) => (
            <Accordion.Item key={question} value={`item-${index}`} className="faq-item">
              <Accordion.Header>
                <Accordion.Trigger className="faq-trigger">
                  {question}
                  <ChevronDown strokeWidth={1.5} aria-hidden="true" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="faq-content">
                <p>{answer}</p>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
