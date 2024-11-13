import { Injectable } from '@angular/core';
import {Movies} from "../app/Movies";
import {InMemoryDbService} from "angular-in-memory-web-api";
import {moviesList} from "../data/movies-content";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataServiceService implements InMemoryDbService{

  createDb() {
    const moviesList : Movies[] =
      [
        {id:1, name:"The Avengers",yearReleased:2018,director:"Joss Whedon",productionCompany:"Marvel Studios",imageUrl:"avengers.jpg", datePosted: new Date("11/2/2019 09:44:57"), price: 200.00},
        {id:2, name:"Captain America",yearReleased:2000,director:"Simon",productionCompany:"Marvel Studios",imageUrl:"captain.jpg", datePosted: new Date("12/1/2024 17:44:57"), price: 150.00},
        {id:3, name:"Thor",yearReleased:2011,director:"Kenneth Branagh",productionCompany:"Marvel Studios",imageUrl:"thor.jpg", datePosted: new Date("2/2/1989 19:44:57"), price: 123.00},
        {id:4, name:"Pulp Fiction",yearReleased:1994,director:"Quentin Tarantino",productionCompany:"Miramax",imageUrl:"pulp.jpg", datePosted: new Date("3/8/2023 22:44:57"), price: 55.00},

      ];
    return{moviesList:moviesList};
  }
}
