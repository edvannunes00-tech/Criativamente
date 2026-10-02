// Redireciona pro grupo de WhatsApp, preservando UTM da query string.
// Usado pelas páginas estáticas em /g/<nicho>/.
(function () {
  "use strict";
  var body = document.body;
  var dest = body.getAttribute("data-dest");
  if (!dest) return;

  var url = new URL(dest);
  new URLSearchParams(window.location.search).forEach(function (value, key) {
    url.searchParams.set(key, value);
  });
  var finalUrl = url.toString();

  var btn = document.getElementById("go");
  if (btn) btn.href = finalUrl;

  setTimeout(function () {
    window.location.href = finalUrl;
  }, 3000);
})();
