import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';

import { CrudService } from 'src/app/servicio/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-boya',
  templateUrl: './agregar-boya.component.html',
  styleUrls: ['./agregar-boya.component.css']
})
export class AgregarBoyaComponent implements OnInit {

  formularioBoya: FormGroup;

  constructor(
    public formulario:FormBuilder,
    private crudService:CrudService,
    private router : Router) {

    this.formularioBoya = this.formulario.group({
      id: [''],
      ubicacion: ['']
    });

  }

  ngOnInit(): void {
  }

  enviarDatos(): any {
    console.log("KK");
    console.log(this.formularioBoya.value);

    this.crudService.agregarBoya(this.formularioBoya.value).subscribe(respuesta => {

      this.router.navigateByUrl('/dispositivos');
    });

  }

}
