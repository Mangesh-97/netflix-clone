import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Imovie, ImovieDeatails, Itrailer, ItrailerRes } from '../model/movies';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TvshowService {


  baseUrl: string = environment.baseurl
  apiKey: string = environment.apiKey

  constructor(
    private _http: HttpClient
  ) { }


  getLetestTredShows(): Observable<Imovie[]> {

    let queryparms = new HttpParams()
    queryparms.append('api_key', this.apiKey)

    let trendingMovies = `${this.baseUrl}/trending/tv/week?api_key=${this.apiKey}`
    // let trendingMovies = `${this.baseUrl}/trending/all/week`
    return this._http.get<ImovieDeatails>(trendingMovies,)
      .pipe(
        map(
          res => res.results
        )
      )
  }


  getTodayAiringShows(): Observable<Imovie[]> {
    let trendingMovies = `${this.baseUrl}/tv/airing_today?api_key=${this.apiKey}`
    return this._http.get<ImovieDeatails>(trendingMovies,)
      .pipe(
        map(
          res => res.results.reverse()
        )
      )
  }

  getTOnTheAirShows(): Observable<Imovie[]> {
    let trendingMovies = `${this.baseUrl}/tv/on_the_air?api_key=${this.apiKey}`
    return this._http.get<ImovieDeatails>(trendingMovies,)
      .pipe(
        map(
          res => res.results.reverse()
        )
      )
  }


  getPopularShows(): Observable<Imovie[]> {
    let trendingMovies = `${this.baseUrl}/tv/popular?api_key=${this.apiKey}`
    return this._http.get<ImovieDeatails>(trendingMovies,)
      .pipe(
        map(
          res => res.results.reverse()
        )
      )
  }


  getTopRatedShows(): Observable<Imovie[]> {
    let trendingMovies = `${this.baseUrl}/tv/top_rated?api_key=${this.apiKey}`
    return this._http.get<ImovieDeatails>(trendingMovies,)
      .pipe(
        map(
          res => res.results
        )
      )
  }

  getTvDetails(id: string): Observable<Imovie> {
    let detailUrl = `${this.baseUrl}/tv/${id}?api_key=${this.apiKey}`
    return this._http.get<Imovie>(detailUrl)
  }

  getTvShowPhotos(id: string): Observable<any> {
    let detailUrl = `${this.baseUrl}/tv/${id}/images?api_key=${this.apiKey}`
    return this._http.get<any>(detailUrl)
      .pipe(
        map(res => res.backdrops.reverse())
      )
  }

  getTvShowTrailer(id: string): Observable<Itrailer[]> {
    let detailUrl = `${this.baseUrl}/tv/${id}/videos?api_key=${this.apiKey}`
    return this._http.get<ItrailerRes>(detailUrl)
      .pipe(
        map(res => res.results)
      )
  }
}
