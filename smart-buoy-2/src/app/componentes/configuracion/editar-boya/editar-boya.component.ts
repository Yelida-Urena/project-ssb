import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService } from 'src/app/servicio/crud.service';

@Component({
  selector: 'app-editar-boya',
  templateUrl: './editar-boya.component.html',
  styleUrls: ['./editar-boya.component.css']
})
export class EditarBoyaComponent implements OnInit {

  formularioBoya: any;
  boya_id: any;


  constructor(
    private activeRouter : ActivatedRoute,
    private crudService : CrudService,
    public formulario : FormBuilder,
    public router : Router
  ) {

    this.formularioBoya = this.formulario.group({
      id: ['', Validators.required],
      nombre: ['', Validators.required],
      ubicacion: ['', Validators.required]
    });
  }


  ngOnInit(): void {
    this.boya_id = this.activeRouter.snapshot.params['id'];
    //console.log(this.boya_id);
    if (this.boya_id > 0) {
      this.crudService.obtenerBoya(this.boya_id).subscribe((data:any) => {
        //console.log(data.data);
        this.formularioBoya.patchValue(data.data);
      });
    }
  }

  enviarDatos():any {
    // console.log(this.boya_id);
    // console.log(this.formularioBoya.value);
    this.crudService.editarBoya(this.formularioBoya.value).subscribe(() =>{
      this.router.navigateByUrl('/configuracion');
    },error => {
      alert(error);
    });

  }

}
