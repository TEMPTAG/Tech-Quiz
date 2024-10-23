describe("Tech Quiz End-to-End Test", () => {
  it("should start and complete the quiz", () => {
    cy.visit("http://127.0.0.1:3001/");

    // Start the quiz
    cy.get("button").contains("Start Quiz").click();

    // // Loop through questions

    // Verify that the score is displayed
  });
});
