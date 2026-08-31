// Registro de SEO/GEO do site: origem canônica, uma entrada por rota e o texto
// do llms.txt. É a fonte única — `entry-ssr.tsx` (build) e `useSeo` (runtime)
// leem daqui, então o HTML estático e a SPA nunca divergem.
//
// Por que existe: a SPA entrega `<div id="root"></div>` no HTML bruto. O Google
// até renderiza JavaScript, mas os crawlers de IA (GPTBot, ClaudeBot,
// PerplexityBot, OAI-SearchBot, CCBot) não — para eles o site simplesmente não
// existe. O pré-render usa este registro para gerar HTML de verdade por rota.

import {
  CRM,
  EMAIL,
  INSTAGRAM,
  WHATSAPP_DISPLAY,
  WHATSAPP_NUMBER,
  ADDRESS_ALUMIA,
  ADDRESS_EMNH,
  site,
} from "./site";

/** Sem barra final. Precisa bater com o canonical servido em produção. */
export const ORIGIN = "https://draalinemarcilio.com.br";

export const urlDaRota = (path: string) =>
  path === "/" ? `${ORIGIN}/` : `${ORIGIN}${path}`;

export type Rota = {
  path: string;
  title: string;
  description: string;
  /** Termos que a página realmente cobre. Sem enchimento: o Google ignora
   *  `keywords`, mas alguns motores generativos usam como sinal de escopo. */
  keywords: string[];
};

export const rotas: Rota[] = [
  {
    path: "/",
    title:
      "Cirurgiã do Aparelho Digestivo e Coloproctologista em São Paulo | Dra. Aline Marcilio Alves",
    description:
      "Dra. Aline Marcilio Alves (CRM 144.320/SP · RQE 72.325), cirurgiã do aparelho digestivo, coloproctologista e cirurgiã bariátrica formada pela FMUSP. Atendimento particular nos Jardins e no Jardim das Perdizes, São Paulo.",
    keywords: [
      "cirurgiã do aparelho digestivo em São Paulo",
      "coloproctologista em São Paulo",
      "coloproctologista nos Jardins",
      "cirurgia bariátrica São Paulo",
      "sleeve gástrico São Paulo",
      "bypass gástrico São Paulo",
      "cirurgia de hemorroidas São Paulo",
      "cirurgia de vesícula por laparoscopia",
      "cirurgia de refluxo gastroesofágico",
      "colonoscopia preventiva São Paulo",
      "cirurgiã digestiva FMUSP",
      "Dra. Aline Marcilio Alves",
    ],
  },
];

/** Dados cadastrais que precisam bater com Google Perfil da Empresa e diretórios.
 *  NAP inconsistente entre fontes é uma das causas mais comuns de SEO local fraco. */
export const ficha = [
  ["Profissional", site.doctor],
  ["Especialidade", site.specialty],
  ["Registro", CRM],
  ["WhatsApp", WHATSAPP_DISPLAY],
  ["E-mail", EMAIL],
  ["Instagram", INSTAGRAM],
  ["Consultório (Jardins)", ADDRESS_ALUMIA.replace(/\n/g, " — ")],
  ["Consultório (Jd. das Perdizes)", ADDRESS_EMNH.replace(/\n/g, " — ")],
  ["Site", `${ORIGIN}/`],
] as const;

/**
 * JSON-LD servido no HTML estático. O componente `StructuredData` já monta o
 * mesmo grafo em runtime; aqui ele vai para o HTML bruto, que é o único que
 * crawler sem JavaScript enxerga.
 */
export function grafoJsonLd() {
  const enderecos = site.locations.items
    .filter((unidade) => unidade.address)
    .map((unidade) => ({
      "@type": "PostalAddress",
      name: unidade.name,
      streetAddress: unidade.address!.split("\n")[0],
      addressLocality: "São Paulo",
      addressRegion: "SP",
      addressCountry: "BR",
    }));

  const physician = {
    "@type": "Physician",
    "@id": `${ORIGIN}/#physician`,
    name: site.doctor,
    description: site.specialty,
    url: `${ORIGIN}/`,
    image: `${ORIGIN}/opengraph.jpg`,
    medicalSpecialty: [
      "Gastroenterologic Surgery",
      "Colorectal Surgery",
      "Bariatric Surgery",
    ],
    identifier: CRM,
    telephone: `+${WHATSAPP_NUMBER}`,
    email: EMAIL,
    sameAs: [INSTAGRAM],
    address: enderecos,
    areaServed: { "@type": "City", name: "São Paulo" },
    availableService: site.treatments.items.map((nome: string) => ({
      "@type": "MedicalProcedure",
      name: nome,
    })),
  };

  const faq = {
    "@type": "FAQPage",
    "@id": `${ORIGIN}/#faq`,
    inLanguage: "pt-BR",
    mainEntity: site.education.items.map(([pergunta, resposta]) => ({
      "@type": "Question",
      name: pergunta,
      acceptedAnswer: { "@type": "Answer", text: resposta },
    })),
  };

  const website = {
    "@type": "WebSite",
    "@id": `${ORIGIN}/#website`,
    url: `${ORIGIN}/`,
    name: site.doctor,
    inLanguage: "pt-BR",
    publisher: { "@id": `${ORIGIN}/#physician` },
  };

  return { "@context": "https://schema.org", "@graph": [physician, website, faq] };
}

/**
 * `llms.txt` — convenção emergente: markdown limpo, sem navegação nem script,
 * que motores generativos leem direto. Montado a partir do mesmo `site.ts` da
 * interface, então nunca descola da copy aprovada.
 */
export function llmsTxt() {
  return [
    `# ${site.doctor}`,
    "",
    `> ${site.specialty} em São Paulo/SP. Diagnóstico, indicação cirúrgica e`,
    "> acompanhamento em cirurgia do aparelho digestivo, coloproctologia e cirurgia",
    `> bariátrica. Registro: ${CRM}.`,
    "",
    "## Ficha",
    "",
    ...ficha.map(([rotulo, valor]) => `- ${rotulo}: ${valor}`),
    "",
    "## Sobre a médica",
    "",
    ...site.about.paragraphs,
    "",
    "## Formação e credenciais",
    "",
    ...site.about.credentials.map((c: string) => `- ${c}`),
    "",
    "## Áreas de atuação",
    "",
    ...site.areas.items.map((a: string) => `- ${a}`),
    "",
    "## Tratamentos e cirurgias",
    "",
    ...site.treatments.items.map((t: string) => `- ${t}`),
    "",
    "## Onde atende",
    "",
    ...site.locations.items.map((u) =>
      u.address
        ? `- ${u.name} — ${u.address.replace(/\n/g, ", ")} (${u.contactLabel}: ${u.contact})`
        : `- ${u.name} (${u.contactLabel}: ${u.contact})`,
    ),
    "",
    "## Perguntas frequentes",
    "",
    ...site.education.items.flatMap(([pergunta, resposta]) => [
      `### ${pergunta}`,
      "",
      resposta,
      "",
    ]),
    "## Observações",
    "",
    "- Atendimento particular; o agendamento é feito pelo WhatsApp ou pelo formulário do site.",
    "- Este site é informativo e não substitui consulta médica: nenhuma conduta é indicada",
    "  sem avaliação presencial.",
    `- Fonte: ${ORIGIN}/`,
  ].join("\n");
}
