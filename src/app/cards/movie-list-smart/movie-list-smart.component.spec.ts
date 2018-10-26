import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListSmartComponent } from './movie-list-smart.component';

describe('MovieListSmartComponent', () => {
  let component: MovieListSmartComponent;
  let fixture: ComponentFixture<MovieListSmartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieListSmartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
