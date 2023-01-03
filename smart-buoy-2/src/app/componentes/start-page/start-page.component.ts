import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicio/login.service';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

  email:any;

  constructor(
    private router: Router,
    private service: LoginService,
  ) { }

  ngOnInit(): void {
  }

  registrate() {
    this.service.sendEmail(this.email);
    this.router.navigate(['/registrarse']);
  }

}
