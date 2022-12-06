import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Boleta } from 'src/app/Modelo/Boleta';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

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
  detalle():void{
    this.service.ListarBoleta()
    .subscribe(data=>{
      this.boletas=data;
    })
  }

}
