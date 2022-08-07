import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablaUsuariosComponent } from './tabla-usuarios/tabla-usuarios.component';
import { Usuarios } from './usuarios';

const routes: Routes = [

  {path: '/', redirectTo:'/usuarios/tabla-usuarios', pathMatch:'full'},
  { path: '/usuarios/tabla-usuarios', component:TablaUsuariosComponent, },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
