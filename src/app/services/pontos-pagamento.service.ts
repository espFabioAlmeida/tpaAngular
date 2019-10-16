import { Injectable } from '@angular/core';
import { PontoPagamento } from '../model/ponto-pagamento';

@Injectable({
  providedIn: 'root'
})
export class PontosPagamentoService {

  pontosPagamentos: PontoPagamento[] = [];
  addPontosPagamentos: PontoPagamento = new PontoPagamento();

  constructor() { 
    //Central
    this.addPontosPagamentos.nome = "Escritório Central da TPA";
    this.addPontosPagamentos.endereco = "Av.Falcão, nº1501 - Bombas";
    this.addPontosPagamentos.postoOficial = true;
    this.addPontosPagamentos.cartao = true;
    this.addPontosPagamentos.dinheiro = false;
    this.addPontosPagamentos.toten = false;
    this.pontosPagamentos.push(this.addPontosPagamentos);

    //Portal
    this.addPontosPagamentos = new PontoPagamento();
    this.addPontosPagamentos.nome = "Portal de Entrada";
    this.addPontosPagamentos.endereco = "Divisa Bombinhas/Porto Belo";
    this.addPontosPagamentos.postoOficial = true;
    this.addPontosPagamentos.cartao = true;
    this.addPontosPagamentos.dinheiro = true;
    this.addPontosPagamentos.toten = true;
    this.pontosPagamentos.push(this.addPontosPagamentos);

    //Portal
    this.addPontosPagamentos = new PontoPagamento();
    this.addPontosPagamentos.nome = "Zimbros";
    this.addPontosPagamentos.endereco = "Av. Ver. João da Luz, 900";
    this.addPontosPagamentos.postoOficial = true;
    this.addPontosPagamentos.cartao = true;
    this.addPontosPagamentos.dinheiro = true;
    this.addPontosPagamentos.toten = false;
    this.pontosPagamentos.push(this.addPontosPagamentos);

    //Setur-Bombas
    this.addPontosPagamentos = new PontoPagamento();
    this.addPontosPagamentos.nome = "Setur-Bombas";
    this.addPontosPagamentos.endereco = "Av. Leopoldo Zarling, 2072";
    this.addPontosPagamentos.postoOficial = true;
    this.addPontosPagamentos.cartao = true;
    this.addPontosPagamentos.dinheiro = false;
    this.addPontosPagamentos.toten = false;
    this.pontosPagamentos.push(this.addPontosPagamentos);

    //Shopping
    this.addPontosPagamentos = new PontoPagamento();
    this.addPontosPagamentos.nome = "Shopping Tropical-Centro";
    this.addPontosPagamentos.endereco = "Av. Ver. Manoel dos Santos, 610";
    this.addPontosPagamentos.postoOficial = true;
    this.addPontosPagamentos.cartao = true;
    this.addPontosPagamentos.dinheiro = false;
    this.addPontosPagamentos.toten = false;
    this.pontosPagamentos.push(this.addPontosPagamentos);

    //Punta Blu
    this.addPontosPagamentos = new PontoPagamento();
    this.addPontosPagamentos.nome = "Totem Punta Blu";
    this.addPontosPagamentos.endereco = "Av. Ver. Manoel dos Santos, 1144-Centro";
    this.addPontosPagamentos.postoOficial = true;
    this.addPontosPagamentos.cartao = false;
    this.addPontosPagamentos.dinheiro = false;
    this.addPontosPagamentos.toten = true;
    this.pontosPagamentos.push(this.addPontosPagamentos);

    //Girassol
    this.addPontosPagamentos = new PontoPagamento();
    this.addPontosPagamentos.nome = "Totem M.Girassol";
    this.addPontosPagamentos.endereco = "Av. Girassol, 1329-Morrinhos";
    this.addPontosPagamentos.postoOficial = true;
    this.addPontosPagamentos.cartao = false;
    this.addPontosPagamentos.dinheiro = false;
    this.addPontosPagamentos.toten = true;
    this.pontosPagamentos.push(this.addPontosPagamentos);

    //Schimit
    this.addPontosPagamentos = new PontoPagamento();
    this.addPontosPagamentos.nome = "Totem M.Schmit";
    this.addPontosPagamentos.endereco = "Av. Leopoldo Zarling, 1473";
    this.addPontosPagamentos.postoOficial = true;
    this.addPontosPagamentos.cartao = false;
    this.addPontosPagamentos.dinheiro = false;
    this.addPontosPagamentos.toten = true;
    this.pontosPagamentos.push(this.addPontosPagamentos);


    //COMÉRCIOS


    //Farmácia Capitão Saúde
    this.addPontosPagamentos = new PontoPagamento();
    this.addPontosPagamentos.nome = "Farmácia Capitão Saúde";
    this.addPontosPagamentos.endereco = "Av.Falcão, 780";
    this.addPontosPagamentos.postoOficial = false;
    this.addPontosPagamentos.cartao = true;
    this.addPontosPagamentos.dinheiro = true;
    this.addPontosPagamentos.toten = false;
    this.pontosPagamentos.push(this.addPontosPagamentos);

    //Farmácia ilha do arvoredo
    this.addPontosPagamentos = new PontoPagamento();
    this.addPontosPagamentos.nome = "Farmácia Ilha do Arvoredo";
    this.addPontosPagamentos.endereco = "Av.Araçá, 1614";
    this.addPontosPagamentos.postoOficial = false;
    this.addPontosPagamentos.cartao = true;
    this.addPontosPagamentos.dinheiro = true;
    this.addPontosPagamentos.toten = false;
    this.pontosPagamentos.push(this.addPontosPagamentos);

    //Restaurante Baleia Jubarte
    this.addPontosPagamentos = new PontoPagamento();
    this.addPontosPagamentos.nome = "Restaurante Baleia Jubarte";
    this.addPontosPagamentos.endereco = "Rua Baleia Jubarte, 242";
    this.addPontosPagamentos.postoOficial = false;
    this.addPontosPagamentos.cartao = true;
    this.addPontosPagamentos.dinheiro = true;
    this.addPontosPagamentos.toten = false;
    this.pontosPagamentos.push(this.addPontosPagamentos);

    //Restaurante Rancho do Pescador
    this.addPontosPagamentos = new PontoPagamento();
    this.addPontosPagamentos.nome = "Restaurante Rancho do Pescador";
    this.addPontosPagamentos.endereco = "Av Água Marinha, 1222";
    this.addPontosPagamentos.postoOficial = false;
    this.addPontosPagamentos.cartao = true;
    this.addPontosPagamentos.dinheiro = true;
    this.addPontosPagamentos.toten = false;
    this.pontosPagamentos.push(this.addPontosPagamentos);
  }

  getPontosPagamento()
  {
    return this.pontosPagamentos;
  }
}
