import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import { User } from '../share/models/User';
import {NgForOf, NgIf} from "@angular/common";
import {MovieListComponent} from "./movie-list/movie-list.component";
import {Movies} from "./Movies";
import {MovieServiceService} from "../service/movie-service.service";
import {MovieListItemComponent} from "./movie-list-item/movie-list-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf, MovieListComponent, MovieListItemComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title?: string;
  userList: User[] = [
    {id: 0, firstName: "yunhao", lastName: "chen", age: 18,address: "", isAdmin: true},
    {id: 1, firstName: "aryan", lastName: "key", age: 19,address: "", isAdmin: false},
    {id: 2, firstName: "fancis", lastName: "biller", age: 17,address: "", isAdmin: false},
    {id: 3, firstName: "pratham", lastName: "X", age: 18,address: "", isAdmin: false},
    {id: 4, firstName: "peter", lastName: "M", age: 22,address: "", isAdmin: false},
    {id: 5, firstName: "leo", lastName: "burnett", age: 30,address: "", isAdmin: false}
  ]
  clickMovie?:Movies;

  constructor(private movieService : MovieServiceService) {
  }
  ngOnInit(): void {
  }

    showMovie(id:number){
    this.getMovie(id);
  }

  getMovie(id:number){
    this.movieService.getMovieById(id).subscribe({
      next:(data: Movies|undefined)=> this.clickMovie = data,
      error:err=> console.error("Error fetching movies", err),
      complete:()=> console.log("movies data fetch complete!")
    });
  }
}
