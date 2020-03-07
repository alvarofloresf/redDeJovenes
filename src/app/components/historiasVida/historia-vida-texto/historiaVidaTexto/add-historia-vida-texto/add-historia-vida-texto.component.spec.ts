import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHistoriaVidaTextoComponent } from './add-historia-vida-texto.component';

describe('AddHistoriaVidaTextoComponent', () => {
  let component: AddHistoriaVidaTextoComponent;
  let fixture: ComponentFixture<AddHistoriaVidaTextoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddHistoriaVidaTextoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHistoriaVidaTextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
