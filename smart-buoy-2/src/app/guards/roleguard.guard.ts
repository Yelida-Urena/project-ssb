import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../servicio/login.service';

@Injectable({
  providedIn: 'root'
})
export class RoleguardGuard implements CanActivate {

  constructor(
    private service: LoginService,
    private router: Router
  ){ }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if (this.service.haveRoleAccess(route.url[0].path)){
        return true;
      }else{
        alert("No tienes acceso");
        return false;
      }

  }

}
