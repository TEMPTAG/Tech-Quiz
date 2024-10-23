// import React from "react";
import Quiz from "../../client/src/components/Quiz";
// import { mockState } from "../support/utils/helpers";
// import "@testing-library/cypress/add-commands";

describe("Quiz Component Test", () => {
  it("should render the quiz component", () => {
    cy.mount(<Quiz />);
    cy.get("button").contains("Start Quiz");
  });
});
