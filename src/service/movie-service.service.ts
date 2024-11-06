import {Injectable} from '@angular/core';
import {catchError, Observable, throwError} from "rxjs";
import {Movies} from "../app/Movies";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
/**
 * making sure every CRUD is working in service
 * Oct 29, 2024
 */
export class MovieServiceService{
  private url:string='api/moviesList';
  private movies: Observable<Movies[]> | undefined;
  private sizes:number=0;
  constructor(private http:HttpClient) {
  }

  //fetch all record of movies
  getAllMovies(): Observable<Movies[]>{
    console.log("get all movies");
    this.movies=this.http.get<Movies[]>(this.url);
    this.movies.subscribe(data=>this.sizes=data.length);
    return this.http.get<Movies[]>(this.url).pipe(catchError(this.handleError));;
  }
  //get movie by id
  getMovieById(id:number):Observable<Movies | undefined>{
    //const movie = this.movies.find(movie=>movie.id===id);
    return this.http.get<Movies>(`${this.url}/${id}`).pipe(catchError(this.handleError));;
  }
  //add movie
  addMovie(movie:Movies):Observable<Movies>{
    //this.movies.push(movie);
    //return of(this.movies);
    console.log("add", movie);
    return this.http.post<Movies>(this.url,movie).pipe(catchError(this.handleError));;
  }
  //update movie
  updateMovie(movie:Movies):Observable<Movies>{
    /*const index = this.movies.findIndex(m=>m.id===movie.id);
    if(index !==-1){
      this.movies[index] = movie;
    }
    return of(this.movies);*/
    return this.http.put<Movies>(`${this.url}/${movie.id}`, movie).pipe(catchError(this.handleError));;
  }
  //delete movie by id
  deleteMovie(id:number):Observable<Movies>{
    /*this.movies=this.movies.filter(m=>m.id !==id);
    return of(this.movies);*/
    return this.http.delete<Movies>(`${this.url}/${id}`).pipe(catchError(this.handleError));;
  }
  generateNewId():number{
    return this.sizes+1;
  }

  /**
   * adding error message return
   * @param error
   * @private
   */
  private handleError(error: HttpErrorResponse) {
    console.error('API error:', error);
    return throwError(() => new Error('Server error, please try again.'));
  }
}
