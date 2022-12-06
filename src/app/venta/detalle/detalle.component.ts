import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Venta } from 'src/app/Modelo/Venta';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  ventas!: Venta[];
  listarVenta:any
   venta:Venta= new Venta();
   constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.ListarVenta()
    .subscribe(data=>{
      this.ventas=data;
    });
  }
  }

  
  

