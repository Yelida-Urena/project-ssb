import { Component, OnInit } from '@angular/core';
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
export class AgregarBoyaComponent implements OnInit {

  formularioBoya: any;

  title: string = 'AGM project';
  latitude!: number;
  longitude!: number;

  @ViewChild('search')
  public searchElementRef!: ElementRef;


  constructor(
    public formulario:FormBuilder,
    private crudService:CrudService,
    private router : Router,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone) {

    this.formularioBoya = this.formulario.group({
      ubicacion: ['', Validators.required]
    });
  }

  ngOnInit(): void {

  }

  enviarDatos(): any {
    console.log(this.formularioBoya.value);

    this.crudService.agregarBoya(this.formularioBoya.value).subscribe((data:any) => {
      this.router.navigateByUrl('/dispositivos');
    });

    this.mapsAPILoader.load().then(() => {
    });

  }

  onMapClicked(event: any){
    console.table(event.coords);
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;

  }

}


