// Meta Pixel do PromoWhats — só carregado nas páginas /g/<nicho>/.
// Reimplementado como arquivo externo (em vez do snippet inline padrão do
// Meta) porque a CSP do site não libera script inline.
(function () {
  "use strict";
  if (window.fbq) return;

  var n = (window.fbq = function () {
    n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
  });
  window._fbq || (window._fbq = n);
  n.push = n;
  n.loaded = true;
  n.version = "2.0";
  n.queue = [];

  var t = document.createElement("script");
  t.async = true;
  t.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(t);

  fbq("init", "1986267248937169");
  fbq("track", "PageView");

  var leadFired = false;
  window.firePromoWhatsLead = function (contentName) {
    if (leadFired) return;
    leadFired = true;
    fbq("track", "Lead", { content_name: contentName });
  };
})();
