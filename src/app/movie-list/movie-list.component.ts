import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MovieListItemComponent} from "../movie-list-item/movie-list-item.component";
import {Movies} from "../Movies";
import {NgForOf, NgIf} from "@angular/common";
import {MovieServiceService} from "../../service/movie-service.service";
import {RouterLink} from "@angular/router";
import {routes} from "../app.routes";

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [
    MovieListItemComponent,
    NgForOf,
    RouterLink,
    NgIf
  ],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent implements OnInit{
  movies?:Movies[];
  @Output() parentFun = new EventEmitter<number>();
  error:string|null=null;
  constructor(private movieService : MovieServiceService){

  }

  ngOnInit(): void {
    this.getAllMovies();
  }

  clickMovie(id:number){
    this.parentFun.emit(id);
  }

  deleteMovie(id:number){
    this.movieService.deleteMovie(id).subscribe({
      next:(data)=>this.getAllMovies(),
      error:err=> {
        this.error='error on getting movies!';
        console.error("Error delete movies", err)},
      complete:()=> console.log("movies data delete complete!")
    });
    //console.log("delete done");
    //this.getAllMovies();
  }

  getAllMovies(){
    this.movieService.getAllMovies().subscribe({
      next:(data: Movies[])=> this.movies = data,
      error:err=> {
        this.error='error on getting movies!'
        console.error("Error fetching movies", err)},
      complete:()=> console.log("movies data fetch complete!")
    });
  }
}
