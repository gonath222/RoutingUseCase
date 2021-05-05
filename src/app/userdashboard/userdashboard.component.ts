import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserData } from '../models/user.model';
import { HttpService } from '../services/http.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

  isGetinProgress = false;
  id: string ="";
  userData : UserData[] =[];
  constructor(private router: Router, private loginService: LoginService, 
    private route:ActivatedRoute, private http: HttpService ) {
      debugger;
      this.http.GetAllUser().subscribe((users: UserData[]) => {
          users.filter((user) => {
            if (user.username === this.loginService.getuserName()) {
              this.userData.push(user);
            }
          })
      });
     }

    ngOnInit() {
    }

    GetAllUserDetails()
    {
      this.isGetinProgress = true;
      this.http.GetAllUser().subscribe(
        event =>{
            this.userData = event;
            this.isGetinProgress = false;
        }
    );
    }
}
