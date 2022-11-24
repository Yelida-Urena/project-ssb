import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SensorTemperatura } from '../modelos/Sensor_Temperatura';

@Injectable({
  providedIn: 'root'
})
export class SensoresService {

  API: string = 'https://localhost/proyecto/';

  constructor(private clienteHttp: HttpClient) { }

  obtenerDatos(){
    return this.clienteHttp.get<SensorTemperatura[]>( this.API + 'viewSensorTemp.php' );
  }
}
