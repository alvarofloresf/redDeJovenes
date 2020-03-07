import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHistoriaVidaTextoComponent } from './edit-historia-vida-texto.component';

describe('EditHistoriaVidaTextoComponent', () => {
  let component: EditHistoriaVidaTextoComponent;
  let fixture: ComponentFixture<EditHistoriaVidaTextoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditHistoriaVidaTextoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHistoriaVidaTextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
