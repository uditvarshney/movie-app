// import { Injectable } from '@angular/core';
// import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { Movie } from './movie';
// import { Observable, throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';


// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json'
//   })
// };
// @Injectable({
//   providedIn: 'root'
// })
// export class PostrequestService {

//   url = "/api/v1/movie/";
//   constructor(private httpClient: HttpClient) { }

//   addMovie(movie: Movie): Observable<Movie> {
//     return this.httpClient.post<Movie>(this.url, movie, httpOptions)
//       .pipe(catchError(this.errorHandler));
//   }
//   errorHandler(error: HttpErrorResponse) {
//     return throwError(new Error(error.message));
//   }
// }
