import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Question } from '../models/questions.model';
import { QuestionAnswers } from '../models/questionAnswers.model';
import { Answer } from '../models/answer.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  quizContent: QuestionAnswers[] = [];
  playerAnswers: {questionId: number; answer: string}[] = [];
  score = 0;
  isQuizFinished = false;
  playerName: string = '';

  constructor(private http: HttpClient) { }

  checkAnswers() {
    this.score = 0;
    for(const playerAnswer of this.playerAnswers) {
      const correctAnswer = this.quizContent.find((q) => q.question.id === playerAnswer.questionId)?.answers.find((a) => a.isCorrect);
      if (correctAnswer?.answerLabel === playerAnswer.answer) {
        this.score++;
      }
    }
  }

  getQuizContent(categoryId: number): void {
    this.http.get<Question[]>('http://localhost:3000/questions?categoryId='+ categoryId).subscribe((questions: Question[]) => {
      for (const question of questions) {
        this.http.get<Answer[]>(`http://localhost:3000/answers?questionId=${question.id}`).subscribe((answers: Answer[]) => {
          this.quizContent.push({
            question,
            answers
          });
        });
      }
    });
  }

  addAnswer(answer: string, questionId: number) {
    const isAnswered = this.playerAnswers.find((a) => a.questionId === questionId);
    if (isAnswered) {
      isAnswered.answer = answer;
      return;
    }
    this.playerAnswers.push({questionId, answer});
  }

  resetQuiz() {
    this.quizContent = [];
    this.playerAnswers = [];
    this.score = 0;
    this.isQuizFinished = false;
  }
}
