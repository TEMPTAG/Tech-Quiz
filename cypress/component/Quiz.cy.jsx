import React from "react";
import Quiz from "../../client/src/components/Quiz";
// import { mount } from "@cypress/react18";
import mockQuestion from "../fixtures/questions.json";
import "@testing-library/cypress/add-commands";

describe("<Quiz />", () => {
  // Intercept the GET request to /api/questions/random and reply with the mockQuestion fixture data
  beforeEach(() => {
    cy.intercept("GET", "/api/questions/random", (req) => {
      req.reply({
        statusCode: 200,
        body: mockQuestion,
      });
    }).as("getRandomQuestion");
  });

  it("should render the !quizStarted component, and verify it contains the 'Start Quiz' button", () => {
    // Visit the Quiz Page
    cy.mount(<Quiz />);

    // Verify the 'Start Quiz' button is rendered
    cy.get(`[data-cy=start-quiz]`).should("contain", "Start Quiz");
  });

  it("should render the currentQuestion component when 'Start Quiz' button is clicked, render the mockQuestion and verify the Question, numbered selection buttons, and provided answers text", () => {
    // Visit the Quiz Page
    cy.mount(<Quiz />);

    // Click the 'Start Quiz' button
    cy.get(`[data-cy=start-quiz]`).contains("Start Quiz").click();

    // Wait for the API call to complete and render the first Question
    cy.wait("@getRandomQuestion");

    // Verify the first Question, numbered selection buttons, and provided Answers text are rendered
    cy.get(`[data-cy=question]`).should("contain", mockQuestion[0].question);
    mockQuestion[0].answers.forEach((answer, index) => {
      cy.get(`[data-cy=answer-btn-${index}]`).should("contain", index + 1);
      cy.get(`[data-cy=answer-text-${index}]`).should("contain", answer.text);
    });
  });

  it("should render the next question when a numbered selection button is clicked, render the second mockQuestion and verify the Question, numbered selection buttons, and provided answers text", () => {
    // Visit the Quiz Page
    cy.mount(<Quiz />);

    // Click the 'Start Quiz' button, wait for the API call to complete and render the first Question, then click the second Answer of the first question
    cy.get(`[data-cy=start-quiz]`).contains("Start Quiz").click();
    cy.wait("@getRandomQuestion");
    cy.get(`[data-cy=answer-btn-1]`).click();

    // Verify the second Question, numbered selection buttons, and provided Answers text are rendered
    cy.get(`[data-cy=question]`).should("contain", mockQuestion[1].question);
    mockQuestion[1].answers.forEach((answer, index) => {
      cy.get(`[data-cy=answer-btn-${index}]`).should("contain", index + 1);
      cy.get(`[data-cy=answer-text-${index}]`).should("contain", answer.text);
    });
  });

  it("should render the quizCompleted component when the last question is answered, render the score, and verify the 'Take New Quiz' button", () => {
    // Visit the Quiz Page
    cy.mount(<Quiz />);

    // Click the 'Start Quiz' button, wait for the API call to complete and render the first Question, then click the second Answer of the first Question, and then click the fourth Answer of the second Question
    cy.get(`[data-cy=start-quiz]`).contains("Start Quiz").click();
    cy.wait("@getRandomQuestion");
    cy.get(`[data-cy=answer-btn-1]`).click();
    cy.get(`[data-cy=answer-btn-3]`).click();

    // Verify the quizCompleted component is rendered
    cy.get(`[data-cy=quiz-completed]`).should("contain", "Quiz Completed");

    // Verify the your score is displayed
    cy.get(`[data-cy=your-score]`).should("be.visible");

    // Verify the 'Take New Quiz' button is rendered
    cy.get(`[data-cy=take-new-quiz]`).should("contain", "Take New Quiz");
  });

  it("should start a new game when the 'Take New Quiz' button is clicked", () => {
    // Visit the Quiz Page
    cy.mount(<Quiz />);

    // Click the 'Start Quiz' button, wait for the API call to complete and render the first Question, then click the second Answer of the first Question, and then click the fourth Answer of the second Question, then click the 'Take New Quiz' button
    cy.get(`[data-cy=start-quiz]`).contains("Start Quiz").click();
    cy.wait("@getRandomQuestion");
    cy.get(`[data-cy=answer-btn-1]`).click();
    cy.get(`[data-cy=answer-btn-3]`).click();
    cy.get(`[data-cy=take-new-quiz]`).click();

    // Verify the first Question is rendered again
    cy.get(`[data-cy=question]`).should("contain", mockQuestion[0].question);
  });
});
