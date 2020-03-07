import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHistoriaVidaVideoComponent } from './edit-historia-vida-video.component';

describe('EditHistoriaVidaVideoComponent', () => {
  let component: EditHistoriaVidaVideoComponent;
  let fixture: ComponentFixture<EditHistoriaVidaVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditHistoriaVidaVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHistoriaVidaVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
