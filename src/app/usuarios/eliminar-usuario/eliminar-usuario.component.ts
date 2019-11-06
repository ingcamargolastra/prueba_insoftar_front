import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { UsuarioService } from 'src/app/services/usuario.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-eliminar-usuario',
  templateUrl: './eliminar-usuario.component.html',
  styleUrls: ['./eliminar-usuario.component.css']
})
export class EliminarUsuarioComponent implements OnInit {

  usuario:Usuario;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef:MatDialogRef<EliminarUsuarioComponent>,
    private usuarioService:UsuarioService,
    private spinner:NgxSpinnerService,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.usuario = Object.assign({}, this.data.usuario);
  }

  eliminarUsuario(){
    this.spinner.show();
    this.usuarioService.eliminarUsuario(this.usuario).subscribe(
      data => this.handleGuardarResponse(data),
      err => this.handleGuardarError(err),
    );
  }

  handleGuardarResponse(data){
    if(data.success){
      this.usuarioService.usuarios.splice(this.data.usuarioIndex,1);
      this.dialogRef.close();
      this.spinner.hide();
      this.toastr.success('Usuario eliminado satisfactoriamente. ', 'Exito');
    }else{
      this.toastr.error('Error validando la información. ', 'Error');
      this.spinner.hide();
    }
  }

  handleGuardarError(err){
    this.toastr.error('Ocurrio un error interno en el servidor. ', 'Error');
    this.spinner.hide();
  }

}
