import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html'
})
export class LoginPageComponent implements OnInit {
  isLoginClicked = false;
  username : string ="";
  password : string ="";
  usernameResult : string ="";
  passwordResult : string ="";

  constructor(private loginService: LoginService, 
    private router: Router) { }

  ngOnInit(): void {

  }

  OnSubmitLogin(){
    debugger;
    this.isLoginClicked = true;
    this.usernameResult = this.username;
    this.passwordResult = this.password;

    this.loginService.login(this.username, this.password).subscribe(data => {
      this.router.navigate( ['dashboard']);
  });
  }

}
