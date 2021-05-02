import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UserData } from "../models/user.model";
import { map } from "rxjs/operators"
@Injectable({
    providedIn: "root",
  })
export class HttpService{
 userData : UserData[] = [];
    constructor(private http: HttpClient){}

    AddUser(userdata: UserData)
    {
        //this.http.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCNLN98KaN4oUuUTNh2JQ3gGnQVdn9mTXY", )

        return this.http.post("https://myangularproject-gonath-default-rtdb.firebaseio.com/userdata.json", userdata);

    }

    GetAllUser()
    {
        return this.http.get<UserData[]>("https://myangularproject-gonath-default-rtdb.firebaseio.com/userdata.json")
        .pipe(map(response =>{
            const userdata =[];
             for (const key in response)
             {if(response.hasOwnProperty(key))
                 userdata.push({...response[key], id: key});
             }
             return userdata;
        }));
    }

    DeleteAllUsers()
    {
        return this.http.delete("https://myangularproject-gonath-default-rtdb.firebaseio.com/userdata.json");
    }


}