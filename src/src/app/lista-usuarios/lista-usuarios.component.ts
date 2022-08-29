import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  columnas: string[] = ['id', 'name', 'email', 'detalles'];

  usuarios: Usuario[] = [];

  constructor(private obtenerUsuarios: UsuariosService) { }

  ngOnInit(): void {

    this.obtenerUsuarios.obtenerUsuarios().subscribe((usuarios_resultado) => {

      this.usuarios = usuarios_resultado;

      console.log(this.usuarios);

    })

  }

}
