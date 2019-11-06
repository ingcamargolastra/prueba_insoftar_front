import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatDialog} from '@angular/material';
import { Usuario } from 'src/app/models/usuario.model';
import { NgForm } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  usuario:Usuario;
  errores:any = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef:MatDialogRef<CrearUsuarioComponent>,
    private usuarioService:UsuarioService,
    private spinner:NgxSpinnerService,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    if(this.data.usuario){
      this.usuario = Object.assign({}, this.data.usuario);
    }else{
      this.usuario = {
        id:null,
        nombres:'',
        apellidos:'',
        cedula:'',
        correo:'',
        telefono:''
      }
    }
  }

  guardarUsuario(form:NgForm){
    if(!form.valid){
      return;
    }
    this.errores = [];
    this.spinner.show();
    
    if(!this.data.usuario){
      console.log(this.data);
      this.usuarioService.guardarUsuario(this.usuario).subscribe(
        data => this.handleGuardarResponse(data),
        err => this.handleGuardarError(err),
      );
    }else{
      this.usuarioService.modificarUsuario(this.usuario).subscribe(
        data => this.handleModificarResponse(data),
        err => this.handleModificarError(err),
      );
    }
  }

  handleGuardarResponse(data){
    if(data.success){
      this.errores = [];
      this.usuarioService.usuarios.push(data.usuario);
      this.dialogRef.close();
      this.spinner.hide();
      this.toastr.success('Usuario registrado satisfactoriamente. ', 'Exito');
    }else{
      this.toastr.error('Error validando la información. ', 'Error');
      this.errores = data.errores;
      this.spinner.hide();
    }
  }

  handleGuardarError(err){
    this.toastr.error('Ocurrio un error interno en el servidor. ', 'Error');
    this.spinner.hide();
  }

  handleModificarResponse(data){
    if(data.success){
      this.errores = [];
      this.usuarioService.usuarios[this.data.usuarioIndex] = (data.usuario);
      this.dialogRef.close();
      this.spinner.hide();
      this.toastr.success('Usuario modificado satisfactoriamente. ', 'Exito');
    }else{
      this.toastr.error('Error validando la información. ', 'Error');
      this.errores = data.errores;
      this.spinner.hide();
    }
  }

  handleModificarError(err){
    this.toastr.error('Ocurrio un error interno en el servidor. ', 'Error');
    this.spinner.hide();
  }

}
