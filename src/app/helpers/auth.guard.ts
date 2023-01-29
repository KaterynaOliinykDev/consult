import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router }
from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate{

  constructor(private router: Router) { }

  canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): boolean {

      const pageAccess = next.data.role;

      if(pageAccess){
        return this.checkLogin(pageAccess);
      } else {
        return false
      }
  }

  checkLogin(pageAccess: string): boolean {
      const userRole = localStorage.getItem('role');
      if (userRole === pageAccess) { return true; }

      this.router.navigate(['/']);
      return false;
  }
}
