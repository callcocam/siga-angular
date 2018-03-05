import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../admin/layout/auth/auth.service';

@Injectable()
export class AuthGuardRouterService  implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }
 
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    if(this.authService.check){
      return true;
    }
    this.router.navigate(['admin/auth'])
    return false;
  }

}
