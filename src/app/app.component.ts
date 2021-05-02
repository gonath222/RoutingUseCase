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
  title = 'Routing & HTTP Client UseCase';
  currentPage: string;
  isLoggedin: string;

  constructor(private router: Router, private appRoutingModule: AppRoutingModule, private loginService: LoginService){
    this.router.events.subscribe((event:Event) => {
      if(event instanceof NavigationEnd ){
        if(this.loginService.isAdmin())
        {
          this.isLoggedin = "Admin";
        }
        else{
          this.isLoggedin = this.loginService.isUserLoggedIn() != undefined && this.loginService.isUserLoggedIn() ? this.loginService.getuserName()  : "Guest";  
        }
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
