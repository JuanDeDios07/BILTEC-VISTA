import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './Boleta/add/add.component';
import { EditComponent } from './Boleta/edit/edit.component';
import { ElininarComponent } from './Boleta/elininar/elininar.component';
import { ListarComponent } from './Boleta/listar/listar.component';
import { DetalleComponent } from './venta/detalle/detalle.component';
import { RegComponent } from './venta/reg/reg.component';
const routes: Routes = [
  {path:'listar', component:ListarComponent},
  {path:'add', component:AddComponent},
  {path:'edit', component:EditComponent},
  {path:'elininar', component:ElininarComponent},
  {path:'venta/detalle', component:DetalleComponent},
  {path:'venta/reg', component:RegComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
