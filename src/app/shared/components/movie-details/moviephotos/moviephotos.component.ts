import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-moviephotos',
  templateUrl: './moviephotos.component.html',
  styleUrls: ['./moviephotos.component.scss']
})
export class MoviephotosComponent implements OnInit {
  @Input() imagesArray !: any
  constructor() { }

  ngOnInit(): void {
  }

}
