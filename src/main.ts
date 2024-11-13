import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from '@angular/router';
import {MovieListComponent} from "./app/movie-list/movie-list.component";
import {MovieListItemComponent} from "./app/movie-list-item/movie-list-item.component";
import {PageNotFoundComponentComponent} from "./app/page-not-found-component/page-not-found-component.component";
import {ModifyMovieComponent} from "./app/modify-movie/modify-movie.component";
import {FormComponent} from "./app/form/form.component";
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {importProvidersFrom} from "@angular/core";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataServiceService} from "./service/in-memory-data-service.service";

/*bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));*/

const routes:Routes=[
  {path:'', redirectTo:'/movies', pathMatch:'full'},//default route
  {path: 'movies', component: MovieListComponent},
  {path: 'movie/:id', loadComponent:()=>import('./app/movie-list-item/movie-list-item.component').then(m=>m.MovieListItemComponent)},
  {path: 'addMovie', loadComponent:()=>import('./app/form/form.component').then(m=>m.FormComponent) },
  {path: 'edit/:id', loadComponent:()=>import('./app/form/form.component').then(m=>m.FormComponent) },
  {path:'modify-movie', loadComponent:()=>import('./app/modify-movie/modify-movie.component').then(m=>m.ModifyMovieComponent)},
  {path:'**', loadComponent:()=>import('./app/page-not-found-component/page-not-found-component.component').then(m=>m.PageNotFoundComponentComponent)},
];
bootstrapApplication(AppComponent, {providers:[provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataServiceService,{delay:1000}))
  ]});
