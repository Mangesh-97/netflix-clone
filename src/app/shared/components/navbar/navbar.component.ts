import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  loaderStatus!: boolean
  constructor(
    private _loaderService: LoaderService
  ) { }

  ngOnInit(): void {
    this._loaderService.loaderStatus$.subscribe(res => this.loaderStatus = res)
  }

}
