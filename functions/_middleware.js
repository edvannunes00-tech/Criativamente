// Roteamento por domínio: permite que domínios próprios de clientes
// (registrados fora do criativamentedigital.com.br) sirvam o conteúdo
// de uma subpasta deste mesmo projeto Cloudflare Pages, sem precisar
// de um projeto/deploy separado para cada cliente.
//
// Pré-requisito: o domínio precisa ser adicionado como "Custom domain"
// deste projeto Pages no painel do Cloudflare (Pages > Custom domains).
// Isso é um passo manual no dashboard — este arquivo só cuida do roteamento.
const DOMAIN_TO_FOLDER = {
  "kassandrastefanye.com.br": "/kassandra",
};

export async function onRequest(context) {
  const url = new URL(context.request.url);
  const host = url.hostname.replace(/^www\./, "");
  const folder = DOMAIN_TO_FOLDER[host];

  if (folder && !url.pathname.startsWith(folder)) {
    url.pathname = folder + url.pathname;
    const rewritten = new Request(url.toString(), context.request);
    return context.env.ASSETS.fetch(rewritten);
  }

  return context.next();
}
