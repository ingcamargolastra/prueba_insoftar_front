import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';

const routes: Routes = [
  {
    path: '', redirectTo:'usuarios', pathMatch:'full'
  },
  {
    path:'usuarios', children:[
      {
        path: '', component:UsuariosComponent
      },
      {
        path: 'create', component:CrearUsuarioComponent
      },
      {
        path: 'edit/:id', component:UsuariosComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
