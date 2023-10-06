import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-embedvideos',
  templateUrl: './embedvideos.component.html',
  styleUrls: ['./embedvideos.component.scss']
})
export class EmbedvideosComponent implements OnInit {


  trailerUrl!: SafeResourceUrl

  @Input()
  key!: string

  @Input()
  site!: string
  constructor(
    private _sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    if (this.key) {
      const url = `http://youtube.com/embed/${this.key}`
      this.trailerUrl = this._sanitizer.bypassSecurityTrustResourceUrl(url)
    }
  }

}
