import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from 'src/app/servicio/crud.service';
import { Router
 } from '@angular/router';
@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
  loginForm!: FormGroup;
  type: boolean | undefined;
  invalidLogin: boolean = false;
  message: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private service: CrudService,
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      usuario: ['', Validators.compose([Validators.required])],
      contraseña: ['', Validators.required]
    });
  }

  hideShowPassword() {
    this.type = !this.type;
  }

  onSubmit(){
    console.log(this.loginForm.value);
    if (this.loginForm.valid)
    return;

    const loginData = {
      usuario: this.loginForm.controls['usuario'].value,
      contraseña: this.loginForm.controls['contraseña'].value,
    }

    this.service.login(loginData).subscribe((data: any) => {
      this.message = data.message;


      if(data.token){
        window.localStorage.setItem('token', data.token);
      } else {
        this.invalidLogin = true;
        alert(data.message);
      }
    });

  }


}
