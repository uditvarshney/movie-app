import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {Movie} from './movie';
import {catchError} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class MovieServiceService implements OnInit{
url="/api/v1/movie/";
  constructor(private httpClient:HttpClient) {
   }
   ngOnInit(){}

   getMovies():Observable<Movie[]>{
    return this.httpClient.get<Movie[]>(this.url).pipe(catchError(this.errorHandler));
   }
   
   errorHandler(error:HttpErrorResponse){
     return throwError(new Error(error.message));
   }


}
