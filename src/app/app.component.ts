import { Component, ɵɵNgOnChangesFeature } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, Event } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RoutingUseCase';
  currentPage: string;

  constructor(private router: Router){
    this.router.events.subscribe((event:Event) => {
      if(event instanceof NavigationEnd ){
        if(event.url == "/")
        {
          this.currentPage = "HOME";
        }
        else
        {
          this.currentPage = event.url.toUpperCase().replace('/','');
        }
      }
    });
    }
}
