import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Boleta } from 'src/app/Modelo/Boleta';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-elininar',
  templateUrl: './elininar.component.html',
  styleUrls: ['./elininar.component.css']
})
export class ElininarComponent implements OnInit {

  boletas!: Boleta[];
 listarsboleta:any
  boleta:Boleta= new Boleta();
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
  }

  Delete() {
    this.service.EliminarBoleta(this.boleta)
    .subscribe(data=>{
      this.boletas=this.boletas.filter(p=>p!==this.boleta);
      alert("BOLETA ELIMINADO CORECTAMENTE.......!!!");
    })
  }
}
