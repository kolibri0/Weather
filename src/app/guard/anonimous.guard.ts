import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AnonimousGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if(((this.authService.user.email == null) && this.authService.user.emailVerified == false ) || ((this.authService.user.email == null) && this.authService.user.emailVerified == false )){
        return true
      }else if(this.authService.user.email && !this.authService.user.isAnonymous){
        return true
      }else{
        return false
      }
  }
  
}
