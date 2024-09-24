import {Component, Input} from '@angular/core';
import {Movies} from "../Movies";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-movie-list-item',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './movie-list-item.component.html',
  styleUrl: './movie-list-item.component.css'
})
export class MovieListItemComponent {
  @Input() movies?:Movies;
}
