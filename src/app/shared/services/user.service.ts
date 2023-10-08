import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private _http: HttpClient
  ) { }

  getUser() {
    return this._http.get('http://api.ipify.org')
      .pipe(
        catchError(err => {
          return of(err.error.text)
        })
      )
  }

  sendUserD(obj: any) {
    return this._http.post(environment.db + 'user.json', obj)
  }
}
