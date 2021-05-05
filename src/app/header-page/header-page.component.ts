import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, Event } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html'
})
export class HeaderPageComponent implements OnInit {
  isLoggedin: boolean;
  isAdminLoggedin: boolean;
  constructor(private router: Router, private loginService: LoginService) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.isLoggedin = this.loginService.isUserLoggedIn() != undefined && this.loginService.isUserLoggedIn() ? true : false;
        this.isAdminLoggedin = this.loginService.isAdmin() != undefined && this.loginService.isAdmin() ? true : false;
      }
    });
  }

  ngOnInit(): void {
  }

  logout() {
    this.loginService.logoutUser();
  }
}
