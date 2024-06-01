import { LinkDescriptor } from "@remix-run/node";
import styles from "~/styles/plans.css?url";

export function links(): Array<LinkDescriptor> {
  return [{ rel: "stylesheet", href: styles }];
}

export default function Plans() {
  const plans = [
    { id: "id-1", name: "Explorer" },
    { id: "id-2", name: "Curious" },
  ];

  const allPlans = plans.map((plan) => (
    <li key={plan.id}>
      <h3>{plan.name}</h3>
    </li>
  ));

  return (
    <article>
      <h2>Choose your adventure</h2>
      <p>
        We've created the plans below with you in mind, look at the options and
        choose the one that matches the what matches you the best!
      </p>
      <br />
      <section>
        <ul className="container">{allPlans}</ul>;
      </section>
    </article>
  );
}
