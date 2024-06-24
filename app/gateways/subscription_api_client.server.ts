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

export async function subscribe(
  planId: string,
  baseUrl = envConfigServer.VITE_SVC_SUBSCRIPTION_URL
) {
  const subscribeUrl = new URL("/subscriptions", baseUrl);
  return fetch(subscribeUrl, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({ planId: planId }),
  });
}
