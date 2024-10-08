import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from '@angular/router';
import {MovieListComponent} from "./app/movie-list/movie-list.component";
import {MovieListItemComponent} from "./app/movie-list-item/movie-list-item.component";
import {PageNotFoundComponentComponent} from "./app/page-not-found-component/page-not-found-component.component";

/*bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));*/

const routes:Routes=[
  {path:'', redirectTo:'/movies', pathMatch:'full'},//default route
  {path: 'movies', component: MovieListComponent},
  {path: 'students/:id', component: MovieListItemComponent},
  {path:'modify-student', component:MovieListItemComponent},
  {path:'**', component:PageNotFoundComponentComponent},
];
/*bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));*/
bootstrapApplication(AppComponent, {providers:[provideRouter(routes)]});
