import { Answer } from "./answer.model";
import { Question } from "./questions.model";

export interface QuestionAnswers {
    question: Question,
    answers: Answer[]
}