import { Component } from '@angular/core';
import { NavigationEnd, Router, Event } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RoutingUseCase';
  currentPage: string;
  isLoggedin: string;

  constructor(private router: Router, private appRoutingModule: AppRoutingModule, private loginService: LoginService){
    this.router.events.subscribe((event:Event) => {
      if(event instanceof NavigationEnd ){
        debugger;
        this.isLoggedin = this.loginService.isUserLoggedIn() != undefined && this.loginService.isUserLoggedIn() ? "You are logged in as "+ this.loginService.getuserName()  : "You are not logged in";
        if(event.url == "/")
        {
          this.currentPage = "HOME" ;
        }
        else
        {
          this.currentPage = event.url.toUpperCase().replace('/','');
        }
      }
    });
    }
}
