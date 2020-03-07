import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHistoriaVidaVideoComponent } from './add-historia-vida-video.component';

describe('AddHistoriaVidaVideoComponent', () => {
  let component: AddHistoriaVidaVideoComponent;
  let fixture: ComponentFixture<AddHistoriaVidaVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddHistoriaVidaVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHistoriaVidaVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
