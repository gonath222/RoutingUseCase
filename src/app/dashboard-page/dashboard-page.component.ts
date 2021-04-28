import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css'],
  providers:[LoginService]
})
export class DashboardPageComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

}
