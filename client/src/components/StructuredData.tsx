import { CRM, EMAIL, INSTAGRAM, WHATSAPP_NUMBER, site } from "@/content/site";

export default function StructuredData() {
  const physician = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: site.doctor,
    description: site.specialty,
    medicalSpecialty: ["Gastroenterologic Surgery", "Colorectal Surgery", "Bariatric Surgery"],
    identifier: CRM,
    telephone: `+${WHATSAPP_NUMBER}`,
    email: EMAIL,
    sameAs: [INSTAGRAM],
    address: site.locations.items
      .filter((unit) => unit.address)
      .map((unit) => ({
        "@type": "PostalAddress",
        name: unit.name,
        streetAddress: unit.address?.split("\n")[0],
        addressLocality: "São Paulo",
        addressRegion: "SP",
        addressCountry: "BR",
      })),
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: site.education.items.map(([name, text]) => ({
      "@type": "Question",
      name,
      acceptedAnswer: { "@type": "Answer", text },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(physician) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </>
  );
}
