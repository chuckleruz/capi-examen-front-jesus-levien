import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { Usuarios } from '../usuarios'; 

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent implements OnInit {

  usuarios: Usuarios[] = [];
  constructor(public usuariosService: UsuariosService) { }

  ngOnInit(): void {

    this.usuariosService.getAll().subscribe((data: Usuarios[])=>{
      this.usuarios = data;
      console.log(this.usuarios);
    })
  }

}
