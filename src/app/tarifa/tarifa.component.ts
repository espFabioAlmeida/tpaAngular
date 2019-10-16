import { Component, OnInit } from '@angular/core';
import { TarifaService } from '../services/tarifa.service';
import { Tarifa } from '../model/tarifa';

@Component({
  selector: 'app-tarifa',
  templateUrl: './tarifa.component.html',
  styleUrls: ['./tarifa.component.css']
})
export class TarifaComponent implements OnInit {

  tarifas: Tarifa[] = [];

  constructor(private tarifaService: TarifaService) { }

  ngOnInit() {
    this.getTarifas();
  }

  getTarifas()
  {
    this.tarifas = this.tarifaService.getTarifas();
  }

}
