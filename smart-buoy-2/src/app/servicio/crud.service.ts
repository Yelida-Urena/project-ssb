import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Boya } from './Boya';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  API: string = 'https://localhost/proyecto/';

  constructor( private clienteHttp:HttpClient ) { }

  agregarBoya( datosBoya:Boya ) : Observable<any> {
    return this.clienteHttp.post( this.API + "?insertar=1", datosBoya);
  }

  obtenerBoyas(){
    return this.clienteHttp.get( this.API );
  }

  borrarBoya( id:any ) : Observable<any> {
    return this.clienteHttp.get( this.API + "?borrar=" + id);
  }

  obtenerBoya( id:any ) : Observable<any> {
    return this.clienteHttp.get( this.API + "?consultar=" + id);
  }

  editarBoya( id:any, datosBoya:any ) : Observable<any> {
    return this.clienteHttp.post( this.API + "?actualizar=" + id, datosBoya );
  }
}
