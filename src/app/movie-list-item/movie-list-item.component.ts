import {Component, Input, OnInit} from '@angular/core';
import {Movies} from "../Movies";
import {CurrencyPipe, DatePipe, NgIf, NgOptimizedImage, UpperCasePipe} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {MovieServiceService} from "../../service/movie-service.service";



@Component({
  selector: 'app-movie-list-item',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgIf,
    UpperCasePipe,
    DatePipe,
    CurrencyPipe
  ],
  templateUrl: './movie-list-item.component.html',
  styleUrl: './movie-list-item.component.css'
})
export class MovieListItemComponent implements OnInit{
  @Input() movies?:Movies;
  showButton:boolean=false
  constructor(private route: ActivatedRoute, private router: Router, private movieService:MovieServiceService) {
  }
  goBack(){
    this.router.navigate(['movies']);
  }

  ngOnInit(): void {
    const id=Number(this.route.snapshot.paramMap.get('id'));
    //console.log("id",id);
    if(id){
      this.showButton=true;
      this.movieService.getMovieById(id).subscribe(movie=>{
        this.movies=movie;
      })
    }
  }
}
