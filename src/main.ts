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
  {path: 'movie/:id', component: MovieListItemComponent},
  {path: 'addMovie', component: FormComponent},
  {path: 'edit/:id', component: FormComponent},
  {path:'modify-movie', component:ModifyMovieComponent},
  {path:'**', component:PageNotFoundComponentComponent},
];
bootstrapApplication(AppComponent, {providers:[provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataServiceService,{delay:1000}))
  ]});
