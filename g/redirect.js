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

  var navigated = false;
  function goNow() {
    if (navigated) return;
    navigated = true;
    window.location.href = finalUrl;
  }

  // Dá uma folga depois de disparar o Lead antes de navegar de verdade —
  // senão o navegador corta a requisição do pixel no meio, por já estar
  // saindo da página.
  function fireLeadThenGo() {
    if (window.firePromoWhatsLead) window.firePromoWhatsLead(nicho);
    setTimeout(goNow, 300);
  }

  var btn = document.getElementById("go");
  if (btn) {
    btn.href = finalUrl;
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      fireLeadThenGo();
    });
  }

  setTimeout(fireLeadThenGo, 3000);
})();
