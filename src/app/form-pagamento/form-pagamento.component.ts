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
  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.iniciaFormulario();
  }


  iniciaFormulario()
  {
    this.formularioValor = this.formBuilder.group({
      taxas: [null, [Validators.required]],

      valor: [null, [Validators.required]],

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

      mesVencimento: [null, [Validators.required],],

      anoVencimento: [null, [Validators.required],],
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
