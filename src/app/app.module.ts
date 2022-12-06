import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Boleta/listar/listar.component';
import { AddComponent } from './Boleta/add/add.component';
import { EditComponent } from './Boleta/edit/edit.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {ServiceService} from '../app/Service/service.service';
import { ElininarComponent } from './Boleta/elininar/elininar.component';
import { DetalleComponent } from './venta/detalle/detalle.component';
import { RegComponent } from './venta/reg/reg.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AddComponent,
    EditComponent,
    ElininarComponent,
    DetalleComponent,
    RegComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
