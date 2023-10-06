import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieDashboardComponent } from './shared/components/movie-dashboard/movie-dashboard.component';
import { MainSliderComponent } from './shared/components/main-slider/main-slider.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { MovieDetailsComponent } from './shared/components/movie-details/movie-details.component';
import { MaterialModule } from './shared/material/material.module';
import { OverviewComponent } from './shared/components/movie-details/overview/overview.component';
import { EmbedvideosComponent } from './shared/components/movie-details/embedvideos/embedvideos.component';
import { MoviephotosComponent } from './shared/components/movie-details/moviephotos/moviephotos.component';
import { SlidersComponent } from './shared/components/sliders/sliders.component';
import { SliderComponent } from './shared/components/sliders/slider/slider.component';
import { PagenotfoundComponent } from './shared/components/pagenotfound/pagenotfound.component';
import { TvshowsComponent } from './shared/components/tvshows/tvshows.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieDashboardComponent,
    MainSliderComponent,
    NavbarComponent,
    MovieDetailsComponent,
    OverviewComponent,
    EmbedvideosComponent,
    MoviephotosComponent,
    SlidersComponent,
    SliderComponent,
    PagenotfoundComponent,
    TvshowsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
