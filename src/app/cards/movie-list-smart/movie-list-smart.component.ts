import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from 'src/app/movie-service.service';


@Component({
  selector: 'app-movie-list-smart',
  templateUrl: './movie-list-smart.component.html',
  styleUrls: ['./movie-list-smart.component.css']
})
export class MovieListSmartComponent implements OnInit {
  movies=[];
  errormsg='';

  constructor(private movieService:MovieServiceService) { }

  ngOnInit() {
    this.movieService.getMovies().subscribe(
      (data)=> this.movies=data,
      (error)=> this.errormsg=error
    );
    console.log("data"+this.movies);
  }

}
