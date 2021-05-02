import { Injectable } from "@angular/core";
import { HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { HttpService } from "./http.service";

@Injectable()
export class HTTPInterceptorService implements HttpInterceptor{

    constructor(private http:HttpService){}

    intercept(req: HttpRequest<any>, next: HttpHandler){
        const authToken ="AIzaSyCNLN98KaN4oUuUTNh2JQ3gGnQVdn9mTXY";
       const modifiedReq = req.clone(
           {headers: req.headers.append('auth',authToken) }
           );

           return next.handle(modifiedReq);
    }
}