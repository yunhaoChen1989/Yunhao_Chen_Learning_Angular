import { Component } from '@angular/core';
import {MovieListItemComponent} from "../movie-list-item/movie-list-item.component";
import {Movies} from "../Movies";

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [
    MovieListItemComponent
  ],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
  movies?:Movies[];

  ngOnInit(): void{
    this.movies = [
      {name:"The Avengers",yearReleased:2018,director:"Joss Whedon",productionCompany:"Marvel Studios"},
      {name:"Captain America",yearReleased:2000,director:"Simon",productionCompany:"Marvel Studios"},
      {name:"Thor",yearReleased:2011,director:"Kenneth Branagh",productionCompany:"Marvel Studios"},
      {name:"Pulp Fiction",yearReleased:1994,director:"Quentin Tarantino",productionCompany:"Miramax"},
    ];
  }
}
