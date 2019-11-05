import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatDialog} from '@angular/material';
import { Usuario } from 'src/app/models/usuario.model';

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
    public dialogRef:MatDialogRef<CrearUsuarioComponent>
  ) { }

  ngOnInit() {
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
