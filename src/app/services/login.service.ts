import { Injectable } from "@angular/core";
import { BehaviorSubject, of } from 'rxjs';
import { HttpService } from "./http.service";
@Injectable({
    providedIn: "root",
})

export class LoginService {
    private isloggedIn: boolean;
    private userName: string;
    private password: string;
    isUserRegistered = false;
    loggedInUserName = new BehaviorSubject("Guest");

    constructor(private http: HttpService) { }

    login(username: string, password: string) {
        this.userName = username;
        this.password = password;
        if (this.userName.toLowerCase() != "admin") {
            this.http.GetAllUser().subscribe(users => {
                users.filter((user) => {
                    if (user.username === username) {
                        this.isloggedIn = true;
                        this.isUserRegistered = true;
                        this.loggedInUserName.next(user.username);
                        return of(this.isUserRegistered);
                    }
                })
            });
        }
        else {
            this.isloggedIn = true;
            this.isUserRegistered = true;
            this.loggedInUserName.next(this.userName);
            return of(this.isUserRegistered);
        }
    }

    isUserLoggedIn(): boolean {
        return this.isloggedIn;
    }

    getuserName(): string {
        return this.userName;
    }

    logoutUser(): void {
        this.isloggedIn = false;
    }

    isAdmin(): boolean {
        if (this.userName != undefined && this.userName.toLowerCase() == 'admin') {
            return true;
        }
        return false;
    }
}