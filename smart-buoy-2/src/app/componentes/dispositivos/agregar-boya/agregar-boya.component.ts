import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

import { CrudService } from 'src/app/servicio/crud.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-agregar-boya',
  templateUrl: './agregar-boya.component.html',
  styleUrls: ['./agregar-boya.component.css']
})
export class AgregarBoyaComponent implements OnInit {

  formularioBoya: any;


  constructor(
    public formulario:FormBuilder,
    private crudService:CrudService,
    private router : Router) {

    this.formularioBoya = this.formulario.group({
      ubicacion: ['', Validators.required]
    });

  }

  ngOnInit(): void {

  }

  enviarDatos(): any {
    console.log(this.formularioBoya.value);

    this.crudService.agregarBoya(this.formularioBoya.value).subscribe((data:any) => {
      this.router.navigateByUrl('/dispositivos');
    });

  }

}
