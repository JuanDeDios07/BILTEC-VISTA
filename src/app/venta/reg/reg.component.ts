import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Venta } from 'src/app/Modelo/Venta';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {

  ventas:Venta= new Venta();
  constructor(private  service:ServiceService, private router:Router ) { }


  ngOnInit(): void {
   
  }
  
  Generar(){
    this.service.RegistraVenta(this.ventas)
    .subscribe(data=>{
      alert("Se agrego con Exito..........!!!");
      this.router.navigate(["listar"]);
    })
  }
}
