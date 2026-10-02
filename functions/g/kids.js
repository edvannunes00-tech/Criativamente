import { GROUPS, redirectPage } from "./_groups.js";
export async function onRequest(context) {
  return redirectPage(GROUPS.kids, context.request);
}
