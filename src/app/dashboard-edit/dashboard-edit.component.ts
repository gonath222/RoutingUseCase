import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { UserData } from '../models/user.model';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-dashboard-edit',
  templateUrl: './dashboard-edit.component.html',
  styleUrls: ['./dashboard-edit.component.css']
})
export class DashboardEditComponent implements OnInit {
  isGetinProgress = false;
  id: string = "";
  userData: UserData[] = [];
  constructor(private route: ActivatedRoute, private http: HttpService) {
    if (this.route.snapshot.routeConfig.path.toLowerCase() == "view") {
      this.GetAllUserDetails();
    }
    else {
      this.DeleteAllUsers();
    }
  }

  ngOnInit() {
  }

  GetAllUserDetails() {
    this.isGetinProgress = true;
    this.http.GetAllUser().subscribe(
      event => {
        this.userData = event;
        this.isGetinProgress = false;
      }
    );
  }

  DeleteAllUsers() {
    this.http.DeleteAllUsers().subscribe(() => {
      this.GetAllUserDetails();
    });
  }

}
