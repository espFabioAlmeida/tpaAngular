import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

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

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.iniciaFormulario();
    this.valorTaxas = 0;
  }

  calculaValor()
  {
    //Calcula o valor da compra (multiplica por 100 para aplicar mascara
    this.valorTaxas = this.formularioValor.value.taxas * 27.50 * 100; 

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
    })
  }

}
