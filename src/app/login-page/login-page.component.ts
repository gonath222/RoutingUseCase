import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  providers:[LoginService]

})
export class LoginPageComponent implements OnInit {
  isLoginClicked = false;
  username : string ="";
  password : string ="";
  usernameResult : string ="";
  passwordResult : string ="";
  retUrl : string ="dashboard";
  constructor(private loginService: LoginService, 
    private router: Router, 
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap
    .subscribe(params => {
          this.retUrl = params.get('retUrl'); 
          console.log( 'LoginComponent/ngOnInit '+ this.retUrl);
        });
  }

  OnSubmitLogin(){
    this.isLoginClicked = true;
    this.usernameResult = this.username;
    this.passwordResult = this.password;

    this.loginService.login(this.username, this.password).subscribe(data => {
      console.log( 'return to '+ this.retUrl);
      if (this.retUrl!=null) {
           this.router.navigate( [this.retUrl]);
      } else {
           this.router.navigate( ['home']);
      }
  });
  }

}
