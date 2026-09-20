(function () {
  "use strict";
  // Envia para a função public.captar_lead_site (Supabase) -> contato + oportunidade + atividade no CRM.
  // A chave publishable é pública por design; a proteção está na função (validação e limite de taxa).
  const CAPTACAO = { url: "https://wdhioclskicixdhkolce.supabase.co", publishableKey: "sb_publishable_COrSf3tJY9fMKalhJ83g3w_p5Zhk6yh" };
  const $ = (id) => document.getElementById(id);

  $("footerCopy").textContent = "© " + new Date().getFullYear() + " Criativamente Digital. Todos os direitos reservados.";

  const burger = $("navBurger"), menu = $("mobileMenu");
  burger.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    burger.classList.toggle("open", open); burger.setAttribute("aria-expanded", String(open));
  });
  menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => { menu.classList.remove("open"); burger.classList.remove("open"); }));

  document.querySelectorAll(".faq-question").forEach((q) => q.addEventListener("click", () => {
    const item = q.parentElement, was = item.classList.contains("open");
    document.querySelectorAll(".faq-item").forEach((i) => i.classList.remove("open"));
    if (!was) item.classList.add("open");
  }));

  // ---- tabelas comparativas de planos
  const ROWS = [
    { label: "Hospedagem e manutenção", values: { g: "Criativamente", p: "Por sua conta" } },
    { label: "Registro do domínio e acessos", values: { g: "Criativamente", p: "Você" } },
    { label: "Renovação anual do domínio", values: { g: "Inclusa na mensalidade", p: "Por sua conta" } },
    { label: "Ajustes simples sem limite (uso razoável)", values: { g: true, p: false } },
    { label: "Configuração acompanhada por nós", values: { g: false, p: true } },
  ];
  const pick = (interesse) => {
    $("fInteresse").value = interesse;
    $("contato").scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
  };
  const build = (mountId, nome, valores, precos, ctaTxt) => renderPlanMatrix($(mountId), {
    caption: "Comparação de planos — " + nome,
    columns: [
      { id: "g", name: "Gerenciado", price: precos[0], sub: "+ R$ 89,90/mês", ctaLabel: ctaTxt, highlighted: true, badge: "Com manutenção" },
      { id: "p", name: "Próprio", price: precos[1], sub: "pagamento único", ctaLabel: ctaTxt },
    ],
    rows: ROWS,
    onPick: (id) => pick(valores[id]),
  });
  build("pmLanding", "Landing Page", { g: "Landing Page (Gerenciado)", p: "Landing Page (Próprio)" }, ["R$ 890", "R$ 1.500"], "Quero esta →");
  build("pmSite", "Site Institucional", { g: "Site Institucional (Gerenciado)", p: "Site Institucional (Próprio)" }, ["R$ 2.000", "R$ 3.500"], "Quero este →");

  // ---- efeitos: entrada suave ao rolar e pausa das animações fora da tela
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if ("IntersectionObserver" in window && !reduce) {
    document.documentElement.classList.add("js");
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    document.querySelectorAll(".process-track, .services-list, .pricing-group, .faq-list, .lead-form-wrap, .process-head, .services-head, .pricing-head, .faq-head").forEach((n) => { n.classList.add("rv"); io.observe(n); });
    const hero = $("fxHero");
    new IntersectionObserver((es) => es.forEach((e) => hero.classList.toggle("fx-paused", !e.isIntersecting))).observe(hero);
  }

  $("fWa").addEventListener("input", (e) => {
    const d = e.target.value.replace(/\D/g, "").slice(0, 11);
    e.target.value = !d ? "" : d.length <= 2 ? "(" + d : d.length <= 6 ? `(${d.slice(0,2)}) ${d.slice(2)}` :
      d.length <= 10 ? `(${d.slice(0,2)}) ${d.slice(2,6)}-${d.slice(6)}` : `(${d.slice(0,2)}) ${d.slice(2,7)}-${d.slice(7)}`;
  });

  const qs = new URLSearchParams(location.search);
  const utm = (k) => (qs.get(k) || "").slice(0, 150) || null;

  $("leadForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const f = e.target, err = $("formError");
    err.style.display = "none";
    if (f.website.value.trim()) { $("leadForm").style.display = "none"; $("formSuccess").style.display = "block"; return; } // honeypot
    if (!f.checkValidity() || !/^\(\d{2}\) \d{4,5}-\d{4}$/.test(f.whatsapp.value)) {
      err.textContent = "Confira os campos: nome, WhatsApp com DDD, negócio, opções e o consentimento."; err.style.display = "block"; return;
    }
    const payload = {
      p_nome: f.nome.value.trim(), p_whatsapp: f.whatsapp.value, p_empresa: f.empresa.value.trim(),
      p_interesse: f.interesse.value, p_tem_site: f.tem_site.value, p_mensagem: f.mensagem.value.trim() || null,
      p_consentimento: f.consentimento.checked, p_origem_pagina: location.origin + location.pathname,
      p_utm_source: utm("utm_source"), p_utm_medium: utm("utm_medium"), p_utm_campaign: utm("utm_campaign"),
      p_utm_content: utm("utm_content"), p_utm_term: utm("utm_term"),
    };
    const btn = $("submitBtn"); btn.disabled = true; btn.textContent = "Enviando...";
    try {
      if (CAPTACAO.url) {
        const r = await fetch(CAPTACAO.url + "/rest/v1/rpc/captar_lead_site", {
          method: "POST",
          headers: { "Content-Type": "application/json", apikey: CAPTACAO.publishableKey, Authorization: "Bearer " + CAPTACAO.publishableKey },
          body: JSON.stringify(payload),
        });
        if (!r.ok) throw new Error(r.status);
      } else { console.info("[PRÉVIA] nada enviado:", payload); }
      $("leadForm").style.display = "none"; $("formSuccess").style.display = "block";
    } catch (_) {
      err.textContent = "Não conseguimos enviar agora. Tente de novo em instantes."; err.style.display = "block";
      btn.disabled = false; btn.textContent = "Enviar →";
    }
  });
})();
