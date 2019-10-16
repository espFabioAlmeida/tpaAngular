import { Component, OnInit } from '@angular/core';
import { PontoPagamento } from '../model/ponto-pagamento';
import { PontosPagamentoService } from '../services/pontos-pagamento.service';

@Component({
  selector: 'app-pontos-pagamento',
  templateUrl: './pontos-pagamento.component.html',
  styleUrls: ['./pontos-pagamento.component.css']
})
export class PontosPagamentoComponent implements OnInit {
  pontosPagamento: PontoPagamento[] = [];
  postosOficiais: Boolean;

  constructor(private pontoPagamentoService: PontosPagamentoService) { }

  ngOnInit() {
    this.postosOficiais = true;
    this.getPontosPagamento();
  }

  getPontosPagamento()
  {
    this.pontosPagamento = this.pontoPagamentoService.getPontosPagamento();
  }

  setPostosOficiais(valor: boolean)
  {
    this.postosOficiais = valor;
  }
}
