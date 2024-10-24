import questions from "../../fixtures/questions.json";
import { Quiz } from "../types";

export const getRandomQuestions = (question: { question: string }) => {
  return question.question;
};

export const mockState: Quiz = {
  _id: "60d5f2d8bc2d7e2b1c2b6c5d",
  question: getRandomQuestions(questions),
  answer: [],
};
