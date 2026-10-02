// Config central dos grupos de WhatsApp do PromoWhats.
// Pra trocar um grupo (lotou, por exemplo), só editar o valor abaixo e publicar.
export const GROUPS = {
  tech: "https://chat.whatsapp.com/HBAEq7RafF89hojiTjDVMv",
  casa: "https://chat.whatsapp.com/Lv00SB27oHb4wzJ47GQRyG",
  beleza: "https://chat.whatsapp.com/DFXRlrBtCKNIAhcBzo4QI8",
  kids: "https://chat.whatsapp.com/FcXh42BitNz4cPLqDuwpQX",
  achadinhos: "https://chat.whatsapp.com/Ific6cwJS2v9REvE0lURdz",
};

export async function redirectTo(dest, request) {
  const target = new URL(dest);
  new URL(request.url).searchParams.forEach((value, key) => target.searchParams.set(key, value));
  return Response.redirect(target.toString(), 302);
}
