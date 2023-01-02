import { Component, OnInit } from '@angular/core';

import { CrudService } from 'src/app/servicio/crud.service';
import { Boya } from 'src/app/modelos/Boya';

import { faPen } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { LoginService } from 'src/app/servicio/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent implements OnInit {

  Boyas : any;
  role:any;

  penIcon = faPen;
  trashIcon = faTrashAlt;

  constructor(
    private crudService:CrudService,
    private service:LoginService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.crudService.obtenerBoyas().subscribe((data:any) => {
      console.log(data);
      this.Boyas = data.data;
    });

    const username = localStorage.getItem("username");
    console.log(username);

    this.service.haveRoleAccess(username).subscribe((data: any) => {
      this.role = data.data;
      console.log(this.role[0].role);
    });
  }


  disableRegistro(boya:any) {
    if (this.role[0].role === "admin") {
      this.crudService.disable(boya.id).subscribe((data) => {
        this.Boyas = this.Boyas.filter((u: any) => u != boya);
      });
    }else{
      alert('No tiene permisos');
    }
  }

}
