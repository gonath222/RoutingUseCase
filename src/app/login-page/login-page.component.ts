import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { UserData } from '../models/user.model';
import { HttpService } from '../services/http.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html'
})
export class LoginPageComponent implements OnInit {
  isLoginClicked = false;
  username: string = "";
  password: string = "";
  usernameResult: string = "";
  passwordResult: string = "";
  isUserRegistered = false;
  error = "";
  constructor(private loginService: LoginService,
    private router: Router, private http: HttpService) { }

  ngOnInit(): void {
    debugger;
    if (this.username == "") {
      this.isUserRegistered = false;
    }
  }

  OnSubmitLogin() {
    debugger;
    this.isLoginClicked = true;
    if (this.username != "") {
      this.loginService.login(this.username, this.password);

      if (this.username.toLowerCase() != "admin") {

        this.http.GetAllUser().subscribe((users: UserData[]) => {
          this.RouteToDashboard(users);
        });
      }
      else {
        this.router.navigate(["dashboard"])
      }
    }
  }

  RouteToDashboard(users: UserData[]) {
    let isUserAvailable = false;
    if (users.length == 0) {
      this.isUserRegistered = true;
    }
    else {
      users.filter((user) => {
        if (user.username === this.username) {
          isUserAvailable = true;
        }
      })
    }

    if (isUserAvailable) {
      this.isLoginClicked = false;
      this.router.navigate(["userdashboard"]);
    }
    else {
      this.isUserRegistered = true;
      this.isLoginClicked = false;
    }
  }
}
