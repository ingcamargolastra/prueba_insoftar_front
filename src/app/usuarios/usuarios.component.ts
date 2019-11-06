import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { NgxSpinnerService } from "ngx-spinner";
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

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

  addOrEditUsuario(usuarioIndex){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
    dialogConfig.data = {usuarioIndex};
    this.dialog.open(CrearUsuarioComponent, dialogConfig);
  }

}
