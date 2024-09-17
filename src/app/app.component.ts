import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from '../share/models/User';
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  userList: User[] = [
    {id: 0, firstName: "yunhao", lastName: "chen", age: 18,address: "", isAdmin: true},
    {id: 1, firstName: "aryan", lastName: "key", age: 19,address: "", isAdmin: false},
    {id: 2, firstName: "fancis", lastName: "biller", age: 17,address: "", isAdmin: false},
    {id: 3, firstName: "pratham", lastName: "X", age: 18,address: "", isAdmin: false},
    {id: 4, firstName: "peter", lastName: "M", age: 22,address: "", isAdmin: false},
    {id: 5, firstName: "leo", lastName: "burnett", age: 30,address: "", isAdmin: false}
  ]
}
