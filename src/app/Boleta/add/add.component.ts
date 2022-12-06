import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Boleta } from 'src/app/Modelo/Boleta';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {

  boleta:Boleta= new Boleta();
  constructor(private  service:ServiceService, private router:Router ) { }

  ngOnInit(){
    
  }
  
  Guardar(){
    this.service.RegistraBoleta(this.boleta)
    .subscribe(data=>{
      alert("Se agrego con Exito..........!!!");
      this.router.navigate(["listar"]);
    })
  }

}
