import { NgModule } from '@angular/core';  
 
import { ConfirmPopComponent } from './confirm-pop.component';  
import { ConfirmDialogService } from '../services/confirm.popup.service';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
  
@NgModule({  
    declarations: [  
        ConfirmPopComponent  
    ],  
    exports: [  
        ConfirmPopComponent  
    ],  
    imports:[
        CommonModule,
        BrowserModule
    ],
    providers: [  
       ConfirmDialogService  
    ]  
})  
export class ConfirmDialogModule  
{  
}  