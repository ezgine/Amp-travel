import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelResultsComponent } from './travel-results.component';

describe('TravelResultsComponent', () => {
  let component: TravelResultsComponent;
  let fixture: ComponentFixture<TravelResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
