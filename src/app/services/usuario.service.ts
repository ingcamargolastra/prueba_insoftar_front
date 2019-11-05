import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  formData:Usuario;
  usuarios:Usuario[] = [];

  constructor() { }
}
