import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDashboardComponent } from './shared/components/movie-dashboard/movie-dashboard.component';
import { MovieDetailsComponent } from './shared/components/movie-details/movie-details.component';
import { PagenotfoundComponent } from './shared/components/pagenotfound/pagenotfound.component';
import { TvshowsComponent } from './shared/components/tvshows/tvshows.component';

const routes: Routes = [
  {
    path: '', component: MovieDashboardComponent
  },
  {
    path: 'details/:movieId', component: MovieDetailsComponent
  },
  {
    path: 'underprogress', component: PagenotfoundComponent
  },
  {
    path: 'tvshows', component: TvshowsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
