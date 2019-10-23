import { Injectable } from '@angular/core';
import { Veiculo } from '../model/veiculo';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {
  veiculoConsultado: Veiculo = new Veiculo;
  veiculos: Veiculo[] = [];
  veiculoCadastro: Veiculo = new Veiculo;

  constructor() {
    this.veiculoCadastro.classificacao = "1 - AUTOMOVEL\REBOQUE";
    this.veiculoCadastro.isento = false;
    this.veiculoCadastro.passagens = 0;
    this.veiculoCadastro.placa = "PWL2485"
    this.veiculoCadastro.veiculoNacional = true;
    this.veiculos.push(this.veiculoCadastro);
    this.veiculoCadastro = new Veiculo();

    this.veiculoCadastro.classificacao = "2 - MOTOCICLETA/TRICILO";
    this.veiculoCadastro.isento = false;
    this.veiculoCadastro.passagens = 2;
    this.veiculoCadastro.placa = "ABC1234"
    this.veiculoCadastro.veiculoNacional = true;
    this.veiculos.push(this.veiculoCadastro);
    this.veiculoCadastro = new Veiculo();

    this.veiculoCadastro.classificacao = "1 - AUTOMOVEL/REBOQUE";
    this.veiculoCadastro.isento = false;
    this.veiculoCadastro.passagens = 0;
    this.veiculoCadastro.placa = "MFV5886"
    this.veiculoCadastro.veiculoNacional = true;
    this.veiculos.push(this.veiculoCadastro);
    this.veiculoCadastro = new Veiculo();

    this.veiculoCadastro.classificacao = "3 - CAMINHONETE";
    this.veiculoCadastro.isento = false;
    this.veiculoCadastro.passagens = 1;
    this.veiculoCadastro.placa = "AAA1234"
    this.veiculoCadastro.veiculoNacional = true;
    this.veiculos.push(this.veiculoCadastro);
    this.veiculoCadastro = new Veiculo();
   }

  setVeiculoConsultado(veiculo: Veiculo)
  {
    const buscaCarro: Veiculo = this.veiculos.find(carro => carro.placa == veiculo.placa)
    
    if(buscaCarro != null)
    {
      this.veiculoConsultado = buscaCarro;
    }

  }

  getVeiculoConsultado()
  {
    return this.veiculoConsultado;
  }
}
