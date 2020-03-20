import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerObjetivoComponent } from './ver-objetivo.component';

describe('VerObjetivoComponent', () => {
  let component: VerObjetivoComponent;
  let fixture: ComponentFixture<VerObjetivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerObjetivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerObjetivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
