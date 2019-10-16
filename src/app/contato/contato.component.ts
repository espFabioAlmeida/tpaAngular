import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MensagemService } from '../services/mensagem.service';
import { Mensagem } from '../model/mensagem';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
  formulario: FormGroup;
  mensagem: Mensagem = new Mensagem();

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder,
    private mensagemService: MensagemService) { }

  ngOnInit() {
    this.iniciaFormulario();
  }

  onSubmit()
  {
    if(this.formulario.valid)
    {
      this.mensagem.nome = this.formulario.value.nome;
      this.mensagem.email = this.formulario.value.email;
      this.mensagem.mensagem = this.formulario.value.mensagem;

      this.mensagemService.enviarMensagem(this.mensagem);

      this.reiniciarCampos();
    }
  }

  reiniciarCampos()
  {
    this.iniciaFormulario();
    this.mensagem = new Mensagem();
  }

  iniciaFormulario()
  {
    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)],],

      email: [null, [Validators.required,
        Validators.email,
        Validators.minLength(3),
        Validators.maxLength(50)],],

      mensagem: [null, [Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10000)],],
      })
  }

  verificaCampo(campo)
  {
    return !this.formulario.get(campo).valid && this.formulario.get(campo).touched;
  }

}
