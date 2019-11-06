import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { NgxSpinnerService } from "ngx-spinner";
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { EliminarUsuarioComponent } from './eliminar-usuario/eliminar-usuario.component';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  searchText;
  
  constructor(private usuarioService:UsuarioService, private dialog:MatDialog, private spinner:NgxSpinnerService) {
    this.spinner.show()
    this.usuarioService.getUsuarios().subscribe(
      data => {
        this.usuarioService.usuarios = data['data'];
      },
      err => console.log(),
      ()=>this.spinner.hide()      
    );
  }

  ngOnInit() {
  }

  addOrEditUsuario(usuarioIndex, usuario){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
    dialogConfig.data = {usuarioIndex, usuario};
    this.dialog.open(CrearUsuarioComponent, dialogConfig);
  }

  onDeleteUsuario(usuarioIndex, usuario){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
    dialogConfig.data = {usuarioIndex, usuario};
    this.dialog.open(EliminarUsuarioComponent, dialogConfig);
  }
}
