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
        {id:1, name:"The Avengers",yearReleased:2018,director:"Joss Whedon",productionCompany:"Marvel Studios",imageUrl:"avengers.jpg"},
        {id:2, name:"Captain America",yearReleased:2000,director:"Simon",productionCompany:"Marvel Studios",imageUrl:"captain.jpg"},
        {id:3, name:"Thor",yearReleased:2011,director:"Kenneth Branagh",productionCompany:"Marvel Studios",imageUrl:"thor.jpg"},
        {id:4, name:"Pulp Fiction",yearReleased:1994,director:"Quentin Tarantino",productionCompany:"Miramax",imageUrl:"pulp.jpg"},

      ];
    return{moviesList:moviesList};
  }
}
