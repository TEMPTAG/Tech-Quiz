import { mockState } from "../support/utils/helpers";

describe("Tech Quiz End-to-End Test", () => {
  context("Quiz setup", () => {
    // Intercept the GET request to /api/questions/random and reply with the mockState fixture data before each test
    beforeEach(() => {
      cy.intercept("GET", "/api/questions/random", (req) => {
        req.reply({
          statusCode: 200,
          body: mockState,
        });
      }).as("getRandomQuestions");

      // Visit the home route
      cy.visit("/");

      // Reload the page to reset the state between tests
      cy.reload();
    });

    it("should render the 'Start Quiz' button when visiting the home route", () => {
      // Verify the 'Start Quiz' button is rendered on the page
      cy.get(`[data-cy=start-quiz]`)
        .should("exist")
        .and("contain", "Start Quiz");
    });

    it("should render the first Question when clicking on the 'Start Quiz' button", () => {
      // Click the 'Start Quiz' button
      cy.get(`[data-cy=start-quiz]`).click();
      cy.wait("@getRandomQuestions");

      // Verify the first question is rendered on the page
      cy.get('[data-cy="question"]').should("exist").and("not.be.empty");
    });

    it("should render the next question when answering the current question", () => {
      // Click the 'Start Quiz' button
      cy.get(`[data-cy=start-quiz]`).click();
      cy.wait("@getRandomQuestions");

      // Answer the first question
      cy.get(`[data-cy=answer-btn-1]`).click();

      // Verify the next question is rendered on the page
      cy.get('[data-cy="question"]').should("exist").and("not.be.empty");
    });

    it("should render the 'quizCompleted' component when the last question is answered", () => {
      // Start the quiz, answer the first question, answer the second question, and verify the 'quizCompleted' component is rendered
      cy.get(`[data-cy=start-quiz]`).click();
      cy.wait("@getRandomQuestions");
      cy.get(`[data-cy=answer-btn-1]`).click();

      // Answer the second question
      cy.get(`[data-cy=answer-btn-3]`).click();

      // Verify the 'quizCompleted' component is rendered on the page
      cy.get('[data-cy="quiz-completed"]').should("exist").and("not.be.empty");
    });

    // Start a new quiz
    it("should start a new quiz when the 'Take New Quiz' button is clicked", () => {
      // Start the quiz, answer the first question, answer the second question, and verify the 'quizCompleted' component is rendered
      cy.get(`[data-cy=start-quiz]`).click();
      cy.wait("@getRandomQuestions");
      cy.get(`[data-cy=answer-btn-1]`).click();
      cy.get(`[data-cy=answer-btn-3]`).click();

      // Click the 'Take New Quiz' button
      cy.get(`[data-cy=take-new-quiz]`).click();

      // Verify the First question is rendered on the page again
      cy.get('[data-cy="question"]').should("exist").and("not.be.empty");
    });
  });
});
