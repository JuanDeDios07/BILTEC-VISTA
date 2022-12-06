import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Boleta } from 'src/app/Modelo/Boleta';
import {ServiceService}from '../../Service/service.service'
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  boletas!: Boleta[];
 listarsboleta:any
  boleta:Boleta= new Boleta();
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.ListarBoleta()
    .subscribe(data=>{
      this.boletas=data;
    })
  }

Delete() {
  this.service.EliminarBoleta(this.boleta)
  .subscribe(data=>{
    this.boletas=this.boletas.filter(p=>p!==this.boleta);
    alert("BOLETA ELIMINADO CORECTAMENTE.......!!!");
  })
}

detalle():void{
  this.service.ListarBoleta()
  .subscribe(data=>{
    this.boletas=data;
  })
}
}
