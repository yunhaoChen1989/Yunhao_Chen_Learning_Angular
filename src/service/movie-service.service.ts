import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {Movies} from "../app/Movies";
import {moviesList} from "../data/movies-content";

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService{

  constructor() { }

  getAllMovies(): Observable<Movies[]>{
    return of(moviesList)
  }

}
