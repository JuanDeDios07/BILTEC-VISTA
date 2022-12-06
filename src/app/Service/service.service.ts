import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Boleta } from '../Modelo/Boleta';
import { Venta } from '../Modelo/Venta';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  Url= 'http://localhost:8082/boleta/';
  Url02='http://localhost:8082/boleta/reg';
  Url1='http://localhost:8082/ventas/';
  Url03='http://localhost:8082/ventas/reg';

  ListarBoleta(){
    return this.http.get<Boleta[]>(this.Url+'lis');
  }

  RegistraBoleta(boleta:Boleta){
    return this.http.post<Boleta>(this.Url02,boleta);
  }

  EliminarBoleta(boleta:Boleta){
    return this.http.delete<Boleta>(this.Url+''+boleta.numBoleta);
  }

  ListarVenta(){
    return this.http.get<Venta[]>(this.Url1+'lis');
  }

  RegistraVenta(venta:Venta){
    return this.http.post<Venta>(this.Url03,venta);
  }
}
