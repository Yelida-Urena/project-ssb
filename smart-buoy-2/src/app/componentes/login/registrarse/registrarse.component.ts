import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { LoginService } from 'src/app/servicio/login.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {

  formularioRegistro: any;
  type: boolean | undefined;
  loginStatus:any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private service: LoginService,
  ) { }

  ngOnInit(): void {
    this.formularioRegistro = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', Validators.required],
      usuario: ['', Validators.required],
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
    //console.log(this.formularioRegistro.value);
    this.service.registro(this.formularioRegistro.value).subscribe((data) =>{
    });

    localStorage.setItem("username", this.formularioRegistro.controls['usuario'].value);

    const loginData = {
      usuario: this.formularioRegistro.controls['usuario'].value,
      contrasena: this.formularioRegistro.controls['contrasena'].value,
    }

    this.service.loginUser();

    this.service.login(loginData.usuario, loginData.contrasena).pipe(first()).subscribe((data: any) => {
      this.router.navigate(["/start-page"]);
      console.log("Inicio de sesion exitoso");
    });
  }
}
