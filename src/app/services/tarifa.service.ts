import { Injectable } from '@angular/core';
import { Tarifa } from '../model/tarifa'

@Injectable({
  providedIn: 'root'
})
export class TarifaService {
  tarifas: Tarifa[] = [];
  addTarifa: Tarifa = new Tarifa();

  constructor() {  
    //Moto  
    this.addTarifa.veiculo = "Motocicleta, motoneta e bicicleta a motor";
    this.addTarifa.classificacao = "2 - MOTOCICLETA/TRICILO";
    this.addTarifa.ufrm = 1;
    this.addTarifa.valor = "3.00";
    this.tarifas.push(this.addTarifa);

    //Carro  
    this.addTarifa = new Tarifa();
    this.addTarifa.veiculo = "Veículos de pequeno porte (passeio/automóvel)";
    this.addTarifa.classificacao = "1 - AUTOMOVEL\REBOQUE";
    this.addTarifa.ufrm = 8;
    this.addTarifa.valor = "27.50";
    this.tarifas.push(this.addTarifa);

    //utilitário  
    this.addTarifa = new Tarifa();
    this.addTarifa.veiculo = "Veículos utilitários (caminhonete e furgão)";
    this.addTarifa.classificacao = "3 - CAMINHONETE";
    this.addTarifa.ufrm = 12;
    this.addTarifa.valor = "41.50";
    this.tarifas.push(this.addTarifa);

    //van  
    this.addTarifa = new Tarifa();
    this.addTarifa.veiculo = "Veículos de excursão (van) e micro-ônibus";
    this.addTarifa.classificacao = "4 - MICROONIBUS";
    this.addTarifa.ufrm = 16;
    this.addTarifa.valor = "55.00";
    this.tarifas.push(this.addTarifa);

    //caminhão  
    this.addTarifa = new Tarifa();
    this.addTarifa.veiculo = "Caminhões";
    this.addTarifa.classificacao = "5 - CAMINHAO";
    this.addTarifa.ufrm = 24;
    this.addTarifa.valor = "83.00";
    this.tarifas.push(this.addTarifa);

    //Onibus  
    this.addTarifa = new Tarifa();
    this.addTarifa.veiculo = "Ônibus";
    this.addTarifa.classificacao = "6 - ONIBUS";
    this.addTarifa.ufrm = 40;
    this.addTarifa.valor = "138.00";
    this.tarifas.push(this.addTarifa);
  }

  getTarifas()
  {
    return this.tarifas;
  }

  getValor(classificacao: String)
  {
    const obj: Tarifa = this.tarifas.find(tarifa => tarifa.classificacao == classificacao);

    if(obj != null)
    {
      return obj.valor;
    }

    return "null";
  }
}
