import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Imovie, ImovieDeatails, Itrailer, ItrailerRes } from '../model/movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  baseUrl: string = environment.baseurl
  apiKey: string = environment.apiKey


  constructor(
    private _http: HttpClient
  ) { }


  // getAllLetTreding(): Observable<Imovie[]> {

  //   let queryparms = new HttpParams()

  //   queryparms.append('api_key', this.apiKey)

  //   let trendingMovies = `${this.baseUrl}/trending/all/week?api_key=${this.apiKey}`
  //   // let trendingMovies = `${this.baseUrl}/trending/all/week`
  //   return this._http.get<ImovieDeatails>(trendingMovies,)
  //     .pipe(
  //       map(
  //         res => res.results
  //       )
  //     )
  // }


  getAllLetTredingMovies(): Observable<any> {

    let queryparms = new HttpParams()
    queryparms.append('api_key', this.apiKey)

    let trendingMovies = `${this.baseUrl}/trending/movie/week?api_key=${this.apiKey}`
    // let trendingMovies = `${this.baseUrl}/trending/all/week`
    return this._http.get<any>(trendingMovies)
      .pipe(
        map(
          res => res.results
        )
      )
  }

  getMovieDetails(id: string): Observable<Imovie> {
    let detailUrl = `${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`
    return this._http.get<Imovie>(detailUrl)
  }

  getMovieTrailer(id: string): Observable<Itrailer[]> {
    let detailUrl = `${this.baseUrl}/movie/${id}/videos?api_key=${this.apiKey}`
    return this._http.get<ItrailerRes>(detailUrl)
      .pipe(
        map(res => res.results)
      )
  }

  getTopRatedMovies(): Observable<Imovie[]> {
    let topRatedMoviesUrl = `${this.baseUrl}/movie/top_rated?api_key=${this.apiKey}`
    return this._http.get<ImovieDeatails>(topRatedMoviesUrl)
      .pipe(
        map(res => res.results.reverse())
      )
  }

  getPopularMovies(): Observable<Imovie[]> {
    let topRatedMoviesUrl = `${this.baseUrl}/movie/popular?api_key=${this.apiKey}`
    return this._http.get<ImovieDeatails>(topRatedMoviesUrl)
      .pipe(
        map(res => res.results.reverse())
      )
  }

  getUpcomingMovies(): Observable<Imovie[]> {
    let topRatedMoviesUrl = `${this.baseUrl}/movie/upcoming?api_key=${this.apiKey}`
    return this._http.get<ImovieDeatails>(topRatedMoviesUrl)
      .pipe(
        map(res => res.results.reverse())
      )
  }
  getMoviePhotots(id: string): Observable<any> {
    let detailUrl = `${this.baseUrl}/movie/${id}/images?api_key=${this.apiKey}`
    return this._http.get<any>(detailUrl)
      .pipe(
        map(res => res.backdrops.reverse())
      )
  }
  // now_playing

  getNowPlayingMovies(): Observable<Imovie[]> {
    let topRatedMoviesUrl = `${this.baseUrl}/movie/now_playing?api_key=${this.apiKey}`
    return this._http.get<ImovieDeatails>(topRatedMoviesUrl)
      .pipe(
        map(res => res.results.reverse())
      )
  }
}
