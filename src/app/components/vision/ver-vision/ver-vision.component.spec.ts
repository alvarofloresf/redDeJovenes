import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerVisionComponent } from './ver-vision.component';

describe('VerVisionComponent', () => {
  let component: VerVisionComponent;
  let fixture: ComponentFixture<VerVisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerVisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerVisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
