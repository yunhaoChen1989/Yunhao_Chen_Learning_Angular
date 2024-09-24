import { Component } from '@angular/core';
import {MovieListItemComponent} from "../movie-list-item/movie-list-item.component";
import {Movies} from "../Movies";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [
    MovieListItemComponent,
    NgForOf
  ],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
  movies:Movies[];

  constructor(){
    this.movies = [
      {name:"The Avengers",yearReleased:2018,director:"Joss Whedon",productionCompany:"Marvel Studios",imageUrl:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTp0qlAoWcOOswIkL_qpjYzJqCCDmWXiBzCXiqbE43Obo8c0Z-s"},
      {name:"Captain America",yearReleased:2000,director:"Simon",productionCompany:"Marvel Studios",imageUrl:"https://as2.ftcdn.net/v2/jpg/06/02/13/93/1000_F_602139359_ODViPhvIEzwQRPL9KRoIwtKzYuMmpymB.jpg"},
      {name:"Thor",yearReleased:2011,director:"Kenneth Branagh",productionCompany:"Marvel Studios",imageUrl:"https://as2.ftcdn.net/v2/jpg/05/79/67/83/1000_F_579678392_4Bh9vMB1DP4QXNzE0E2pUHJYLOYpBgwO.jpg"},
      {name:"Pulp Fiction",yearReleased:1994,director:"Quentin Tarantino",productionCompany:"Miramax",imageUrl:"https://as2.ftcdn.net/v2/jpg/09/70/56/49/1000_F_970564947_qgowmQ5iyagHQIDoFfRoT99cQFJAiQEA.jpg"},
    ];
  }
}
