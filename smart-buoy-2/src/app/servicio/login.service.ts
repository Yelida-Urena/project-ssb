import { EventEmitter, Injectable, Output } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../modelos/Usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  API: string = 'https://localhost/proyecto/';

  @Output() logInUsuario: EventEmitter<any> = new EventEmitter();

  constructor(private clienteHttp:HttpClient) { }

  registro( registroUsuario: Usuario ){
    return this.clienteHttp.post( this.API + "registro.php", registroUsuario);
  }

  login( usuario: any, contrasena: any) {
    // this.getLoggedInName.emit(true);
    return this.clienteHttp.post( this.API + "login.php", usuario, contrasena);
  }

  changeMenu(msg: string) {
    this.logInUsuario.emit(true);
  }

  // setToken(token: string) {
  //   localStorage.setItem('token', token);
  // }

  // getToken() {
  //   return localStorage.getItem('token');
  // }

  // deleteToken() {
  //   localStorage.removeItem('token');
  // }

  // isLoggegIn() {
  //   const userToken = this.getToken();

  //   if (userToken != null) {
  //     return true;
  //   }

  //   return false;
  // }

}
