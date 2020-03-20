import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerMisionComponent } from './ver-mision.component';

describe('VerMisionComponent', () => {
  let component: VerMisionComponent;
  let fixture: ComponentFixture<VerMisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerMisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerMisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
