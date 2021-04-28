import { Component, OnInit } from '@angular/core';

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
  gender: string ="";
  buttonClicked = false;

  fnResult: string ="";
  lnResult: string ="";
  pResult: string ="";
  cpResult: string ="";
  eaResult: string ="";
  uResult : string ="";
  gResult : string ="";
  constructor() { }

  ngOnInit(): void {
  }

  OnSubmitRegistration(){
    this.buttonClicked = true;
    this.fnResult = this.firstname;
    this.lnResult = this.lastname;
    this.pResult = this.password;
    this.cpResult = this.cpassword;
    this.eaResult = this.emailaddress;
    this.uResult = this.username;
    this.gResult = this.gender;
  }

}
