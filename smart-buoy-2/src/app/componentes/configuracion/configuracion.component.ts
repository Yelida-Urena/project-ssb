import { Component, OnInit } from '@angular/core';

import { CrudService } from 'src/app/servicio/crud.service';
import { Boya } from 'src/app/modelos/Boya';

import { faPen } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent implements OnInit {

  Boyas : any;

  penIcon = faPen;
  trashIcon = faTrashAlt;

  constructor(
    private crudService:CrudService,
  ) { }

  ngOnInit(): void {
    this.crudService.obtenerBoyas().subscribe((data:any) => {
      console.log(data);
      this.Boyas = data.data;
    });
  }

  borrarRegistro(boya:any) {
    if(window.confirm("¿Está seguro que desea borrar este registro?")) {
      this.crudService.borrarBoya(boya.id).subscribe((data) => {
        this.Boyas = this.Boyas.filter((u: any) => u != boya);
      });
    }


  }

}
