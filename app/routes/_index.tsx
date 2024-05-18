import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Coffee Subscription" },
    { name: "description", content: "Learn and try coffee beans" },
  ];
};

export default function Index() {
  return (
    <div>
      <h1>
        <mark>Welcome</mark>, enjoy what's in here.
      </h1>
    </div>
  );
}
