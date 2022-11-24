import { Component } from '@angular/core';
import { LoginService } from './servicio/login.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loginbtn: boolean = true;
  logoutbtn: boolean = false;
  title = 'smart-buoy-2';

  constructor(
    private service: LoginService,
  ) {
      this.service.logInUsuario.subscribe((data:string) => {
        this.loginbtn = false;
        this.logoutbtn = true;
      });

    // service.getLoggedInName.subscribe(name => this.changeName(name));
    // if (this.service.isLoggegIn()){
    //   console.log("logged in");
    //   this.loginbtn = false;
    //   this.logoutbtn = true;
    //   console.log(this.loginbtn);
    // }else {
    //   this.loginbtn = true;
    //   this.logoutbtn = false;
    //   console.log(this.loginbtn);
    // }

  }



  private changeName(name: boolean): void {
    this.logoutbtn = name;
    this.loginbtn = !name;
  }

  logout(){
    // this.service.deleteToken();
    window.location.href = "/start-page";
  }
}
