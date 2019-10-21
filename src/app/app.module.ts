import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SobreComponent } from './sobre/sobre.component';
import { ComoFuncionaComponent } from './como-funciona/como-funciona.component';
import { TarifaComponent } from './tarifa/tarifa.component';
import { PontosPagamentoComponent } from './pontos-pagamento/pontos-pagamento.component';
import { ContatoComponent } from './contato/contato.component';
import { PagamentoComponent } from './pagamento/pagamento.component';
import { FormPagamentoComponent } from './form-pagamento/form-pagamento.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SobreComponent,
    ComoFuncionaComponent,
    TarifaComponent,
    PontosPagamentoComponent,
    ContatoComponent,
    PagamentoComponent,
    FormPagamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
