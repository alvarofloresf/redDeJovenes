import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditObjetivoComponent } from './edit-objetivo.component';

describe('EditObjetivoComponent', () => {
  let component: EditObjetivoComponent;
  let fixture: ComponentFixture<EditObjetivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditObjetivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditObjetivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
