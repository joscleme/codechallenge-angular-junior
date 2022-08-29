import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesUsuarioComponent } from './detalles-usuario/detalles-usuario.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';

const routes: Routes = [
  {path: '', component: ListaUsuariosComponent},
  {path: 'lista-usuarios', component: ListaUsuariosComponent},
  {path: 'detalles-usuario/:id', component: DetallesUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
