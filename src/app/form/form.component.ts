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
  add:boolean=true;
  error:string|null=null;
  constructor(private route: ActivatedRoute, private router: Router, private movieService:MovieServiceService) {
    this.movieForm = new FormGroup({
      id:new FormControl(null),
      name:new FormControl(null),
      yearReleased:new FormControl(null),
      director:new FormControl(null),
      productionCompany:new FormControl(null),
      imageUrl:new FormControl(null)
    })
  }

  ngOnInit(): void {
    const id=Number(this.route.snapshot.paramMap.get('id'));
    //console.log("id",id);
    if(id){
      this.movieService.getMovieById(id).subscribe(
        {next:(m)=>{
            console.log("get movie",m);
            this.movies=m;
            this.add=false;
            if(this.movies){
              this.movieForm.setValue(this.movies);
            }
          },
          error: err=>{
            this.error='error getting movie';
            console.error('Error fetching:', err);
          }
      })
    }else{
      this.movies = {
        id:this.movieService.generateNewId(),
        name:'',
        yearReleased:2024,
        director:'',
        productionCompany:'',
        imageUrl:''
      }
      this.add=true;
      if(this.movies){
        this.movieForm.setValue(this.movies);
      }
    }


  }
  save(){
    this.movies = this.movieForm.value;
    if(this.add){
      this.movieService.addMovie(this.movies!).subscribe({
        next:data =>this.router.navigate(['movies']),
        error:err=>{
          this.error='error on adding!'
          console.error('Error adding:', err);
        }
    });

    }else{
      this.movieService.updateMovie(this.movies!).subscribe({
        next:data=>this.router.navigate(['movies']),
        error:err=>{
            this.error='error on save!'
            console.error('Error save:', err);
        }
    });
    }

    //console.log("done save")
  }
}
