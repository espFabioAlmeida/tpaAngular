import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Placa } from '../model/placa';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  placa: Placa = new Placa();
  formulario: FormGroup;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      placa: [null, [Validators.required,
        Validators.minLength(7),
        Validators.maxLength(12)],],
      })
  }

  onSubmit()  {
    if(this.formulario.valid)
    {
      console.log("recebido no Submit");
      console.log(this.formulario.value);
    }
  }

  verificaCampo(campo)
  {
    return !this.formulario.get(campo).valid && this.formulario.get(campo).touched;
  }

  onClickNacional()
  {
    if(this.formulario.valid)
    {
      console.log("Veículo Nacional Recebido");
      console.log(this.formulario.value);
    }
  }

  onClickInternacional()
  {
    if(this.formulario.valid)
    {
      console.log("Veículo Internacional Recebido");
      console.log(this.formulario.value);
    }
  }

}
