import { envConfigServer } from "~/plumbling/envConfig.server";
import { Plan } from "~/routes/plans";

type PlansResponse = {
  data: Array<Plan>;
};

export async function allPlans(
  baseUrl = envConfigServer.VITE_SVC_SUBSCRIPTION_URL
): Promise<PlansResponse> {
  const plansUrl = new URL("/plans", baseUrl);
  return fetch(plansUrl, {
    headers: { accept: "application/json" },
  }).then((r) => r.json());
}
