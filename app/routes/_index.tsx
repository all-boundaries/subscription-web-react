import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Coffee Subscription" },
    { name: "description", content: "Learn and try coffee beans" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Coffee Subscription</h1>
    </div>
  );
}
