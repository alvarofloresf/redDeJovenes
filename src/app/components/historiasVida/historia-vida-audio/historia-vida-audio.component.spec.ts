import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriaVidaAudioComponent } from './historia-vida-audio.component';

describe('HistoriaVidaAudioComponent', () => {
  let component: HistoriaVidaAudioComponent;
  let fixture: ComponentFixture<HistoriaVidaAudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriaVidaAudioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriaVidaAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
