import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from 'src/app/movie-service.service';
import { Movie } from 'src/app/movie';

@Component({
  selector: 'app-movie-list-smart',
  templateUrl: './movie-list-smart.component.html',
  styleUrls: ['./movie-list-smart.component.css']
})
export class MovieListSmartComponent implements OnInit {
  movies = [];
  errormsg = '';

  constructor(private movieService: MovieServiceService) { }

  ngOnInit() {
    // var movie: Movie = new Movie("tt4535659"
    //   , "Hello"
    //   , "https://m.media-amazon.com/images/M/MV5BMjEyNzAyNjExN15BMl5BanBnXkFtZTgwNjM0MDczNzE@._V1_UY268_CR1,0,182,268_AL__QL50.jpg"
    //   , 5.3
    //   , 2015);
    // this.postRequest.addMovie(movie).subscribe();

    this.movieService.deleteMovie("tt4535659").subscribe();
    this.movieService.getMovies().subscribe(
      (data) => this.movies = data,
      (error) => this.errormsg = error
    );
    console.log("data" + this.movies);
  }

}
