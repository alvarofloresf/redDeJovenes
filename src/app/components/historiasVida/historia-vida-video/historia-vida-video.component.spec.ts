import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriaVidaVideoComponent } from './historia-vida-video.component';

describe('HistoriaVidaVideoComponent', () => {
  let component: HistoriaVidaVideoComponent;
  let fixture: ComponentFixture<HistoriaVidaVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriaVidaVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriaVidaVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
