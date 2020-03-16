import { TestBed } from '@angular/core/testing';

import { HistoriaVidaTextoService } from './historia-vida-texto.service';

describe('HistoriaVidaTextoService', () => {
  let service: HistoriaVidaTextoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoriaVidaTextoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
