import path from "path";
import { MatchersV3, PactV4 } from "@pact-foundation/pact";
import { describe, expect, it } from "vitest";
import { allPlans, subscribe } from "~/gateways/subscription_api_client.server";
import { like } from "@pact-foundation/pact/src/dsl/matchers";

const provider = new PactV4({
  dir: path.resolve(process.cwd(), "build/pacts"),
  consumer: "subscription-web-react",
  provider: "subscription-kotlin",
});

describe("Subscription integration", () => {
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

  describe("POST /subscriptions", () => {
    it("returns 201 with the location of the subscription created", () => {
      const contract = provider
        .addInteraction()
        .given("there are plans")
        .uponReceiving("a subscription request")
        .withRequest("POST", "/subscriptions", (builder) => {
          builder
            .headers({
              "content-type": "application/json",
              accept: "application/json",
            })
            .jsonBody(like({ planId: "pln-myplan" }));
        })
        .willRespondWith(201, (builder) => {
          builder.headers({
            location: like(
              "/subscriptions/9344e605-15c4-494c-9319-97acee97edb1"
            ),
          });
        });

      return contract.executeTest(async (server) => {
        const response = await subscribe("pln-myplan", server.url);
        expect(response.headers.get("location")).toEqual(
          "/subscriptions/9344e605-15c4-494c-9319-97acee97edb1"
        );
      });
    });
  });
});
