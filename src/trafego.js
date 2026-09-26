(function () {
  "use strict";
  const $ = (id) => document.getElementById(id);

  $("footerCopy").textContent = "© " + new Date().getFullYear() + " Criativamente Digital. Todos os direitos reservados.";

  const burger = $("navBurger"), menu = $("mobileMenu");
  burger.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    burger.classList.toggle("open", open); burger.setAttribute("aria-expanded", String(open));
  });
  menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => { menu.classList.remove("open"); burger.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); }));

  document.querySelectorAll(".faq-question").forEach((q) => q.addEventListener("click", () => {
    const item = q.parentElement, was = item.classList.contains("open");
    document.querySelectorAll(".faq-item").forEach((i) => i.classList.remove("open"));
    if (!was) item.classList.add("open");
  }));

  // entrada suave ao rolar e pausa das animações do hero fora da tela
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if ("IntersectionObserver" in window && !reduce) {
    document.documentElement.classList.add("js");
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    document.querySelectorAll(".services-list, .tp-grid, .process-track, .faq-list, .tp-final-inner, .services-head, .process-head, .pricing-head, .faq-head").forEach((n) => { n.classList.add("rv"); io.observe(n); });
    const hero = $("fxHero");
    new IntersectionObserver((es) => es.forEach((e) => hero.classList.toggle("fx-paused", !e.isIntersecting))).observe(hero);
  }
})();
