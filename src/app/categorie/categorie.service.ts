import { Injectable } from '@angular/core';
import { Categorie } from '../shared/models/categorie.model';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Question } from '../shared/models/questions.model';
import { Answer } from '../shared/models/answer.model';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  categorie: { id: number; name: string; } | undefined;

  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<Categorie[]> {
    return this.http.get<Categorie[]>('http://localhost:3000/categories')
  }
  
}
