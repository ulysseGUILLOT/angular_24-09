import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Categorie } from '../shared/models/categorie.model';
import { CategorieService } from './categorie.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent implements OnInit{
  inputFilter: string = '';
  data!: Categorie[];
  categories: Categorie[] = [];

  constructor(private categoryService: CategorieService) { }
  
  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe((data: Categorie[]) => {
      this.data = data;
      this.categories = this.data;
    });
  }

  resetInput() {
    this.inputFilter = '';
    this.categories = this.data;
  }

  submitInput() {
    this.categories = this.data.filter((categorie: Categorie) => {
      return categorie.name.toLowerCase().includes(this.inputFilter.toLowerCase());
    });
  }


}
