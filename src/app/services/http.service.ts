import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UserData } from "../models/user.model";
import { catchError, map } from "rxjs/operators"
import { of, throwError } from "rxjs";
@Injectable({
    providedIn: "root",
})
export class HttpService {
    userData: UserData[] = [];
    constructor(private http: HttpClient) { }

    AddUser(userdata: UserData) {
        return this.http.post("https://myangularproject-gonath-default-rtdb.firebaseio.com/userdata.json", userdata);
    }

    GetAllUser() {
        return this.http.get<UserData[]>("https://myangularproject-gonath-default-rtdb.firebaseio.com/userdata.json")
            .pipe(map(response => {
                const userdata = [];
                for (const key in response) {
                    if (response.hasOwnProperty(key))
                        userdata.push({ ...response[key], id: key });
                }
                return userdata;
            })
        );
    }

    DeleteAllUsers() {
        return this.http.delete("https://myangularproject-gonath-default-rtdb.firebaseio.com/userdata.json");
    }
}