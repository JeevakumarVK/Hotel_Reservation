import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '@angular/router';
import { observable, Observable } from 'rxjs';
import { Client } from 'src/User';

@Injectable({
  providedIn: 'root'
})


export class AuthService {

  constructor(private http : HttpClient) { }

  baseServerUrl = "http://localhost:7098/user";
  

  registerUser(user?: Client):Observable<Object> {
   return this.http.post<Object>(this.baseServerUrl,user,{responseType:'text' as 'json'});
  }

  loginUser(email?: String,pwd?:String):Observable<Object> {
    return this.http.post<Object>( "http://localhost:7098/login/"+email+"/"+pwd,String,{responseType:'text' as 'json'});
   }

   doReservation(data:any):Observable<any>{
     return this.http.post<object>("http://localhost:7098/reserve",data,{responseType:'text' as 'json'});
   }

   doCancellation(data:any):Observable<any>{
     return this.http.delete<object>("http://localhost:7098/cancelreservation/"+data.reservationID,data);
   }
}
