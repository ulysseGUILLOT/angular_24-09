import { Component, Input, OnInit } from '@angular/core';
import { QuizService } from "../../shared/services/quiz.service";
import { CategorieService } from 'src/app/categorie/categorie.service';
import { Question } from 'src/app/shared/models/questions.model';
import { QuestionAnswers } from 'src/app/shared/models/questionAnswers.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  quizContent!: QuestionAnswers[]

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.quizContent = this.quizService.quizContent;
  }
}
