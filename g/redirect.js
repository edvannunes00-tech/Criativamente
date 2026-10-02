// Redireciona pro grupo de WhatsApp, preservando UTM da query string.
// Usado pelas páginas estáticas em /g/<nicho>/.
(function () {
  "use strict";
  var body = document.body;
  var dest = body.getAttribute("data-dest");
  var nicho = body.getAttribute("data-nicho");
  if (!dest) return;

  var url = new URL(dest);
  new URLSearchParams(window.location.search).forEach(function (value, key) {
    url.searchParams.set(key, value);
  });
  var finalUrl = url.toString();

  function fireLead() {
    if (window.firePromoWhatsLead) window.firePromoWhatsLead(nicho);
  }

  var btn = document.getElementById("go");
  if (btn) {
    btn.href = finalUrl;
    btn.addEventListener("click", fireLead);
  }

  setTimeout(function () {
    fireLead();
    window.location.href = finalUrl;
  }, 3000);
})();
