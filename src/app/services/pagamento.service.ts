import { Injectable } from '@angular/core';
import { Pagamento } from '../model/pagamento';

@Injectable({
  providedIn: 'root'
})
export class PagamentoService {
  pagamentos: Pagamento[] = []
  constructor() { }

  enviarPagamento(pagamento: Pagamento)
  {
    this.pagamentos.push(pagamento);

    console.log(this.pagamentos);
  }
}
