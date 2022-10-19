import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/servicio/crud.service';

@Component({
  selector: 'app-editar-boya',
  templateUrl: './editar-boya.component.html',
  styleUrls: ['./editar-boya.component.css']
})
export class EditarBoyaComponent implements OnInit {
  formularioBoya: FormGroup;
  id : any;


  constructor(
    private activeRouter : ActivatedRoute,
    private crudService : CrudService,
    public formulario : FormBuilder,
    public router : Router

  ) {
    this.id = this.activeRouter.snapshot.paramMap.get('id');
    console.log(this.id);
    this.crudService.obtenerBoya(this.id).subscribe(respuesta => {
      console.log(respuesta);
      this.formularioBoya.setValue({
        ubicacion: respuesta[0]['ubicacion']
      });
    });
    this.formularioBoya = this.formulario.group({
      ubicacion: ['']
    });
  }


  ngOnInit(): void {
  }

  enviarDatos():any {
    console.log(this.id);
    console.log(this.formularioBoya.value);
    this.crudService.editarBoya(this.id, this.formularioBoya.value).subscribe(() =>{
    });
    this.router.navigateByUrl('/configuracion');
  }

}
