import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/servicio/crud.service';

import { faFile } from '@fortawesome/free-solid-svg-icons'
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbDate, NgbCalendar, NgbDateParserFormatter, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { CustomAdapter, CustomDateParserFormatter } from '../dateformat';
import { ActivatedRoute, Router } from '@angular/router';
import { SensoresService } from 'src/app/servicio/sensores.service';
import { ReportesService } from 'src/app/servicio/reportes.service';


declare var $: any;

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css'],
  animations: [],
  providers: [
    { provide: NgbDateAdapter, useClass: CustomAdapter },
		{ provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter }]
})
export class ReportesComponent implements OnInit {
  Boyas : any;
  Boya : any;
  reporte = faFile;
  displayModal = "none";
  boya_id: any;
	fromDate: string = '';
  toDate: string = '';

  minDate : any;

  constructor(
    private service: CrudService,
    private formulario: FormBuilder,
    private ngbCalendar: NgbCalendar,
    private dateAdapter: NgbDateAdapter<string>,
    public activeRouter: ActivatedRoute,
    public router: Router,
    public serviceSensor: SensoresService,
    public dateRange: ReportesService
  ) {
  }



  ngOnInit(): void {

    this.service.obtenerBoyas().subscribe((data:any) => {
      console.log(data);
      this.Boyas = data.data;
    });
    this.boya_id = this.activeRouter.snapshot.params['id'];

  }


  openModal(boya_id:any) {
    this.boya_id = boya_id;
    this.displayModal = "block";
    console.log(boya_id);
  }

  closePopup() {
    this.displayModal = "none";
  }

  setMinDate(){
    const [day, month, year] = this.fromDate.split('-');
    console.log(this.fromDate);

    console.log(month);
    console.log(day);
    console.log(year);

    this.minDate = {year: year, month: month, day: day};
  }

  generateReport(){
    console.log(this.fromDate);

    this.dateRange.changeFromDate(this.fromDate);
    this.dateRange.changeToDate(this.toDate);

    this.router.navigate(['/reporte/' + this.boya_id + '/' + this.fromDate + '/' + this.toDate]);
  }

}
