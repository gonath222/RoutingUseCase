import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot,RouterStateSnapshot, CanActivateChild, UrlTree } from '@angular/router';
import { LoginService } from './login.service';
 
 
@Injectable()
export class RouterAuthService implements CanActivateChild {
 
    constructor(private _router:Router, private loginService: LoginService ) {
    }
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
        if (!this.loginService.isAdmin()) {
            alert('You are not allowed to view this child page. Try using admin login');
            return false;
        }
        return true;
    }
 
    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): boolean {
        if (!this.loginService.isUserLoggedIn())  {
            alert('You are not allowed to view this page. Try after login');
            return false;
        } 
        return true;
    }
 
}