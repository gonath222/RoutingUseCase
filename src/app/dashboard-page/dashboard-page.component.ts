import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmDialogService } from '../services/confirm.popup.service';
import { HttpService } from '../services/http.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {

  idvalue: string;
  
  constructor(private loginService: LoginService, private router: Router,
    private route:ActivatedRoute, private http: HttpService, private confirmPop: ConfirmDialogService) { }

  ngOnInit(): void {
  }

  showDialog() {  
    const rou = this.router;
    this.confirmPop.confirmThis("Are you sure, You want to delete all the Users data?", function () {  
      rou.navigate(["dashboard/delete"])
    }, function () {  
      
    })  
  }  
}
