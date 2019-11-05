import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  formData:Usuario;
  usuarios:Usuario[] = [];

  constructor(private http:HttpClient) { }

  getUsuarios(): Observable<any>{
    return this.http.get(environment.apiURL+'usuarios',{headers:environment.headers});
  }
}
