import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-not-found-component',
  standalone: true,
  imports: [],
  templateUrl: './page-not-found-component.component.html',
  styleUrl: './page-not-found-component.component.css'
})
export class PageNotFoundComponentComponent {

  constructor(private router:Router) {
  }

  home(){
    this.router.navigate(['/movies'])
  }
}
