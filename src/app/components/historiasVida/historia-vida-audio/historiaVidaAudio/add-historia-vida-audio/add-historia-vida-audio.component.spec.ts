import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHistoriaVidaAudioComponent } from './add-historia-vida-audio.component';

describe('AddHistoriaVidaAudioComponent', () => {
  let component: AddHistoriaVidaAudioComponent;
  let fixture: ComponentFixture<AddHistoriaVidaAudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddHistoriaVidaAudioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHistoriaVidaAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
