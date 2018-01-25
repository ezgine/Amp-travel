import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexHeadComponent } from './index-head.component';

describe('IndexHeadComponent', () => {
  let component: IndexHeadComponent;
  let fixture: ComponentFixture<IndexHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
