import { describe, expect, it } from "vitest";
import { createRemixStub } from "@remix-run/testing";
import { render, screen, waitFor, within } from "@testing-library/react";
import Plans from "~/routes/plans";

describe("Plans page", () => {
  it("shows plan intro and available plans", async () => {
    const PlansStub = createRemixStub([
      {
        path: "/",
        Component: Plans,
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
});
