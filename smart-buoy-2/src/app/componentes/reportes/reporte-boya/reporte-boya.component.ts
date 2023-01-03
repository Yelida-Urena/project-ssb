import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/servicio/crud.service';
import { SensoresService } from 'src/app/servicio/sensores.service';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { ReportesService } from 'src/app/servicio/reportes.service';
import { Boya } from 'src/app/modelos/Boya';
import { Pipe, PipeTransform } from '@angular/core';

import { Subscription } from 'rxjs';

export let browserRefresh = false;

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { from } from 'rxjs';
declare var $: any

import { DateTimeService, LineSeriesService, DateTimeCategoryService, StripLineService } from '@syncfusion/ej2-angular-charts';


@Component({
  selector: 'app-reporte-boya',
  templateUrl: './reporte-boya.component.html',
  styleUrls: ['./reporte-boya.component.css'],
  providers: [DateTimeService, LineSeriesService, DateTimeCategoryService, StripLineService]
})
export class ReporteBoyaComponent implements OnInit {

  Boya: any;
  dataSource : any;
  sensorTemp: any = [];
  boya_id: any;
  name: any;

  fromDate: string = '';
  toDate: string = '';
  from: any;
  to: any;

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'humedad';
  showYAxisLabel = true;
  yAxisLabel = 'temperatura';

  public primaryXAxis: any;
  public chartData: any[] = [];
  public title: string = '';
  public primaryYAxis: any;

  public primaryXAxis2: any;
  public chartData2: any[] = [];
  public title2: string = '';
  public primaryYAxis2: any;

  subscription: Subscription;

  constructor(
    private service: CrudService,
    private serviceSensor: SensoresService,
    private activeRouter: ActivatedRoute,
    private dates: ReportesService,
    private router: Router
  ) {

   }

  ngOnInit(): void {

    this.boya_id = this.activeRouter.snapshot.params['id'];



    this.service.obtenerBoya(this.boya_id).subscribe((data:any) => {
      this.Boya = data.data;
    });

    this.dates.currentFromDate.subscribe(fromDate => this.fromDate = fromDate);
    this.dates.currenToDate.subscribe(toDate => this.toDate = toDate);

    this.convertDates(this.fromDate, this.toDate);

    console.log(this.to, this.from);

    this.serviceSensor.obtenerDatosTempHum(this.boya_id, this.from, this.to).subscribe((data:any) => {
      this.sensorTemp = data.data;
      console.log(data);
      console.log(this.sensorTemp);

      this.chartData = data.data.map((datum:any)  =>  ({ y: datum.temperatura, x: new Date(datum.fecha)}));
      this.chartData2 = data.data.map((datum:any)  =>  ({ y: datum.humedad, x: new Date(datum.fecha)}));
      // this.multi = data.data.map((datum:any) => datum.series = datum.series.map( (dataItem:any) => { dataItem.name = new Date(dataItem.name); return dataItem;}));
    });



    this.primaryXAxis = {
      valueType: 'DateTime',
      title: 'Fecha',
      labelFormat: 'd-MMM-y'
  };
  this.primaryYAxis = {
     title: 'Temperatura (°C)'
  };
  this.primaryYAxis2 = {
    title: 'Humedad (%)'
 };
 this.title = 'Temperatura (°C) de la Boya #' + this.boya_id;
 this.title2 = 'Humedad (%) de la Boya #' + this.boya_id;

  }

  convertDates(from:any, to:any){
    const [day1, month1, year1] = from.split('-');
    const [day2, month2, year2] = to.split('-');

    this.from = year1 + '-' + month1 + '-' + day1;
    this.to = year2 + '-' + month2 + '-' + day2;
  }

  onSelect(data:any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data:any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data:any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  descargarReporte(){
    const DATA = document.getElementById('htmlData');
    const datos: HTMLElement = DATA!;

    const doc = new jsPDF('p', 'pt', 'a4');
    const options = {
      background: 'white',
      scale: 3
    };
    html2canvas(datos, options).then((canvas) => {

      const img = canvas.toDataURL('image/PNG');

      // Add image Canvas to PDF
      const bufferX = 15;
      const bufferY = 15;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      return doc;
    }).then((docResult) => {
      docResult.save('ReporteBoya' + this.boya_id + '/' + this.fromDate + '.pdf');
    });
  }

}
