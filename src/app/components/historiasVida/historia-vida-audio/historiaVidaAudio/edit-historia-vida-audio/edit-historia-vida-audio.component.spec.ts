import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHistoriaVidaAudioComponent } from './edit-historia-vida-audio.component';

describe('EditHistoriaVidaAudioComponent', () => {
  let component: EditHistoriaVidaAudioComponent;
  let fixture: ComponentFixture<EditHistoriaVidaAudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditHistoriaVidaAudioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHistoriaVidaAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
