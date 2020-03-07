import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowHistoriaVidaTextoComponent } from './show-historia-vida-texto.component';

describe('ShowHistoriaVidaTextoComponent', () => {
  let component: ShowHistoriaVidaTextoComponent;
  let fixture: ComponentFixture<ShowHistoriaVidaTextoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowHistoriaVidaTextoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowHistoriaVidaTextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
