import { Injectable } from '@angular/core';
import { jsPDF } from 'jspdf';
@Injectable({
  providedIn: 'root'
})
export class ReportesService {

  constructor() { }

  imprimir (encabezado: string[], cuerpo: Array<any>, titulo: string[], guardar?: boolean) {

    const doc = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: "letter"
    });

    doc.text(titulo, doc.internal.pageSize.width /2, 25, {align: 'center'});

  }
}
