import { Injectable } from '@angular/core';  
import { Observable } from 'rxjs';  
import { Subject } from 'rxjs';  
  
@Injectable() export class ConfirmDialogService {  
    private subject = new Subject<any>();  
  
    confirmThis(message: string, DeleteFn: () => void, NoFn: () => void): any {  
        this.setConfirmation(message, DeleteFn, NoFn);  
    }  
  
    setConfirmation(message: string, DeleteFn: () => void, NoFn: () => void): any {  
        const that = this;  
        this.subject.next({  
            type: 'confirm',  
            text: message,  
            DeleteFn(): any {  
                    that.subject.next(); 
                    DeleteFn();  
                },  
                NoFn(): any {  
                that.subject.next();  
                NoFn();  
            }  
        });  
  
    }  
  
    getMessage(): Observable<any> {  
        return this.subject.asObservable();  
    }  
}  