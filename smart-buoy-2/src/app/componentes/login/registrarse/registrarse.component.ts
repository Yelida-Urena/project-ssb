import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicio/login.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {

  formularioRegistro: any;
  type: boolean | undefined;

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
  }

  hideShowPassword() {
    this.type = !this.type;
  }


  onSubmit(){
    //console.log(this.formularioRegistro.value);
    this.service.registro(this.formularioRegistro.value).subscribe((data) =>{
      this.router.navigate(["/iniciar-sesion"])
    });
  }
}
