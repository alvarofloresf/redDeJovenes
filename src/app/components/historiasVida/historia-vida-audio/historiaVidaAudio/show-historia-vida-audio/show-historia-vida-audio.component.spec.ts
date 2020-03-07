import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowHistoriaVidaAudioComponent } from './show-historia-vida-audio.component';

describe('ShowHistoriaVidaAudioComponent', () => {
  let component: ShowHistoriaVidaAudioComponent;
  let fixture: ComponentFixture<ShowHistoriaVidaAudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowHistoriaVidaAudioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowHistoriaVidaAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
