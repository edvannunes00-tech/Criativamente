// Config central dos grupos de WhatsApp do PromoWhats.
// Pra trocar um grupo (lotou, por exemplo), só editar a "url" abaixo e publicar.
export const GROUPS = {
  tech: { label: "Ofertas Tech", url: "https://chat.whatsapp.com/HBAEq7RafF89hojiTjDVMv" },
  casa: { label: "Ofertas Casa", url: "https://chat.whatsapp.com/Lv00SB27oHb4wzJ47GQRyG" },
  beleza: { label: "Ofertas Beleza", url: "https://chat.whatsapp.com/DFXRlrBtCKNIAhcBzo4QI8" },
  kids: { label: "Ofertas Bebê & Kids", url: "https://chat.whatsapp.com/FcXh42BitNz4cPLqDuwpQX" },
  achadinhos: { label: "Achadinhos & Ofertas", url: "https://chat.whatsapp.com/Ific6cwJS2v9REvE0lURdz" },
};

function withUtm(dest, request) {
  const target = new URL(dest);
  new URL(request.url).searchParams.forEach((value, key) => target.searchParams.set(key, value));
  return target.toString();
}

// Página leve com redirecionamento automático em 3s (meta refresh, sem JS —
// funciona mesmo com a CSP do site, que não libera script inline) e um
// botão pra entrar na hora, sem esperar.
export async function redirectPage(group, request) {
  const dest = withUtm(group.url, request);
  const html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="refresh" content="3;url=${dest}">
<meta name="robots" content="noindex, nofollow">
<title>Entrando no grupo — ${group.label}</title>
<style>
  :root{--black:#0A0A0A;--white:#F5F5F2;--gray-1:#B8B8B3;--line:rgba(245,245,242,.12);--accent:#25D366;--accent-ink:#06130B}
  *{box-sizing:border-box}
  body{margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;background:var(--black);color:var(--white);font-family:-apple-system,"Segoe UI",sans-serif;padding:24px;text-align:center}
  .box{max-width:380px}
  .icon{width:56px;height:56px;margin:0 auto 22px;color:var(--accent)}
  p.eyebrow{font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:var(--accent);margin:0 0 10px;font-weight:600}
  h1{font-size:clamp(20px,4vw,26px);font-weight:700;margin:0 0 14px;line-height:1.3}
  p.sub{font-size:14px;color:var(--gray-1);line-height:1.6;margin:0 0 26px}
  .bar{width:100%;height:4px;background:var(--line);border-radius:4px;overflow:hidden;margin:0 0 26px}
  .bar span{display:block;height:100%;background:var(--accent);width:0%;animation:fill 3s linear forwards}
  @keyframes fill{to{width:100%}}
  .btn{display:inline-block;background:var(--accent);color:var(--accent-ink);font-weight:700;font-size:14.5px;padding:15px 32px;border-radius:3px;text-decoration:none}
  @media (prefers-reduced-motion: reduce){.bar span{animation-duration:.01ms}}
</style>
</head>
<body>
  <div class="box">
    <svg class="icon" viewBox="0 0 448 512" fill="currentColor" aria-hidden="true"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
    <p class="eyebrow">${group.label}</p>
    <h1>Entrando no grupo do WhatsApp...</h1>
    <p class="sub">Você vai ser redirecionado automaticamente em instantes.</p>
    <div class="bar"><span></span></div>
    <a class="btn" href="${dest}">Entrar agora →</a>
  </div>
</body>
</html>`;
  return new Response(html, { headers: { "content-type": "text/html; charset=UTF-8" } });
}
