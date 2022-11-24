import { Component, OnInit } from '@angular/core';

import { CrudService } from 'src/app/servicio/crud.service';

@Component({
  selector: 'app-dispositivos',
  templateUrl: './dispositivos.component.html',
  styleUrls: ['./dispositivos.component.css']
})
export class DispositivosComponent implements OnInit {
  Boyas : any;

  constructor(
    private crudService:CrudService,
  ) { }

  ngOnInit(): void {
    this.crudService.obtenerBoyas().subscribe((data:any) => {
      console.log(data);
      this.Boyas = data.data;
    });
  }


}
