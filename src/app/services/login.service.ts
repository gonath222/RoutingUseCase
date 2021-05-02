import { Injectable } from "@angular/core";
import { of } from 'rxjs';
import { HttpService } from "./http.service";
@Injectable({
    providedIn: "root",
  })

export class LoginService {
    private isloggedIn: boolean;
    private userName:string;
    private password: string;
isUserRegistered = false;
    constructor(private http:HttpService){}

    login(username: string, password:string) {
        this.userName = username;
        this.password = password;
        if(this.userName.toLowerCase() != "admin")
        {
            this.http.GetAllUser().subscribe(users => {
                    users.filter((user) => {
                        if(user.username === username)
                        {
                            this.isloggedIn=true;
                            this.isUserRegistered = true;
                            return of(this.isUserRegistered);                  
                        }
                    })
            });
        }
        else{
            this.isloggedIn=true;
            this.isUserRegistered = true;
            return of(this.isUserRegistered);
        }
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
        if (this.userName != undefined && this.userName.toLowerCase() =='admin') {
            return true; 
        }
        return false;
    }
}