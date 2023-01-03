import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { SensorTemperatura } from '../modelos/Sensor_Temperatura';
import { CrudService } from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class SensoresService {

  API: string = 'https://localhost/proyecto/';

  constructor(
    private clienteHttp: HttpClient,
    public service: CrudService
    ) { }

  obtenerDatosTempHum(idBoya:any, from:string, to:string) {
    const params = new HttpParams().set('from', from).set('to', to);

    return this.clienteHttp.get<SensorTemperatura[]>( this.API + '/viewSensorTemp.php?id_boya=' + idBoya, {params: params});
    // return this.clienteHttp.post<SensorTemperatura[]>( this.API + '/viewSensor1.php?id_boya=' + idBoya, from);
  }

  obtenerDatosAgua(idBoya:any, from:string, to:string){
    const params = new HttpParams().set('from', from).set('to', to);

    return this.clienteHttp.get<SensorTemperatura[]>( this.API + '/viewSensorAgua.php?id_boya=' + idBoya, {params: params});
  }
}
