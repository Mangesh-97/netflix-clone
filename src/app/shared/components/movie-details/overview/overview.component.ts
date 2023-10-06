import { Component, Input, OnInit } from '@angular/core';
import { Imovie } from 'src/app/shared/model/movies';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  @Input()
  movie!: Imovie
  constructor() { }

  ngOnInit(): void {
  }

}
