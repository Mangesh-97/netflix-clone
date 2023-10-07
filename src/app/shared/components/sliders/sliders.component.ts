import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Imovie } from '../../model/movies';
import { ActivatedRoute, Route } from '@angular/router';
import { TvshowService } from '../../services/tvshow.service';

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

  path!: string
  constructor(
    private _moviesService: MoviesService,
    private _tvshowService: TvshowService,
    private _route: ActivatedRoute
  ) { }


  ngOnInit(): void {

    this._route.url
      .subscribe(res => {
        // console.log(res, 'in slider');
        if (res.length > 0) {
          if (res[0].path.includes('tvshow')) {
            this.path = 'tvshow'
            this._tvshowService.getTodayAiringShows()
              .subscribe(res => {
                // console.log('airing', res);
                this.nowPlayingMovies = res
              })

            this._tvshowService.getTOnTheAirShows()
              .subscribe(res => {
                // console.log('airing', res);
                this.upcomingMovies = res
              })
            this._tvshowService.getPopularShows()
              .subscribe(res => {
                this.popularMovies = res
              })

            this._tvshowService.getTopRatedShows()
              .subscribe(res => {
                this.topRatedMovies = res
              })
          }
        } else {
          this.path = 'movies'
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
      })


  }

}
