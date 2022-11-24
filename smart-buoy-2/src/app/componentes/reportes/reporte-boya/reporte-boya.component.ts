import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/servicio/crud.service';
import { SensoresService } from 'src/app/servicio/sensores.service';

@Component({
  selector: 'app-reporte-boya',
  templateUrl: './reporte-boya.component.html',
  styleUrls: ['./reporte-boya.component.css']
})
export class ReporteBoyaComponent implements OnInit {

  Boyas : any;
  Sensor_Temperatura: any;

  constructor(
    private service: CrudService,
    private serviceSensor: SensoresService
  ) { }

  ngOnInit(): void {
    this.service.obtenerBoyas().subscribe((data:any) => {
      console.log(data);
      this.Boyas = data.data;
    });

    this.serviceSensor.obtenerDatos().subscribe((data:any) => {
      console.log(data);
      this.Sensor_Temperatura = data.data;
    });
  }

}
