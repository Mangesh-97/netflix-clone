import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { Imovie, Itrailer } from '../../model/movies';
import { first } from 'rxjs';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { TvshowService } from '../../services/tvshow.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movieId!: string
  movieDetails!: Imovie

  movieTrailers!: Array<Itrailer>;

  imagesArray!: any
  trailerUrl!: SafeResourceUrl

  constructor(
    private _route: ActivatedRoute,
    private _movieService: MoviesService,
    private _sanitizier: DomSanitizer,
    private _tvshowService: TvshowService
  ) { }

  ngOnInit(): void {


    this._route.params
      .pipe(first())
      .subscribe(
        res => {
          this.movieId = res['movieId']
          if (this.movieId) {

            this._route.queryParams
              .subscribe(res => {
                // console.log(res['content']);

                if (res['content'].includes('tvshow')) {
                  this._tvshowService.getTvDetails(this.movieId)
                    .subscribe(res => {
                      // console.log(res);
                      this.movieDetails = res
                    })
                  this._tvshowService.getTvShowPhotos(this.movieId)
                    .subscribe(res => {
                      this.imagesArray = res
                    })
                  this._tvshowService.getTvShowTrailer(this.movieId)
                    .subscribe(res => {
                      this.movieTrailers = res
                    })


                } else if (res['content'].includes('movies')) {

                  this._movieService.getMovieDetails(this.movieId)
                    .subscribe(
                      res => {
                        // console.log(res);
                        this.movieDetails = res
                      }
                    )
                  this._movieService.getMovieTrailer(this.movieId)
                    .subscribe(res => {
                      // console.log(res);
                      this.movieTrailers = res
                    })

                  this._movieService.getMoviePhotots(this.movieId)
                    .subscribe(res => {
                      // console.log(res, 'img');
                      this.imagesArray = res
                    })
                }
              })


          }

        }
      )
  }

  runTrailer(key: string) {
    console.log(key);
    let ytUrl = `http://youtube.com/embed/${key}`

    this.trailerUrl = this._sanitizier.bypassSecurityTrustResourceUrl(ytUrl)
  }

}
