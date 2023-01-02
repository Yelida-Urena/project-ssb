import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportesService {

  constructor() { }

  private fromDateSource = new BehaviorSubject<string>('');
  private toDateSource = new BehaviorSubject<string>('');

  currentFromDate = this.fromDateSource.asObservable();
  currenToDate = this.toDateSource.asObservable();

  changeFromDate(fromDate: string){
    this.fromDateSource.next(fromDate);
  }

  changeToDate(toDate: string){
    this.toDateSource.next(toDate);
  }




}
