import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MoviesService } from './shared/services/movies.service';
import { Imovie } from './shared/model/movies';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'netflix_0';

  constructor(
  ) { }


  ngOnInit(): void {


  }
}


// baseurl : "https://api.themoviedb.org/3",

// apiKey: '882bad7d19e7aa94fc7afac26c1fe5fa
// https://image.tmdb.org/t/p/original