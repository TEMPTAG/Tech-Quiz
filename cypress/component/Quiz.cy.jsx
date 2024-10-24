import React from "react";
import Quiz from "../../client/src/components/Quiz";
// import { mount } from "@cypress/react18";
import mockQuestion from "../fixtures/questions.json";
import "@testing-library/cypress/add-commands";

describe("<Quiz />", () => {
  beforeEach(() => {
    cy.intercept("GET", "/api/questions/random", (req) => {
      req.reply({
        statusCode: 200,
        body: mockQuestion,
      });
    }).as("getRandomQuestion");
  });

  it("should render the quiz page, including the 'Start Quiz' button", () => {
    cy.mount(<Quiz />);
    cy.get(`[data-cy=start-quiz]`).should("contain", "Start Quiz");
  });

  it("should render the mockQuestion when 'Start Quiz' button is clicked, and verify the H2-Question, numbered selection buttons, and provided answers text body", () => {
    cy.mount(<Quiz />);
    cy.get(`[data-cy=start-quiz]`).contains("Start Quiz").click();
    cy.wait("@getRandomQuestion");
    cy.get(`[data-cy=question]`).should("contain", mockQuestion[0].question);
    mockQuestion[0].answers.forEach((answer, index) => {
      cy.get(`[data-cy=answer-btn-${index}]`).should("contain", index + 1);
      cy.get(`[data-cy=answer-text-${index}]`).should("contain", answer.text);
    });
  });
});
