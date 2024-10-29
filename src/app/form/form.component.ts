import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MovieServiceService} from "../../service/movie-service.service";
import {Movies} from "../Movies";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit{
  movieForm!: FormGroup;
  movies?:Movies;
  constructor(private route: ActivatedRoute, private router: Router, private movieService:MovieServiceService) {
  }

  ngOnInit(): void {
    const id=Number(this.route.snapshot.paramMap.get('id'));
    //console.log("id",id);
    if(id){
      this.movieService.getMovieById(id).subscribe(m=>{
        //console.log(m);
        this.movies=m;
        if(this.movies){
          this.movieForm = new FormGroup({
            id:new FormControl(null),
            name:new FormControl(null),
            yearReleased:new FormControl(null),
            director:new FormControl(null),
            productionCompany:new FormControl(null),
            imageUrl:new FormControl(null)
          })
          this.movieForm.setValue(this.movies);
          console.log(this.movieForm)
        }

      })
    }
  }
}
