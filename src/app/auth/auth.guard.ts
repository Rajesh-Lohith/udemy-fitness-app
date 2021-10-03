import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log(this.authService.isAuthenticated());
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      return this.router.navigate(['/login']);
    }
  }

  constructor(private authService: AuthService, private router: Router) {}
}
