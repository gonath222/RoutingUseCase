import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot,RouterStateSnapshot, CanActivateChild, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';
 
 
@Injectable()
export class RouterAuthService implements CanActivateChild {
 
    constructor(private _router:Router, private loginService: LoginService ) {
    }
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if (!this.loginService.isUserLoggedIn()) {
            alert('You are not allowed to view this page');
            return false;
        }
    }
 
    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): boolean {
 
        //check some condition  
        if (!this.loginService.isUserLoggedIn())  {
            alert('You are not allowed to view this page');
            return false;
        } 
        return true;
    }
 
}