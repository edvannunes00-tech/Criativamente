import { GROUPS, redirectPage } from "./_groups.js";
export async function onRequest(context) {
  return redirectPage(GROUPS.achadinhos, context.request);
}
