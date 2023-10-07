import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MoviesService } from '../../services/movies.service';
import { Imovie } from '../../model/movies';
import { TvshowService } from '../../services/tvshow.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.scss']
})
export class MainSliderComponent implements OnInit {
  MoviesArray: Array<any> = []
  constructor(
    private _moviesService: MoviesService,
    private _tvShowService: TvshowService,
    private _route: ActivatedRoute
  ) { }

  path!: string
  ngOnInit(): void {
    // console.log(this.MoviesArray);

    this._route.url
      .subscribe(res => {
        if (res.length > 0) {
          if (res[0].path.includes('tvshows')) {
            // console.log(res[0].path);
            this.path = res[0].path
            // console.log(res.length);
            this._tvShowService.getLetestTredShows()
              .subscribe(res => {
                // console.log(res);
                this.MoviesArray = res
              })
          }

        } else {
          // console.log(res.length);
          // console.log('treading movies');
          this.path = 'movies'
          this._moviesService.getAllLetTredingMovies()
            .subscribe(
              res => {
                this.MoviesArray = res
              }
            )
        }


      })





  }


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    autoplay: true,
    navSpeed: 700,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    navText: ['<i class="fa-solid fa-chevron-left fa-3x "></i>', '<i class="fa-solid fa-chevron-right fa-3x "></i>'],
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 1
      },
      1023: {
        items: 1,
      }
    },
    nav: true
  }

}
