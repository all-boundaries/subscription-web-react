import { describe, expect, it, vi } from "vitest";
import { createRemixStub } from "@remix-run/testing";
import { render, screen, waitFor, within } from "@testing-library/react";
import Plans, { loader } from "~/routes/plans";
import { json } from "@remix-run/node";

describe("Plans page", () => {
  it("shows plan intro and available plans", async () => {
    const PlansStub = createRemixStub([
      {
        path: "/",
        Component: Plans,
        loader: async () => {
          return json({
            plans: [
              { id: "pln-1", name: "Explorer" },
              { id: "pln-2", name: "Curious" },
            ],
          });
        },
      },
    ]);

    render(<PlansStub />);

    await waitFor(() => screen.findByText("Choose your adventure"));

    const availablePlans = within(screen.getByRole("list"))
      .getAllByRole("listitem")
      .map((item) => item.textContent);

    expect(screen.getByRole("paragraph").textContent).toEqual(
      "We've created the plans below with you in mind, look at the options and choose the one that matches the what matches you the best!"
    );
    expect(availablePlans).toEqual(["Explorer", "Curious"]);
  });

  it("returns plans", async () => {
    vi.mock("~/gateways/subscription_api_client.server.ts", () => {
      return {
        allPlans: () => {
          return { data: [{ id: "pln-1", name: "Explorer" }] };
        },
      };
    });

    const response = await loader();
    const { plans } = await response.json();

    expect(plans).toEqual([{ id: "pln-1", name: "Explorer" }]);
  });
});
