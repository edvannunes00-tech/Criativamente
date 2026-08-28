/**
 * ============================================================
 * CRIATIVAMENTE DIGITAL — ARQUIVO DE CONFIGURAÇÃO CENTRAL
 * ============================================================
 * Este é o ÚNICO arquivo que você precisa editar para atualizar
 * preços, textos, planos, WhatsApp e outras informações do site.
 *
 * Não é necessário mexer em HTML, CSS ou nos outros arquivos JS.
 *
 * Exemplo: para mudar o preço do plano Professional de
 * "R$ 2.490" para "R$ 2.990", basta alterar o valor abaixo,
 * no campo price do plano "professional".
 * ============================================================
 */

const SITE_CONFIG = {

  // ------------------------------------------------------------
  // CONTATO
  // ------------------------------------------------------------
  contact: {
    whatsappNumber: "5511920920884", // formato internacional, apenas números
    whatsappCtaLabel: "Falar com a Criativamente",
  },

  // ------------------------------------------------------------
  // SUPABASE (armazenamento dos leads do formulário)
  //
  // A "publishableKey" abaixo é uma chave PÚBLICA por design — é segura
  // para ficar no frontend. A proteção real vem da Row Level Security
  // (RLS) configurada na tabela `leads`, que só permite INSERT vindo
  // de fora, nunca leitura ou edição. Nunca coloque aqui a "secret key"
  // (equivalente ao antigo service_role) — essa nunca deve sair do
  // backend/painel do Supabase.
  // ------------------------------------------------------------
  supabase: {
    projectUrl: "https://wdhioclskicixdhkolce.supabase.co",
    publishableKey: "sb_publishable_COrSf3tJY9fMKalhJ83g3w_p5Zhk6yh",
    table: "leads",
  },

  // ------------------------------------------------------------
  // MARCA
  // ------------------------------------------------------------
  brand: {
    name: "CRIATIVAMENTE",
    nameSuffix: ".",
    domain: "criativamentedigital.com.br",
    logoIcon: "public/images/logo-icon.png",
  },

  // ------------------------------------------------------------
  // NAVEGAÇÃO
  // ------------------------------------------------------------
  nav: {
    links: [
      { label: "Planos", href: "#planos" },
      { label: "Como funciona", href: "#processo" },
      { label: "Cases", href: "#cases" },
      { label: "Sobre", href: "#sobre" },
      { label: "FAQ", href: "#faq" },
    ],
  },

  // ------------------------------------------------------------
  // HERO
  // ------------------------------------------------------------
  hero: {
    eyebrow: "PRODUÇÃO DE CURSOS ONLINE",
    headlineLines: [
      { text: "Você ensina.", accent: false },
      { text: "A Criativamente", accent: true },
      { text: "transforma.", accent: false },
    ],
    supportingText:
      "Do planejamento à entrega final, cuidamos da produção, edição e estruturação para transformar seu conhecimento em um curso profissional.",
    ctaPrimary: "Quero criar meu curso →",
    ctaSecondary: "Como funciona",
  },

  // ------------------------------------------------------------
  // PLATAFORMAS
  // As cores abaixo são aproximações das cores de marca de cada
  // plataforma, usadas apenas como referência estética no letreiro
  // (não são os logos oficiais). Ajuste os hex livremente se
  // quiser alinhar com o guia de marca exato de cada uma.
  // ------------------------------------------------------------
  platforms: {
    title: "PLATAFORMAS QUE TRABALHAMOS",
    items: [
      { name: "Hotmart", color: "#F04E23" },
      { name: "Kiwify", color: "#17C964" },
      { name: "Eduzz", color: "#2B6CF6" },
      { name: "Monetizze", color: "#C026D3" },
      { name: "Ticto", color: "#14B8A6" },
    ],
  },

  // ------------------------------------------------------------
  // POSICIONAMENTO
  // ------------------------------------------------------------
  positioning: {
    label: "DO CONHECIMENTO AO PRODUTO",
    headline: "Você não precisa produzir um curso.",
    headlineAccentLine: "Precisa saber o que quer ensinar.",
    body:
      "Nós cuidamos da parte técnica e criativa para que você tenha menos trabalho e mais foco no conteúdo.",
  },

  // ------------------------------------------------------------
  // PROCESSO (6 ETAPAS)
  // ------------------------------------------------------------
  process: {
    label: "COMO FUNCIONA",
    headline: "Um processo claro, do início ao fim.",
    steps: [
      { number: "01", title: "Briefing", text: "Entendemos o projeto." },
      { number: "02", title: "Planejamento", text: "Organizamos o conteúdo." },
      { number: "03", title: "Produção", text: "Gravamos ou orientamos." },
      { number: "04", title: "Pós-produção", text: "Editamos e finalizamos." },
      { number: "05", title: "Estruturação", text: "Organizamos a plataforma." },
      { number: "06", title: "Entrega", text: "Seu produto está pronto." },
    ],
  },

  // ------------------------------------------------------------
  // SERVIÇOS
  // ------------------------------------------------------------
  services: {
    label: "O QUE FAZEMOS",
    headline: "Da ideia à entrega.",
    items: [
      { title: "GRAVAÇÃO", text: "Produção presencial com estrutura profissional." },
      { title: "ORIENTAÇÃO", text: "Direcionamento para gravação remota." },
      { title: "EDIÇÃO", text: "Cortes, ritmo, zooms, tratamento básico de áudio e elementos gráficos." },
      { title: "ESTRUTURAÇÃO", text: "Organização do curso dentro da plataforma escolhida." },
      { title: "PÁGINA DE VENDAS", text: "Estrutura visual e conteúdo da landing page." },
      { title: "MATERIAIS", text: "Capas, materiais complementares e recursos do projeto conforme o plano contratado." },
    ],
  },

  // ------------------------------------------------------------
  // PLANOS / PREÇOS
  // ------------------------------------------------------------
  pricing: {
    label: "NOSSOS PACOTES",
    headline: "Escolha o plano ideal para o seu projeto.",
    paymentNote: "Condições de pagamento flexíveis, definidas de acordo com o projeto.",
    plans: [
      {
        id: "start",
        name: "START",
        price: "R$ 1.499",
        volume: "ATÉ 40 AULAS",
        badge: null,
        highlighted: false,
        positioning: "Você grava. Nós orientamos. A Criativamente transforma.",
        description:
          "Não é necessário ter uma estrutura profissional. Orientamos você sobre como gravar de forma simples e profissional, aproveitando os equipamentos que você já possui e reduzindo o trabalho necessário.",
        benefits: [
          "Orientação profissional para gravação",
          "Edição das aulas",
          "Capas das aulas",
          "Estruturação na plataforma",
          "Página de vendas",
          "3 meses de suporte",
        ],
        ctaLabel: "Quero o Start →",
      },
      {
        id: "professional",
        name: "PROFESSIONAL",
        price: "R$ 2.490",
        volume: "ATÉ 40 AULAS",
        badge: "MAIS ESCOLHIDO",
        highlighted: true,
        positioning: "Nós levamos a produção até você.",
        description:
          "Estrutura profissional completa, com equipe e equipamento no local. Você chega, senta e ensina — o resto é com a gente.",
        benefits: [
          "2 câmeras",
          "Iluminação profissional",
          "Microfone profissional",
          "Teleprompter",
          "Direção durante a gravação",
          "Ensaio fotográfico",
          "Edição das aulas",
          "Capas das aulas",
          "Estruturação na plataforma",
          "Página de vendas",
          "3 meses de suporte",
        ],
        ctaLabel: "Quero o Professional →",
      },
      {
        id: "prime",
        name: "PRIME",
        price: "R$ 3.990",
        volume: "ATÉ 60 AULAS",
        badge: null,
        highlighted: false,
        positioning: "Mais possibilidades para o mesmo projeto.",
        description:
          "Tudo do Professional, com mais volume de produção e uma entrega mais completa — ideal para quem quer estruturar mais de um produto dentro do mesmo projeto.",
        benefits: [
          "Tudo do Professional",
          "Até 60 aulas",
          "Apostila / material complementar",
          "Legendas",
          "Vinheta",
          "Site profissional",
          "Entrega em mídia física",
          "6 meses de suporte",
        ],
        ctaLabel: "Quero o Prime →",
      },
    ],
    volumeNote: {
      title: "O que significa \"até 60 aulas\"?",
      text:
        "Até 60 aulas não significa necessariamente um único curso com 60 aulas. O volume de produção do Prime pode ser utilizado em um curso maior, em mais de um curso relacionado, em produtos complementares ou em diferentes módulos — desde que pertençam ao mesmo especialista, à mesma especialidade, ou a um projeto conjunto apresentado como uma única marca. Por exemplo: uma designer de unhas pode criar um curso sobre alongamento e outro sobre esmaltação em gel dentro do mesmo volume. O escopo exato é sempre definido durante o briefing.",
    },
  },

  // ------------------------------------------------------------
  // FUNDADOR
  // ------------------------------------------------------------
  founder: {
    label: "POR TRÁS DA CRIATIVAMENTE",
    headline: "Uma pessoa real por trás de cada projeto.",
    paragraphs: [
      "Eu sou Edvan Silva, fundador da Criativamente Digital. Meu trabalho é cuidar da parte técnica e criativa para que especialistas possam transformar aquilo que sabem em um produto digital profissional.",
      "Da primeira conversa à entrega, a ideia é simples: você concentra sua energia no que sabe fazer. Eu cuido do que precisa acontecer para isso virar um curso.",
    ],
    signatureName: "EDVAN SILVA",
    signatureRole: "FUNDADOR",
    photo: "public/images/edvan-founder.jpg",
  },

  // ------------------------------------------------------------
  // CASES
  // ------------------------------------------------------------
  cases: {
    label: "PORTFÓLIO",
    headline: "Projetos que já colocamos no ar.",
    items: [
      { number: "CASE 01", title: "Curso online", tag: "Produção completa" },
      { number: "CASE 02", title: "Produção e gravação", tag: "Estúdio + edição" },
      { number: "CASE 03", title: "Estruturação digital", tag: "Plataforma + página de vendas" },
    ],
  },

  // ------------------------------------------------------------
  // FAQ
  // ------------------------------------------------------------
  faq: {
    label: "PERGUNTAS FREQUENTES",
    headline: "Dúvidas comuns.",
    items: [
      {
        q: "Preciso ter uma câmera profissional?",
        a: "Não. No Start, orientamos você a gravar de forma simples e profissional, aproveitando os equipamentos que já possui.",
      },
      {
        q: "Vocês atendem fora de São Paulo?",
        a: "O Start pode ser realizado remotamente. Para produção presencial em outras cidades ou estados, consulte as condições de atendimento e deslocamento.",
      },
      {
        q: "Em qual plataforma o curso é entregue?",
        a: "Trabalhamos com plataformas como Hotmart, Kiwify, Eduzz, Monetizze e Ticto, além de outras plataformas compatíveis.",
      },
      {
        q: "Posso criar mais de um curso?",
        a: "No Prime, o volume de até 60 aulas pode ser distribuído entre cursos ou produtos relacionados ao mesmo expert, especialidade ou formação conjunta, conforme o escopo definido.",
      },
      {
        q: "Como funciona o pagamento?",
        a: "As condições de pagamento podem ser combinadas de acordo com o projeto.",
      },
    ],
  },

  // ------------------------------------------------------------
  // CTA FINAL
  // ------------------------------------------------------------
  finalCta: {
    headlineLine1: "Você tem o conhecimento.",
    headlineLine2Accent: "Agora vamos transformar isso em um produto.",
    ctaPrimary: "Quero criar meu curso →",
  },

  // ------------------------------------------------------------
  // FORMULÁRIO
  // ------------------------------------------------------------
  form: {
    title: "Vamos conversar sobre o seu projeto.",
    subtitle: "Preencha os dados abaixo e nossa equipe vai te responder em breve.",
    segments: [
      "Beleza & Estética",
      "Saúde & Bem-estar",
      "Educação",
      "Negócios & Consultoria",
      "Produtos & Lojas",
      "Gastronomia",
      "Moda & Lifestyle",
      "Serviços",
      "Criativo",
      "Outro",
    ],
    timelines: [
      "Nas próximas semanas",
      "No próximo mês",
      "Nos próximos 3–6 meses",
      "Em 6–12 meses",
      "Ainda estou planejando",
    ],
    submitLabel: "Enviar →",
    successTitle: "Recebido!",
    successMessage: "Recebemos seu contato! Nossa equipe vai te responder em breve.",
    errorMessage:
      "Não conseguimos enviar agora. Você pode tentar de novo, ou falar direto com a gente pelo WhatsApp.",
  },

  // ------------------------------------------------------------
  // RODAPÉ
  // ------------------------------------------------------------
  footer: {
    tagline: "Produção e estruturação de cursos online para especialistas.",
    copyright: "© " + new Date().getFullYear() + " Criativamente Digital. Todos os direitos reservados.",
  },
};
