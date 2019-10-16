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
    this.addTarifa.ufrm = 1;
    this.addTarifa.valor = "3,00";
    this.tarifas.push(this.addTarifa);

    //Carro  
    this.addTarifa = new Tarifa();
    this.addTarifa.veiculo = "Veículos de pequeno porte (passeio/automóvel)";
    this.addTarifa.ufrm = 8;
    this.addTarifa.valor = "27,50";
    this.tarifas.push(this.addTarifa);

    //utilitário  
    this.addTarifa = new Tarifa();
    this.addTarifa.veiculo = "Veículos utilitários (caminhonete e furgão)";
    this.addTarifa.ufrm = 12;
    this.addTarifa.valor = "41,50";
    this.tarifas.push(this.addTarifa);

    //van  
    this.addTarifa = new Tarifa();
    this.addTarifa.veiculo = "Veículos de excursão (van) e micro-ônibus";
    this.addTarifa.ufrm = 16;
    this.addTarifa.valor = "55,00";
    this.tarifas.push(this.addTarifa);

    //caminhão  
    this.addTarifa = new Tarifa();
    this.addTarifa.veiculo = "Caminhões";
    this.addTarifa.ufrm = 24;
    this.addTarifa.valor = "83,00";
    this.tarifas.push(this.addTarifa);

    //Onibus  
    this.addTarifa = new Tarifa();
    this.addTarifa.veiculo = "Ônibus";
    this.addTarifa.ufrm = 40;
    this.addTarifa.valor = "138,00";
    this.tarifas.push(this.addTarifa);
  }

  getTarifas()
  {
    return this.tarifas;
  }
}
