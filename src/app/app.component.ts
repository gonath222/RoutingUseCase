import { Component, OnDestroy } from '@angular/core';
import { NavigationEnd, Router, Event } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppRoutingModule } from './app-routing.module';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'Routing & HTTP Client UseCase';
  currentPage: string;
  isLoggedin: string;
  userName: string;
  private userNameSub: Subscription;
  constructor(private router: Router, private loginService: LoginService) {
    this.router.events.subscribe((event: Event) => {
      debugger;
      if (event instanceof NavigationEnd) {
        if (event.url == "/") {
          this.currentPage = "HOME";
        }
        else {
          this.currentPage = event.url.toUpperCase().replace('/', '');
        }
      }
    });

    this.userNameSub = this.loginService.loggedInUserName.subscribe(name => {
      this.userName = name;
    })
  }

  ngOnDestroy() {
    this.userNameSub.unsubscribe();
  }
}
