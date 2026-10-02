// Redirecionamentos (302) /g/<nicho> -> grupo de WhatsApp do PromoWhats.
// Usado pelos anúncios do Meta (que bloqueiam link direto pra chat.whatsapp.com).
// Pra trocar um grupo (lotou, por exemplo), só editar o valor abaixo e publicar.
const GROUPS = {
  tech: "https://chat.whatsapp.com/HBAEq7RafF89hojiTjDVMv",
  casa: "https://chat.whatsapp.com/Lv00SB27oHb4wzJ47GQRyG",
  beleza: "https://chat.whatsapp.com/DFXRlrBtCKNIAhcBzo4QI8",
  kids: "https://chat.whatsapp.com/FcXh42BitNz4cPLqDuwpQX",
  achadinhos: "https://chat.whatsapp.com/Ific6cwJS2v9REvE0lURdz",
};

export async function onRequest(context) {
  const dest = GROUPS[context.params.slug];
  if (!dest) return new Response("Not found", { status: 404 });

  const target = new URL(dest);
  const incoming = new URL(context.request.url).searchParams;
  incoming.forEach((value, key) => target.searchParams.set(key, value));

  return Response.redirect(target.toString(), 302);
}
