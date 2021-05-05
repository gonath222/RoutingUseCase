import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { UserData } from '../models/user.model';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit, OnDestroy {


  firstname: string = "";
  lastname: string = "";
  password: string = "";
  cpassword: string = "";
  emailaddress: string = "";
  username: string = "";
  gender: string = "-1";
  buttonClicked = false;
  errors = new Subject<string>();
  UserRegisteredSuccesfully = false;
  private errorsub: Subscription;
  errormessage = "";
  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.errorsub = this.errors.subscribe(errormessage => {
      this.errormessage = errormessage;
    });
  }

  OnSubmitRegistration() {
    debugger;
    this.buttonClicked = true;
    const userData: UserData = {
      firstname: this.firstname,
      emailaddress: this.emailaddress,
      cpassword: this.cpassword,
      gender: this.gender,
      lastname: this.lastname,
      password: this.password,
      username: this.username
    }

    this.http.AddUser(userData).subscribe(() => {
      this.UserRegisteredSuccesfully = true;
      this.buttonClicked = false;
      this.ResetForm();
    });
  }

  ResetForm() {
    this.firstname = "";
    this.username = "";
    this.cpassword = "";
    this.emailaddress = "";
    this.gender = "-1";
    this.lastname = "";
    this.password = "";
  }

  ngOnDestroy() {
    this.errorsub.unsubscribe();
  }

}
