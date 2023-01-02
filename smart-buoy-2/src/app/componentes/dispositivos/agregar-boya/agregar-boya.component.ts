import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

import { CrudService } from 'src/app/servicio/crud.service';
import { ActivatedRoute, Router } from '@angular/router';

import { ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-agregar-boya',
  templateUrl: './agregar-boya.component.html',
  styleUrls: ['./agregar-boya.component.css']
})
export class AgregarBoyaComponent implements AfterViewInit {
@ViewChild('mapContainer', {static: false}) gmap: ElementRef;

  formularioBoya: any;

  display: any;
  center: google.maps.LatLngLiteral = {
      lat: 19.029408,
      lng:  -70.706486,
  };
  zoom = 6;

  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: true,
    disableDoubleClickZoom: true,
  };

  constructor(
    public formulario:FormBuilder,
    private crudService:CrudService,
    private router : Router,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone) {

    this.formularioBoya = this.formulario.group({
      nombre: ['', Validators.required],
      ubicacion: ['', Validators.required]
    });
  }

  ngAfterViewInit() : void {
  }
  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.center = (event.latLng.toJSON());
    console.log(this.formularioBoya.value);

  }

  move(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.display = event.latLng.toJSON();

  }

  enviarDatos(): any {
    this.formularioBoya.get('ubicacion').setValue(this.center.lat + ',' + this.center.lng);
    console.log(this.formularioBoya.value);

    this.crudService.agregarBoya(this.formularioBoya.value).subscribe((data:any) => {
      this.router.navigateByUrl('/dispositivos');
    });

  }



}


