import { GROUPS, redirectPage } from "./_groups.js";
export async function onRequest(context) {
  return redirectPage(GROUPS.casa, context.request);
}
