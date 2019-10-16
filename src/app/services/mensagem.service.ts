import { Injectable } from '@angular/core';
import { Mensagem } from '../model/mensagem';

@Injectable({
  providedIn: 'root'
})
export class MensagemService {

  mensagem: Mensagem = new Mensagem();

  constructor() { }

  enviarMensagem(novaMensagem: Mensagem)
  {
    this.mensagem = novaMensagem;

    console.log("Enviando Mensagem ... ")
    console.log("Nome:")
    console.log(this.mensagem.nome);
    console.log("E-mail:")
    console.log(this.mensagem.email);
    console.log("Mensagem:")
    console.log(this.mensagem.mensagem);

    this.mensagem = new Mensagem;
  }
}
