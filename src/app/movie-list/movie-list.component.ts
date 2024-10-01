import {Component, OnInit} from '@angular/core';
import {MovieListItemComponent} from "../movie-list-item/movie-list-item.component";
import {Movies} from "../Movies";
import {NgForOf} from "@angular/common";
import {MovieServiceService} from "../../service/movie-service.service";

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
export class MovieListComponent implements OnInit{
  movies?:Movies[];

  constructor(private movieService : MovieServiceService){

  }

  ngOnInit(): void {

  }
}
