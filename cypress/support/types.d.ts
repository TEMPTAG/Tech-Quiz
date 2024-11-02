import { Schema } from "mongoose";

export interface Answer {
  text: string;
  isCorrect: boolean;
}
export interface Question {
  _id: string;
  question: string;
  answers: Answer[];
}
export interface Quiz {
  _id: Schema.Types.ObjectId;
  question: Question[];
  answer: string[];
}
