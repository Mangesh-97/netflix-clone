import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, finalize } from 'rxjs';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root'
})
export class IntercepterService implements HttpInterceptor {

  constructor(
    private _loaderService: LoaderService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this._loaderService.loaderStatus$.next(true)
    const token = 'Beare'

    const authRequest = req.clone({
      setHeaders: {
        Authorization: token
      }
    })

    return next.handle(authRequest)
      .pipe(
        finalize(() => this._loaderService.loaderStatus$.next(false))
      )
  }
}
