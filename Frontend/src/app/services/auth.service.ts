import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
}
