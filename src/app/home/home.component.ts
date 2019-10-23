import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Veiculo } from '../model/veiculo';
import { VeiculoService } from '../services/veiculo.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  formulario: FormGroup;
  veiculo: Veiculo = new Veiculo;

  constructor(private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder,
    private veiculoService: VeiculoService) { }

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

      this.veiculo.placa = this.formulario.value.placa;
      this.veiculo.placa = this.veiculo.placa.toUpperCase();
      this.veiculo.veiculoNacional = true;
      this.veiculoService.setVeiculoConsultado(this.veiculo);
      this.veiculo = new Veiculo();

      this.router.navigate(['/pagamento']); 
    }
  }

  onClickInternacional()
  {
    if(this.formulario.valid)
    {
      console.log("Veículo Internacional Recebido");
      console.log(this.formulario.value);

      this.veiculo.placa = this.formulario.value.placa;
      this.veiculo.veiculoNacional = false;
      this.veiculoService.setVeiculoConsultado(this.veiculo);
      this.veiculo = new Veiculo();

      this.router.navigate(['/pagamento']); 
    }
  }

}
