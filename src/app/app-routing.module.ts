import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { ComoFuncionaComponent } from './como-funciona/como-funciona.component';
import { TarifaComponent } from './tarifa/tarifa.component';
import { PontosPagamentoComponent } from './pontos-pagamento/pontos-pagamento.component';
import { ContatoComponent } from './contato/contato.component';
import { PagamentoComponent } from './pagamento/pagamento.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'sobre', component: SobreComponent},
  { path: 'como-funciona', component: ComoFuncionaComponent},
  { path: 'tarifa', component: TarifaComponent},
  { path: 'pontos-pagamento', component: PontosPagamentoComponent},
  { path: 'contato', component: ContatoComponent},
  { path: 'pagamento', component: PagamentoComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
