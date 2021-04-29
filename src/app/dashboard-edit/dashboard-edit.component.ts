import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Router, Event, NavigationEnd } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-dashboard-edit',
  templateUrl: './dashboard-edit.component.html',
  styleUrls: ['./dashboard-edit.component.css']
})
export class DashboardEditComponent implements OnInit {

  id: string ="";
  constructor(private router: Router, private loginService: LoginService, 
    private route:ActivatedRoute ) {
      debugger;
      this.id=this.route.snapshot.params['id'];
      this.router.events.subscribe((event:Event) => {
        if(event instanceof NavigationEnd ){
          this.id=this.route.snapshot.params['id'];
        }
      });
     }

    ngOnInit() {
      debugger;
      this.id=this.route.snapshot.params['id'];
      this.router.events.subscribe((event:Event) => {
        if(event instanceof NavigationEnd ){
          this.id=this.route.snapshot.params['id'];
        }
      });
    }

}
