import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AppRoutingModule } from './app-routing.module';
import { UsuarioService } from './services/usuario.service';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    CrearUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
