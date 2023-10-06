import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Imovie } from '../../model/movies';

@Component({
  selector: 'app-sliders',
  templateUrl: './sliders.component.html',
  styleUrls: ['./sliders.component.scss']
})
export class SlidersComponent implements OnInit {
  topRatedMovies: Array<Imovie> = []
  popularMovies: Array<Imovie> = []
  upcomingMovies: Array<Imovie> = []
  nowPlayingMovies: Array<Imovie> = []
  constructor(
    private _moviesService: MoviesService

  ) { }

  ngOnInit(): void {
    // this._moviesService.getLetTredMovies()
    //   .subscribe(
    //     res => {
    //       console.log(res);

    //       this.MoviesArray = res

    //     }
    //   )

    this._moviesService.getTopRatedMovies()
      .subscribe(res => {
        // console.log(res);
        this.topRatedMovies = res
      })

    this._moviesService.getPopularMovies()
      .subscribe(res => {
        // console.log(res);
        this.popularMovies = res
      })

    this._moviesService.getUpcomingMovies()
      .subscribe(res => {
        // console.log(res);
        this.upcomingMovies = res
      })

    this._moviesService.getNowPlayingMovies()
      .subscribe(res => {
        // console.log(res, 'now');
        this.nowPlayingMovies = res
      })
  }

}
