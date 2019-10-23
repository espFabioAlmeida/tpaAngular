import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CepService } from '../services/cep.service';
import { Cep } from '../model/cep';
import { Veiculo } from '../model/veiculo';
import { VeiculoService } from '../services/veiculo.service';
import { TarifaService } from '../services/tarifa.service';

@Component({
  selector: 'app-form-pagamento',
  templateUrl: './form-pagamento.component.html',
  styleUrls: ['./form-pagamento.component.css']
})
export class FormPagamentoComponent implements OnInit {
  formularioValor: FormGroup;
  formularioCredito: FormGroup;
  formularioBoleto: FormGroup;

  valorTaxas: any;
  valorTaxasTexto: String;

  endereco: Cep;

  veiculo: Veiculo = new Veiculo();

  tarifa: any;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder,
    private cepService: CepService, private veiculoService: VeiculoService,
    private tarifaService: TarifaService) { }

  ngOnInit() {
    this.iniciaFormulario();
    this.valorTaxas = 0;
    this.endereco = new Cep();
    this.veiculo = this.veiculoService.getVeiculoConsultado();
    const valor: any = this.tarifaService.getValor(this.veiculo.classificacao);

    this.tarifa = parseFloat(valor);
    //console.log("Tarifa lida " + this.tarifa);
  }

  submitBoleto()
  {
    if(this.formularioBoleto.valid)
    {
      console.log(this.formularioBoleto.value);
    }
  }

  submitCredito()
  {
    if(this.formularioCredito.valid)
    {
      console.log(this.formularioCredito.value);
    }
  }

  calculaValor()
  {
    //Calcula o valor da compra (multiplica por 100 para aplicar mascara
    this.valorTaxas = this.formularioValor.value.taxas * this.tarifa * 100; 

    //Aplicação de máscara
    if(!(this.valorTaxas % 10) && !(this.valorTaxas % 100)) //Valor cheio
    {
      this.valorTaxasTexto = "" + this.valorTaxas / 100 + ".00";
      this.valorTaxas /= 100;
      return;
    }

    if(!(this.valorTaxas % 10)) //Valor multiplo de .1 (27.5, 12.8)
    {
      this.valorTaxasTexto = "" + this.valorTaxas / 100 + "0";
      this.valorTaxas /= 100;
      return;
    }
    
    //Valor já possui 2 casas decimais
    this.valorTaxasTexto = "" + this.valorTaxas / 100;
    this.valorTaxas /= 100;
  }

  iniciaFormulario()
  {
    this.formularioValor = this.formBuilder.group({
      taxas: [null, [Validators.required]],

      formaPagamento: ["SELECIONE", [Validators.required]],
    });

    this.formularioCredito = this.formBuilder.group({
      cartao: [null, [Validators.required,
        Validators.minLength(16),
        Validators.maxLength(16)],],

      codigo: [null, [Validators.required,
        Validators.minLength(3),
        Validators.maxLength(3)],],

      titular: [null, [Validators.required,
        Validators.minLength(5),
        Validators.maxLength(40)],],

      mesVencimento: ["01", [Validators.required,],],

      anoVencimento: ["2023", [Validators.required],],
    })

    this.formularioBoleto = this.formBuilder.group({
      nome: [null, [Validators.required,
        Validators.minLength(5),
        Validators.maxLength(40)],],

      cpfCnpf: [null, [Validators.required,
        Validators.minLength(11),
        Validators.maxLength(14)],],

      email: [null, [Validators.required,
        Validators.email,
        Validators.minLength(5),
        Validators.maxLength(40)],],

      telefone: [null, [Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20)],],
      
      cep: [null, [Validators.required,
        Validators.minLength(8),
        Validators.maxLength(8)],],  
        
      logradouro: [null, [Validators.required,],], 
      localidade: [null, [Validators.required,],], 
      bairro: [null, [Validators.required,],], 
      uf: [null, [Validators.required,],], 
    })
  }

  verificaCep()
  {
    this.endereco = new Cep();
    if(this.formularioBoleto.value.cep != null) //Verifica se tem algo escrito
    {
      this.formularioBoleto.value.cep = this.formularioBoleto.value.cep.replace(/\D/g, ''); //Remove qualquer caracter que não seja dígito
      if(this.formularioBoleto.value.cep.length == 8) //Verifica se tem 8 letras
      {
        this.cepService.consultaCep(this.formularioBoleto.value.cep).subscribe(dados => {
          this.endereco = dados;
 
          this.formularioBoleto.value.logradouro = this.endereco.logradouro;        
          this.formularioBoleto.value.localidade = this.endereco.localidade;
          this.formularioBoleto.value.bairro = this.endereco.bairro;
          this.formularioBoleto.value.uf = this.endereco.uf;

          this.formularioBoleto.get('logradouro').setValue(this.endereco.logradouro);
          this.formularioBoleto.get('localidade').setValue(this.endereco.localidade);
          this.formularioBoleto.get('bairro').setValue(this.endereco.bairro);
          this.formularioBoleto.get('uf').setValue(this.endereco.uf);
        }); 
        return;
      }
      else this.apagaCamposCep()
    }
    else this.apagaCamposCep();
  }

  apagaCamposCep()
  {
    this.formularioBoleto.value.logradouro = null;        
    this.formularioBoleto.value.localidade = null;
    this.formularioBoleto.value.bairro = null;
    this.formularioBoleto.value.uf = null;

    this.formularioBoleto.get('logradouro').setValue(null);
    this.formularioBoleto.get('localidade').setValue(null);
    this.formularioBoleto.get('bairro').setValue(null);
    this.formularioBoleto.get('uf').setValue(null);
  }

}
