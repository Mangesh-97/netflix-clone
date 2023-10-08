import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Imovie } from 'src/app/shared/model/movies';
import { MoviesService } from 'src/app/shared/services/movies.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input() topRatedMovies: Array<Imovie> = []
  @Input() popularMovies: Array<Imovie> = []
  @Input() upcomingMovies: Array<Imovie> = []
  @Input() nowPlayingMovies: Array<Imovie> = []
  @Input() path!: string

  constructor(
    private _moviesService: MoviesService

  ) { }

  ngOnInit(): void {

  }



  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    autoplay: false,
    navSpeed: 700,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    navText: ['<i class="fa-solid fa-chevron-left fa-3x "></i>', '<i class="fa-solid fa-chevron-right fa-3x"></i>'],
    responsive: {
      0: {
        items: 4
      },
      767: {
        items: 8
      },
      1024: {
        items: 8
      }

    },
    nav: true
  }
}