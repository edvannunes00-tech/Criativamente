(function () {
  "use strict";
  var $ = function (id) { return document.getElementById(id); };

  $("year").textContent = new Date().getFullYear();

  // ---- menu mobile
  var burger = $("burger"), menu = $("menu");
  burger.addEventListener("click", function () {
    var open = menu.classList.toggle("open");
    burger.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", open ? "true" : "false");
  });
  menu.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () { menu.classList.remove("open"); burger.classList.remove("is-open"); });
  });

  // ---- FAQ accordion
  document.querySelectorAll(".faq-question").forEach(function (q) {
    q.addEventListener("click", function () {
      var item = q.parentElement, was = item.classList.contains("open");
      document.querySelectorAll(".faq-item").forEach(function (i) { i.classList.remove("open"); });
      if (!was) item.classList.add("open");
    });
  });

  // ---- reveal on scroll
  var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if ("IntersectionObserver" in window && !reduce) {
    document.documentElement.classList.add("js");
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    document.querySelectorAll(".rv").forEach(function (n) { io.observe(n); });
  }

  // ---- briefing -> WhatsApp
  var WA_PHONE = "5511987277235";
  var enviar = $("bEnviar"), summary = $("formSummary");
  if (enviar) {
    enviar.addEventListener("click", function () {
      var regiao = $("bRegiao").value, tamanho = $("bTamanho").value, cor = $("bCor").value,
        estilo = $("bEstilo").value, nome = $("bNome").value.trim(), obs = $("bObs").value.trim();

      var linhas = ["Olá! Gostaria de um orçamento de tattoo. Meu briefing:"];
      if (nome) linhas.push("Nome: " + nome);
      if (regiao) linhas.push("Região: " + regiao);
      if (tamanho) linhas.push("Tamanho: " + tamanho);
      if (cor) linhas.push("Cor: " + cor);
      if (estilo) linhas.push("Estilo: " + estilo);
      if (obs) linhas.push("Observações: " + obs);
      var texto = linhas.join("\n");

      summary.textContent = texto;
      summary.classList.add("show");

      var url = "https://api.whatsapp.com/send?phone=" + WA_PHONE + "&text=" + encodeURIComponent(texto);
      window.open(url, "_blank", "noopener");
    });
  }
})();
