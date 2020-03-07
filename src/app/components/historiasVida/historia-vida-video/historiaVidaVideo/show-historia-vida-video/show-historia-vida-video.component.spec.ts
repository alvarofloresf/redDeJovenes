import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowHistoriaVidaVideoComponent } from './show-historia-vida-video.component';

describe('ShowHistoriaVidaVideoComponent', () => {
  let component: ShowHistoriaVidaVideoComponent;
  let fixture: ComponentFixture<ShowHistoriaVidaVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowHistoriaVidaVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowHistoriaVidaVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
