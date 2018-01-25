import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgEnlargeComponent } from './img-enlarge.component';

describe('ImgEnlargeComponent', () => {
  let component: ImgEnlargeComponent;
  let fixture: ComponentFixture<ImgEnlargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgEnlargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgEnlargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
