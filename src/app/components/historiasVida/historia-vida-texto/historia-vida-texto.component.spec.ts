import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriaVidaTextoComponent } from './historia-vida-texto.component';

describe('HistoriaVidaTextoComponent', () => {
  let component: HistoriaVidaTextoComponent;
  let fixture: ComponentFixture<HistoriaVidaTextoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriaVidaTextoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriaVidaTextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
