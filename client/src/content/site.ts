// Todo o conteúdo do site em um lugar só. Textos seguem a copy aprovada (copy/novacopy.md).

export const WHATSAPP_NUMBER = "5511945004468";
export const WHATSAPP_DISPLAY = "(11) 94500-4468";
export const EMAIL = "contato@draalinealves.com.br";
export const INSTAGRAM = "https://www.instagram.com/draaline.alves/";
export const CRM = "CRM 144.320/SP · RQE 72.325";

/** Os dois endereços de atendimento presencial. */
export const ADDRESS_ALUMIA = "Alameda Campinas, 1100 — 11º andar\nJardins — São Paulo/SP";
export const ADDRESS_EMNH = "Av. Marquês de São Vicente, 2219 — Conj. 316\nJardim das Perdizes — São Paulo/SP";

export const whatsappUrl = (text?: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

/** Mensagem que já vai preenchida quando o paciente abre o WhatsApp. */
export const AGENDAR_TEXTO = "Olá! Gostaria de agendar uma consulta com a Dra. Aline Marcilio.";

export const site = {
  doctor: "Dra. Aline Marcilio Alves",
  specialty: "Cirurgiã do Aparelho Digestivo e Coloproctologista",

  nav: [
    ["Sobre", "#sobre"],
    ["Áreas de atuação", "#areas"],
    ["Tratamentos", "#tratamentos"],
    ["Diferenciais", "#diferenciais"],
    ["Consultório", "#consultorio"],
    ["Saiba mais", "#saiba-mais"],
    ["Contato", "#contato"],
  ] as const,

  actions: {
    schedule: "Agendar consulta",
    about: "Conheça a especialista",
    whatsapp: "Falar no WhatsApp",
  },

  hero: {
    eyebrow: "Cirurgia Digestiva · Coloproctologia · Cirurgia Bariátrica",
    title: "Sua saúde digestiva em mãos experientes",
    subtitle: "Cirurgiã do Aparelho Digestivo e Coloproctologista",
    paragraphs: [
      "Formada pela FMUSP com residência e subespecialização no Hospital das Clínicas, a Dra. Aline oferece diagnóstico preciso e tratamento cirúrgico com foco em resultados seguros e duradouros, sempre com técnica apurada e cuidado individualizado.",
      "Incorpora um modelo de atendimento abrangente baseado nos pilares da Lifestyle Medicine, com formação complementar em Harvard (2019), integrando saúde digestiva, hábitos e qualidade de vida.",
    ],
    indicators: [
      ["15+", "anos de formação"],
      ["3", "especializações"],
      ["FMUSP", "formação acadêmica"],
    ],
    imageAlt: "Dra. Aline Marcilio Alves, cirurgiã do aparelho digestivo e coloproctologista",
  },

  about: {
    eyebrow: "Sobre a especialista",
    title: "Medicina com propósito, técnica e humanidade",
    paragraphs: [
      "Cirurgiã especialista em Cirurgia do Aparelho Digestivo, Coloproctologia e Cirurgia Bariátrica, com formação de excelência e atuação focada em um cuidado responsável, atualizado e individualizado.",
      "Graduada pela Faculdade de Medicina da USP (FMUSP), realizou residência médica em Cirurgia Geral, Cirurgia Digestiva e Coloproctologia no Hospital das Clínicas da FMUSP. Aprimorou sua técnica em videolaparoscopia com fellowship no Saint-Pierre University Hospital, em Bruxelas (Bélgica).",
      "Com mais de 10 anos de atuação cirúrgica, a Dra. Aline é reconhecida pela atenção cuidadosa a cada caso, pela clareza nas orientações e pela decisão compartilhada com o paciente, sempre com base em evidências científicas e respeito à individualidade de quem a procura.",
      "Atua de maneira sistêmica e abrangente, com foco em medicina baseada em evidências, considerando hábitos, saúde intestinal, metabolismo e qualidade de vida de forma individualizada.",
    ],
    credentials: [
      "Cirurgiã do Aparelho Digestivo e Coloproctologista",
      "Especialista certificada pelo CBCD",
      "Fellowship em Videolaparoscopia — Bélgica",
      "Formada pela Faculdade de Medicina da USP (FMUSP)",
      "Chefe de residentes no HC-FMUSP",
      CRM,
    ],
    indicators: [
      ["10+ anos", "de experiência em cirurgia digestiva e proctológica"],
      ["3 especializações", "Digestivo · Coloproctologia · Bariátrica"],
      ["HC-FMUSP", "residência e preceptoria na maior referência do país"],
    ],
    quote: "Cada paciente merece tempo, escuta e uma decisão cirúrgica tomada com cuidado.",
    cta: "Agendar minha consulta",
    imageAlt: "Retrato da Dra. Aline Marcilio Alves",
  },

  areas: {
    eyebrow: "Especialidades",
    title: "Áreas de atuação",
    intro:
      "Do diagnóstico ao pós-operatório, a Dra. Aline acompanha toda a jornada do paciente com precisão técnica, abordagem individualizada e foco em resultados duradouros.",
    items: [
      "Cirurgia do Aparelho Digestivo",
      "Cirurgia Bariátrica (Sleeve e Bypass)",
      "Cirurgia de Refluxo Gastroesofágico",
      "Cirurgia Laparoscópica da Vesícula",
      "Hérnias por Videolaparoscopia",
      "Diástase Abdominal",
      "Câncer Colorretal",
      "Doenças Inflamatórias Intestinais",
      "Proctologia (hemorroidas, fissuras e fístulas)",
      "Doenças Gastrointestinais Clínicas (SII, SIBO e disbioses)",
    ],
  },

  highlight: {
    title: "Problemas digestivos afetam sua qualidade de vida",
    text: "Não ignore sintomas. A avaliação especializada é o primeiro passo para um tratamento eficaz, seguro e com resultados duradouros.",
  },

  treatments: {
    eyebrow: "Procedimentos",
    title: "Tratamentos e cirurgias",
    intro: "Técnicas modernas com foco em segurança, recuperação adequada e resultados duradouros.",
    items: [
      "Gastrectomia Sleeve",
      "Bypass Gástrico",
      "Cirurgia de Refluxo",
      "Colecistectomia Laparoscópica",
      "Correção de Hérnia",
      "Cirurgia de Diástase",
      "Cirurgia Colorretal",
      "Tratamento cirúrgico de hemorroidas",
      "Correção de fissuras e fístulas",
    ],
    note: "A indicação cirúrgica é realizada com base em avaliação criteriosa, decisão compartilhada e respeito à individualidade de cada paciente.",
  },

  differentials: {
    eyebrow: "Por que escolher",
    title: "Diferenciais do atendimento",
    intro: "Um cuidado médico que vai além da técnica, com escuta, estratégia e precisão.",
    items: [
      {
        title: "Formação de excelência internacional",
        text: "Formação pela FMUSP, com experiência internacional em videolaparoscopia na Bélgica e atualização científica constante nas principais áreas da cirurgia digestiva.",
      },
      {
        title: "Decisão cirúrgica com responsabilidade",
        text: "Cada indicação é realizada com critério técnico e responsabilidade, priorizando segurança, necessidade real e benefício individual para o paciente.",
      },
      {
        title: "Cuidado individualizado e contínuo",
        text: "Acompanhamento próximo em todas as etapas do tratamento, da primeira consulta ao pós-operatório, com comunicação clara e atenção genuína.",
      },
      {
        title: "Visão sistêmica da saúde digestiva",
        text: "Uma abordagem abrangente baseada em evidências científicas, considerando saúde intestinal, hábitos, metabolismo e qualidade de vida de forma integrada.",
      },
    ],
  },

  locations: {
    eyebrow: "Consultório",
    title: "Onde nos encontrar",
    intro: "Atendimento em clínicas e centros cirúrgicos de referência em São Paulo.",
    notes: [
      "Ambientes preparados para oferecer conforto, privacidade e atendimento cuidadoso em todas as etapas da jornada do paciente.",
      "Consultas com tempo dedicado, escuta ativa e orientações claras, priorizando segurança e excelência médica.",
    ],
    items: [
      {
        name: "Clínica Alumia",
        address: ADDRESS_ALUMIA,
        contactLabel: "WhatsApp",
        contact: WHATSAPP_DISPLAY,
        href: whatsappUrl(),
        map: "https://maps.google.com/maps?hl=pt-BR&q=Alameda+Campinas,+1100,+Jardins,+S%C3%A3o+Paulo,+SP&z=16&ie=UTF8&output=embed",
        mapTitle: "Mapa da Clínica Alumia — Alameda Campinas, 1100, Jardins",
      },
      {
        name: "EMNH",
        address: ADDRESS_EMNH,
        contactLabel: "Telefone",
        contact: "(11) 3615-2474",
        href: "tel:+551136152474",
        map: "https://maps.google.com/maps?hl=pt-BR&q=Av.+Marqu%C3%AAs+de+S%C3%A3o+Vicente,+2219,+Jardim+das+Perdizes,+S%C3%A3o+Paulo,+SP&z=16&ie=UTF8&output=embed",
        mapTitle: "Mapa da EMNH — Av. Marquês de São Vicente, 2219, Conj. 316, Jardim das Perdizes",
      },
      {
        // A RMS continua listada como local de atendimento, mas sem telefone:
        // o número é da RMS, não da Dra. Aline, e o agendamento com ela é
        // sempre pelo WhatsApp. Pedido da própria Dra. Aline em 14/09/2026.
        name: "RMS Espaços Cirúrgicos",
        address: null,
        contactLabel: null,
        contact: null,
        href: null,
        map: null,
        mapTitle: null,
      },
    ],
  },

  testimonials: {
    eyebrow: "Depoimentos",
    title: "O que dizem os pacientes",
    intro: "Histórias reais de quem confiou sua saúde à Dra. Aline.",
    items: [
      {
        text: "A Dra. Aline me operou da vesícula por laparoscopia e fiquei impressionada com a recuperação. Em dois dias já estava em casa, sem praticamente nenhuma dor. Ela explicou tudo com muita clareza antes e depois da cirurgia. Me senti segura em todas as etapas.",
        name: "Fernanda R.",
        detail: "Colecistectomia Laparoscópica",
      },
      {
        text: "Fiz a cirurgia bariátrica sleeve com a Dra. Aline e foi uma das melhores decisões da minha vida. Ela é extremamente competente, paciente e acolhedora. Perdi mais de 30kg no primeiro ano e minha qualidade de vida mudou completamente. Recomendo muito!",
        name: "Marcos T.",
        detail: "Cirurgia Bariátrica Sleeve",
      },
      {
        text: "Sofria com hemorroidas há anos e sempre tive medo de operar. A Dra. Aline me tranquilizou, explicou todas as etapas e o pós-operatório foi muito melhor do que eu imaginava. Atendimento humano, técnica impecável e muito cuidado. Só tenho a agradecer.",
        name: "Claudia M.",
        detail: "Cirurgia Coloproctológica",
      },
    ],
  },

  finalCta: {
    title: "Pronta para cuidar da sua saúde?",
    text: "Atendimento particular | Jardins — São Paulo/SP",
    cta: "Agendar consulta agora",
  },

  education: {
    eyebrow: "Conteúdo educativo",
    title: "O que você precisa saber",
    intro: "Informação de qualidade para decisões mais conscientes sobre a saúde digestiva.",
    items: [
      [
        "O que é cirurgia bariátrica e quando é indicada?",
        "A cirurgia bariátrica é indicada para pessoas com obesidade grave (IMC ≥ 40) ou IMC ≥ 35 com comorbidades como diabetes e hipertensão. Ela atua reduzindo o volume gástrico e/ou alterando a absorção intestinal, promovendo perda de peso duradoura.",
      ],
      [
        "Sleeve x Bypass: qual a diferença?",
        "O Sleeve remove parte do estômago, reduzindo sua capacidade. O Bypass redireciona o trânsito intestinal além de reduzir o estômago, sendo mais eficaz em casos de diabetes associada. A escolha depende do perfil clínico de cada paciente.",
      ],
      [
        "Como funciona a cirurgia laparoscópica?",
        "A laparoscopia é realizada com pequenas incisões e câmera de vídeo. Isso reduz o risco de infecção, diminui a dor pós-operatória e acelera a recuperação — com resultados equivalentes ou superiores à cirurgia aberta.",
      ],
      [
        "Hemorroidas: quando é necessário operar?",
        "Hemorroidas externas com sangramento persistente, prolapso ou dor intensa podem requerer cirurgia. Existem técnicas como ligadura elástica (ambulatorial) e hemorroidectomia convencional — a indicação depende do grau e dos sintomas.",
      ],
      [
        "Sintomas que indicam problemas no aparelho digestivo",
        "Dor abdominal recorrente, alteração do hábito intestinal, sangramento nas fezes, dificuldade para engolir, distensão persistente e perda de peso sem causa aparente são sinais que merecem avaliação especializada.",
      ],
      [
        "A importância da colonoscopia preventiva",
        "A colonoscopia é o exame mais eficaz para detectar pólipos e câncer colorretal em estágio inicial. É recomendada a partir dos 45 anos (ou mais cedo em casos com histórico familiar). O diagnóstico precoce aumenta muito as chances de cura.",
      ],
    ] as const,
  },

  form: {
    eyebrow: "Entre em contato",
    title: "Agende sua consulta",
    intro:
      "Atendimento particular. Preencha o formulário ou entre em contato direto pelo WhatsApp — nossa equipe responde com agilidade.",
    labels: {
      name: "Nome",
      email: "E-mail",
      phone: "Telefone",
      message: "Mensagem",
    },
    placeholders: {
      name: "Seu nome",
      email: "seu@email.com",
      phone: "(11) 99999-9999",
      message: "Descreva brevemente o motivo da consulta",
    },
    submit: "Enviar mensagem",
    sending: "Enviando",
    successTitle: "Mensagem enviada",
    successText: "A equipe entra em contato em breve para confirmar seu agendamento.",
    successAction: "Enviar outra mensagem",
    error: "Não foi possível enviar agora. Tente novamente ou fale pelo WhatsApp.",
    required: "Preencha este campo",
    invalidEmail: "Informe um e-mail válido",
  },

  footer: {
    addressTitle: "Endereços de atendimento",
    addresses: [
      ["Clínica Alumia", ADDRESS_ALUMIA],
      ["EMNH", ADDRESS_EMNH],
    ] as const,
    contacts: [
      ["WhatsApp", WHATSAPP_DISPLAY, whatsappUrl()],
      ["EMNH", "(11) 3615-2474", "tel:+551136152474"],
      ["E-mail", EMAIL, `mailto:${EMAIL}`],
    ] as const,
    linksTitle: "Navegação",
    contactTitle: "Contato",
    copyright: `© ${new Date().getFullYear()} Dra. Aline Marcilio Alves. Todos os direitos reservados.`,
  },
};
