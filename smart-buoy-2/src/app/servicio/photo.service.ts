import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  API: string = 'https://localhost/proyecto/';

  constructor(private clienteHttp:HttpClient) { }

  getPhotos( fecha:any ){
    return this.clienteHttp.get( this.API + "imagenes.php?fecha=" + fecha );
  }

}
