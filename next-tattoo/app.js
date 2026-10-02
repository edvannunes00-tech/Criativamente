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

  // ---- popup de estilos do portfólio
  var PF_STYLES = {
    realismo: { title: "Realismo", images: [
      { src: "img/portfolio/jesus.jpg", alt: "Tatuagem realista de Jesus Cristo", real: true },
      { src: "img/portfolio/extra/realismo-1.jpg", alt: "Tatuador trabalhando em tatuagem realista" },
      { src: "img/portfolio/extra/realismo-2.jpg", alt: "Detalhe de tatuagem realista" }
    ]},
    horror: { title: "Horror", images: [
      { src: "img/portfolio/horror.jpg", alt: "Tatuagem de personagens de terror em preto e cinza", real: true },
      { src: "img/portfolio/extra/horror-1.jpg", alt: "Tatuagem de caveira estilo horror" },
      { src: "img/portfolio/extra/horror-2.jpg", alt: "Tatuagem de caveira em preto e cinza" }
    ]},
    oriental: { title: "Oriental", images: [
      { src: "img/portfolio/oni.jpg", alt: "Tatuagem de máscara oni colorida com cerejeiras", real: true },
      { src: "img/portfolio/extra/oriental-1.jpg", alt: "Tatuagem de dragão em estilo japonês" },
      { src: "img/portfolio/extra/oriental-2.jpg", alt: "Tatuagem oriental colorida" }
    ]},
    "dark-realismo": { title: "Dark realismo", images: [
      { src: "img/portfolio/joker.jpg", alt: "Tatuagem realista de palhaços em preto e cinza", real: true },
      { src: "img/portfolio/extra/darkrealismo-1.jpg", alt: "Tatuagem de retrato sombrio no braço" },
      { src: "img/portfolio/extra/darkrealismo-2.jpg", alt: "Tatuagem de retrato dark realismo" }
    ]},
    "dark-art": { title: "Dark art", images: [
      { src: "img/portfolio/caveira-corvo.jpg", alt: "Tatuagem de caveira e corvo em preto e cinza", real: true },
      { src: "img/portfolio/extra/darkart-1.jpg", alt: "Tatuagem blackwork" },
      { src: "img/portfolio/extra/darkart-2.jpg", alt: "Tatuagem dark art em preto e cinza" }
    ]}
  };
  var pfModal = $("pfModal"), pfModalGrid = $("pfModalGrid"), pfModalTitle = $("pfModalTitle"), pfModalClose = $("pfModalClose");
  function openPfModal(key) {
    var data = PF_STYLES[key];
    if (!data || !pfModal) return;
    pfModalTitle.textContent = data.title;
    pfModalGrid.innerHTML = "";
    data.images.forEach(function (img) {
      var fig = document.createElement("figure");
      var image = document.createElement("img");
      image.src = img.src; image.alt = img.alt; image.loading = "lazy";
      var cap = document.createElement("figcaption");
      cap.textContent = img.real ? img.alt : "Imagem ilustrativa para a prévia";
      fig.appendChild(image); fig.appendChild(cap);
      var item = document.createElement("div"); item.className = "pf-modal-item";
      item.appendChild(fig);
      pfModalGrid.appendChild(item);
    });
    pfModal.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function closePfModal() {
    pfModal.classList.remove("open");
    document.body.style.overflow = "";
  }
  document.querySelectorAll(".portfolio-tile[data-style]:not([aria-hidden])").forEach(function (tile) {
    tile.addEventListener("click", function (e) {
      e.preventDefault();
      openPfModal(tile.getAttribute("data-style"));
    });
  });
  if (pfModalClose) pfModalClose.addEventListener("click", closePfModal);
  if (pfModal) pfModal.addEventListener("click", function (e) { if (e.target === pfModal) closePfModal(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closePfModal(); });

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
