import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { TablaUsuariosComponent } from './tabla-usuarios/tabla-usuarios.component';


@NgModule({
  declarations: [TablaUsuariosComponent],
  imports: [
    CommonModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
