import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {Movies} from "../app/Movies";
import {moviesList} from "../data/movies-content";

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService{
 private movies:Movies[] = moviesList;
  constructor() {
  }

  //fetch all record of movies
  getAllMovies(): Observable<Movies[]>{
    return of(moviesList)
  }
  //get movie by id
  getMovieById(id:number){
    const movie = this.movies.find(movie=>movie.id===id);
    return of(movie);
  }
  //add movie
  addMovie(movie:Movies){
    this.movies.push(movie);
    return of(this.movies);
  }
  //update movie
  updateMovie(movie:Movies){
    const index = this.movies.findIndex(m=>m.id===movie.id);
    if(index !==-1){
      this.movies[index] = movie;
    }
    return of(this.movies);
  }
  //delete movie by id
  deleteMovie(id:number){
    this.movies=this.movies.filter(m=>m.id !==id);
    return of(this.movies);
  }

}
