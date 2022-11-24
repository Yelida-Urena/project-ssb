import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/servicio/crud.service';
import { DateRangePickerModule } from '@syncfusion/ej2-angular-calendars';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { faFile } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  Boyas : any;
  reporte = faFile;

  constructor(
    private service: CrudService,
  ) { }

  ngOnInit(): void {
    this.service.obtenerBoyas().subscribe((data:any) => {
      console.log(data);
      this.Boyas = data.data;
    });
  }

}
