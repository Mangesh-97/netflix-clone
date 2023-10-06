import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviephotosComponent } from './moviephotos.component';

describe('MoviephotosComponent', () => {
  let component: MoviephotosComponent;
  let fixture: ComponentFixture<MoviephotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviephotosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviephotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
