import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Boya } from '../modelos/Boya';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  API: string = 'https://localhost/proyecto/';

  constructor( private clienteHttp:HttpClient ) { }

  obtenerBoyas(){
    return this.clienteHttp.get<Boya[]>( this.API + 'view.php' );
  }

  obtenerBoya( id:any ) {
    return this.clienteHttp.get<Boya[]>( this.API + 'view.php?id=' + id);
  }

  agregarBoya( datosBoya:any ) {
    return this.clienteHttp.post( this.API + 'insert.php', datosBoya );
  }

  borrarBoya( id:any ) {
    return this.clienteHttp.delete( this.API + 'delete.php?id=' + id);
  }

  disable( id:any ) {
    return this.clienteHttp.get( this.API + 'disable.php?id=' + id );
  }

  editarBoya( datosBoya:any ) {
    return this.clienteHttp.put( this.API + "update.php", datosBoya );
  }
}
