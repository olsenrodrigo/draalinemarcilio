import { useState } from "react";
import { ArrowRight, CheckCircle2, Mail, MapPin, MessageCircle } from "lucide-react";
import { AGENDAR_TEXTO, EMAIL, WHATSAPP_DISPLAY, site, whatsappUrl } from "@/content/site";

type Status = "idle" | "loading" | "success" | "error";

const emptyForm = { name: "", email: "", phone: "", message: "" };
type Field = keyof typeof emptyForm;

export default function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [status, setStatus] = useState<Status>("idle");

  const validate = () => {
    const found: Partial<Record<Field, string>> = {};
    (Object.keys(emptyForm) as Field[]).forEach((field) => {
      if (!form[field].trim()) found[field] = site.form.required;
    });
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email)) {
      found.email = site.form.invalidEmail;
    }
    setErrors(found);
    return Object.keys(found).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!response.ok) throw new Error("request failed");
      setForm(emptyForm);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const update = (field: Field, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    if (errors[field]) setErrors((current) => ({ ...current, [field]: undefined }));
  };

  return (
    <section id="contato" className="section section-wash">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">{site.form.eyebrow}</span>
          <h2>{site.form.title}</h2>
          <p>{site.form.intro}</p>
        </div>

        <div className="contact-grid reveal">
          <ul className="contact-details">
            {site.footer.addresses.map(([name, address]) => (
              <li key={name}>
                <strong>
                  <MapPin strokeWidth={1.5} aria-hidden="true" />
                  {name}
                </strong>
                <address>{address}</address>
              </li>
            ))}
            <li>
              <strong>
                <MessageCircle strokeWidth={1.5} aria-hidden="true" />
                WhatsApp
              </strong>
              <p>
                <a href={whatsappUrl(AGENDAR_TEXTO)} target="_blank" rel="noreferrer">
                  {WHATSAPP_DISPLAY}
                </a>
              </p>
            </li>
            <li>
              <strong>
                <Mail strokeWidth={1.5} aria-hidden="true" />
                E-mail
              </strong>
              <p>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </p>
            </li>
          </ul>

          {status === "success" ? (
            <div className="form-success">
              <h3>
                <CheckCircle2 strokeWidth={1.5} aria-hidden="true" />
                {site.form.successTitle}
              </h3>
              <p>{site.form.successText}</p>
              <button type="button" className="button button-ghost" onClick={() => setStatus("idle")}>
                {site.form.successAction}
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <label>
                {site.form.labels.name}
                <input
                  type="text"
                  value={form.name}
                  placeholder={site.form.placeholders.name}
                  aria-invalid={!!errors.name}
                  onChange={(event) => update("name", event.target.value)}
                />
                {errors.name && <span className="error">{errors.name}</span>}
              </label>

              <label>
                {site.form.labels.email}
                <input
                  type="email"
                  value={form.email}
                  placeholder={site.form.placeholders.email}
                  aria-invalid={!!errors.email}
                  onChange={(event) => update("email", event.target.value)}
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </label>

              <label>
                {site.form.labels.phone}
                <input
                  type="tel"
                  value={form.phone}
                  placeholder={site.form.placeholders.phone}
                  aria-invalid={!!errors.phone}
                  onChange={(event) => update("phone", event.target.value)}
                />
                {errors.phone && <span className="error">{errors.phone}</span>}
              </label>

              <label>
                {site.form.labels.message}
                <textarea
                  rows={4}
                  value={form.message}
                  placeholder={site.form.placeholders.message}
                  aria-invalid={!!errors.message}
                  onChange={(event) => update("message", event.target.value)}
                />
                {errors.message && <span className="error">{errors.message}</span>}
              </label>

              {status === "error" && <span className="error">{site.form.error}</span>}

              <button className="button" type="submit" disabled={status === "loading"}>
                {status === "loading" ? site.form.sending : site.form.submit}
                <ArrowRight />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
