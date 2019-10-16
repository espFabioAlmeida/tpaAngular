import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PontosPagamentoComponent } from './pontos-pagamento.component';

describe('PontosPagamentoComponent', () => {
  let component: PontosPagamentoComponent;
  let fixture: ComponentFixture<PontosPagamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PontosPagamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PontosPagamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
