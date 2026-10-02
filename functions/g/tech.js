import { GROUPS, redirectTo } from "./_groups.js";
export async function onRequest(context) {
  return redirectTo(GROUPS.tech, context.request);
}
