import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbedvideosComponent } from './embedvideos.component';

describe('EmbedvideosComponent', () => {
  let component: EmbedvideosComponent;
  let fixture: ComponentFixture<EmbedvideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmbedvideosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmbedvideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
