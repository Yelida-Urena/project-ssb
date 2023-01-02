import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../servicio/login.service';

@Injectable({
  providedIn: 'root'
})
export class RoleguardGuard implements CanActivate {

  role: any;
  role1: any;

  constructor(
    private service: LoginService,
    private router: Router
  ){  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      const username = localStorage.getItem("username");
      this.service.haveRoleAccess(username).subscribe((data: any) => {
        this.role = data;
      });

      this.role1 = this.role;
      console.log(this.role1);

      if (this.role1 === "admin"){
        return true;
      }else{
      alert("No tienes acceso");
      return false;
      }

  }

}
