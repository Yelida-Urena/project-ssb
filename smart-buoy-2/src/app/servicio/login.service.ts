import { EventEmitter, Injectable, Output } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Usuario } from '../modelos/Usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  API: string = 'https://localhost/proyecto/';
  role: any = '';

  @Output() logInUsuario: EventEmitter<any> = new EventEmitter();

  isLoggedIn = new BehaviorSubject(false);

  private email = new BehaviorSubject<string>('');

  emailUsuario = this.email.asObservable();

  constructor(private clienteHttp:HttpClient) { }

  sendEmail(email: string){
    this.email.next(email);
  }

  registro( registroUsuario: Usuario ){
    return this.clienteHttp.post( this.API + "registro.php", registroUsuario);
  }

  login( usuario: any, contrasena: any) {
    // this.getLoggedInName.emit(true);
    return this.clienteHttp.post( this.API + "login.php", usuario, contrasena);
  }

  logoutUser() {
    this.isLoggedIn.next(false);
  }
  loginUser() {
    this.isLoggedIn.next(true);
  }

  changeMenu(msg: string) {
    this.logInUsuario.emit(true);
  }

  // setToken(token: string) {
  //   localStorage.setItem('token', token);
  // }

   getToken() {
     return localStorage.getItem('username');
   }

  deleteToken() {
    localStorage.removeItem('username');
  }



  isLoggegIn() {
    const userToken = localStorage.getItem('username');

    if (userToken != null) {
      return true;
    }

    return false;
 }

  haveRoleAccess(username: string){
    return this.clienteHttp.get( this.API + "role.php?username=" + username);
  }

}
