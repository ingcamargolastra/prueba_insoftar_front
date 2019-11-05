import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component';

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