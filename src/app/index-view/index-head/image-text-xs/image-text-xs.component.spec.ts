import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageTextXsComponent } from './image-text-xs.component';

describe('ImageTextXsComponent', () => {
  let component: ImageTextXsComponent;
  let fixture: ComponentFixture<ImageTextXsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageTextXsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageTextXsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
