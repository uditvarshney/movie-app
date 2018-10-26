import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieListSmartComponent } from './movie-list-smart/movie-list-smart.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class CardsModule { }
export const cardsComponents=[MovieListComponent, MovieListSmartComponent]