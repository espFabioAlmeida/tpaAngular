import { TestBed } from '@angular/core/testing';

import { PontosPagamentoService } from './pontos-pagamento.service';

describe('PontosPagamentoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PontosPagamentoService = TestBed.get(PontosPagamentoService);
    expect(service).toBeTruthy();
  });
});
