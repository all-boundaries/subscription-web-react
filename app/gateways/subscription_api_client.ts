export async function allPlans(baseUrl: string) {
  const plansUrl = new URL("/plans", baseUrl);
  return fetch(plansUrl, {
    headers: { accept: "application/json" },
  }).then((r) => r.json());
}
