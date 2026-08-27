/* ============================================================
   CRIATIVAMENTE DIGITAL — SCRIPT PRINCIPAL (v2)
   Todo o conteúdo é renderizado a partir de SITE_CONFIG (config.js)
   ============================================================ */

(function () {
  "use strict";

  const cfg = SITE_CONFIG;
  let selectedPlanId = null;

  /* ---------------- helpers ---------------- */

  function el(tag, opts = {}, children = []) {
    const node = document.createElement(tag);
    Object.entries(opts).forEach(([key, val]) => {
      if (key === "class") node.className = val;
      else if (key === "html") node.innerHTML = val;
      else if (key === "text") node.textContent = val;
      else if (key === "style") node.style.cssText = val;
      else node.setAttribute(key, val);
    });
    children.forEach((c) => c && node.appendChild(c));
    return node;
  }

  function pad2(n) {
    return String(n).padStart(2, "0");
  }

  function whatsappUrl(message) {
    return `https://wa.me/${cfg.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
  }

  function openWhatsapp(message) {
    window.open(whatsappUrl(message), "_blank", "noopener");
  }

  function genericWhatsappMessage() {
    return `Olá! Vim pelo site da Criativamente e gostaria de saber mais sobre a produção de cursos online.`;
  }

  /* ---------------- NAV ---------------- */

  function renderNav() {
    document.getElementById("navBrandName").innerHTML =
      cfg.brand.name + '<span class="dot">' + cfg.brand.nameSuffix + "</span>";

    const navLinks = document.getElementById("navLinks");
    const mobileMenu = document.getElementById("mobileMenu");
    cfg.nav.links.forEach((link) => {
      navLinks.appendChild(el("li", {}, [el("a", { href: link.href, text: link.label })]));
      mobileMenu.appendChild(el("a", { href: link.href, text: link.label }));
    });
    const mobileBtn = el("button", { class: "btn btn-primary", text: cfg.contact.whatsappCtaLabel });
    mobileBtn.addEventListener("click", () => openWhatsapp(genericWhatsappMessage()));
    mobileMenu.appendChild(mobileBtn);

    document.getElementById("navWhatsappBtn").textContent = cfg.contact.whatsappCtaLabel;
    document.getElementById("navWhatsappBtn").addEventListener("click", () => openWhatsapp(genericWhatsappMessage()));

    const burger = document.getElementById("navBurger");
    burger.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.toggle("open");
      burger.classList.toggle("open", isOpen);
      burger.setAttribute("aria-expanded", String(isOpen));
    });
    mobileMenu.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
        burger.classList.remove("open");
      })
    );
  }

  /* ---------------- HERO ---------------- */

  function renderHero() {
    document.getElementById("heroEyebrow").textContent = cfg.hero.eyebrow;

    const headline = document.getElementById("heroHeadline");
    cfg.hero.headlineLines.forEach((line) => {
      headline.appendChild(el("span", { class: line.accent ? "accent" : "", text: line.text }));
    });

    document.getElementById("heroSub").textContent = cfg.hero.supportingText;
    document.getElementById("heroCtaPrimary").textContent = cfg.hero.ctaPrimary;
    document.getElementById("heroCtaSecondary").textContent = cfg.hero.ctaSecondary;

    document.getElementById("heroCtaPrimary").addEventListener("click", () => {
      window.location.hash = "#planos";
    });

    // vertical meta list — replaces illustration with a quiet editorial index
    const metaItems = [
      { idx: "01", lbl: "Produção" },
      { idx: "02", lbl: "Estrutura" },
      { idx: "03", lbl: "Entrega" },
    ];
    const metaWrap = document.getElementById("heroMeta");
    metaItems.forEach((m) => {
      metaWrap.appendChild(
        el("div", { class: "hero-meta-item" }, [
          el("span", { class: "idx", text: m.idx }),
          el("span", { class: "lbl", text: m.lbl }),
        ])
      );
    });

    document.getElementById("heroStripRight").textContent = "PRODUÇÃO · ESTRUTURA · ENTREGA";
    document.getElementById("heroStripLeft").textContent = cfg.brand.domain.toUpperCase();
  }

  /* ---------------- PLATFORMS (marquee) ---------------- */

  function renderPlatforms() {
    document.getElementById("platformsLabel").textContent = cfg.platforms.title;
    document.getElementById("platformsCount").textContent = "0" + cfg.platforms.items.length;

    const track = document.getElementById("marqueeTrack");
    const buildSet = () => {
      const frag = document.createDocumentFragment();
      cfg.platforms.items.forEach((p) => {
        frag.appendChild(
          el("div", { class: "marquee-item" }, [
            el("span", { class: "marquee-name", style: `color:${p.color}`, text: p.name }),
            el("span", { class: "marquee-dot" }),
          ])
        );
      });
      return frag;
    };
    // duplicate the set so the marquee can loop seamlessly at -50%
    track.appendChild(buildSet());
    track.appendChild(buildSet());
  }

  /* ---------------- POSITIONING ---------------- */

  function renderPositioning() {
    document.getElementById("positioningIndex").textContent = "01";
    document.getElementById("positioningLabel").textContent = cfg.positioning.label;
    const headline = document.getElementById("positioningHeadline");
    headline.appendChild(document.createTextNode(cfg.positioning.headline + " "));
    headline.appendChild(el("span", { class: "accent", text: cfg.positioning.headlineAccentLine }));
    document.getElementById("positioningBody").textContent = cfg.positioning.body;
  }

  /* ---------------- PROCESS ---------------- */

  function renderProcess() {
    document.getElementById("processIndex").textContent = "02";
    document.getElementById("processLabel").textContent = cfg.process.label;
    document.getElementById("processHeadline").textContent = cfg.process.headline;
    const track = document.getElementById("processTrack");
    cfg.process.steps.forEach((step) => {
      track.appendChild(
        el("div", { class: "process-step reveal" }, [
          el("div", { class: "process-num", text: step.number }),
          el("h3", { text: step.title }),
          el("p", { text: step.text }),
        ])
      );
    });
  }

  /* ---------------- SERVICES (editorial list) ---------------- */

  function renderServices() {
    document.getElementById("servicesIndex").textContent = "03";
    document.getElementById("servicesLabel").textContent = cfg.services.label;
    document.getElementById("servicesHeadline").textContent = cfg.services.headline;
    const list = document.getElementById("servicesGrid");
    cfg.services.items.forEach((item, i) => {
      list.appendChild(
        el("div", { class: "service-row" }, [
          el("span", { class: "service-idx", text: pad2(i + 1) }),
          el("h3", { text: item.title }),
          el("p", { text: item.text }),
        ])
      );
    });
  }

  /* ---------------- PRICING ---------------- */

  function buildBenefitsList(benefits) {
    const ul = el("ul", { class: "price-benefits" });
    benefits.forEach((b) => ul.appendChild(el("li", { text: b })));
    return ul;
  }

  function renderPricing() {
    document.getElementById("pricingIndex").textContent = "04";
    document.getElementById("pricingLabel").textContent = cfg.pricing.label;
    document.getElementById("pricingHeadline").textContent = cfg.pricing.headline;
    document.getElementById("pricingPaymentNote").textContent = cfg.pricing.paymentNote;

    const grid = document.getElementById("pricingGrid");
    cfg.pricing.plans.forEach((plan) => {
      const cardChildren = [];

      if (plan.badge) {
        cardChildren.push(el("span", { class: "price-badge", text: plan.badge }));
      }
      cardChildren.push(el("div", { class: "price-volume", text: plan.volume }));
      cardChildren.push(el("div", { class: "price-name", text: plan.name }));
      cardChildren.push(el("div", { class: "price-value", text: plan.price }));
      cardChildren.push(el("div", { class: "price-positioning", text: plan.positioning }));
      cardChildren.push(buildBenefitsList(plan.benefits));

      const actions = el("div", { class: "price-actions" });
      const primaryBtn = el("button", {
        class: "btn " + (plan.highlighted ? "btn-primary" : "btn-secondary") + " btn-block",
        text: plan.ctaLabel,
      });
      primaryBtn.addEventListener("click", () => selectPlanAndGoToForm(plan.id));

      const secondaryBtn = el("button", { class: "btn btn-ghost btn-block", text: "Saiba mais" });
      secondaryBtn.addEventListener("click", () => openPlanModal(plan.id));

      actions.appendChild(primaryBtn);
      actions.appendChild(secondaryBtn);
      cardChildren.push(actions);

      const card = el(
        "div",
        { class: "price-card" + (plan.highlighted ? " highlighted" : "") },
        cardChildren
      );
      grid.appendChild(card);
    });

    const noteBox = document.getElementById("volumeNote");
    noteBox.appendChild(el("h4", { text: cfg.pricing.volumeNote.title }));
    noteBox.appendChild(el("p", { text: cfg.pricing.volumeNote.text }));
  }

  /* ---------------- PLAN MODAL ---------------- */

  function getPlanById(id) {
    return cfg.pricing.plans.find((p) => p.id === id);
  }

  function openPlanModal(planId) {
    const plan = getPlanById(planId);
    if (!plan) return;

    const modal = document.getElementById("planModal");
    const badge = document.getElementById("modalBadge");

    if (plan.badge) {
      badge.textContent = plan.badge;
      badge.style.display = "inline-block";
    } else {
      badge.style.display = "none";
    }

    document.getElementById("modalName").textContent = plan.name;
    document.getElementById("modalPrice").textContent = plan.price;
    document.getElementById("modalVolume").textContent = plan.volume;
    document.getElementById("modalDesc").textContent = plan.description;

    const benefitsList = document.getElementById("modalBenefits");
    benefitsList.innerHTML = "";
    plan.benefits.forEach((b) => benefitsList.appendChild(el("li", { text: b })));

    const ctaBtn = document.getElementById("modalCta");
    ctaBtn.textContent = "Quero este plano →";
    ctaBtn.onclick = () => {
      closePlanModal();
      selectPlanAndGoToForm(plan.id);
    };

    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closePlanModal() {
    document.getElementById("planModal").classList.remove("open");
    document.body.style.overflow = "";
  }

  function initModal() {
    document.getElementById("modalClose").addEventListener("click", closePlanModal);
    document.getElementById("planModal").addEventListener("click", (e) => {
      if (e.target.id === "planModal") closePlanModal();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closePlanModal();
    });
  }

  /* ---------------- FOUNDER ---------------- */

  function renderFounder() {
    document.getElementById("founderIndex").textContent = "05";
    document.getElementById("founderLabel").textContent = cfg.founder.label;
    document.getElementById("founderHeadline").textContent = cfg.founder.headline;
    const textWrap = document.getElementById("founderText");
    cfg.founder.paragraphs.forEach((p) => textWrap.appendChild(el("p", { text: p })));
    document.getElementById("founderSignature").innerHTML =
      cfg.founder.signatureName + ' <span>· ' + cfg.founder.signatureRole + "</span>";
    document.getElementById("founderPhoto").src = cfg.founder.photo;
    document.getElementById("founderCaption").textContent =
      "PROJETO PRODUZIDO PELA CRIATIVAMENTE";
  }

  /* ---------------- CASES (editorial list) ---------------- */

  function renderCases() {
    document.getElementById("casesIndex").textContent = "06";
    document.getElementById("casesLabel").textContent = cfg.cases.label;
    document.getElementById("casesHeadline").textContent = cfg.cases.headline;
    const list = document.getElementById("casesGrid");
    cfg.cases.items.forEach((c, i) => {
      list.appendChild(
        el("div", { class: "case-row" }, [
          el("span", { class: "case-idx", text: pad2(i + 1) }),
          el("span", { class: "case-title", text: c.title }),
          el("span", { class: "case-tag", text: c.tag }),
          el("span", { class: "case-swatch" }),
        ])
      );
    });
  }

  /* ---------------- FAQ ---------------- */

  function renderFaq() {
    document.getElementById("faqIndex").textContent = "07";
    document.getElementById("faqLabel").textContent = cfg.faq.label;
    document.getElementById("faqHeadline").textContent = cfg.faq.headline;
    const list = document.getElementById("faqList");
    cfg.faq.items.forEach((item, i) => {
      const answer = el("div", { class: "faq-answer" }, [el("p", { text: item.a })]);
      const question = el("button", { class: "faq-question" }, [
        el("span", { class: "idx", text: pad2(i + 1) }),
        el("span", { class: "q-text", text: item.q }),
        el("span", { class: "plus" }),
      ]);
      const wrap = el("div", { class: "faq-item" }, [question, answer]);
      question.addEventListener("click", () => {
        const isOpen = wrap.classList.contains("open");
        list.querySelectorAll(".faq-item").forEach((it) => it.classList.remove("open"));
        if (!isOpen) wrap.classList.add("open");
      });
      list.appendChild(wrap);
    });
  }

  /* ---------------- FORM ---------------- */

  function renderForm() {
    document.getElementById("formTitle").textContent = cfg.form.title;
    document.getElementById("formSubtitle").textContent = cfg.form.subtitle;
    document.getElementById("formSubmitBtn").textContent = cfg.form.submitLabel;
    document.getElementById("formSuccessTitle").textContent = cfg.form.successTitle;
    document.getElementById("formSuccessMessage").textContent = cfg.form.successMessage;

    const segmentSelect = document.getElementById("fieldSegment");
    segmentSelect.appendChild(el("option", { value: "", text: "Selecione...", disabled: "true", selected: "true" }));
    cfg.form.segments.forEach((s) => segmentSelect.appendChild(el("option", { value: s, text: s })));
    segmentSelect.addEventListener("change", () => {
      document.getElementById("segmentOtherWrap").style.display =
        segmentSelect.value === "Outro" ? "flex" : "none";
    });

    const timelineSelect = document.getElementById("fieldTimeline");
    timelineSelect.appendChild(el("option", { value: "", text: "Selecione...", disabled: "true", selected: "true" }));
    cfg.form.timelines.forEach((t) => timelineSelect.appendChild(el("option", { value: t, text: t })));

    document.getElementById("clearPlanBtn").addEventListener("click", () => setSelectedPlan(null));

    setupPhoneMask(document.getElementById("fieldWhatsapp"));

    document.getElementById("leadForm").addEventListener("submit", handleFormSubmit);
  }

  /* ---------------- PHONE MASK (BR: (DD) DDDDD-DDDD ou (DD) DDDD-DDDD) ---------------- */

  function maskPhoneBR(rawValue) {
    const digits = rawValue.replace(/\D/g, "").slice(0, 11);
    if (digits.length === 0) return "";
    if (digits.length <= 2) return `(${digits}`;
    if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  }

  function setupPhoneMask(input) {
    if (!input) return;
    input.addEventListener("input", () => {
      const cursorWasAtEnd = input.selectionStart === input.value.length;
      input.value = maskPhoneBR(input.value);
      if (cursorWasAtEnd) {
        input.selectionStart = input.selectionEnd = input.value.length;
      }
    });
    // bloqueia letras/símbolos digitados diretamente (defesa extra além da máscara)
    input.addEventListener("keypress", (e) => {
      if (!/[0-9]/.test(e.key)) e.preventDefault();
    });
  }

  function setSelectedPlan(planId) {
    selectedPlanId = planId;
    const chip = document.getElementById("selectedPlanChip");
    if (planId) {
      const plan = getPlanById(planId);
      document.getElementById("selectedPlanName").textContent = plan ? `${plan.name} — ${plan.price}` : "";
      chip.classList.add("show");
    } else {
      chip.classList.remove("show");
    }
  }

  function selectPlanAndGoToForm(planId) {
    setSelectedPlan(planId);
    document.getElementById("contato").scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => document.getElementById("fieldName").focus(), 500);
  }

  // usado por CTAs genéricos (ex: CTA final) que só devem levar até o
  // formulário SEM mexer em um plano já selecionado anteriormente
  function goToForm() {
    document.getElementById("contato").scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => document.getElementById("fieldName").focus(), 500);
  }

  async function submitLeadToSupabase(payload) {
    const url = `${cfg.supabase.projectUrl}/rest/v1/${cfg.supabase.table}`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: cfg.supabase.publishableKey,
        Authorization: `Bearer ${cfg.supabase.publishableKey}`,
        Prefer: "return=minimal",
      },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      let detail = "";
      try {
        detail = await response.text();
      } catch (_) {}
      throw new Error(`Supabase respondeu ${response.status}: ${detail}`);
    }
  }

  function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  // tenta enviar, e se falhar tenta mais 2 vezes com um pequeno intervalo —
  // cobre casos de instabilidade momentânea (ex: projeto Supabase "acordando"
  // de uma pausa por inatividade, que costuma resolver sozinho em segundos)
  async function submitLeadWithRetry(payload, attempts = 3, delayMs = 1800, onRetry) {
    let lastError;
    for (let i = 0; i < attempts; i++) {
      try {
        await submitLeadToSupabase(payload);
        return; // sucesso
      } catch (err) {
        lastError = err;
        if (i < attempts - 1) {
          if (onRetry) onRetry(i + 2, attempts); // próxima tentativa é a i+2
          await wait(delayMs);
        }
      }
    }
    throw lastError;
  }

  function buildWhatsappFallbackMessage(p) {
    const lines = [
      "Olá! Tentei enviar o formulário do site mas não consegui, vou deixar meus dados aqui:",
      "",
      `Nome: ${p.nome}`,
      `WhatsApp: ${p.whatsapp}`,
      `Segmento: ${p.segmento}`,
      `Prazo: ${p.prazo}`,
      `Plano: ${p.plano || "Ainda não escolhido"}`,
    ];
    if (p.mensagem) lines.push(`Projeto: ${p.mensagem}`);
    return lines.join("\n");
  }

  function setFormError(message, formValuesForFallback) {
    const errorEl = document.getElementById("formError");
    if (!message) {
      errorEl.style.display = "none";
      errorEl.innerHTML = "";
      return;
    }
    errorEl.innerHTML = "";
    errorEl.appendChild(document.createTextNode(message + " "));
    if (formValuesForFallback) {
      const fallbackBtn = el("button", {
        type: "button",
        style: "background:none;border:none;padding:0;color:inherit;text-decoration:underline;cursor:pointer;font:inherit;",
        text: "Falar no WhatsApp agora →",
      });
      fallbackBtn.addEventListener("click", () => {
        openWhatsapp(buildWhatsappFallbackMessage(formValuesForFallback));
      });
      errorEl.appendChild(fallbackBtn);
    }
    errorEl.style.display = "block";
  }

  function showFormSuccess() {
    document.getElementById("leadForm").style.display = "none";
    document.getElementById("formSuccess").style.display = "block";
    document.getElementById("formSuccess").scrollIntoView({ behavior: "smooth", block: "center" });
  }

  async function handleFormSubmit(e) {
    e.preventDefault();
    const form = e.target;

    // honeypot: se um bot preencheu o campo invisível, finge sucesso e não envia nada
    if (form.website && form.website.value.trim() !== "") {
      showFormSuccess();
      return;
    }

    const nome = form.nome.value.trim();
    const whatsapp = form.whatsapp.value.trim();
    let segmento = form.segmento.value;
    const segmentoOutro = form.segmentoOutro.value.trim();
    const profissao = form.profissao.value.trim();
    const prazo = form.prazo.value;
    const mensagem = form.mensagem.value.trim();

    if (segmento === "Outro" && segmentoOutro) {
      segmento = `Outro (${segmentoOutro})`;
    }

    const plan = selectedPlanId ? getPlanById(selectedPlanId) : null;

    const payload = {
      nome,
      whatsapp,
      segmento,
      profissao: profissao || null,
      prazo,
      plano: plan ? plan.name : null,
      mensagem: mensagem || null,
      origem_pagina: window.location.href,
    };

    const submitBtn = document.getElementById("formSubmitBtn");
    const originalLabel = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = "Enviando...";
    setFormError(null);

    try {
      await submitLeadWithRetry(payload, 3, 1800, (attemptNumber, total) => {
        submitBtn.textContent = `Tentando novamente (${attemptNumber}/${total})...`;
      });
      showFormSuccess();
    } catch (err) {
      console.error("Falha ao enviar lead para o Supabase (após tentativas):", err);
      setFormError(cfg.form.errorMessage, payload);
      submitBtn.disabled = false;
      submitBtn.textContent = originalLabel;
      // rede de segurança: nada de depender só de a pessoa clicar no link —
      // se as tentativas automáticas falharam, já abrimos o WhatsApp sozinhos
      // com os dados preenchidos, pra não perder o contato.
      openWhatsapp(buildWhatsappFallbackMessage(payload));
    }
  }

  /* ---------------- FINAL CTA ---------------- */

  function renderFinalCta() {
    const headline = document.getElementById("finalCtaHeadline");
    headline.appendChild(el("span", { text: cfg.finalCta.headlineLine1 }));
    headline.appendChild(el("span", { class: "accent", text: cfg.finalCta.headlineLine2Accent }));

    const primaryBtn = document.getElementById("finalCtaPrimary");
    primaryBtn.textContent = cfg.finalCta.ctaPrimary;
    primaryBtn.addEventListener("click", () => goToForm());

    const waBtn = document.getElementById("finalCtaWhatsapp");
    waBtn.textContent = cfg.contact.whatsappCtaLabel;
    waBtn.addEventListener("click", () => openWhatsapp(genericWhatsappMessage()));
  }

  /* ---------------- FOOTER ---------------- */

  function renderFooter() {
    document.getElementById("footerLogo").innerHTML =
      cfg.brand.name + '<span class="dot">' + cfg.brand.nameSuffix + "</span>";
    document.getElementById("footerTagline").textContent = cfg.footer.tagline;
    document.getElementById("footerCopy").textContent = cfg.footer.copyright;
  }

  /* ---------------- SCROLL REVEAL ---------------- */

  function initScrollReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      items.forEach((i) => i.classList.add("in-view"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    items.forEach((i) => observer.observe(i));
  }

  /* ---------------- INIT ---------------- */

  function init() {
    renderNav();
    renderHero();
    renderPlatforms();
    renderPositioning();
    renderProcess();
    renderServices();
    renderPricing();
    renderFounder();
    renderCases();
    renderFaq();
    renderForm();
    renderFinalCta();
    renderFooter();
    initModal();
    requestAnimationFrame(initScrollReveal);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
