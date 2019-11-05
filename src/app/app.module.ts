import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

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
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule
  ],
  entryComponents:[CrearUsuarioComponent],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
