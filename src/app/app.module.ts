import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AllMovieComponent } from './all-movie/all-movie.component';
import { RouterModule } from '@angular/router';
import { MovieListComponent } from './cards/movie-list/movie-list.component';
import { MovieListSmartComponent } from './cards/movie-list-smart/movie-list-smart.component';
import { MovieServiceService } from './movie-service.service';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatCardModule, MatButtonModule } from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    AllMovieComponent,
    MovieListComponent,
    MovieListSmartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [MovieServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
