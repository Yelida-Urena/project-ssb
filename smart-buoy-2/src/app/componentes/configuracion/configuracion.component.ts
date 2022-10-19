import { Component, OnInit } from '@angular/core';

import { CrudService } from 'src/app/servicio/crud.service';
import { Boya } from 'src/app/servicio/Boya';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent implements OnInit {

  Boyas : any;

  constructor(
    private crudService:CrudService,
  ) { }

  ngOnInit(): void {
    this.crudService.obtenerBoyas().subscribe(respuesta => {
      console.log(respuesta);
      this.Boyas = respuesta;
    });
  }

  borrarRegistro(id: any,iControl: any) {
    console.log(id);
    console.log(iControl);
    if(window.confirm("¿Está seguro que desea borrar este registro?")) {
      this.crudService.borrarBoya(id).subscribe((respuesta) => {
        this.Boyas.splice(iControl, 1);
      });
    }


  }

}
