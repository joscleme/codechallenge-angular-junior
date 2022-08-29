import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-detalles-usuario',
  templateUrl: './detalles-usuario.component.html',
  styleUrls: ['./detalles-usuario.component.css']
})
export class DetallesUsuarioComponent implements OnInit {

  usuario: any = {};

  constructor(private obtenerUsuarios: UsuariosService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    const params = this.activatedRoute.snapshot.params;

    this.obtenerUsuarios.obtenerUsuario(params['id']).subscribe((usuario_seleccionado) => {

      this.usuario = usuario_seleccionado;

    })

  }

}
