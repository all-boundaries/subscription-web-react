import path from "path";
import { MatchersV3, PactV4 } from "@pact-foundation/pact";
import { describe, expect, it } from "vitest";
import { allPlans } from "~/gateways/subscription_api_client.server";

const provider = new PactV4({
  dir: path.resolve(process.cwd(), "build/pacts"),
  consumer: "subscription-web-react",
  provider: "subscription-kotlin",
});

describe("GET /plans", () => {
  it("returns 200 with a list of plans", () => {
    const expectedResponse = {
      data: [
        { id: "pln-1", name: "Explorer" },
        { id: "pln-11", name: "Curious" },
      ],
    };

    const contract = provider
      .addInteraction()
      .given("there are plans")
      .uponReceiving("a request to for all plans")
      .withRequest("GET", "/plans", (builder) => {
        builder.headers({ accept: "application/json" });
      })
      .willRespondWith(200, (builder) => {
        builder.headers({ "content-type": "application/json" });
        builder.jsonBody(MatchersV3.like(expectedResponse));
      });

    return contract.executeTest(async (server) => {
      const plans = await allPlans(server.url);
      expect(plans).toEqual(expectedResponse);
    });
  });
});
