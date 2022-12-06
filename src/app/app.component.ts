import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Boleta';

  constructor(private router:Router){}

  Listar(){
    this.router.navigate(["listar"]);
  }


  Nuevo(){
    this.router.navigate(["add"]);
  }

  Detalle(){
    this.router.navigate(["edit"]);
  }

  Eliminar(){
    this.router.navigate(["elininar"]);

  }

  VentasDetalle(){
    this.router.navigate(["venta/detalle"]);
  }

  GenerarVenta01(){
    this.router.navigate(["venta/reg"]);
  }
}
