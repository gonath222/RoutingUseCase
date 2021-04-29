import { Injectable } from "@angular/core";
import { of } from 'rxjs';
@Injectable({
    providedIn: "root",
  })

export class LoginService {
    private isloggedIn: boolean;
    private userName:string;
    private password: string;

    login(username: string, password:string) {
         this.isloggedIn=true;
        this.userName = username;
        this.password = password;
        return of(this.isloggedIn);
    }
 
    isUserLoggedIn(): boolean {
        return this.isloggedIn;
    }

    getuserName(): string {
        return this.userName;
    }
 
    logoutUser(): void{
        this.isloggedIn = false;
    }

    isAdmin():boolean {
        if (this.userName.toLowerCase() =='admin') {
            return true; 
        }
        return false;
    }
}