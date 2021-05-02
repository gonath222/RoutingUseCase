import { Component, OnInit } from '@angular/core';
import { ConfirmDialogService } from '../services/confirm.popup.service';

@Component({
  selector: 'app-confirm-pop',
  templateUrl: './confirm-pop.component.html',
  styleUrls: ['./confirm-pop.component.css']
})
export class ConfirmPopComponent implements OnInit {
  message: any;  
  constructor(  
    private confirmDialogService: ConfirmDialogService  
) { }  

ngOnInit(): any {  
   this.confirmDialogService.getMessage().subscribe(message => {  
       this.message = message;  
   });  
}  

}
