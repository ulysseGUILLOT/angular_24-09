import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { QuizService } from "../shared/services/quiz.service";
import { AuthService } from '../auth/auth.service';
import { CategorieService } from '../categorie/categorie.service';
import { Question } from '../shared/models/questions.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  isQuizFinished = this.quizService.isQuizFinished;
  playerName = '';
  idCategory!: number

  constructor(
    private quizService: QuizService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.playerName = this.authService.getSavedUser() || '';
    this.route.params.subscribe(params => {
      this.idCategory = params['idCategorie'];
    });
    this.quizService.resetQuiz();
    this.quizService.getQuizContent(this.idCategory);
  }

  goToResultPage() {
    this.router.navigate(['/result']);
  }
}
