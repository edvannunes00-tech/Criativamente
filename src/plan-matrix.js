/* Tabela comparativa de planos (estilo "planos como colunas"), usada na LP 01 e em /sites.
   renderPlanMatrix(mount, { caption, columns:[{id,name,price,sub,badge,highlighted,ctaLabel}],
                              rows:[{label, values:{[id]: true|false|"texto"}}], onPick(id), onMore(id)? }) */
(function () {
  "use strict";
  var CHECK = '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  window.renderPlanMatrix = function (mount, o) {
    mount.textContent = "";
    var wrap = el("div", "pm-wrap");
    var table = el("table", "pm");
    if (o.caption) table.appendChild(el("caption", "sr-only", o.caption));

    var thead = el("thead"), hr = el("tr");
    var corner = el("td", "pm-corner"); hr.appendChild(corner);
    o.columns.forEach(function (c) {
      var th = el("th", "pm-col" + (c.highlighted ? " is-hl" : "")); th.scope = "col";
      var slot = el("div", "pm-badge-slot");
      if (c.badge) slot.appendChild(el("span", "pm-badge", c.badge));
      var pill = el("button", "pm-pill", c.name); pill.type = "button";
      if (c.ctaLabel) pill.setAttribute("aria-label", c.ctaLabel);
      pill.addEventListener("click", function () { o.onPick(c.id); });
      th.appendChild(slot); th.appendChild(pill);
      th.appendChild(el("div", "pm-price", c.price));
      th.appendChild(el("div", "pm-sub", c.sub || ""));
      hr.appendChild(th);
    });
    thead.appendChild(hr); table.appendChild(thead);

    var tbody = el("tbody");
    o.rows.forEach(function (r) {
      var tr = el("tr"), th = el("th", null, r.label); th.scope = "row"; tr.appendChild(th);
      o.columns.forEach(function (c) {
        var td = el("td", c.highlighted ? "is-hl" : ""), v = r.values[c.id], s;
        if (v === true) { s = el("span", "pm-check"); s.innerHTML = CHECK; s.setAttribute("role", "img"); s.setAttribute("aria-label", "Incluso"); }
        else if (v === false || v == null) { s = el("span", "pm-dash"); s.setAttribute("role", "img"); s.setAttribute("aria-label", "Não incluso"); }
        else { s = el("span", "pm-text", v); }
        td.appendChild(s); tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);

    var tfoot = el("tfoot"), fr = el("tr"); fr.appendChild(el("td"));
    o.columns.forEach(function (c) {
      var td = el("td", c.highlighted ? "is-hl" : "");
      var b = el("button", "pm-cta", c.ctaLabel || c.name); b.type = "button";
      b.addEventListener("click", function () { o.onPick(c.id); }); td.appendChild(b);
      if (o.onMore) {
        var m = el("button", "pm-more", "Saiba mais"); m.type = "button";
        m.addEventListener("click", function () { o.onMore(c.id); }); td.appendChild(m);
      }
      fr.appendChild(td);
    });
    tfoot.appendChild(fr); table.appendChild(tfoot);
    wrap.appendChild(table); mount.appendChild(wrap);
  };
})();
