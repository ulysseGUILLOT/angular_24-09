import { Component, Input } from '@angular/core';
import { Categorie } from 'src/app/shared/models/categorie.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() categorie!: Categorie;

}
