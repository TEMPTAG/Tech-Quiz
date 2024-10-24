import { Schema } from "mongoose";

interface Quiz {
  _id: Schema.Types.ObjectId;
  question: string;
  answer: string[];
}

export type { Quiz };
