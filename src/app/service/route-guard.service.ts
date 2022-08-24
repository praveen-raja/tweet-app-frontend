import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { LoginService } from './login.service';


@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private loginService: LoginService , private router : Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if(this.loginService.isUserLoggedIn())
    {
  return true;
    }
    else{
      this.router.navigate(['login']);
      return false;
    }
  }
}
