import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelImgtextComponent } from './travel-imgtext.component';

describe('TravelImgtextComponent', () => {
  let component: TravelImgtextComponent;
  let fixture: ComponentFixture<TravelImgtextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelImgtextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelImgtextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
