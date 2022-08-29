import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { DetallesUsuarioComponent } from './detalles-usuario/detalles-usuario.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component'; 

@NgModule({
  declarations: [
    AppComponent,
    DetallesUsuarioComponent,
    ListaUsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
