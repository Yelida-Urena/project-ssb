import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {

  type: boolean | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  hideShowPassword() {
    this.type = !this.type;
  }
}
