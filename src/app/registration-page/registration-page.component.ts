import { Component, OnInit } from '@angular/core';
import { UserData } from '../models/user.model';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {

  
  firstname: string ="";
  lastname: string ="";
  password: string ="";
  cpassword:string ="";
  emailaddress:string ="";
  username: string="";
  gender: string ="-1";
  buttonClicked = false;
UserRegisteredSuccesfully = false;
  constructor(private http: HttpService) { }

  ngOnInit(): void {
  }

  OnSubmitRegistration(){
    this.buttonClicked = true;
    const userData : UserData = {
       firstname: this.firstname,
       emailaddress : this.emailaddress,
       cpassword : this.cpassword,
       gender : this.gender,
       lastname: this.lastname,
       password: this.password,
       username: this.username
      }
      this.http.AddUser(userData).subscribe(()=>
      {
        this.UserRegisteredSuccesfully = true;
        this.buttonClicked = false;
        this.ResetForm();
      });
  }

  ResetForm()
  {
    this.firstname="";
    this.username="";
    this.cpassword="";
    this.emailaddress="";
    this.gender="-1";
    this.lastname="";
    this.password="";
  }

}
