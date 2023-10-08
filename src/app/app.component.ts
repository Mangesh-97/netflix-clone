import { Component, OnInit } from '@angular/core';
import { UserService } from './shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'netflix_0';

  constructor(
    private _userService: UserService
  ) { }


  ngOnInit(): void {
    this._userService.getUser()
      .subscribe(res => {
        // console.log(res)
        let obj = {
          time: new Date(),
          ip: res
        }
        this._userService.sendUserD(obj).subscribe()

      })
  }
}


// baseurl : "https://api.themoviedb.org/3",

// apiKey: '882bad7d19e7aa94fc7afac26c1fe5fa
// https://image.tmdb.org/t/p/original