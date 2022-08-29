import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  urlUsuarios = "https://my-user-manager.herokuapp.com/users";

  constructor(private http: HttpClient) { }

  obtenerUsuarios():Observable<Usuario[]> {
    
    return this.http.get<Usuario[]>(this.urlUsuarios);
  
  }

  obtenerUsuario(id: string):Observable<Usuario> {

    return this.http.get<Usuario>(`https://my-user-manager.herokuapp.com/users/${id}`);    

  }

}
