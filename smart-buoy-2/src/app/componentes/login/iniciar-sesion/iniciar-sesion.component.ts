import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router';
import { first, of } from 'rxjs';
import { LoginService } from 'src/app/servicio/login.service';
@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  loginForm: any;
  type: boolean | undefined;
  invalidLogin: boolean = false;
  message: any;
  token: any;
  submitted: boolean | undefined;
  loginStatus:any;

  loginUser = {
    id: null,
    usuario: null,
    contrasena: null,
  }

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private service: LoginService,
  ) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      usuario: ['', Validators.compose([Validators.required])],
      contrasena: ['', Validators.required]
    });

    this.service.isLoggedIn.subscribe((status) => {
      this.loginStatus = status;
    });
  }

  hideShowPassword() {
    this.type = !this.type;
  }

  onSubmit(){

    this.submitted = true;

    localStorage.setItem("username", this.loginForm.controls['usuario'].value);

    this.service.loginUser();

    console.log(this.loginForm.value);
    if (this.loginForm.invalid)
    return;

    const loginData = {
      usuario: this.loginForm.controls['usuario'].value,
      contrasena: this.loginForm.controls['contrasena'].value,
    }

    this.service.login(loginData.usuario, loginData.contrasena).pipe(first()).subscribe((data: any) => {
      // this.message = data.message;
      this.router.navigate(["/start-page"]);
      console.log("Inicio de sesion exitoso");
      // this.service.changeMenu('Usuario ingresado');
      // if(data.token){
      //   window.localStorage.setItem('token', data.token);
      //   this.router.navigate(["/start-page"]);
      // } else {
      //   this.invalidLogin = true;
      //   alert(data.message);
      // }
    });

  }


}
